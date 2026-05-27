// ============================================================
// QUIZZES — questions de révision par leçon
// ============================================================

const LESSON_QUIZZES = {

  // === MODULE 1: Fondations ===
  "1.1": [
    {
      question: "Comment reconnaître la note DO sur le clavier?",
      options: [
        "La touche blanche juste avant les 3 touches noires groupées",
        "La touche blanche juste avant les 2 touches noires groupées",
        "La touche noire entre 2 blanches",
        "La dernière touche blanche du clavier"
      ],
      correctIdx: 1,
      explanation: "DO se trouve toujours juste avant le paquet de 2 touches noires. C'est le repère absolu du clavier."
    },
    {
      question: "Où se trouve la note FA?",
      options: ["Avant le paquet de 2 noires", "Après le paquet de 2 noires", "Avant le paquet de 3 noires", "Entre les 2 paquets de noires"],
      correctIdx: 2,
      explanation: "FA est la touche blanche juste avant le paquet de 3 noires. Avec DO (avant les 2 noires), tu as tes 2 repères absolus."
    }
  ],
  "1.2": [
    {
      question: "Combien de demi-tons entre DO et SOL?",
      options: ["5", "6", "7", "8"],
      correctIdx: 2,
      explanation: "DO → SOL = 7 demi-tons. C'est une quinte juste."
    },
    {
      question: "Combien de demi-tons entre MI et FA?",
      options: ["1 demi-ton", "2 demi-tons (1 ton)", "1 ton et demi", "Aucun"],
      correctIdx: 0,
      explanation: "MI → FA = 1 demi-ton! Pas de touche noire entre eux. Pareil pour SI → DO."
    },
    {
      question: "DO à RÉ, c'est combien?",
      options: ["1 demi-ton", "1 ton", "1 ton et demi", "2 tons"],
      correctIdx: 1,
      explanation: "DO → RÉ = 1 ton (2 demi-tons). DO# se trouve entre les deux."
    }
  ],
  "1.3": [
    {
      question: "Quelle est la formule de la gamme majeure?",
      options: ["T-T-T-DT-T-T-DT", "T-T-DT-T-T-T-DT", "T-DT-T-T-DT-T-T", "DT-T-T-T-DT-T-T"],
      correctIdx: 1,
      explanation: "T-T-DT-T-T-T-DT. Cette formule te donne la gamme majeure de n'importe quelle tonalité."
    },
    {
      question: "Quelle est la gamme de SOL majeur?",
      options: ["G-A-B-C-D-E-F-G", "G-A-Bb-C-D-E-F#-G", "G-A-B-C-D-E-F#-G", "G-A-B-C#-D-E-F#-G"],
      correctIdx: 2,
      explanation: "SOL majeur = G-A-B-C-D-E-F#-G. Un seul dièse (FA#)."
    },
    {
      question: "Quelle est la gamme de FA majeur?",
      options: ["F-G-A-B-C-D-E-F", "F-G-A-Bb-C-D-E-F", "F-G-Ab-Bb-C-D-Eb-F", "F-G-A-B-C-D-Eb-F"],
      correctIdx: 1,
      explanation: "FA majeur = F-G-A-Bb-C-D-E-F. Un seul bémol (SIb)."
    }
  ],
  "1.4": [
    {
      question: "En DO majeur, quel est le degré V?",
      options: ["FA", "SOL", "LA", "SI"],
      correctIdx: 1,
      explanation: "V = 5e degré. En C: C(I)-D(II)-E(III)-F(IV)-G(V). Le SOL."
    },
    {
      question: "Que veut dire 'joue un 2-5-1'?",
      options: ["Joue 2 fois puis 5 fois puis 1 fois", "Joue les accords du 2e, 5e et 1er degré", "Joue à 251 BPM", "Joue les notes 2, 5 et 1"],
      correctIdx: 1,
      explanation: "2-5-1 = accord du 2e → 5e → 1er degré. En C: Dm → G → C."
    },
    {
      question: "En FA majeur, quel est le degré II?",
      options: ["FA", "SOL", "LA", "SIb"],
      correctIdx: 1,
      explanation: "En F: F(I)-G(II)-A(III)-Bb(IV)-C(V). Le SOL est le II."
    }
  ],
  "1.5": [
    {
      question: "Formule d'une triade majeure?",
      options: ["1-3-5", "1-b3-5", "1-3-b5", "1-b3-b5"],
      correctIdx: 0,
      explanation: "Majeure = 1-3-5. Soit 4 demi-tons + 3 demi-tons."
    },
    {
      question: "Triade de RÉ majeur?",
      options: ["D-F-A", "D-F#-A", "D-F-Ab", "D-F#-A#"],
      correctIdx: 1,
      explanation: "D majeur = D-F#-A. Le F naturel donnerait du D mineur."
    },
    {
      question: "Formule d'une triade mineure?",
      options: ["1-3-5", "1-b3-5", "1-3-b5", "1-b3-b5"],
      correctIdx: 1,
      explanation: "Mineure = 1-b3-5. La 3e est abaissée d'un demi-ton."
    },
    {
      question: "Triade de MI mineur?",
      options: ["E-G-B", "E-G#-B", "E-Gb-Bb", "E-G-Bb"],
      correctIdx: 0,
      explanation: "Em = E-G-B. Le G naturel donne le caractère mineur."
    }
  ],
  "1.6": [
    {
      question: "Pattern de qualité des triades dans une gamme majeure?",
      options: ["M-M-m-M-M-m-°", "M-m-m-M-M-m-°", "M-m-M-m-M-m-°", "m-M-M-m-m-M-°"],
      correctIdx: 1,
      explanation: "Majeur-mineur-mineur-Majeur-Majeur-mineur-diminué. Universel."
    },
    {
      question: "En FA majeur, triade du IIIe degré?",
      options: ["Am", "Bb", "C", "Gm"],
      correctIdx: 0,
      explanation: "F majeur degré III = LA. Pattern M-m-m, donc mineure = Am."
    },
    {
      question: "Quel degré est diminué dans une gamme majeure?",
      options: ["I", "IV", "V", "VII"],
      correctIdx: 3,
      explanation: "Le VIIe est toujours diminué. En C: Bdim (B-D-F)."
    }
  ],
  "1.7": [
    {
      question: "Dans le cercle des quintes, sens horaire = ?",
      options: ["Tonalités à bémols", "Tonalités à dièses", "Que des majeurs", "Au hasard"],
      correctIdx: 1,
      explanation: "Sens horaire = +1 dièse à chaque pas. SOL (1#), RÉ (2#)..."
    },
    {
      question: "Relative mineure de DO majeur?",
      options: ["RÉ mineur", "MI mineur", "LA mineur", "SI mineur"],
      correctIdx: 2,
      explanation: "C majeur ↔ A mineur. Mêmes notes, centre différent."
    },
    {
      question: "Combien de bémols en MIb majeur?",
      options: ["1", "2", "3", "4"],
      correctIdx: 2,
      explanation: "Eb majeur = 3 bémols (Bb, Eb, Ab). Tonalité gospel par excellence."
    }
  ],

  // === MODULE 2: Accords ===
  "2.1": [
    {
      question: "Différence entre Cmaj7 et C7?",
      options: ["La 3e", "La 5e", "La 7e (majeure vs mineure)", "Aucune"],
      correctIdx: 2,
      explanation: "Cmaj7 = C-E-G-B (7e majeure). C7 = C-E-G-Bb (7e mineure, dominante)."
    },
    {
      question: "Formule de m7b5?",
      options: ["1-3-5-b7", "1-b3-5-b7", "1-b3-b5-b7", "1-b3-b5-7"],
      correctIdx: 2,
      explanation: "m7b5 (demi-diminué) = 1-b3-b5-b7. Utilisé sur le iim7b5 en mineur."
    },
    {
      question: "Accord 7 sur le degré V d'une gamme majeure?",
      options: ["maj7", "m7", "7 (dominante)", "m7b5"],
      correctIdx: 2,
      explanation: "Le V se joue dominante 7. En C: G7. Crée la tension qui résout sur I."
    }
  ],
  "2.2": [
    {
      question: "Qu'est-ce qu'une 9e?",
      options: ["La 2e note de la gamme jouée plus haut", "La 9e mesure", "Une note au hasard", "Une note altérée"],
      correctIdx: 0,
      explanation: "La 9e = 2e degré joué une octave plus haut. Sur Cmaj9, le D est la 9e."
    },
    {
      question: "Quel est Cmaj9?",
      options: ["C-E-G-B", "C-E-G-Bb-D", "C-E-G-B-D", "C-Eb-G-Bb-D"],
      correctIdx: 2,
      explanation: "Cmaj9 = 1-3-5-7-9 = C-E-G-B-D. L'accord gospel lumineux par excellence."
    }
  ],
  "2.4": [
    {
      question: "Que fait sus4?",
      options: ["Ajoute la 4e", "Remplace la 3e par la 4e", "Supprime la 5e", "Ajoute 4e et 7e"],
      correctIdx: 1,
      explanation: "Sus4 remplace la 3e par la 4e (1-4-5). Csus4 = C-F-G. Supprime majeur/mineur."
    }
  ],
  "2.5": [
    {
      question: "Différence entre Cadd9 et Cmaj9?",
      options: ["Aucune", "Cadd9 n'a pas de 7e, Cmaj9 oui", "Cadd9 a une 9e mineure", "Cmaj9 n'a pas de 9e"],
      correctIdx: 1,
      explanation: "Cadd9 = C-E-G-D (sans 7e). Cmaj9 = C-E-G-B-D (avec 7e majeure)."
    }
  ],
  "2.6": [
    {
      question: "Qu'est-ce qu'un G7b9?",
      options: ["G7 avec 9e diminuée (Ab)", "G7 avec 9e augmentée", "G7 sans 9e", "G mineur 7e"],
      correctIdx: 0,
      explanation: "G7b9 = G-B-D-F-Ab. La b9 ajoute une tension qui résout magnifiquement sur Cmaj9."
    }
  ],
  "2.7": [
    {
      question: "Comment lire C/E?",
      options: ["C divisé par E", "C majeur avec E à la basse", "C et E alternés", "C suivi de E"],
      correctIdx: 1,
      explanation: "C/E = accord C à la main droite, E à la basse (main gauche). Inversion."
    },
    {
      question: "Sur Eb/G, que joue la main gauche?",
      options: ["Eb", "G", "Bb", "L'accord entier"],
      correctIdx: 1,
      explanation: "La note APRÈS le / va TOUJOURS à la main gauche. Donc G."
    }
  ],
  "2.8": [
    {
      question: "Qu'est-ce qu'une 1ère inversion?",
      options: ["L'accord à l'envers", "La 3e à la basse", "La 5e à la basse", "La 7e à la basse"],
      correctIdx: 1,
      explanation: "1ère inversion = 3 à la basse. En C: E-G-C noté C/E."
    }
  ],

  // === MODULE 3: Voicings ===
  "3.1": [
    {
      question: "Règle des 2 mains du voicing pro?",
      options: ["Main G plein d'accords, main D mélodie", "Main G basse 1-2 notes, main D 4 notes colorées", "Les 2 mains pareil", "Main D la basse"],
      correctIdx: 1,
      explanation: "Main G = ancre (basse seule). Main D = couleur (4 notes max)."
    }
  ],
  "3.2": [
    {
      question: "Qu'est-ce qu'un voicing 'rootless'?",
      options: ["Sans la 3e", "Sans la 5e", "Sans la fondamentale à la main droite", "Inversé"],
      correctIdx: 2,
      explanation: "Rootless = pas de fondamentale à la main droite. Libère un doigt pour les couleurs."
    }
  ],
  "3.3": [
    {
      question: "Les 2 'guide tones' d'un accord?",
      options: ["1 et 5", "3 et 7", "5 et 9", "1 et 3"],
      correctIdx: 1,
      explanation: "3 et 7 = guide tones. La 3 dit majeur/mineur, la 7 dit le type d'accord."
    }
  ],
  "3.4": [
    {
      question: "Qu'est-ce que le voice leading?",
      options: ["Jouer fort la mélodie", "Mouvement minimal des voix entre accords", "Tout monter d'octave", "Jouer en arpèges"],
      correctIdx: 1,
      explanation: "Voice leading = chaque note bouge vers la plus proche dans l'accord suivant. Notes communes restent."
    }
  ],
  "3.7": [
    {
      question: "Le voicing 'gospel signature'?",
      options: ["Plein d'accords à 7 notes", "Triade fixe main D + basse mobile main G", "Mains qui jouent pareil", "Que des dominantes 7"],
      correctIdx: 1,
      explanation: "Triade simple main D + basse mobile main G qui crée des slash chords. Secret de Peter Martin & co."
    }
  ],

  // === MODULE 4: Progressions ===
  "4.1": [
    {
      question: "Le 2-5-1 en C?",
      options: ["C → G → F", "Dm → G → C", "C → F → G", "Em → G → C"],
      correctIdx: 1,
      explanation: "2-5-1 en C = Dm → G → C. La progression universelle gospel/jazz."
    },
    {
      question: "Pourquoi le 2-5-1 marche-t-il si bien?",
      options: ["Accords faciles", "Tension/résolution: ii prépare, V tend, I résout", "Convention", "3 accords"],
      correctIdx: 1,
      explanation: "Basse descend en quintes (D→G→C). Logique tension/résolution irrésistible."
    }
  ],
  "4.2": [
    {
      question: "Le 1-6-2-5 en C?",
      options: ["C → G → Dm → F", "C → Am → Dm → G", "C → F → G → Am", "C → Em → F → G"],
      correctIdx: 1,
      explanation: "C → Am → Dm → G. Boucle infinie classique."
    }
  ],
  "4.5": [
    {
      question: "Effet émotionnel de IV → iv?",
      options: ["Joie", "Couleur 'pleurante' soul/gospel", "Tension max", "Aucun effet"],
      correctIdx: 1,
      explanation: "IV→iv (F→Fm en C) introduit le b6 qui descend vers le 5. LE mouvement émotionnel gospel."
    }
  ],
  "4.6": [
    {
      question: "Qu'est-ce qu'une dominante secondaire?",
      options: ["Dominante moins forte", "Un accord 7 qui résout vers autre que I", "2e dominante", "Dominante en mineur"],
      correctIdx: 1,
      explanation: "V/x. Ex: A7 = V de Dm. Tire vers Dm au lieu de la tonique."
    }
  ],

  // === MODULE 5: Passing Chords ===
  "5.2": [
    {
      question: "Passing chord entre Cmaj9 et Dm9?",
      options: ["Em7", "C#dim7", "Bm7b5", "F#dim7"],
      correctIdx: 1,
      explanation: "C#dim7 entre 2 accords distants d'un ton. Résout chromatiquement vers Dm9."
    }
  ],
  "5.3": [
    {
      question: "Qu'est-ce qu'une tritone substitution?",
      options: ["Remplacer 3e par 4e", "Remplacer V7 par bII7", "Jouer à 3 tons d'écart", "Substituer mineur par majeur"],
      correctIdx: 1,
      explanation: "Tritone sub = V7 → bII7. En C: G7 → Db7. Mêmes guide tones, descente chromatique jazzy."
    }
  ],

  // === MODULE 6: Rythmique ===
  "6.1": [
    {
      question: "Le 'backbeat' gospel tombe sur quels temps?",
      options: ["1 et 3", "2 et 4", "Tous les temps", "Que le 1"],
      correctIdx: 1,
      explanation: "Backbeat = 2 et 4. C'est là qu'on claque les mains à l'église."
    }
  ],
  "6.4": [
    {
      question: "Comment se jouent les croches en gospel?",
      options: ["Binaires (égales)", "Swing/triolets (longue-courte)", "Pareilles", "Accent sur la 2e"],
      correctIdx: 1,
      explanation: "Gospel = swing. Croches ♪♪ jouées avec rapport 2:1. Balancement caractéristique."
    }
  ],

  // === MODULE 7: Improvisation ===
  "7.1": [
    {
      question: "Pentatonique majeure de DO?",
      options: ["C-D-E-F-G", "C-D-E-G-A", "C-D-E-F-G-A-B", "C-Eb-F-G-Bb"],
      correctIdx: 1,
      explanation: "Penta majeure C = C-D-E-G-A. Gamme majeure sans la 4 et la 7."
    }
  ],
  "7.2": [
    {
      question: "Relation penta majeure C / penta mineure A?",
      options: ["Aucune", "Mêmes notes (C-D-E-G-A = A-C-D-E-G)", "L'une majeur, l'autre mineur", "5 vs 6 notes"],
      correctIdx: 1,
      explanation: "Mêmes notes, centre différent. La penta mineure A sonne 'plus soul' sur les mêmes accords en C."
    }
  ],
  "7.3": [
    {
      question: "Qu'ajoute-t-on à la penta mineure pour avoir la gamme blues?",
      options: ["7e majeure", "Note bleue (b5)", "2e", "3e majeure"],
      correctIdx: 1,
      explanation: "Gamme blues = penta mineure + b5. En C: C-Eb-F-F#-G-Bb. Le F# crée la couleur blues."
    }
  ],
  "7.5": [
    {
      question: "Sur Dm7 dans tonalité de C, quel mode?",
      options: ["Ionien", "Dorien", "Phrygien", "Mixolydien"],
      correctIdx: 1,
      explanation: "Dorien = gamme majeure démarrée sur la 2e. Dorien de D sur Dm7."
    },
    {
      question: "Sur G7 dans tonalité de C, quel mode?",
      options: ["Ionien", "Dorien", "Mixolydien", "Lydien"],
      correctIdx: 2,
      explanation: "Mixolydien = gamme majeure démarrée sur la 5e. LA gamme des dominantes 7."
    }
  ],

  // === MODULE 8: Style ===
  "8.1": [
    {
      question: "Caractéristique du gospel traditionnel?",
      options: ["Voicings jazz complexes", "Simplicité + soul, maj7 et m7", "Tempo très rapide", "Pas de basse main G"],
      correctIdx: 1,
      explanation: "Simplicité harmonique + intensité émotionnelle. Voicings maj7/m7, tempo modéré, swing."
    }
  ],
  "8.3": [
    {
      question: "Signature du worship moderne (Hillsong)?",
      options: ["Harmonie jazz complexe", "Voicings ouverts, sus2/add9, 4/4 binaire", "Tonalités à bémols", "Tempo lent uniquement"],
      correctIdx: 1,
      explanation: "Worship = simplicité, voicings ouverts, rythme rock 4/4 binaire (pas swing)."
    }
  ],

  // === MODULE 9: Slash Chords ===
  "9.1": [
    {
      question: "Sur F/A, que joue la main gauche?",
      options: ["F", "A", "C", "Tout"],
      correctIdx: 1,
      explanation: "Note APRÈS le / = main gauche. F/A = main G joue A, main D joue F-A-C."
    },
    {
      question: "Différence entre inversion et slash composé?",
      options: ["Aucune", "Inversion: basse dans l'accord. Composé: basse étrangère", "Inversion en mineur", "Inversion = main D"],
      correctIdx: 1,
      explanation: "Inversion: basse appartient à l'accord. Composé: basse étrangère (ex: Am/G = G n'est pas dans Am)."
    }
  ],
  "9.2": [
    {
      question: "Slash chord le plus utilisé en C majeur?",
      options: ["C/E", "F/A", "G/B", "Am/C"],
      correctIdx: 2,
      explanation: "G/B. Permet basse de descendre C→B avant d'aller à Am. Hyper utilisé en ballades."
    }
  ],
  "9.5": [
    {
      question: "Le truc des lignes de basse descendantes?",
      options: ["Tout monter d'octave", "Main D stable, main G descend chromatiquement", "Arpèges", "Doubler la mélodie"],
      correctIdx: 1,
      explanation: "Main D voicings stables, main G descend pas à pas. Effet 'pro' instantané."
    }
  ],
  "9.7": [
    {
      question: "Qu'est-ce qu'une pédale de basse?",
      options: ["Pédale du piano", "Note de basse tenue pendant que les accords changent", "Basse qui descend chromatiquement", "Accord à 7 notes"],
      correctIdx: 1,
      explanation: "Pédale = basse FIXE pendant que les accords bougent. Crée stabilité méditative."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LESSON_QUIZZES;
}
