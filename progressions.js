// ============================================================
// PROGRESSIONS — bibliothèque complète gospel
// ~50 progressions: standards, modales, vamps, tonalités gospel
// Format: { lessonId: [{ name, bpm, chords: [{name, notes, bassNote?, duration}] }] }
// ============================================================

const LESSON_PROGRESSIONS = {

  // ============================================================
  // MODULE 4 — LES PROGRESSIONS
  // ============================================================

  "4.1": [
    {
      name: "2-5-1 en C (lent, comprends la résolution)",
      bpm: 70,
      chords: [
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    },
    {
      name: "2-5-1 en F",
      bpm: 80,
      chords: [
        { name: "Gm9",    notes: ["G","Bb","D","F","A"], duration: 4 },
        { name: "C13",    notes: ["C","E","G","Bb","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 8 }
      ]
    },
    {
      name: "2-5-1 en Bb (tonalité gospel classique)",
      bpm: 80,
      chords: [
        { name: "Cm9",    notes: ["C","Eb","G","Bb","D"], duration: 4 },
        { name: "F13",    notes: ["F","A","C","Eb","G"], duration: 4 },
        { name: "Bbmaj9", notes: ["Bb","D","F","A","C"], duration: 8 }
      ]
    },
    {
      name: "2-5-1 en Eb (tonalité Peter Martin)",
      bpm: 75,
      chords: [
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Bb13",   notes: ["Bb","D","F","Ab","C"], duration: 4 },
        { name: "Ebmaj9", notes: ["Eb","G","Bb","D","F"], duration: 8 }
      ]
    },
    {
      name: "2-5-1 en Ab (worship gospel)",
      bpm: 80,
      chords: [
        { name: "Bbm9",   notes: ["Bb","Db","F","Ab","C"], duration: 4 },
        { name: "Eb13",   notes: ["Eb","G","Bb","Db","F"], duration: 4 },
        { name: "Abmaj9", notes: ["Ab","C","Eb","G","Bb"], duration: 8 }
      ]
    },
    {
      name: "2-5-1 mineur en A (résout sur Am)",
      bpm: 70,
      chords: [
        { name: "Bm7b5",  notes: ["B","D","F","A"], duration: 4 },
        { name: "E7b9",   notes: ["E","G#","B","D","F"], duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 8 }
      ]
    }
  ],

  "4.2": [
    {
      name: "1-6-2-5 turnaround en C (boucle)",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "Variation avec A7b9 (dominante secondaire)",
      bpm: 75,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "A7b9",   notes: ["A","C#","E","G","Bb"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "1-6-2-5 en F (jazz-gospel)",
      bpm: 85,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "Gm9",    notes: ["G","Bb","D","F","A"], duration: 4 },
        { name: "C13",    notes: ["C","E","G","Bb","D"], duration: 4 }
      ]
    },
    {
      name: "3-6-2-5 (extension classique)",
      bpm: 80,
      chords: [
        { name: "Em9",    notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "6-2-5-1 (fin 'infinite jazz')",
      bpm: 75,
      chords: [
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    }
  ],

  "4.3": [
    {
      name: "1-4-5 gospel traditionnel en C",
      bpm: 85,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    },
    {
      name: "1-4-5 blues gospel en Bb",
      bpm: 95,
      chords: [
        { name: "Bb7",    notes: ["Bb","D","F","Ab"], duration: 4 },
        { name: "Eb7",    notes: ["Eb","G","Bb","Db"], duration: 4 },
        { name: "F7",     notes: ["F","A","C","Eb"], duration: 4 },
        { name: "Bb7",    notes: ["Bb","D","F","Ab"], duration: 4 }
      ]
    },
    {
      name: "1-3-4-5 (doo-wop gospel)",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Em7",    notes: ["E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "Plagale étendue — 'Amen cadence'",
      bpm: 60,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    }
  ],

  "4.4": [
    {
      name: "1-5-6-4 pop gospel en C",
      bpm: 90,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "G/B",    notes: ["G","B","D"], bassNote: "B", duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 }
      ]
    },
    {
      name: "1-5-6-4 en G (Hillsong style)",
      bpm: 75,
      chords: [
        { name: "Gmaj9",  notes: ["G","B","D","F#","A"], duration: 4 },
        { name: "D/F#",   notes: ["D","F#","A"], bassNote: "F#", duration: 4 },
        { name: "Em9",    notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    },
    {
      name: "1-5-6-4 en Eb (style Tasha Cobbs)",
      bpm: 70,
      chords: [
        { name: "Ebmaj9", notes: ["Eb","G","Bb","D","F"], duration: 4 },
        { name: "Bb/D",   notes: ["Bb","D","F"], bassNote: "D", duration: 4 },
        { name: "Cm9",    notes: ["C","Eb","G","Bb","D"], duration: 4 },
        { name: "Abmaj9", notes: ["Ab","C","Eb","G","Bb"], duration: 4 }
      ]
    },
    {
      name: "1-bVII-4-1 (worship rock, Way Maker style)",
      bpm: 85,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Bb",     notes: ["Bb","D","F"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    },
    {
      name: "1-7-4-5 (descente classique gospel)",
      bpm: 75,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Bm7b5",  notes: ["B","D","F","A"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    }
  ],

  "4.5": [
    {
      name: "IV → iv → I (le mouvement émotionnel)",
      bpm: 65,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    },
    {
      name: "IV → iv en Bb (R&B gospel)",
      bpm: 70,
      chords: [
        { name: "Bbmaj9", notes: ["Bb","D","F","A","C"], duration: 4 },
        { name: "Ebmaj9", notes: ["Eb","G","Bb","D","F"], duration: 4 },
        { name: "Ebm9",   notes: ["Eb","Gb","Bb","Db","F"], duration: 4 },
        { name: "Bbmaj9", notes: ["Bb","D","F","A","C"], duration: 4 }
      ]
    },
    {
      name: "I → IV → iv → iii → vi (descente émotionnelle)",
      bpm: 65,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Em9",    notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 }
      ]
    }
  ],

  "4.6": [
    {
      name: "Avec dominante secondaire V/ii",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "A7b9",   notes: ["A","C#","E","G","Bb"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "Chaîne de dominantes (cycle des quintes)",
      bpm: 85,
      chords: [
        { name: "E7",     notes: ["E","G#","B","D"], duration: 4 },
        { name: "A7",     notes: ["A","C#","E","G"], duration: 4 },
        { name: "D7",     notes: ["D","F#","A","C"], duration: 4 },
        { name: "G7",     notes: ["G","B","D","F"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    },
    {
      name: "V/V → V → I (double dominante)",
      bpm: 75,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "D7",     notes: ["D","F#","A","C"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    }
  ],

  "4.7": [
    {
      name: "Gospel turnaround complet en C",
      bpm: 70,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "C7",     notes: ["C","E","G","Bb"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Cmaj9/E",notes: ["C","E","G","B","D"], bassNote: "E", duration: 4 },
        { name: "A7",     notes: ["A","C#","E","G"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    },
    {
      name: "Turnaround gospel en F",
      bpm: 75,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "F7",     notes: ["F","A","C","Eb"], duration: 4 },
        { name: "Bbmaj9", notes: ["Bb","D","F","A","C"], duration: 4 },
        { name: "Bbm9",   notes: ["Bb","Db","F","Ab","C"], duration: 4 },
        { name: "Fmaj9/A",notes: ["F","A","C","E","G"], bassNote: "A", duration: 4 },
        { name: "D7",     notes: ["D","F#","A","C"], duration: 4 },
        { name: "Gm9",    notes: ["G","Bb","D","F","A"], duration: 4 },
        { name: "C13",    notes: ["C","E","G","Bb","D"], duration: 4 }
      ]
    },
    {
      name: "Pachelbel gospel (1-5-6-3-4-1-4-5)",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "Em9",    notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    }
  ],

  // ============================================================
  // MODULE 5 — PASSING CHORDS
  // ============================================================

  "5.2": [
    {
      name: "Montée chromatique avec dim7",
      bpm: 75,
      chords: [
        { name: "Cmaj9",   notes: ["C","E","G","B","D"], duration: 4 },
        { name: "C#dim7",  notes: ["C#","E","G","Bb"], duration: 2 },
        { name: "Dm9",     notes: ["D","F","A","C","E"], duration: 4 },
        { name: "D#dim7",  notes: ["D#","F#","A","C"], duration: 2 },
        { name: "Em9",     notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Fmaj9",   notes: ["F","A","C","E","G"], duration: 4 }
      ]
    },
    {
      name: "Descente chromatique en Eb",
      bpm: 75,
      chords: [
        { name: "Ebmaj9",  notes: ["Eb","G","Bb","D","F"], duration: 4 },
        { name: "Ddim7",   notes: ["D","F","Ab","B"], duration: 2 },
        { name: "Cm9",     notes: ["C","Eb","G","Bb","D"], duration: 4 },
        { name: "Bdim7",   notes: ["B","D","F","Ab"], duration: 2 },
        { name: "Bbm9",    notes: ["Bb","Db","F","Ab","C"], duration: 4 }
      ]
    }
  ],

  "5.3": [
    {
      name: "Avec tritone substitution",
      bpm: 70,
      chords: [
        { name: "Dm9",   notes: ["D","F","A","C","E"], duration: 4 },
        { name: "Db9",   notes: ["Db","F","Ab","B","Eb"], duration: 4 },
        { name: "Cmaj9", notes: ["C","E","G","B","D"], duration: 8 }
      ]
    },
    {
      name: "Double tritone (G7 → Db7 → Cmaj9)",
      bpm: 75,
      chords: [
        { name: "Dm9",   notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",   notes: ["G","B","D","F","A"], duration: 2 },
        { name: "Db9",   notes: ["Db","F","Ab","B","Eb"], duration: 2 },
        { name: "Cmaj9", notes: ["C","E","G","B","D"], duration: 8 }
      ]
    }
  ],

  "5.4": [
    {
      name: "Backdoor progression (bVII7 → I)",
      bpm: 80,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "Fm9",    notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Bb7",    notes: ["Bb","D","F","Ab"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 }
      ]
    }
  ],

  // ============================================================
  // MODULE 6 — RYTHMIQUE
  // ============================================================

  "6.2": [
    {
      name: "Comping pattern — 2-5-1 lent pour pratiquer",
      bpm: 65,
      chords: [
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    }
  ],

  "6.7": [
    {
      name: "Vamp 2 accords pour pratiquer les fills",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 }
      ]
    }
  ],

  // ============================================================
  // MODULE 7 — IMPROVISATION (vamps pour solo)
  // ============================================================

  "7.1": [
    {
      name: "Vamp Cmaj9 — pratique penta majeure C",
      bpm: 75,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    },
    {
      name: "Vamp Fmaj9 — pratique penta majeure F",
      bpm: 75,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 8 }
      ]
    }
  ],

  "7.2": [
    {
      name: "Vamp Am9 — pratique penta mineure A",
      bpm: 75,
      chords: [
        { name: "Am9",  notes: ["A","C","E","G","B"], duration: 8 }
      ]
    },
    {
      name: "Vamp Dm9 — pratique penta mineure D",
      bpm: 80,
      chords: [
        { name: "Dm9",  notes: ["D","F","A","C","E"], duration: 8 }
      ]
    },
    {
      name: "Vamp soul mineur (i-V en Am)",
      bpm: 70,
      chords: [
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "E7b9",   notes: ["E","G#","B","D","F"], duration: 4 }
      ]
    }
  ],

  "7.3": [
    {
      name: "Vamp blues C — pratique gamme blues",
      bpm: 90,
      chords: [
        { name: "C7",  notes: ["C","E","G","Bb"], duration: 4 },
        { name: "F7",  notes: ["F","A","C","Eb"], duration: 4 }
      ]
    },
    {
      name: "Blues gospel 12 mesures en Bb",
      bpm: 95,
      chords: [
        { name: "Bb7",  notes: ["Bb","D","F","Ab"], duration: 8 },
        { name: "Eb7",  notes: ["Eb","G","Bb","Db"], duration: 4 },
        { name: "Bb7",  notes: ["Bb","D","F","Ab"], duration: 4 },
        { name: "F7",   notes: ["F","A","C","Eb"], duration: 4 },
        { name: "Bb7",  notes: ["Bb","D","F","Ab"], duration: 4 }
      ]
    }
  ],

  "7.5": [
    {
      name: "Vamp dorien D — pratique mode dorien",
      bpm: 75,
      chords: [
        { name: "Dm9",  notes: ["D","F","A","C","E"], duration: 8 }
      ]
    },
    {
      name: "Vamp mixolydien G — pratique mode mixolydien",
      bpm: 80,
      chords: [
        { name: "G7sus", notes: ["G","C","D","F"], duration: 4 },
        { name: "G7",    notes: ["G","B","D","F"], duration: 4 }
      ]
    },
    {
      name: "Vamp lydien F — pratique mode lydien",
      bpm: 70,
      chords: [
        { name: "Fmaj7#11",  notes: ["F","A","C","E","B"], duration: 8 }
      ]
    },
    {
      name: "Pédale de tonique (style Kirk Franklin)",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "F/C",    notes: ["F","A","C"], bassNote: "C", duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "G/C",    notes: ["G","B","D"], bassNote: "C", duration: 4 }
      ]
    }
  ],

  "7.6": [
    {
      name: "Vamp Cmaj9 lent — pratique enclosures",
      bpm: 65,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    }
  ],

  "7.7": [
    {
      name: "Vamp longue durée pour solo (2-5-1 en boucle)",
      bpm: 85,
      chords: [
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    },
    {
      name: "Andalouse gospel (i-VII-VI-V)",
      bpm: 75,
      chords: [
        { name: "Am9",    notes: ["A","C","E","G","B"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 },
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 4 },
        { name: "E7b9",   notes: ["E","G#","B","D","F"], duration: 4 }
      ]
    }
  ],

  // ============================================================
  // MODULE 8 — STYLE & RÉPERTOIRE
  // ============================================================

  "8.1": [
    {
      name: "Amazing Grace style en G (triolets)",
      bpm: 65,
      chords: [
        { name: "Gmaj9",   notes: ["G","B","D","F#","A"], duration: 8 },
        { name: "Cmaj9",   notes: ["C","E","G","B","D"], duration: 4 },
        { name: "Gmaj9",   notes: ["G","B","D","F#","A"], duration: 4 },
        { name: "Em9",     notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "D13",     notes: ["D","F#","A","C","E"], duration: 4 },
        { name: "Gmaj9",   notes: ["G","B","D","F#","A"], duration: 8 }
      ]
    }
  ],

  "8.2": [
    {
      name: "Kirk Franklin style (Im-bVII-IV-Im)",
      bpm: 95,
      chords: [
        { name: "Cm9",     notes: ["C","Eb","G","Bb","D"], duration: 4 },
        { name: "Bbmaj9",  notes: ["Bb","D","F","A","C"], duration: 4 },
        { name: "Fm9",     notes: ["F","Ab","C","Eb","G"], duration: 4 },
        { name: "Cm9",     notes: ["C","Eb","G","Bb","D"], duration: 4 }
      ]
    }
  ],

  "8.3": [
    {
      name: "Worship moderne en D (Hillsong vibe)",
      bpm: 75,
      chords: [
        { name: "D",       notes: ["D","F#","A"], duration: 4 },
        { name: "A/C#",    notes: ["A","C#","E"], bassNote: "C#", duration: 4 },
        { name: "Bm9",     notes: ["B","D","F#","A","C#"], duration: 4 },
        { name: "Gmaj9",   notes: ["G","B","D","F#","A"], duration: 4 }
      ]
    },
    {
      name: "Pédale de basse worship en E",
      bpm: 70,
      chords: [
        { name: "Emaj9",   notes: ["E","G#","B","D#","F#"], duration: 4 },
        { name: "B/E",     notes: ["B","D#","F#"], bassNote: "E", duration: 4 },
        { name: "C#m/E",   notes: ["C#","E","G#"], bassNote: "E", duration: 4 },
        { name: "A/E",     notes: ["A","C#","E"], bassNote: "E", duration: 4 }
      ]
    }
  ],

  "8.5": [
    {
      name: "Vamp neo-soul (style Robert Glasper)",
      bpm: 70,
      chords: [
        { name: "Fmaj7#11", notes: ["F","A","C","E","B"], duration: 4 },
        { name: "Em9",      notes: ["E","G","B","D","F#"], duration: 4 },
        { name: "Bbmaj9",   notes: ["Bb","D","F","A","C"], duration: 4 },
        { name: "Am9",      notes: ["A","C","E","G","B"], duration: 4 }
      ]
    },
    {
      name: "Coltrane changes en gospel (i-bVII-bVI-bVII)",
      bpm: 80,
      chords: [
        { name: "Cm9",     notes: ["C","Eb","G","Bb","D"], duration: 4 },
        { name: "Bbmaj9",  notes: ["Bb","D","F","A","C"], duration: 4 },
        { name: "Abmaj9",  notes: ["Ab","C","Eb","G","Bb"], duration: 4 },
        { name: "Bbmaj9",  notes: ["Bb","D","F","A","C"], duration: 4 }
      ]
    }
  ],

  "8.7": [
    {
      name: "Vamp groupe — laisse de l'espace",
      bpm: 80,
      chords: [
        { name: "Fmaj9",  notes: ["F","A","C","E","G"], duration: 8 },
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 8 }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_PROGRESSIONS;
}
