// ============================================================
// GOSPEL PIANO BIBLE — Application Logic
// ============================================================

const STORAGE_KEY = 'gospel-bible-progress';
const WELCOME_KEY = 'gospel-bible-welcomed';

// State
let state = {
  completed: new Set(),
  currentModule: null,
  currentLesson: null,
};

// ============================================================
// PIANO DIAGRAMS RENDERING
// ============================================================

function renderDiagramsSection(lessonId) {
  if (typeof LESSON_DIAGRAMS === 'undefined') return '';
  const diagrams = LESSON_DIAGRAMS[lessonId];
  if (!diagrams || diagrams.length === 0) return '';

  const diagramsHTML = diagrams.map((d, idx) => {
    // Special diagram types
    if (d.type === 'circle-of-fifths') {
      const svg = (typeof renderCircleOfFifthsSVG !== 'undefined')
        ? renderCircleOfFifthsSVG({ size: 360, theme: 'dark', highlight: d.highlight || null })
        : '';
      return `
        <div class="diagram-block circle-block">
          <div class="diagram-header">
            <div class="diagram-name">${d.name}</div>
          </div>
          <div class="diagram-circle">${svg}</div>
        </div>
      `;
    }

    // Standard piano diagram
    const svg = renderPianoSVG({
      ...d,
      theme: 'dark',
      interactive: true,
      width: 500,
      height: 110,
      id: `piano-${lessonId.replace('.', '-')}-${idx}`
    });
    // Build a list of notes to play for the "Play chord" button
    const notesJson = JSON.stringify({
      highlight: d.highlight || [],
      bassNote: d.bassNote || null
    }).replace(/"/g, '&quot;');
    return `
      <div class="diagram-block">
        <div class="diagram-header">
          <div class="diagram-name">${d.name}</div>
          <button class="diagram-play-btn" data-chord="${notesJson}" aria-label="Jouer l'accord">
            <span class="play-icon">▶</span>
          </button>
        </div>
        <div class="diagram-piano">${svg}</div>
      </div>
    `;
  }).join('');

  return `
    <section class="lesson-section">
      <div class="lesson-section-title">Diagrammes</div>
      <div class="diagrams-container">${diagramsHTML}</div>
      <div class="diagram-hint">↳ Tape sur les touches pour entendre les notes.</div>
    </section>
  `;
}

// ============================================================
// AUDIO — Tone.js + Salamander Grand Piano samples
// Real piano sound, samples cached after first load
// ============================================================

let pianoSampler = null;
let pianoLoaded = false;
let pianoLoading = false;
let pendingNotes = []; // queue notes pressed while loading

// Initialize the sampler (called on first user interaction for iOS audio policy)
function initPiano() {
  if (pianoSampler || pianoLoading) return;
  if (typeof Tone === 'undefined') {
    console.warn('Tone.js not loaded yet');
    return;
  }

  pianoLoading = true;
  showLoadingIndicator();

  // Start the audio context (required for iOS)
  Tone.start();

  // Salamander Grand Piano samples from tonejs.github.io
  // We load a subset of samples; Tone.js interpolates the rest.
  pianoSampler = new Tone.Sampler({
    urls: {
      "A0": "A0.mp3",
      "C1": "C1.mp3",
      "D#1": "Ds1.mp3",
      "F#1": "Fs1.mp3",
      "A1": "A1.mp3",
      "C2": "C2.mp3",
      "D#2": "Ds2.mp3",
      "F#2": "Fs2.mp3",
      "A2": "A2.mp3",
      "C3": "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      "A3": "A3.mp3",
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
      "C5": "C5.mp3",
      "D#5": "Ds5.mp3",
      "F#5": "Fs5.mp3",
      "A5": "A5.mp3",
      "C6": "C6.mp3",
      "D#6": "Ds6.mp3",
      "F#6": "Fs6.mp3",
      "A6": "A6.mp3",
      "C7": "C7.mp3",
      "D#7": "Ds7.mp3",
      "F#7": "Fs7.mp3",
      "A7": "A7.mp3",
      "C8": "C8.mp3"
    },
    release: 1.2,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    onload: () => {
      pianoLoaded = true;
      pianoLoading = false;
      hideLoadingIndicator();
      console.log('Piano samples loaded');
      // Flush any pending notes
      while (pendingNotes.length > 0) {
        const { note, octave, duration } = pendingNotes.shift();
        playNoteImmediate(note, octave, duration);
      }
    },
    onerror: (err) => {
      pianoLoading = false;
      hideLoadingIndicator();
      console.warn('Failed to load piano samples:', err);
    }
  }).toDestination();
}

function showLoadingIndicator() {
  if (document.getElementById('audio-loading')) return;
  const div = document.createElement('div');
  div.id = 'audio-loading';
  div.style.cssText = 'position:fixed;top:env(safe-area-inset-top, 20px);left:50%;transform:translateX(-50%);background:rgba(20,20,27,0.95);color:#d4a857;padding:10px 18px;border-radius:20px;font-size:12px;font-family:inherit;border:1px solid rgba(212,168,87,0.3);z-index:1000;backdrop-filter:blur(20px);font-weight:500;letter-spacing:0.5px;';
  div.textContent = '♪ Chargement du piano...';
  document.body.appendChild(div);
}

function hideLoadingIndicator() {
  const div = document.getElementById('audio-loading');
  if (div) {
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.4s';
    setTimeout(() => div.remove(), 400);
  }
}

// Convert internal note name format ("C", "Eb", "F#") to Tone.js format
// (Tone.js uses sharp notation: "C", "D#", etc.)
function noteToToneFormat(noteName, octave) {
  // Normalize to sharps
  const clean = noteName.replace(/[0-9]/g, '').trim();
  const semi = _NOTE_TO_SEMI[clean];
  if (semi === undefined) return null;
  const sharpName = SHARP_NAMES[semi];
  return `${sharpName}${octave}`;
}

const SHARP_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

// Public API: play a single note
function playNote(noteName, octave = 4, duration = 1.2) {
  // Initialize on first call (handles iOS user-gesture requirement)
  if (!pianoSampler && !pianoLoading) {
    initPiano();
  }

  if (!pianoLoaded) {
    // Queue the note to play once loaded
    pendingNotes.push({ note: noteName, octave, duration });
    return;
  }

  playNoteImmediate(noteName, octave, duration);
}

function playNoteImmediate(noteName, octave, duration) {
  if (!pianoSampler) return;
  const toneNote = noteToToneFormat(noteName, octave);
  if (!toneNote) return;
  try {
    pianoSampler.triggerAttackRelease(toneNote, duration);
  } catch (e) {
    console.warn('playNote error:', e);
  }
}

// Public API: play a chord (with bass note first, then arpeggio)
function playChord(noteData) {
  const { highlight = [], bassNote = null } = noteData;

  if (!pianoSampler && !pianoLoading) {
    initPiano();
  }

  // If not loaded, queue
  if (!pianoLoaded) {
    if (bassNote) pendingNotes.push({ note: bassNote, octave: 3, duration: 2.5 });
    highlight.forEach((note, i) => {
      pendingNotes.push({ note, octave: getChordOctave(note, highlight, i), duration: 2.2 });
    });
    return;
  }

  // Bass note first (lower)
  if (bassNote) {
    playNoteImmediate(bassNote, 3, 2.5);
  }

  // Chord notes — slight stagger for a natural strum
  highlight.forEach((note, i) => {
    const octave = getChordOctave(note, highlight, i);
    setTimeout(() => playNoteImmediate(note, octave, 2.2), i * 18);
  });
}

// Determine the right octave for a chord note based on its position in the chord
// Goal: notes should ascend naturally from the root
function getChordOctave(note, allNotes, idx) {
  if (idx === 0) return 4; // root in C4
  // For subsequent notes, if semitone < previous, bump octave
  let currentOct = 4;
  let prevSemi = -1;
  for (let i = 0; i <= idx; i++) {
    const s = noteToSemitone(allNotes[i]);
    if (prevSemi !== -1 && s <= prevSemi) {
      currentOct++;
    }
    prevSemi = s;
  }
  return currentOct;
}

// Note helpers
const _NOTE_TO_SEMI = {
  'C': 0, 'B#': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
  'E': 4, 'Fb': 4, 'F': 5, 'E#': 5, 'F#': 6, 'Gb': 6, 'G': 7,
  'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11, 'Cb': 11
};
function noteToSemitone(noteName) {
  const clean = noteName.replace(/[0-9]/g, '').trim();
  return _NOTE_TO_SEMI[clean];
}

// Wire up event listeners on piano keys after rendering
function attachPianoListeners() {
  // Individual key clicks
  document.querySelectorAll('.piano-white-key, .piano-black-key').forEach(key => {
    key.style.cursor = 'pointer';
    key.addEventListener('click', () => {
      const note = key.getAttribute('data-note');
      const octave = parseInt(key.getAttribute('data-octave') || '4', 10);
      playNote(note, octave, 1.2);
      // Visual feedback
      const originalFill = key.getAttribute('fill');
      key.setAttribute('fill', '#d4a857');
      setTimeout(() => key.setAttribute('fill', originalFill), 200);
    });
  });

  // Play chord buttons
  document.querySelectorAll('.diagram-play-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const raw = btn.getAttribute('data-chord');
      const decoded = raw.replace(/&quot;/g, '"');
      try {
        const data = JSON.parse(decoded);
        playChord(data);
        // Visual feedback
        btn.classList.add('playing');
        setTimeout(() => btn.classList.remove('playing'), 800);
      } catch (e) { console.warn('chord parse error', e); }
    });
  });
}



