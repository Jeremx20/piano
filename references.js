// ============================================================
// REFERENCES — liens YouTube par leçon et répertoire de morceaux
// ============================================================

// YouTube references per lesson (format: { lessonId: [{ title, channel, url }] })
const LESSON_REFERENCES = {
  "2.7": [
    { title: "Peter Martin — Gospel slash chords", channel: "Open Studio", url: "https://www.youtube.com/results?search_query=peter+martin+gospel+slash+chords" }
  ],
  "3.7": [
    { title: "Le voicing gospel signature expliqué", channel: "Various", url: "https://www.youtube.com/results?search_query=gospel+piano+signature+voicing" }
  ],
  "4.1": [
    { title: "Le 2-5-1 en gospel", channel: "Various", url: "https://www.youtube.com/results?search_query=2+5+1+gospel+piano" }
  ],
  "4.7": [
    { title: "Gospel turnaround tutorial", channel: "Various", url: "https://www.youtube.com/results?search_query=gospel+piano+turnaround+tutorial" }
  ],
  "5.7": [
    { title: "Tag ending de 'Total Praise'", channel: "Richard Smallwood", url: "https://www.youtube.com/results?search_query=total+praise+richard+smallwood+tag+ending" }
  ],
  "7.4": [
    { title: "Gospel licks tutorial", channel: "Various", url: "https://www.youtube.com/results?search_query=gospel+piano+licks+tutorial" }
  ],
  "8.1": [
    { title: "Mahalia Jackson — Precious Lord", channel: "Mahalia Jackson", url: "https://www.youtube.com/results?search_query=mahalia+jackson+precious+lord" },
    { title: "James Cleveland gospel", channel: "James Cleveland", url: "https://www.youtube.com/results?search_query=james+cleveland+gospel+piano" }
  ],
  "8.2": [
    { title: "Kirk Franklin — Stomp", channel: "Kirk Franklin", url: "https://www.youtube.com/results?search_query=kirk+franklin+stomp" },
    { title: "Kirk Franklin — Imagine Me", channel: "Kirk Franklin", url: "https://www.youtube.com/results?search_query=kirk+franklin+imagine+me" }
  ],
  "8.3": [
    { title: "Hillsong — Oceans (piano)", channel: "Hillsong United", url: "https://www.youtube.com/results?search_query=hillsong+oceans+piano+tutorial" },
    { title: "Bethel — Reckless Love", channel: "Bethel Music", url: "https://www.youtube.com/results?search_query=bethel+reckless+love+piano" }
  ],
  "8.5": [
    { title: "Cory Henry — gospel chops", channel: "Cory Henry", url: "https://www.youtube.com/results?search_query=cory+henry+gospel+piano" },
    { title: "Robert Glasper trio", channel: "Robert Glasper", url: "https://www.youtube.com/results?search_query=robert+glasper+trio+piano" },
    { title: "Peter Martin Open Studio", channel: "Peter Martin", url: "https://www.youtube.com/results?search_query=peter+martin+open+studio+gospel" }
  ]
};

