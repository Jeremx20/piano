// ============================================================
// PIANO COMPONENT — schémas de clavier interactifs
// Utilisé dans l'app (interactif avec son) et pour générer
// les SVG statiques du PDF.
// ============================================================

// Notes naming: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
// We use sharps as canonical. Aliases (Db, Eb, etc.) are normalized.

const NOTE_TO_SEMITONE = {
  'C': 0, 'B#': 0,
  'C#': 1, 'Db': 1,
  'D': 2,
  'D#': 3, 'Eb': 3,
  'E': 4, 'Fb': 4,
  'F': 5, 'E#': 5,
  'F#': 6, 'Gb': 6,
  'G': 7,
  'G#': 8, 'Ab': 8,
  'A': 9,
  'A#': 10, 'Bb': 10,
  'B': 11, 'Cb': 11
};

const SEMITONE_TO_NOTE_SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

function noteToSemitone(noteName) {
  // Normalize: "C" -> "C", "Db" -> "Db", "C#" -> "C#"
  const clean = noteName.replace(/[0-9]/g, '').trim();
  return NOTE_TO_SEMITONE[clean];
}

// Build a chord from name + intervals (semitones from root)
// Returns array of semitone offsets from root, ordered
function buildChord(chordSpec) {
  // chordSpec is an object: { root: 'C', notes: ['C','E','G'] } or { root, intervals: [0,4,7] }
  if (chordSpec.notes) {
    const rootSemi = noteToSemitone(chordSpec.root);
    return chordSpec.notes.map(n => {
      const s = noteToSemitone(n);
      // Make sure each note is in [rootSemi, rootSemi + 24)
      let offset = (s - rootSemi + 24) % 12;
      return offset;
    });
  }
  return chordSpec.intervals || [];
}

// Smart default: always start at C for visual consistency.
// People are used to seeing the piano start at C, and the position
// of black keys is most readable that way.
function getSmartStartNote(opts) {
  if (opts.startNote) return opts.startNote;
  return 'C';
}

// Returns the natural note (C, D, E, F, G, A, B) at or below the given note
function naturalBelow(note) {
  const semi = noteToSemitone(note);
  const naturals = [0, 2, 4, 5, 7, 9, 11]; // C D E F G A B
  // Find the largest natural <= semi
  let result = 0;
  for (const n of naturals) {
    if (n <= semi) result = n;
  }
  return SEMITONE_TO_NOTE_SHARP[result];
}