function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const arr = JSON.parse(saved);
      state.completed = new Set(arr);
    }
  } catch (e) {
    console.warn('Could not load progress', e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completed]));
  } catch (e) {
    console.warn('Could not save progress', e);
  }
}

function resetProgress() {
  if (!confirm('Tu es sûr ? Toute ta progression sera effacée.')) return;
  state.completed.clear();
  saveProgress();
  goHome();
  setTimeout(() => alert('Progression réinitialisée.'), 100);
}

// ============================================================
// MARKDOWN-LIKE FORMATTING (simple, for theory text)
// ============================================================

function formatText(text) {
  if (!text) return '';
  let html = text
    // Tables (must come first)
    .replace(/^\|(.+)\|\s*\n\|[-:\s|]+\|\s*\n((?:\|.+\|\s*\n?)+)/gm, (match, header, rows) => {
      const headers = header.split('|').map(s => s.trim()).filter(s => s);
      const headerRow = '<tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr>';
      const rowsHtml = rows.trim().split('\n').map(row => {
        const cells = row.split('|').map(s => s.trim()).filter((s, i, arr) => i > 0 && i < arr.length - 1 || s !== '');
        const cleanCells = row.replace(/^\||\|$/g, '').split('|').map(s => s.trim());
        return '<tr>' + cleanCells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }).join('');
      return `<table><thead>${headerRow}</thead><tbody>${rowsHtml}</tbody></table>`;
    })
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italics/highlights with *text*
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bullet lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`)
    // Line breaks → paragraphs
    .split('\n\n').map(p => {
      const trimmed = p.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<table') || trimmed.startsWith('<ul') || trimmed.startsWith('<li')) return trimmed;
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('');
  return html;
}

// ============================================================
// METRONOME
// ============================================================

let metronomeBpm = 80;
let metronomeIsPlaying = false;
let metronomeLoop = null;
let metronomeBeat = 0;
let metronomeSynth = null;

function initMetronomeSynth() {
  if (metronomeSynth) return metronomeSynth;
  if (typeof Tone === 'undefined') return null;
  metronomeSynth = new Tone.MembraneSynth({
    pitchDecay: 0.008,
    octaves: 2,
    envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.1 }
  }).toDestination();
  metronomeSynth.volume.value = -8;
  return metronomeSynth;
}

function toggleMetronome() {
  const panel = document.getElementById('metronome-panel');
  panel.classList.toggle('hidden');
}

function updateMetronomeBpm(bpm) {
  metronomeBpm = parseInt(bpm, 10);
  document.getElementById('metronome-bpm').textContent = metronomeBpm;
  if (metronomeIsPlaying && typeof Tone !== 'undefined') {
    Tone.Transport.bpm.value = metronomeBpm;
  }
}

function setMetronomeBpm(bpm) {
  updateMetronomeBpm(bpm);
  document.getElementById('metronome-slider').value = bpm;
}

function toggleMetronomePlay() {
  if (typeof Tone === 'undefined') return;
  Tone.start();
  initMetronomeSynth();

  if (metronomeIsPlaying) {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    metronomeIsPlaying = false;
    document.getElementById('metronome-play-icon').textContent = '▶';
    document.getElementById('metronome-play-text').textContent = 'Démarrer';
    document.getElementById('metronome-play').classList.remove('playing');
    document.getElementById('metronome-fab').classList.remove('active');
    metronomeBeat = 0;
  } else {
    Tone.Transport.bpm.value = metronomeBpm;
    metronomeBeat = 0;
    Tone.Transport.scheduleRepeat((time) => {
      // Beat 1 gets a higher pitch
      const isOne = (metronomeBeat % 4) === 0;
      metronomeSynth.triggerAttackRelease(isOne ? 'C5' : 'C4', '32n', time);
      metronomeBeat++;
    }, '4n');
    Tone.Transport.start();
    metronomeIsPlaying = true;
    document.getElementById('metronome-play-icon').textContent = '⏸';
    document.getElementById('metronome-play-text').textContent = 'Arrêter';
    document.getElementById('metronome-play').classList.add('playing');
    document.getElementById('metronome-fab').classList.add('active');
  }
}

// ============================================================
// PROGRESSION PLAYER
// ============================================================

const activeProgression = {
  id: null,
  index: 0,
  intervalId: null,
  isPlaying: false,
  bpm: 80,
  data: null
};

function renderProgressionsSection(lessonId) {
  if (typeof LESSON_PROGRESSIONS === 'undefined') return '';
  const progs = LESSON_PROGRESSIONS[lessonId];
  if (!progs || progs.length === 0) return '';

  const html = progs.map((p, idx) => {
    const progId = `prog-${lessonId.replace('.','-')}-${idx}`;
    const chordsHTML = p.chords.map((c, ci) =>
      `<span class="progression-chord-chip" data-prog="${progId}" data-idx="${ci}">${c.name}</span>`
    ).join('');
    const progData = JSON.stringify(p).replace(/"/g, '&quot;');
    return `
      <div class="progression-player">
        <div class="progression-name">${p.name}</div>
        <div class="progression-chords" id="${progId}-chords">${chordsHTML}</div>
        <div class="progression-controls">
          <button class="progression-play-btn"
                  data-prog-id="${progId}"
                  data-prog="${progData}"
                  onclick="toggleProgressionPlay(this)" aria-label="Jouer">▶</button>
          <span class="progression-bpm"><strong>${p.bpm}</strong> BPM</span>
          <div class="progression-tempo-buttons">
            <button class="tempo-btn" onclick="adjustProgressionTempo('${progId}', -10)" aria-label="Plus lent">−</button>
            <button class="tempo-btn" onclick="adjustProgressionTempo('${progId}', 10)" aria-label="Plus rapide">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="lesson-section">
      <div class="lesson-section-title">Joue-les au tempo</div>
      <div class="progressions-container">${html}</div>
    </section>
  `;
}

function toggleProgressionPlay(btn) {
  const progId = btn.getAttribute('data-prog-id');

  // If another progression is playing, stop it
  if (activeProgression.isPlaying && activeProgression.id !== progId) {
    stopActiveProgression();
  }

  if (activeProgression.isPlaying && activeProgression.id === progId) {
    stopActiveProgression();
    return;
  }

  // Parse progression data
  const raw = btn.getAttribute('data-prog').replace(/&quot;/g, '"');
  const data = JSON.parse(raw);

  // Init piano if needed
  if (!pianoSampler && !pianoLoading) initPiano();

  activeProgression.id = progId;
  activeProgression.index = 0;
  activeProgression.isPlaying = true;
  activeProgression.bpm = data.bpm;
  activeProgression.data = data;

  btn.classList.add('playing');
  btn.textContent = '⏸';

  playNextChordInProgression();
}

function playNextChordInProgression() {
  if (!activeProgression.isPlaying || !activeProgression.data) return;

  const chord = activeProgression.data.chords[activeProgression.index];
  if (!chord) return;

  // Highlight current chord
  document.querySelectorAll(`.progression-chord-chip[data-prog="${activeProgression.id}"]`).forEach(c => {
    c.classList.remove('active');
  });
  const activeChip = document.querySelector(
    `.progression-chord-chip[data-prog="${activeProgression.id}"][data-idx="${activeProgression.index}"]`
  );
  if (activeChip) activeChip.classList.add('active');

  // Play the chord
  playChord({ highlight: chord.notes, bassNote: chord.bassNote || null });

  // Schedule next chord
  // duration in beats; beat duration in ms = 60000 / bpm
  const beatMs = 60000 / activeProgression.bpm;
  const chordDurationMs = chord.duration * beatMs;

  activeProgression.intervalId = setTimeout(() => {
    activeProgression.index = (activeProgression.index + 1) % activeProgression.data.chords.length;
    playNextChordInProgression();
  }, chordDurationMs);
}

function stopActiveProgression() {
  if (activeProgression.intervalId) clearTimeout(activeProgression.intervalId);
  if (activeProgression.id) {
    const btn = document.querySelector(`.progression-play-btn[data-prog-id="${activeProgression.id}"]`);
    if (btn) {
      btn.classList.remove('playing');
      btn.textContent = '▶';
    }
    document.querySelectorAll(`.progression-chord-chip[data-prog="${activeProgression.id}"]`).forEach(c => {
      c.classList.remove('active');
    });
  }
  activeProgression.id = null;
  activeProgression.index = 0;
  activeProgression.isPlaying = false;
  activeProgression.intervalId = null;
}

function adjustProgressionTempo(progId, delta) {
  if (activeProgression.id === progId && activeProgression.isPlaying) {
    activeProgression.bpm = Math.max(40, Math.min(200, activeProgression.bpm + delta));
    // Update display
    const display = document.querySelector(`.progression-play-btn[data-prog-id="${progId}"]`)
      .parentElement.querySelector('.progression-bpm strong');
    if (display) display.textContent = activeProgression.bpm;
  } else {
    // Find the static bpm display
    const btn = document.querySelector(`.progression-play-btn[data-prog-id="${progId}"]`);
    if (!btn) return;
    const raw = btn.getAttribute('data-prog').replace(/&quot;/g, '"');
    const data = JSON.parse(raw);
    data.bpm = Math.max(40, Math.min(200, data.bpm + delta));
    btn.setAttribute('data-prog', JSON.stringify(data).replace(/"/g, '&quot;'));
    btn.parentElement.querySelector('.progression-bpm strong').textContent = data.bpm;
  }
}

// ============================================================
// REFERENCES (YouTube links)
// ============================================================

function renderReferencesSection(lessonId) {
  if (typeof LESSON_REFERENCES === 'undefined') return '';
  const refs = LESSON_REFERENCES[lessonId];
  if (!refs || refs.length === 0) return '';

  const html = refs.map(r => `
    <a href="${r.url}" target="_blank" rel="noopener" class="reference-card">
      <div class="reference-icon">▶</div>
      <div class="reference-content">
        <div class="reference-title">${r.title}</div>
        <div class="reference-channel">${r.channel}</div>
      </div>
      <div class="reference-external">↗</div>
    </a>
  `).join('');

  return `
    <section class="lesson-section">
      <div class="lesson-section-title">À écouter / regarder</div>
      <div class="references-section">${html}</div>
    </section>
  `;
}

// ============================================================
// REPERTOIRE VIEW
// ============================================================

function showRepertoire() {
  renderRepertoire();
  showView('view-repertoire');
}

function renderRepertoire() {
  if (typeof SONG_REPERTOIRE === 'undefined') return;
  const levels = ['beginner', 'intermediate', 'advanced', 'master'];

  const html = levels.map(lvl => {
    const data = SONG_REPERTOIRE[lvl];
    if (!data) return '';
    const stars = '★'.repeat(['beginner','intermediate','advanced','master'].indexOf(lvl) + 1);
    const songsHTML = data.songs.map(s => `
      <div class="song-card">
        <div class="song-header">
          <div class="song-info">
            <div class="song-title">${s.title}</div>
            <div class="song-artist">${s.artist}</div>
          </div>
          <div class="song-difficulty">${'★'.repeat(s.difficulty)}</div>
        </div>
        <div class="song-meta">
          <span><strong>Tonalité:</strong> ${s.key}</span>
        </div>
        <div class="song-progression">${s.progression}</div>
        <div class="song-notes">${s.notes}</div>
        <a href="${s.searchUrl}" target="_blank" rel="noopener" class="song-link">
          ▶ Tutoriel YouTube
        </a>
      </div>
    `).join('');
    return `
      <div class="repertoire-level">
        <div class="level-header">
          <div class="level-title">${data.label}</div>
          <div class="level-stars">${stars}</div>
        </div>
        <div class="level-desc">${data.description}</div>
        ${songsHTML}
      </div>
    `;
  }).join('');

  document.getElementById('repertoire-content').innerHTML = html;
}



function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);

  // Stop any active progression when switching views
  if (typeof stopActiveProgression === 'function') {
    stopActiveProgression();
  }

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (viewId === 'view-stats') {
    document.getElementById('nav-stats').classList.add('active');
  } else if (viewId === 'view-repertoire') {
    document.getElementById('nav-repertoire').classList.add('active');
  } else {
    document.getElementById('nav-home').classList.add('active');
  }
}

function goHome() {
  state.currentModule = null;
  state.currentLesson = null;
  renderHome();
  showView('view-home');
}

function backToModule() {
  if (state.currentModule) {
    openModule(state.currentModule);
  } else {
    goHome();
  }
}

function showStats() {
  renderStats();
  showView('view-stats');
}

// ============================================================
// HOME VIEW
// ============================================================

function renderHome() {
  // Update global progress
  const totalLessons = COURSE_DATA.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = state.completed.size;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  document.getElementById('completed-count').textContent = completedCount;
  document.getElementById('progress-percent').textContent = percent + '%';

  const circumference = 2 * Math.PI * 24;
  const offset = circumference - (percent / 100) * circumference;
  document.getElementById('progress-circle').style.strokeDashoffset = offset;

  // Render modules
  const container = document.getElementById('modules-container');
  container.innerHTML = COURSE_DATA.modules.map(module => {
    const completed = module.lessons.filter(l => state.completed.has(l.id)).length;
    const total = module.lessons.length;
    const percent = (completed / total) * 100;
    const isComplete = completed === total;

    return `
      <div class="module-card ${isComplete ? 'completed' : ''}"
           onclick="openModule(${module.id})"
           style="--accent: ${module.color}; --accent-bg: ${module.color}1a; --accent-border: ${module.color}33;">
        <div class="module-header">
          <div class="module-icon">${module.icon}</div>
          <div class="module-info">
            <div class="module-number">Module ${module.id}</div>
            <div class="module-title">${module.title}</div>
            <div class="module-subtitle">${module.subtitle}</div>
          </div>
        </div>
        <div class="module-footer">
          <div class="module-progress">
            <div class="module-progress-bar">
              <div class="module-progress-fill" style="width: ${percent}%; background: ${isComplete ? 'var(--jade)' : module.color};"></div>
            </div>
            <div class="module-progress-text">${completed} / ${total}</div>
          </div>
          <div class="module-arrow">→</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// MODULE VIEW
// ============================================================

function openModule(moduleId) {
  state.currentModule = moduleId;
  // Pre-load piano samples in background on first module open
  if (!pianoSampler && !pianoLoading) {
    initPiano();
  }
  const module = COURSE_DATA.modules.find(m => m.id === moduleId);
  if (!module) return goHome();

  const content = document.getElementById('module-detail-content');
  content.innerHTML = `
    <div class="module-detail-header" style="--accent: ${module.color};">
      <div class="module-detail-icon">${module.icon}</div>
      <h1 class="module-detail-title">${module.title}</h1>
      <p class="module-detail-subtitle">${module.subtitle}</p>
      <p class="module-detail-desc">${module.description}</p>
    </div>

    <div class="lessons-list">
      ${module.lessons.map((lesson, idx) => {
        const isCompleted = state.completed.has(lesson.id);
        return `
          <div class="lesson-card ${isCompleted ? 'completed' : ''}"
               onclick="openLesson('${lesson.id}')">
            <div class="lesson-check">${isCompleted ? '✓' : (idx + 1)}</div>
            <div class="lesson-info">
              <div class="lesson-title-text">${lesson.title}</div>
              <div class="lesson-duration">${lesson.duration}</div>
            </div>
            <div class="lesson-arrow">→</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  showView('view-module');
}

// ============================================================
// LESSON VIEW
// ============================================================

function openLesson(lessonId) {
  // Find lesson in any module
  let foundLesson = null;
  let foundModule = null;
  for (const module of COURSE_DATA.modules) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) {
      foundLesson = lesson;
      foundModule = module;
      break;
    }
  }
  if (!foundLesson) return goHome();

  state.currentLesson = lessonId;
  state.currentModule = foundModule.id;

  const isCompleted = state.completed.has(lessonId);

  const content = document.getElementById('lesson-detail-content');
  content.innerHTML = `
    <header class="lesson-header">
      <div class="lesson-breadcrumb">Module ${foundModule.id} · ${foundModule.title}</div>
      <h1 class="lesson-title-detail">${foundLesson.title}</h1>
      <div class="lesson-meta">
        <span>◷ ${foundLesson.duration}</span>
        <span>Leçon ${foundLesson.id}</span>
      </div>
    </header>

    <section class="lesson-section">
      <div class="lesson-section-title">Objectif</div>
      <div class="objective-box">
        <div class="objective-text">${foundLesson.objective}</div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="lesson-section-title">Théorie</div>
      <div class="theory-content">${formatText(foundLesson.theory)}</div>
    </section>

    ${renderDiagramsSection(lessonId)}

    ${renderProgressionsSection(lessonId)}

    <section class="lesson-section">
      <div class="lesson-section-title">Exercice</div>
      <div class="exercise-box">
        <div class="exercise-text">${formatText(foundLesson.exercise)}</div>
      </div>
    </section>

    <section class="lesson-section">
      <div class="lesson-section-title">À retenir</div>
      <div class="takeaway-box">
        <div class="takeaway-text">${foundLesson.keyTakeaway}</div>
      </div>
    </section>

    ${renderReferencesSection(lessonId)}

    <div class="lesson-actions">
      <button class="btn ${isCompleted ? 'completed' : 'btn-primary'}"
              onclick="toggleComplete('${lessonId}')">
        ${isCompleted ? '✓  Leçon validée' : 'Marquer comme terminée'}
      </button>
      ${getNextLessonButton(foundModule, foundLesson)}
    </div>
  `;

  showView('view-lesson');
  // Attach interactive listeners on piano keys
  attachPianoListeners();
}

