// ============================================================
// PIANO DIAGRAMS — accords illustrés pour chaque leçon
// Format: { lessonId: [{ name, highlight, bassNote? }, ...] }
// Notes use sharps OR flats (both work): C# = Db, etc.
// ============================================================

const LESSON_DIAGRAMS = {

  // === MODULE 1: Fondations ===
  "1.1": [
    { name: "DO central (C4)", highlight: ["C"], startNote: "C" }
  ],
  "1.2": [
    { name: "1 demi-ton (C → C#)", highlight: ["C", "C#"], octaves: 1 },
    { name: "1 ton (C → D)", highlight: ["C", "D"], octaves: 1 },
    { name: "MI → FA (1 demi-ton, pas de noire!)", highlight: ["E", "F"], octaves: 1 }
  ],
  "1.3": [
    { name: "Gamme de DO majeur (C-D-E-F-G-A-B)", highlight: ["C", "D", "E", "F", "G", "A", "B"], highlightAllOctaves: false },
    { name: "Gamme de SOL majeur (G-A-B-C-D-E-F#)", highlight: ["G", "A", "B", "C", "D", "E", "F#"] },
    { name: "Gamme de FA majeur (F-G-A-Bb-C-D-E)", highlight: ["F", "G", "A", "Bb", "C", "D", "E"] }
  ],
  "1.4": [
    { name: "DO majeur — degrés I à VII", highlight: ["C","D","E","F","G","A","B"] }
  ],
  "1.5": [
    { name: "DO majeur (C-E-G)", highlight: ["C", "E", "G"] },
    { name: "DO mineur (C-Eb-G)", highlight: ["C", "Eb", "G"] },
    { name: "DO diminué (C-Eb-Gb)", highlight: ["C", "Eb", "Gb"] }
  ],
  "1.6": [
    { name: "I — C majeur", highlight: ["C","E","G"] },
    { name: "ii — D mineur", highlight: ["D","F","A"] },
    { name: "V — G majeur", highlight: ["G","B","D"] },
    { name: "vi — A mineur", highlight: ["A","C","E"] }
  ],
  "1.7": [
    { type: "circle-of-fifths", name: "Le cercle des quintes" }
  ],

  // === MODULE 2: Accords Gospel ===
  "2.1": [
    { name: "Cmaj7 (C-E-G-B)", highlight: ["C","E","G","B"] },
    { name: "Cm7 (C-Eb-G-Bb)", highlight: ["C","Eb","G","Bb"] },
    { name: "C7 dominante (C-E-G-Bb)", highlight: ["C","E","G","Bb"] },
    { name: "Cm7b5 (C-Eb-Gb-Bb)", highlight: ["C","Eb","Gb","Bb"] }
  ],
  "2.2": [
    { name: "Cmaj9 (C-E-G-B-D)", highlight: ["C","E","G","B","D"] },
    { name: "Cm9 (C-Eb-G-Bb-D)", highlight: ["C","Eb","G","Bb","D"] },
    { name: "C9 dominante (C-E-G-Bb-D)", highlight: ["C","E","G","Bb","D"] }
  ],
  "2.3": [
    { name: "C13 voicing gospel (basse C, RH: Bb-D-E-A)", highlight: ["C","Bb","D","E","A"] },
    { name: "Cm11 voicing (basse C, RH: Bb-D-F)", highlight: ["C","Bb","D","F"] }
  ],
  "2.4": [
    { name: "Csus2 (C-D-G)", highlight: ["C","D","G"] },
    { name: "Csus4 (C-F-G)", highlight: ["C","F","G"] },
    { name: "Gsus4 → G (résolution)", highlight: ["G","C","D"] }
  ],
  "2.5": [
    { name: "C (triade)", highlight: ["C","E","G"] },
    { name: "Cadd9 (C-E-G-D)", highlight: ["C","E","G","D"] },
    { name: "Cmaj9 (avec 7e)", highlight: ["C","E","G","B","D"] }
  ],
  "2.6": [
    { name: "G7 standard", highlight: ["G","B","D","F"] },
    { name: "G7b9 (Ab altéré)", highlight: ["G","B","D","F","Ab"] },
    { name: "G7#9 (A# altéré)", highlight: ["G","B","D","F","A#"] }
  ],
  "2.7": [
    { name: "Eb/G — bass G, chord Eb major", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "C/E — bass E, chord C major", highlight: ["C","E","G"], bassNote: "E" },
    { name: "F/A — bass A, chord F major", highlight: ["F","A","C"], bassNote: "A" }
  ],
  "2.8": [
    { name: "C position fondamentale", highlight: ["C","E","G"] },
    { name: "C/E (1re inversion)", highlight: ["C","E","G"], bassNote: "E" },
    { name: "C/G (2e inversion)", highlight: ["C","E","G"], bassNote: "G" }
  ],

  // === MODULE 3: Voicings ===
  "3.1": [
    { name: "Cmaj9 voicing pro (basse C, RH E-G-B-D)", highlight: ["C","E","G","B","D"] },
    { name: "Cm9 voicing pro (basse C, RH Eb-G-Bb-D)", highlight: ["C","Eb","G","Bb","D"] },
    { name: "C13 voicing pro (basse C, RH Bb-D-E-A)", highlight: ["C","Bb","D","E","A"] }
  ],
  "3.2": [
    { name: "Cmaj9 rootless (RH: E-G-B-D)", highlight: ["E","G","B","D"] },
    { name: "Cmaj7 shell (RH: E-B)", highlight: ["E","B"] },
    { name: "Dm9 rootless (RH: F-A-C-E)", highlight: ["F","A","C","E"] }
  ],
  "3.3": [
    { name: "Cmaj7 shell (3 + 7)", highlight: ["C","E","B"] },
    { name: "Cm7 shell (b3 + b7)", highlight: ["C","Eb","Bb"] },
    { name: "C7 shell (3 + b7)", highlight: ["C","E","Bb"] }
  ],
  "3.4": [
    { name: "Dm9 rootless (F-A-C-E)", highlight: ["F","A","C","E"] },
    { name: "G13 rootless — voice leading (F-A-B-E)", highlight: ["F","A","B","E"] },
    { name: "Cmaj9 rootless (E-G-B-D)", highlight: ["E","G","B","D"] }
  ],
  "3.5": [
    { name: "Cm7 quartal (RH: G-C-F-Bb)", highlight: ["C","G","F","Bb"] },
    { name: "Cm7 tertiel (comparaison)", highlight: ["C","Eb","G","Bb","D"] }
  ],
  "3.6": [
    { name: "Fmaj9 spread (basse F+C, RH A-E-G)", highlight: ["F","C","A","E","G"] }
  ],
  "3.7": [
    { name: "Eb/G (RH: Eb-G-Bb)", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Eb/Bb (5e à la basse)", highlight: ["Eb","G","Bb"], bassNote: "Bb" },
    { name: "Cm/Eb (= Eb/C inversion)", highlight: ["C","Eb","G"], bassNote: "Eb" }
  ],

  // === MODULE 4: Progressions ===
  "4.1": [
    { name: "Dm9 — ii", highlight: ["D","F","A","C","E"] },
    { name: "G13 — V", highlight: ["G","B","D","F","A","E"] },
    { name: "Cmaj9 — I", highlight: ["C","E","G","B","D"] }
  ],
  "4.2": [
    { name: "Cmaj9 — I", highlight: ["C","E","G","B","D"] },
    { name: "Am9 — vi", highlight: ["A","C","E","G","B"] },
    { name: "Dm9 — ii", highlight: ["D","F","A","C","E"] },
    { name: "G13 — V", highlight: ["G","B","D","F","A"] }
  ],
  "4.3": [
    { name: "Cmaj9 — I", highlight: ["C","E","G","B","D"] },
    { name: "Fmaj9 — IV", highlight: ["F","A","C","E","G"] },
    { name: "G13 — V", highlight: ["G","B","D","F","A"] }
  ],
  "4.4": [
    { name: "Cmaj9 — I", highlight: ["C","E","G","B","D"] },
    { name: "G/B (V avec B en basse)", highlight: ["G","B","D"], bassNote: "B" },
    { name: "Am9 — vi", highlight: ["A","C","E","G","B"] },
    { name: "Fmaj9 — IV", highlight: ["F","A","C","E","G"] }
  ],
  "4.5": [
    { name: "Fmaj9 — IV majeur", highlight: ["F","A","C","E","G"] },
    { name: "Fm9 — iv mineur (note pleurante Ab)", highlight: ["F","Ab","C","Eb","G"] },
    { name: "Cmaj9 — résolution sur I", highlight: ["C","E","G","B","D"] }
  ],
  "4.6": [
    { name: "A7b9 — V/ii (résout sur Dm)", highlight: ["A","C#","E","G","Bb"] },
    { name: "Dm9 — ii (résolution)", highlight: ["D","F","A","C","E"] },
    { name: "D7 — V/V (résout sur G)", highlight: ["D","F#","A","C"] }
  ],
  "4.7": [
    { name: "C7 (transforme I en V de IV)", highlight: ["C","E","G","Bb"] },
    { name: "Fm9 (mineurisation)", highlight: ["F","Ab","C","Eb","G"] },
    { name: "Cmaj9/E (basse E)", highlight: ["C","E","G","B","D"], bassNote: "E" }
  ],

  // === MODULE 5: Passing Chords ===
  "5.1": [
    { name: "C#dim7 entre Cmaj9 et Dm9 (passage chromatique)", highlight: ["C#","E","G","Bb"] }
  ],
  "5.2": [
    { name: "C#dim7 (C#-E-G-Bb)", highlight: ["C#","E","G","Bb"] },
    { name: "D#dim7 (D#-F#-A-C)", highlight: ["D#","F#","A","C"] },
    { name: "F#dim7 (F#-A-C-Eb)", highlight: ["F#","A","C","Eb"] }
  ],
  "5.3": [
    { name: "G7 (standard V)", highlight: ["G","B","D","F"] },
    { name: "Db7 (tritone sub) — mêmes guide tones F-B", highlight: ["Db","F","Ab","B"] },
    { name: "Cmaj9 (résolution)", highlight: ["C","E","G","B","D"] }
  ],
  "5.4": [
    { name: "Bb7 (backdoor — résout sur Cmaj9)", highlight: ["Bb","D","F","Ab"] },
    { name: "Cmaj9 (cible)", highlight: ["C","E","G","B","D"] }
  ],
  "5.5": [
    { name: "Bbm9 → Am9 (passing chromatique)", highlight: ["Bb","Db","F","Ab","C"] },
    { name: "Am9 (cible)", highlight: ["A","C","E","G","B"] }
  ],
  "5.6": [
    { name: "F#m9 (approche du dessus)", highlight: ["F#","A","C#","E","G#"] },
    { name: "Fm9 (approche rapprochée)", highlight: ["F","Ab","C","Eb","G"] },
    { name: "Dm9 (cible)", highlight: ["D","F","A","C","E"] }
  ],
  "5.7": [
    { name: "C7 dans le tag", highlight: ["C","E","G","Bb"] },
    { name: "Fm9 (mineurisation tag)", highlight: ["F","Ab","C","Eb","G"] },
    { name: "Db9 (chromatique descendante)", highlight: ["Db","F","Ab","B","Eb"] }
  ],

  // === MODULE 6: Rythmique ===
  "6.3": [
    { name: "Pattern 1-5 (basse alternée C-G)", highlight: ["C","G"] }
  ],

  // === MODULE 7: Improvisation ===
  "7.1": [
    { name: "Pentatonique majeure de C (C-D-E-G-A)", highlight: ["C","D","E","G","A"] }
  ],
  "7.2": [
    { name: "Pentatonique mineure de A (A-C-D-E-G)", highlight: ["A","C","D","E","G"] }
  ],
  "7.3": [
    { name: "Gamme blues de C (C-Eb-F-F#-G-Bb)", highlight: ["C","Eb","F","F#","G","Bb"] }
  ],
  "7.5": [
    { name: "Dorien de D (= gamme de C démarrée sur D)", highlight: ["D","E","F","G","A","B","C"] },
    { name: "Mixolydien de G (= gamme de C démarrée sur G)", highlight: ["G","A","B","C","D","E","F"] }
  ],
  "7.6": [
    { name: "Enclosure F → D# → E sur Cmaj9", highlight: ["F","D#","E"] }
  ],

  // === MODULE 9: Slash Chords & Transitions ===
  "9.1": [
    { name: "F/C — F major avec C en basse", highlight: ["F","A","C"], bassNote: "C" },
    { name: "Am/G — Am avec G en basse (slash composé)", highlight: ["A","C","E"], bassNote: "G" },
    { name: "Bb/D — Bb avec D en basse (1ère inversion)", highlight: ["Bb","D","F"], bassNote: "D" }
  ],

  "9.2": [
    { name: "C/E — 1ère inversion", highlight: ["C","E","G"], bassNote: "E" },
    { name: "C/G — 2e inversion", highlight: ["C","E","G"], bassNote: "G" },
    { name: "F/A — 1ère inversion", highlight: ["F","A","C"], bassNote: "A" },
    { name: "F/C — 2e inversion", highlight: ["F","A","C"], bassNote: "C" },
    { name: "G/B — LE slash le plus utilisé", highlight: ["G","B","D"], bassNote: "B" },
    { name: "G/D — 2e inversion", highlight: ["G","B","D"], bassNote: "D" },
    { name: "Am/C — relative mineure inversée", highlight: ["A","C","E"], bassNote: "C" },
    { name: "Am/E — 2e inversion mineure", highlight: ["A","C","E"], bassNote: "E" },
    { name: "F/G — F sur G basse (G11 implicite)", highlight: ["F","A","C"], bassNote: "G" },
    { name: "Am/G — Am sur G basse (G7sus implicite)", highlight: ["A","C","E"], bassNote: "G" }
  ],

  "9.3": [
    { name: "F/A — en F majeur", highlight: ["F","A","C"], bassNote: "A" },
    { name: "F/C — en F majeur", highlight: ["F","A","C"], bassNote: "C" },
    { name: "Bb/D — en F (IV inversé)", highlight: ["Bb","D","F"], bassNote: "D" },
    { name: "C/E — en F (V inversé)", highlight: ["C","E","G"], bassNote: "E" },
    { name: "Bb/D — en Bb (I 1ère inv)", highlight: ["Bb","D","F"], bassNote: "D" },
    { name: "Bb/F — en Bb (I 2e inv)", highlight: ["Bb","D","F"], bassNote: "F" },
    { name: "Eb/G — LE slash signature gospel (en Bb)", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Eb/Bb — pédale en Bb", highlight: ["Eb","G","Bb"], bassNote: "Bb" },
    { name: "Cm/F — F11 implicite (V en Bb)", highlight: ["C","Eb","G"], bassNote: "F" }
  ],

  "9.4": [
    { name: "Eb/G — 1ère inv en Eb", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Eb/Bb — 2e inv en Eb", highlight: ["Eb","G","Bb"], bassNote: "Bb" },
    { name: "Ab/C — IV inversé en Eb", highlight: ["Ab","C","Eb"], bassNote: "C" },
    { name: "Bb/D — V inversé en Eb", highlight: ["Bb","D","F"], bassNote: "D" },
    { name: "Fm/Bb — Bb11 implicite (V en Eb)", highlight: ["F","Ab","C"], bassNote: "Bb" },
    { name: "Ab/C — I 1ère inv en Ab", highlight: ["Ab","C","Eb"], bassNote: "C" },
    { name: "Db/F — IV inversé en Ab", highlight: ["Db","F","Ab"], bassNote: "F" },
    { name: "Eb/G — V inversé en Ab", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Bbm/Eb — Eb11 implicite (V en Ab)", highlight: ["Bb","Db","F"], bassNote: "Eb" }
  ],

  "9.5": [
    { name: "Cmaj9/B (basse descend)", highlight: ["C","E","G","B","D"], bassNote: "B" },
    { name: "Am9/G (basse continue à descendre)", highlight: ["A","C","E","G","B"], bassNote: "G" },
    { name: "Fmaj9/E (basse descend encore)", highlight: ["F","A","C","E","G"], bassNote: "E" },
    { name: "Dm9 (résolution avec D à la basse)", highlight: ["D","F","A","C","E"] }
  ],

  "9.6": [
    { name: "Eb/F (intro qui monte)", highlight: ["Eb","G","Bb"], bassNote: "F" },
    { name: "Eb/G (continue à monter)", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Eb/Bb (5e à la basse, ample)", highlight: ["Eb","G","Bb"], bassNote: "Bb" }
  ],

  "9.7": [
    { name: "Cmaj9 — pédale de C (tonique)", highlight: ["C","E","G","B","D"] },
    { name: "F/C — F major sur C (pédale)", highlight: ["F","A","C"], bassNote: "C" },
    { name: "G/C — G major sur C (pédale, tension)", highlight: ["G","B","D"], bassNote: "C" }
  ],

  "9.8": [
    { name: "C/E (pont entre C et F)", highlight: ["C","E","G"], bassNote: "E" },
    { name: "F/E (pédale sur E avant F)", highlight: ["F","A","C"], bassNote: "E" },
    { name: "Cmaj9/B (pont entre Cmaj9 et Am9)", highlight: ["C","E","G","B","D"], bassNote: "B" },
    { name: "F/G (pont chromatique vers G13)", highlight: ["F","A","C"], bassNote: "G" }
  ],

  "9.9": [
    { name: "Eb/G — voicing signature mesure 1", highlight: ["Eb","G","Bb"], bassNote: "G" },
    { name: "Eb/Bb — mesure 2", highlight: ["Eb","G","Bb"], bassNote: "Bb" },
    { name: "Cm — mesure 3 (Eb-G change brièvement)", highlight: ["C","Eb","G"] },
    { name: "Eb — mesure 4 fondamentale", highlight: ["Eb","G","Bb"] },
    { name: "Eb/F — mesure 5 (suspension qui monte)", highlight: ["Eb","G","Bb"], bassNote: "F" }
  ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_DIAGRAMS;
}