// Complete song repertoire — songs to learn organized by difficulty
const SONG_REPERTOIRE = {
  beginner: {
    label: "Débutant",
    description: "Morceaux simples pour commencer. Maîtrise-les avant de passer au niveau suivant.",
    songs: [
      {
        title: "Amazing Grace",
        artist: "Traditional",
        key: "G majeur",
        difficulty: 1,
        progression: "G → C → G → D → G",
        notes: "Le standard absolu. Joue avec des maj9 et m9, en triolets/swing. Parfait pour pratiquer le voicing gospel de base.",
        searchUrl: "https://www.youtube.com/results?search_query=amazing+grace+gospel+piano+tutorial"
      },
      {
        title: "Stand By Me",
        artist: "Ben E. King",
        key: "A majeur",
        difficulty: 1,
        progression: "A → F#m → D → E (1-6-4-5)",
        notes: "Progression pop/gospel ultra-classique. 12 mesures simples qui bouclent. Travaille ton groove main gauche.",
        searchUrl: "https://www.youtube.com/results?search_query=stand+by+me+gospel+piano+tutorial"
      },
      {
        title: "Lean On Me",
        artist: "Bill Withers",
        key: "C majeur",
        difficulty: 1,
        progression: "C → F → C → G (1-4-1-5)",
        notes: "Simple mais soul. Excellente intro au comping gospel/soul. Ajoute des maj9 pour le caractère gospel.",
        searchUrl: "https://www.youtube.com/results?search_query=lean+on+me+gospel+piano+tutorial"
      }
    ]
  },

  intermediate: {
    label: "Intermédiaire",
    description: "Plus de couleur, plus de passing chords, plus de groove. Tu commences à sonner pro.",
    songs: [
      {
        title: "Total Praise",
        artist: "Richard Smallwood",
        key: "Eb majeur",
        difficulty: 2,
        progression: "Eb → Bb/D → Cm → Cm/Bb → Abmaj7 → Eb/G → Fm7 → Bb7 → Eb",
        notes: "LE morceau gospel par excellence. Tag ending légendaire. Travaille les inversions et la basse descendante.",
        searchUrl: "https://www.youtube.com/results?search_query=total+praise+richard+smallwood+piano+tutorial"
      },
      {
        title: "I Smile",
        artist: "Kirk Franklin",
        key: "Ab majeur",
        difficulty: 2,
        progression: "Ab → Eb/G → Fm → Ab/Eb → Db → Bbm → Eb",
        notes: "Gospel contemporain. Beaucoup de slash chords et de groove syncopé. Bien pour pratiquer le 1-5-6-4 enrichi.",
        searchUrl: "https://www.youtube.com/results?search_query=kirk+franklin+i+smile+piano+tutorial"
      },
      {
        title: "Oh Happy Day",
        artist: "Edwin Hawkins Singers",
        key: "F majeur",
        difficulty: 2,
        progression: "F → Bb → C → F (avec passing dim et turnarounds)",
        notes: "Hymne joyeux universel. Excellent pour pratiquer le call-and-response et les fills entre les phrases.",
        searchUrl: "https://www.youtube.com/results?search_query=oh+happy+day+gospel+piano+tutorial"
      },
      {
        title: "Way Maker",
        artist: "Sinach / Leeland",
        key: "E majeur",
        difficulty: 2,
        progression: "E → C#m → A → B (1-6-4-5)",
        notes: "Worship moderne. Travaille les voicings ouverts type sus2/add9 et le pulse 4/4 régulier.",
        searchUrl: "https://www.youtube.com/results?search_query=way+maker+piano+tutorial"
      }
    ]
  },

  advanced: {
    label: "Avancé",
    description: "Le niveau où tu peux improviser des solos. Harmonie complexe, rythmique fine.",
    songs: [
      {
        title: "Take Me To The King",
        artist: "Tamela Mann",
        key: "G majeur",
        difficulty: 3,
        progression: "G → Em7 → Am7 → D7sus → D7 + plein de passing chords",
        notes: "Ballade gospel moderne. Voicings riches, beaucoup de passing dim, modulation au pont. Du gros boulot.",
        searchUrl: "https://www.youtube.com/results?search_query=take+me+to+the+king+tamela+mann+piano+tutorial"
      },
      {
        title: "I Need You Now",
        artist: "Smokie Norful",
        key: "Bb majeur",
        difficulty: 3,
        progression: "Bb → Gm7 → Cm7 → F7 (avec extensions et altérations)",
        notes: "Gospel sophistiqué urbain. Tritone substitutions, voicings quartal. Travaille ton oreille harmonique.",
        searchUrl: "https://www.youtube.com/results?search_query=smokie+norful+i+need+you+now+piano+tutorial"
      },
      {
        title: "Lord I Need You",
        artist: "Matt Maher",
        key: "G majeur",
        difficulty: 3,
        progression: "G → D/F# → Em7 → C → G/B → Am7 → D",
        notes: "Worship + harmonie sophistiquée. Tag final puissant. Bon test pour ton voice leading.",
        searchUrl: "https://www.youtube.com/results?search_query=lord+i+need+you+matt+maher+piano+tutorial"
      },
      {
        title: "Reckless Love",
        artist: "Cory Asbury",
        key: "B majeur",
        difficulty: 3,
        progression: "B → F#/A# → G#m → E (1-5-6-4 en B)",
        notes: "Worship moderne tendance Bethel. Voicings ouverts, tempo médium. Apprends à jouer en tonalités à dièses.",
        searchUrl: "https://www.youtube.com/results?search_query=reckless+love+piano+tutorial"
      }
    ]
  },

  master: {
    label: "Maîtrise",
    description: "Le niveau Cory Henry. Improvisation libre, voicings extrêmes, polyrythmies.",
    songs: [
      {
        title: "Mercy Mercy Me (jazz/gospel arrangement)",
        artist: "Marvin Gaye / Cory Henry style",
        key: "A mineur",
        difficulty: 4,
        progression: "Am7 → Dm9 → Bm7b5 → E7alt (réharmonisations libres)",
        notes: "Réharmonisation jazz d'un classique soul. Pratique l'improvisation modale et les voicings altérés.",
        searchUrl: "https://www.youtube.com/results?search_query=mercy+mercy+me+jazz+piano+arrangement"
      },
      {
        title: "Naima (jazz standard) — version gospel",
        artist: "John Coltrane / arr. piano",
        key: "Ab majeur",
        difficulty: 4,
        progression: "Voicings sus suspended, pédales harmoniques",
        notes: "Pour comprendre comment le jazz et le gospel se rencontrent. Voicings quartal partout.",
        searchUrl: "https://www.youtube.com/results?search_query=naima+piano+arrangement"
      },
      {
        title: "Improvisation libre sur un drone",
        artist: "Style Cory Henry / Robert Glasper",
        key: "Au choix",
        difficulty: 4,
        progression: "1 accord ou 2 accords en boucle, tu improvises par-dessus",
        notes: "L'exercice ultime. Choisis Am9 ou Cmaj9, mets-le en boucle, et improvise pendant 10 min sans t'arrêter. Force-toi à varier les voicings, le rythme, les phrases.",
        searchUrl: "https://www.youtube.com/results?search_query=cory+henry+gospel+improvisation"
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSON_REFERENCES, SONG_REPERTOIRE };
}
