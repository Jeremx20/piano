// ============================================================
// PROGRESSIONS — séquences d'accords jouables en boucle au tempo
// Format: { lessonId: [{ name, bpm, chords: [{name, notes, bassNote?, duration}] }] }
// duration en beats (1 = 1 noire, 2 = 1 blanche, 4 = 1 ronde)
// ============================================================

const LESSON_PROGRESSIONS = {

  // === MODULE 4: Progressions ===
  "4.1": [
    {
      name: "2-5-1 en C (lent — comprends la résolution)",
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
    }
  ],
  "4.6": [
    {
      name: "Avec dominante secondaire (V/ii)",
      bpm: 80,
      chords: [
        { name: "Cmaj9",  notes: ["C","E","G","B","D"], duration: 4 },
        { name: "A7b9",   notes: ["A","C#","E","G","Bb"], duration: 4 },
        { name: "Dm9",    notes: ["D","F","A","C","E"], duration: 4 },
        { name: "G13",    notes: ["G","B","D","F","A"], duration: 4 }
      ]
    }
  ],
  "4.7": [
    {
      name: "Gospel turnaround complet",
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
    }
  ],

  // === MODULE 5: Passing Chords ===
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
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_PROGRESSIONS;
}
