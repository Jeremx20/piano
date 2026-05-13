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
// WEB AUDIO — play chord notes
// ============================================================

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume context on iOS (needs user interaction)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Get the frequency for a given note + octave (e.g., 'C', 4 → 261.63 Hz)
function noteToFreq(noteName, octave = 4) {
  const semitone = noteToSemitone(noteName);
  // A4 = 440 Hz, A4 = MIDI 69
  // MIDI note = octave * 12 + semitone (with C0 = 12, C4 = 60)
  const midi = (octave + 1) * 12 + semitone;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// Play a single note with a piano-like sound (multiple harmonics, ADSR envelope)
function playNote(noteName, octave = 4, duration = 1.2) {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  const freq = noteToFreq(noteName, octave);

  // Master gain (envelope)
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.25, now + 0.01); // attack
  gain.gain.exponentialRampToValueAtTime(0.15, now + 0.15); // decay
  gain.gain.exponentialRampToValueAtTime(0.05, now + duration * 0.7); // sustain
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // release
  gain.connect(ctx.destination);

  // Multiple oscillators for richer tone
  const harmonics = [
    { freq: freq, gain: 0.6, type: 'triangle' },
    { freq: freq * 2, gain: 0.2, type: 'sine' },
    { freq: freq * 3, gain: 0.1, type: 'sine' },
    { freq: freq * 4, gain: 0.05, type: 'sine' }
  ];
  for (const h of harmonics) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.frequency.value = h.freq;
    osc.type = h.type;
    g.gain.value = h.gain;
    osc.connect(g);
    g.connect(gain);
    osc.start(now);
    osc.stop(now + duration);
  }
}

// Play a chord: arpeggio with slight delay so notes don't clash
function playChord(noteData) {
  const { highlight = [], bassNote = null } = noteData;
  const ctx = getAudioCtx();

  // Bass first (octave 3), then chord notes (octave 4), slight stagger
  if (bassNote) {
    playNote(bassNote, 3, 1.6);
  }
  highlight.forEach((note, i) => {
    // Determine octave: if note semitone < bass semitone or first chord, octave 4; otherwise 4 or 5
    const semi = noteToSemitone(note);
    const baseOctave = 4;
    setTimeout(() => playNote(note, baseOctave, 1.4), i * 25);
  });
}

// Note helpers (also defined in piano.js but needed here)
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
// VIEW MANAGEMENT
// ============================================================

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (viewId === 'view-stats') {
    document.getElementById('nav-stats').classList.add('active');
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