function getNextLessonButton(module, currentLesson) {
  const idx = module.lessons.findIndex(l => l.id === currentLesson.id);
  if (idx < module.lessons.length - 1) {
    const next = module.lessons[idx + 1];
    return `<button class="btn btn-secondary" onclick="openLesson('${next.id}')">Leçon suivante : ${next.title} →</button>`;
  } else {
    // Last lesson of module — link to next module
    const moduleIdx = COURSE_DATA.modules.findIndex(m => m.id === module.id);
    if (moduleIdx < COURSE_DATA.modules.length - 1) {
      const nextModule = COURSE_DATA.modules[moduleIdx + 1];
      return `<button class="btn btn-secondary" onclick="openModule(${nextModule.id})">Module suivant : ${nextModule.title} →</button>`;
    }
  }
  return '';
}

function toggleComplete(lessonId) {
  if (state.completed.has(lessonId)) {
    state.completed.delete(lessonId);
  } else {
    state.completed.add(lessonId);
    showCelebration(lessonId);
  }
  saveProgress();
  // Re-render current lesson
  openLesson(lessonId);
}

// ============================================================
// CELEBRATION
// ============================================================

function showCelebration(lessonId) {
  // Find the lesson info
  let module = null;
  for (const m of COURSE_DATA.modules) {
    if (m.lessons.find(l => l.id === lessonId)) {
      module = m;
      break;
    }
  }
  if (!module) return;

  const moduleCompleted = module.lessons.every(l => state.completed.has(l.id));
  const totalCompleted = state.completed.size;
  const totalLessons = COURSE_DATA.modules.reduce((s, m) => s + m.lessons.length, 0);
  const allDone = totalCompleted === totalLessons;

  let title, text, icon;
  if (allDone) {
    icon = '◆';
    title = 'Bible complétée';
    text = 'Tu as parcouru les 57 leçons. Maintenant, l\'instrument t\'appartient.';
  } else if (moduleCompleted) {
    icon = '✦';
    title = `Module ${module.id} validé`;
    text = `Tu as terminé "${module.title}". Cette base est solide.`;
  } else {
    return; // Just a single lesson — no overlay
  }

  const div = document.createElement('div');
  div.className = 'celebration';
  div.innerHTML = `
    <div class="celebration-icon">${icon}</div>
    <div class="celebration-title">${title}</div>
    <div class="celebration-text">${text}</div>
    <button class="celebration-btn" onclick="this.parentElement.remove()">Continuer</button>
  `;
  document.body.appendChild(div);
  setTimeout(() => {
    if (div.parentElement) div.remove();
  }, 5000);
}