// Generate an SVG piano diagram
// Options:
//   highlight: array of note names to highlight in the RH (right hand) — only first occurrence
//   bassNote: optional, will be drawn separately to the LEFT as bass note (slash chord)
//   startNote: starting white note of the FIRST octave (default 'C')
//   octaves: number of octaves to display (default 2)
//   highlightAllOctaves: if true, highlight in every octave; else only highlight in the first occurrence
//   width, height: SVG dimensions
//   label: optional label below the keyboard
//   theme: 'dark' (default for app) or 'light' (for PDF)
function renderPianoSVG(opts) {
  const {
    highlight = [],
    bassNote = null,
    highlightAllOctaves = false,
    width = 360,
    height = 90,
    theme = 'dark',
    interactive = false,
    id = null
  } = opts;
  const startNote = opts.startNote || getSmartStartNote(opts);

  // Auto-determine octaves needed: if any chord note is lower in semitone than
  // a preceding note, we need an extra octave for clarity.
  let octaves = opts.octaves;
  if (!octaves) {
    octaves = 2;
    if (highlight.length > 1) {
      let needsExtra = false;
      const startSemi = NOTE_TO_SEMITONE[startNote];
      let lastSemi = -1;
      for (const n of highlight) {
        const s = noteToSemitone(n);
        if (lastSemi !== -1 && s <= lastSemi) {
          needsExtra = true;
          break;
        }
        lastSemi = s;
      }
      if (needsExtra) octaves = 3;
    }
  }

  // Color palette
  const colors = theme === 'dark' ? {
    white: '#f5f0e6',
    black: '#0a0a0f',
    border: '#2a2a36',
    highlightWhite: '#d4a857',
    highlightBlack: '#a07e2f',
    bassWhite: '#c44569',
    bassBlack: '#8c2e4b',
    text: '#0a0a0f',
    textHL: '#0a0a0f',
    bg: 'transparent'
  } : {
    white: '#ffffff',
    black: '#1a1a1a',
    border: '#999999',
    highlightWhite: '#d4a857',
    highlightBlack: '#8b6914',
    bassWhite: '#a52a4a',
    bassBlack: '#6b1a30',
    text: '#1a1a1a',
    textHL: '#1a1a1a',
    bg: '#fafafa'
  };

  // Normalize highlighted notes to semitones (0-11)
  const highlightSemis = new Set(highlight.map(n => noteToSemitone(n)));
  const bassSemi = bassNote !== null ? noteToSemitone(bassNote) : null;

  // SMART HIGHLIGHTING:
  // Keyboard always starts at C (visual standard).
  // For chord notes: place each note in the octave that keeps them in
  // ascending order from the root. Bass note (if any) goes in octave 0.
  const highlightPositions = new Set(); // key = `${octaveIdx}-${semi}`
  const bassPositions = new Set();

  if (highlightAllOctaves) {
    for (let oct = 0; oct < octaves; oct++) {
      for (const s of highlightSemis) {
        highlightPositions.add(`${oct}-${s}`);
      }
      if (bassSemi !== null) {
        bassPositions.add(`${oct}-${bassSemi}`);
      }
    }
  } else {
    // Place chord notes in ascending order
    // Start: root goes in octave 1 (or octave 0 if only 1 octave)
    // Each subsequent note: same octave if its semi > previous; else next octave
    const startOct = (octaves >= 2) ? 1 : 0;
    let prevSemi = -1;
    let currentOct = startOct;
    // Convert highlight array to array of semis preserving order
    const orderedSemis = highlight.map(n => noteToSemitone(n));
    for (const s of orderedSemis) {
      // Bump octave if this semi is <= previous (going down means new octave)
      if (prevSemi !== -1 && s <= prevSemi) {
        currentOct = Math.min(currentOct + 1, octaves - 1);
      }
      highlightPositions.add(`${currentOct}-${s}`);
      prevSemi = s;
    }
    if (bassSemi !== null) {
      bassPositions.add(`0-${bassSemi}`);
    }
  }

  // White keys per octave: C D E F G A B (7 keys)
  // Black keys per octave: C# D# F# G# A# (5 keys), positioned between
  // White key positions (0-6 in octave): C=0, D=1, E=2, F=3, G=4, A=5, B=6
  // Black key after white key index: C#=after0, D#=after1, F#=after3, G#=after4, A#=after5

  const whiteKeysTotal = 7 * octaves;
  const startSemi = noteToSemitone(startNote);

  // Width per white key
  const wKeyW = (width - 2) / whiteKeysTotal;
  const wKeyH = height;
  const bKeyW = wKeyW * 0.62;
  const bKeyH = wKeyH * 0.62;

  // White key semitone offsets within an octave
  const whiteOffsets = [0, 2, 4, 5, 7, 9, 11]; // C D E F G A B

  // Black key info: { offset: semitone within octave, afterWhiteIdx: index of white key before it }
  const blackKeys = [
    { offset: 1, afterIdx: 0 },  // C#
    { offset: 3, afterIdx: 1 },  // D#
    { offset: 6, afterIdx: 3 },  // F#
    { offset: 8, afterIdx: 4 },  // G#
    { offset: 10, afterIdx: 5 }, // A#
  ];

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height + 26}" `
          + `width="${width}" height="${height + 26}"`
          + (interactive ? ` style="display:block;max-width:100%;height:auto;"` : '')
          + (id ? ` id="${id}"` : '')
          + `>`;

  // Background
  svg += `<rect width="${width}" height="${height + 26}" fill="${colors.bg}"/>`;

  // White keys
  for (let oct = 0; oct < octaves; oct++) {
    for (let i = 0; i < 7; i++) {
      const x = 1 + (oct * 7 + i) * wKeyW;
      const semi = (startSemi + whiteOffsets[i]) % 12;
      const posKey = `${oct}-${semi}`;
      const isHighlight = highlightPositions.has(posKey);
      const isBass = bassPositions.has(posKey);
      let fill = colors.white;
      let textColor = colors.text;
      if (isBass) {
        fill = colors.bassWhite;
        textColor = '#fff';
      } else if (isHighlight) {
        fill = colors.highlightWhite;
        textColor = colors.textHL;
      }
      svg += `<rect x="${x}" y="0" width="${wKeyW - 0.5}" height="${wKeyH}" `
           + `fill="${fill}" stroke="${colors.border}" stroke-width="1"`
           + (interactive ? ` class="piano-white-key" data-note="${SEMITONE_TO_NOTE_SHARP[semi]}" data-octave="${oct+4}"` : '')
           + `/>`;

      // Label on highlighted white keys
      if (isHighlight || isBass) {
        const noteName = SEMITONE_TO_NOTE_SHARP[semi];
        svg += `<text x="${x + wKeyW/2}" y="${wKeyH - 8}" `
             + `text-anchor="middle" font-family="Georgia, serif" font-size="${Math.max(9, wKeyW * 0.32)}" `
             + `font-weight="600" fill="${textColor}">${noteName}</text>`;
      }
    }
  }

  // Black keys (on top)
  for (let oct = 0; oct < octaves; oct++) {
    for (const bk of blackKeys) {
      const x = 1 + (oct * 7 + bk.afterIdx) * wKeyW + wKeyW - bKeyW / 2;
      const semi = (startSemi + bk.offset) % 12;
      const posKey = `${oct}-${semi}`;
      const isHighlight = highlightPositions.has(posKey);
      const isBass = bassPositions.has(posKey);
      let fill = colors.black;
      let textColor = '#fff';
      if (isBass) {
        fill = colors.bassBlack;
      } else if (isHighlight) {
        fill = colors.highlightBlack;
      }
      svg += `<rect x="${x}" y="0" width="${bKeyW}" height="${bKeyH}" `
           + `fill="${fill}" stroke="${colors.border}" stroke-width="1"`
           + (interactive ? ` class="piano-black-key" data-note="${SEMITONE_TO_NOTE_SHARP[semi]}" data-octave="${oct+4}"` : '')
           + `/>`;

      // Label on highlighted black keys
      if (isHighlight || isBass) {
        const noteName = SEMITONE_TO_NOTE_SHARP[semi];
        svg += `<text x="${x + bKeyW/2}" y="${bKeyH - 6}" `
             + `text-anchor="middle" font-family="Georgia, serif" font-size="${Math.max(8, bKeyW * 0.34)}" `
             + `font-weight="600" fill="${textColor}">${noteName}</text>`;
      }
    }
  }

  // Optional label below
  if (opts.label) {
    svg += `<text x="${width/2}" y="${height + 18}" text-anchor="middle" `
         + `font-family="Georgia, serif" font-size="11" font-style="italic" `
         + `fill="${theme === 'dark' ? '#8a8472' : '#666'}">${opts.label}</text>`;
  }

  svg += `</svg>`;
  return svg;
}

// Render multiple piano diagrams as a row (e.g., for showing a progression)
function renderPianoRow(diagrams, options = {}) {
  const { theme = 'dark' } = options;
  return `<div class="piano-row">${diagrams.map(d => `
    <div class="piano-diagram-wrapper">
      <div class="piano-diagram-name">${d.name}</div>
      ${renderPianoSVG({ ...d, theme, interactive: theme === 'dark' })}
    </div>
  `).join('')}</div>`;
}

// Export for browser and node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderPianoSVG, renderPianoRow, noteToSemitone, SEMITONE_TO_NOTE_SHARP };
}