// ============================================================
// STATS VIEW
// ============================================================

function renderStats() {
  const totalLessons = COURSE_DATA.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completed = state.completed.size;
  const percent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  // Count completed modules (fully done)
  const completedModules = COURSE_DATA.modules.filter(m =>
    m.lessons.every(l => state.completed.has(l.id))
  ).length;

  // Estimate total practice time
  const totalMinutes = COURSE_DATA.modules.reduce((s, m) =>
    s + m.lessons.reduce((ms, l) => ms + parseInt(l.duration) || 25, 0), 0);
  const totalHours = Math.round(totalMinutes / 60);

  const completedMinutes = [...state.completed].reduce((sum, id) => {
    for (const m of COURSE_DATA.modules) {
      const l = m.lessons.find(x => x.id === id);
      if (l) return sum + (parseInt(l.duration) || 25);
    }
    return sum;
  }, 0);
  const completedHours = Math.round(completedMinutes / 60 * 10) / 10;

  const content = document.getElementById('stats-content');
  content.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${percent}%</div>
        <div class="stat-label">Avancement total</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completed}</div>
        <div class="stat-label">Leçons validées</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completedModules}<span style="font-size: 24px; color: var(--paper-muted);">/${COURSE_DATA.modules.length}</span></div>
        <div class="stat-label">Modules terminés</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completedHours}<span style="font-size: 18px; color: var(--paper-muted);">h</span></div>
        <div class="stat-label">Temps de pratique</div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">Détail par module</div>
    </div>

    <div class="modules">
      ${COURSE_DATA.modules.map(m => {
        const c = m.lessons.filter(l => state.completed.has(l.id)).length;
        const t = m.lessons.length;
        const p = (c / t) * 100;
        const done = c === t;
        return `
          <div class="module-card ${done ? 'completed' : ''}"
               onclick="openModule(${m.id})"
               style="--accent: ${m.color};">
            <div class="module-header">
              <div class="module-icon" style="background: ${m.color}1a; border-color: ${m.color}33;">${m.icon}</div>
              <div class="module-info">
                <div class="module-number">Module ${m.id}</div>
                <div class="module-title">${m.title}</div>
              </div>
            </div>
            <div class="module-footer">
              <div class="module-progress">
                <div class="module-progress-bar">
                  <div class="module-progress-fill" style="width: ${p}%; background: ${done ? 'var(--jade)' : m.color};"></div>
                </div>
                <div class="module-progress-text">${c} / ${t}</div>
              </div>
              <div class="module-arrow">→</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================================
// WELCOME
// ============================================================

function dismissWelcome() {
  document.getElementById('welcome-overlay').classList.add('hidden');
  try { localStorage.setItem(WELCOME_KEY, '1'); } catch (e) {}
}

function checkWelcome() {
  try {
    if (!localStorage.getItem(WELCOME_KEY)) {
      document.getElementById('welcome-overlay').classList.remove('hidden');
    }
  } catch (e) {}
}

// ============================================================
// INIT
// ============================================================

function init() {
  loadProgress();
  renderHome();
  checkWelcome();
}

document.addEventListener('DOMContentLoaded', init);
