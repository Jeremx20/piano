// ============================================================
// GOSPEL PIANO BIBLE — Données du cours
// 50+ leçons structurées en 8 modules progressifs
// ============================================================

const COURSE_DATA = {
  title: "Gospel Piano Bible",
  subtitle: "Le parcours complet — du débutant au pianiste gospel accompli",
  author: "Coach Claude × Jeremie",

  modules: [
    // ==========================================================
    // MODULE 1 — LES FONDATIONS
    // ==========================================================
    {
      id: 1,
      title: "Les Fondations",
      subtitle: "Comprendre la matière première du gospel",
      icon: "🎹",
      color: "#7c3aed",
      description: "Avant de jouer du gospel, il faut maîtriser l'alphabet musical. Ce module pose les bases théoriques sans lesquelles rien ne tient.",
      lessons: [
        {
          id: "1.1",
          title: "L'anatomie du clavier",
          duration: "20 min",
          objective: "Reconnaître instantanément n'importe quelle note au piano.",
          theory: `Le piano est organisé en motifs de **12 touches qui se répètent** (7 blanches + 5 noires). La note de référence absolue est le **DO central** (C4), situé près du logo du piano.

Les touches noires sont groupées en **paquets de 2 et de 3**:
- Avant le paquet de 2 noires: **DO**
- Avant le paquet de 3 noires: **FA**

À partir de ces deux repères, tu peux nommer toutes les autres notes.`,
          exercise: `**Exercice (5 min):** Yeux fermés, pose ton doigt au hasard sur le clavier. Ouvre les yeux et nomme la note en 2 secondes max. Recommence 30 fois.`,
          keyTakeaway: "DO = avant 2 noires. FA = avant 3 noires. Le reste découle."
        },
        {
          id: "1.2",
          title: "Demi-tons et tons",
          duration: "15 min",
          objective: "Mesurer les distances entre les notes — base absolue de toute la théorie.",
          theory: `Un **demi-ton** = la distance entre deux touches **adjacentes** (peu importe blanche ou noire).
Un **ton** = 2 demi-tons.

Exemples:
- DO → DO# = 1 demi-ton
- DO → RÉ = 1 ton (= 2 demi-tons)
- MI → FA = 1 demi-ton (pas de touche noire entre eux!)
- SI → DO = 1 demi-ton (pas de touche noire entre eux!)

⚠️ **Pièges à mémoriser:** entre MI-FA et SI-DO, il n'y a **pas** de touche noire. C'est juste 1 demi-ton.`,
          exercise: `Compte les demi-tons entre: DO→SOL, FA→LA, MI→SI. Réponses: 7, 4, 7.`,
          keyTakeaway: "Tout intervalle musical = un nombre de demi-tons. Maîtriser ça = maîtriser la théorie."
        },
        {
          id: "1.3",
          title: "La gamme majeure — LA formule",
          duration: "25 min",
          objective: "Construire n'importe quelle gamme majeure dans les 12 tonalités.",
          theory: `La gamme majeure suit **toujours** ce motif de tons (T) et demi-tons (DT):

**T - T - DT - T - T - T - DT**

Exemple en DO majeur:
- DO → (T) → RÉ → (T) → MI → (DT) → FA → (T) → SOL → (T) → LA → (T) → SI → (DT) → DO

Résultat: **DO - RÉ - MI - FA - SOL - LA - SI** (que des touches blanches)

Applique la formule à n'importe quelle note de départ et tu obtiens sa gamme majeure.`,
          exercise: `Construis les gammes de **SOL**, **FA**, **RÉ**, **SIb** (Bb) majeur en appliquant la formule.

Réponses:
- SOL: G-A-B-C-D-E-F#-G
- FA: F-G-A-Bb-C-D-E-F
- RÉ: D-E-F#-G-A-B-C#-D
- SIb: Bb-C-D-Eb-F-G-A-Bb`,
          keyTakeaway: "T-T-DT-T-T-T-DT = la formule qui ouvre les 12 tonalités."
        },
        {
          id: "1.4",
          title: "Les degrés de la gamme",
          duration: "15 min",
          objective: "Penser en degrés plutôt qu'en notes — le langage universel du gospel.",
          theory: `Chaque note d'une gamme a un **numéro** (degré). On les note avec des chiffres romains.

En DO majeur:
| Degré | Note | Nom |
|-------|------|-----|
| I (1) | DO | Tonique |
| II (2) | RÉ | Sus-tonique |
| III (3) | MI | Médiante |
| IV (4) | FA | Sous-dominante |
| V (5) | SOL | Dominante |
| VI (6) | LA | Sus-dominante |
| VII (7) | SI | Sensible |

Les **degrés clés** du gospel: **I, II, IV, V, VI**.

Quand un musicien dit "joue un 2-5-1", ça veut dire "joue l'accord du 2e degré, puis du 5e, puis du 1er" — dans n'importe quelle tonalité.`,
          exercise: `En FA majeur, quels sont les degrés I, II, V?

Réponse: I=FA, II=SOL, V=DO.`,
          keyTakeaway: "Les degrés permettent de transposer instantanément une progression dans n'importe quelle tonalité."
        },
        {
          id: "1.5",
          title: "Les triades — l'ADN de l'accord",
          duration: "20 min",
          objective: "Construire les 3 types de triades de base (majeur, mineur, diminué).",
          theory: `Une **triade** = un accord de 3 notes empilées par tierces (1-3-5).

**Triade majeure (1-3-5):** sonorité claire, joyeuse.
- DO majeur = C-E-G (4 demi-tons + 3 demi-tons)

**Triade mineure (1-b3-5):** sonorité sombre, mélancolique.
- DO mineur = C-Eb-G (3 demi-tons + 4 demi-tons)

**Triade diminuée (1-b3-b5):** sonorité tendue, instable.
- DO dim = C-Eb-Gb (3 demi-tons + 3 demi-tons)

🎯 **Astuce de fou:** Majeur = "3 puis 4" (en demi-tons). Mineur = "4 puis 3". Tu peux construire n'importe quel accord sans gamme.`,
          exercise: `Construis: Ré majeur, Mi mineur, Fa majeur, Sol mineur.

Réponses: D-F#-A, E-G-B, F-A-C, G-Bb-D.`,
          keyTakeaway: "Toute triade = empilement de 2 intervalles. La nature (majeur/mineur) dépend de l'ordre."
        },
        {
          id: "1.6",
          title: "Les triades dans la gamme",
          duration: "20 min",
          objective: "Identifier les 7 triades d'une tonalité — fondation des progressions.",
          theory: `Sur chaque degré d'une gamme majeure, on construit une triade en empilant 2 tierces dans la gamme.

En DO majeur:
| Degré | Triade | Type |
|-------|--------|------|
| I | C-E-G | **Majeur** |
| ii | D-F-A | **mineur** |
| iii | E-G-B | **mineur** |
| IV | F-A-C | **Majeur** |
| V | G-B-D | **Majeur** |
| vi | A-C-E | **mineur** |
| vii° | B-D-F | **diminué** |

📝 **Pattern à retenir:** Majeur-mineur-mineur-Majeur-Majeur-mineur-diminué.

Ce pattern est **valable dans toutes les tonalités**. Ce qui change, c'est juste les notes.`,
          exercise: `Cite les 7 triades de FA majeur sans regarder.

Réponse: F, Gm, Am, Bb, C, Dm, E°.`,
          keyTakeaway: "M-m-m-M-M-m-° — le pattern universel des triades dans une gamme majeure."
        },
        {
          id: "1.7",
          title: "Cercle des quintes",
          duration: "15 min",
          objective: "Visualiser toutes les tonalités et leurs relations.",
          theory: `Imagine une **horloge à 12 positions**. Chaque position = une tonalité. C'est ça, le **cercle des quintes**.

**En haut: DO majeur** (0 dièse, 0 bémol — la tonalité "neutre").

**Sens horaire** (vers la droite): chaque pas ajoute **+1 dièse**.
- SOL (1#), RÉ (2#), LA (3#), MI (4#)...

**Sens anti-horaire** (vers la gauche): chaque pas ajoute **+1 bémol**.
- FA (1b), SIb (2b), MIb (3b), LAb (4b)...

**Pourquoi "quintes"?** Parce que chaque pas dans le sens horaire = monter d'une **quinte** (5 notes au-dessus).
- DO → SOL = 5 notes (do-ré-mi-fa-**sol**) ✓
- SOL → RÉ = 5 notes (sol-la-si-do-**ré**) ✓

**Au milieu de chaque tonalité majeure**, il y a sa **relative mineure** (la même gamme, démarrée sur une autre note).
- DO majeur ↔ LA mineur (mêmes notes)
- SOL majeur ↔ MI mineur
- FA majeur ↔ RÉ mineur

**Pourquoi c'est crucial en gospel:**

1. **Le 2-5-1 descend en quintes!** En C: Dm → G → C. Chaque accord est une quinte au-dessous du précédent. Toute progression 2-5-1 suit le cercle en sens anti-horaire. C'est pour ça que ça sonne "logique" à l'oreille.

2. **Modulations:** Si tu joues en C et tu veux changer de ton, va vers les voisines (G ou F). Elles partagent le plus de notes avec C, ça sonne fluide.

3. **Tonalités gospel les plus utilisées:** côté bémols → **C, F, Bb, Eb, Ab**. Côté dièses → **G, D, A**.

🎯 **Pas besoin de tout retenir tout de suite.** Reviens à cette leçon plus tard, quand tu auras avancé. Le cercle des quintes devient évident une fois que tu joues plusieurs progressions.`,
          exercise: `Regarde le cercle. Quelles sont les 2 tonalités voisines de **SOL majeur** (à droite et à gauche)?

Réponse: à droite (sens horaire) = RÉ majeur. À gauche (sens anti-horaire) = DO majeur. Et sa relative mineure au centre = MI mineur.`,
          keyTakeaway: "Cercle des quintes = horloge des 12 tonalités. Les voisines sonnent bien ensemble."
        }
      ]
    },

    // ==========================================================
    // MODULE 2 — LES ACCORDS GOSPEL
    // ==========================================================
    {
      id: 2,
      title: "Les Accords Gospel",
      subtitle: "Du triade nu aux voicings riches qui sonnent",
      icon: "🎨",
      color: "#0891b2",
      description: "Le gospel n'utilise quasiment jamais de triades sèches. Tu vas apprendre à enrichir tes accords avec 7e, 9e, 11e, 13e — la palette de couleurs du genre.",
      lessons: [
        {
          id: "2.1",
          title: "Les accords de 7e",
          duration: "25 min",
          objective: "Maîtriser les 4 types de 7e: maj7, m7, 7 (dom), m7b5.",
          theory: `On ajoute une 4e note (la 7e) à la triade. 4 types principaux:

**Cmaj7 (1-3-5-7):** majeur + 7e majeure = C-E-G-B → "rêveur"
**Cm7 (1-b3-5-b7):** mineur + 7e mineure = C-Eb-G-Bb → "soul"
**C7 (1-3-5-b7):** majeur + 7e mineure = C-E-G-Bb → "bluesy, dominante"
**Cm7b5 (1-b3-b5-b7):** demi-diminué = C-Eb-Gb-Bb → "tendu, jazz"

🎯 **Logique:** la 7e majeure est à **1 demi-ton** sous l'octave. La 7e mineure est à **2 demi-tons** sous l'octave.

**Application gospel:** Les progressions gospel utilisent **massivement** maj7 (I et IV) et m7 (ii, iii, vi). La dominante 7 (V) crée la tension qui résout sur le I.`,
          exercise: `Construis: Fmaj7, Dm7, G7, Bm7b5.

Réponses: F-A-C-E, D-F-A-C, G-B-D-F, B-D-F-A.`,
          keyTakeaway: "La 7e transforme la triade nue en accord coloré. C'est la première brique gospel."
        },
        {
          id: "2.2",
          title: "Les accords de 9e",
          duration: "25 min",
          objective: "Empiler la 9e pour obtenir des accords riches typés gospel.",
          theory: `La **9e** = la 2e note de la gamme, mais une octave plus haut. On l'ajoute par-dessus l'accord de 7e.

**Cmaj9 (1-3-5-7-9):** C-E-G-B-D → "ouvert, lumineux"
**Cm9 (1-b3-5-b7-9):** C-Eb-G-Bb-D → "lisse, jazzy"
**C9 (1-3-5-b7-9):** C-E-G-Bb-D → "funky, dominant"

🎯 **Le truc gospel:** Les pianistes gospel jouent **rarement** les triades nues. Quand tu vois un C écrit, mentalement, joue **Cmaj9** ou **Cadd9**. C'est pratiquement automatique dans le genre.`,
          exercise: `Construis: Ebmaj9, Bbmaj9, Fm9, G9.

Réponses: Eb-G-Bb-D-F, Bb-D-F-A-C, F-Ab-C-Eb-G, G-B-D-F-A.`,
          keyTakeaway: "La 9e = la couleur signature gospel. Toujours présente, jamais absente."
        },
        {
          id: "2.3",
          title: "Les accords de 11e et 13e",
          duration: "25 min",
          objective: "Comprendre les extensions ultimes — et pourquoi on n'utilise pas toutes les notes.",
          theory: `**11e** = 4e degré de la gamme, octave supérieure.
**13e** = 6e degré de la gamme, octave supérieure.

**C13 complet (1-3-5-b7-9-11-13):** C-E-G-Bb-D-F-A → 7 notes! Trop chargé pour 2 mains.

🎯 **Règle d'or:** dans la pratique, on ne joue **jamais** toutes les notes. On choisit les **notes essentielles** + 1 ou 2 **couleurs**.

**C13 en gospel (voicing pratique):**
- Main gauche: **C** (fondamentale)
- Main droite: **Bb - D - E - A** (b7, 9, 3, 13)

Note: on **jette** le 5 (G) et le 11 (F) — le 11 crée même une dissonance avec le 3 sur un dominant.

**Cm11 (1-b3-5-b7-9-11):** souvent utilisé en gospel — voicing typique:
- Main gauche: **C**
- Main droite: **Bb - D - F** (b7, 9, 11)`,
          exercise: `Construis le voicing gospel de **G13**.

Réponse: Main G = G. Main D = F (b7), A (9), B (3), E (13).`,
          keyTakeaway: "Les accords étendus ne se jouent pas en entier. On garde le squelette (3 + b7) + les couleurs choisies."
        },
        {
          id: "2.4",
          title: "Les accords sus (suspendus)",
          duration: "15 min",
          objective: "Créer la tension/respiration avec les sus2 et sus4.",
          theory: `Un accord **sus** remplace la 3e par une autre note — supprimant le caractère majeur/mineur, créant une **ambiguïté** typique du gospel moderne.

**Csus2 (1-2-5):** C-D-G → ouvert, planant
**Csus4 (1-4-5):** C-F-G → tendu, en attente de résolution

🎯 **Usage gospel:** le **sus4 → maj** est une résolution ultra-courante. Joue Gsus4 (G-C-D) puis G (G-B-D) — tu entends la tension/détente classique.

**Avec 7e:** Csus4 7 (1-4-5-b7) = C-F-G-Bb. Très utilisé sur le V degré en gospel ("Vsus → V → I").`,
          exercise: `Joue cette séquence en C: **Gsus4 → G7 → Cmaj7**. Sens la respiration?

Réponse: c'est le mouvement gospel "tension → résolution" par excellence.`,
          keyTakeaway: "Le sus = pause respiratoire avant la résolution. Indispensable en intro et en transitions."
        },
        {
          id: "2.5",
          title: "Les accords add (add9, add11)",
          duration: "15 min",
          objective: "Différencier add9 et 9, et utiliser add9 pour des voicings clairs.",
          theory: `**Différence cruciale:**
- **C9** = inclut la 7e (C-E-G-Bb-D)
- **Cadd9** = pas de 7e (C-E-G-D)

L'add9 est utilisé quand tu veux la **couleur 9** **sans** la dominante (b7). C'est plus "pop" et moins "jazz".

🎯 **Usage gospel:** souvent utilisé sur le **I** dans des chansons modernes type Hillsong, Kirk Franklin années 2000+. Sonne moins sophistiqué que maj9 mais plus accessible.`,
          exercise: `Joue successivement: C, Cadd9, Cmaj9. Quelles différences entends-tu?

Réponse: C = sec. Cadd9 = ajout de douceur. Cmaj9 = ajout de la sophistication (le B/7e).`,
          keyTakeaway: "add9 = 9 sans la 7. Pratique quand la 7 alourdit le mix."
        },
        {
          id: "2.6",
          title: "Les altérations (b5, #5, b9, #9, #11)",
          duration: "25 min",
          objective: "Introduire les notes altérées pour créer des accords ultra-jazzy.",
          theory: `Sur les **accords de dominante** (V), on peut altérer la 5 et la 9 pour augmenter la tension avant la résolution.

**G7b9 (1-3-5-b7-b9):** G-B-D-F-Ab → tension forte, résout sur Cm/C
**G7#9 (1-3-5-b7-#9):** G-B-D-F-A# → "Hendrix chord", funky
**G7#5 (1-3-#5-b7):** G-B-D#-F → augmenté, mystérieux
**G7b13 (1-3-5-b7-b13):** G-B-D-F-Eb → couleur mineur sur dominant

🎯 **Le secret gospel:** les pros remplacent souvent un **V7 simple** par un **V7alt** pour rendre la résolution plus dramatique.

Exemple:
- Version simple: Dm9 → G7 → Cmaj7
- Version gospel: Dm9 → **G7b9** → Cmaj7 (la b9 = Ab crée un demi-ton qui descend vers G sur Cmaj7)`,
          exercise: `Joue Dm9 → G7 → Cmaj7, puis Dm9 → G7b9 → Cmaj7. La différence?

Réponse: la version altérée a plus de "pull" vers la résolution.`,
          keyTakeaway: "Les altérations sur la dominante = épice. Petite dose, gros effet."
        },
        {
          id: "2.7",
          title: "Les slash chords (accords avec basse)",
          duration: "20 min",
          objective: "Lire et jouer les inversions notées Eb/G, C/E, etc.",
          theory: `**Notation:** ACCORD / NOTE-DE-BASSE

Exemple: **C/E** = accord de C majeur (C-E-G), mais joué avec **E à la basse** (main gauche).

**Pourquoi:** crée du **mouvement** dans la basse pendant que l'harmonie reste stable. C'est LA signature visuelle du gospel.

**Exemple du screenshot Peter Martin:**
- **Eb/G** = accord d'Eb à la main droite, **G** à la basse → mouvement ascendant
- **Eb/Bb** = accord d'Eb, **Bb** à la basse → 5e inversée
- **Cm/G** = accord de Cm, **G** à la basse → couleur planante

🎯 **Règle d'or:** la note après le slash va **toujours** à la main gauche.`,
          exercise: `Décris ce que tu joues sur **F/A** et **Bbmaj7/D**.

Réponses:
- F/A: main G = A, main D = F-A-C
- Bbmaj7/D: main G = D, main D = Bb-D-F-A`,
          keyTakeaway: "Slash = inversion = basse mobile = son gospel."
        },
        {
          id: "2.8",
          title: "Les inversions",
          duration: "20 min",
          objective: "Jouer un accord avec n'importe quelle note de l'accord en basse.",
          theory: `Un accord majeur (1-3-5) peut être joué dans 3 positions:

**Position fondamentale:** 1-3-5 (ex: C-E-G)
**1ère inversion:** 3-5-1 (ex: E-G-C) = C/E
**2e inversion:** 5-1-3 (ex: G-C-E) = C/G

Les inversions permettent de **rester proche** du clavier d'un accord à l'autre — **voice leading**.

Exemple: C → F → G
- Sans inversion: gros sauts. C(C-E-G) → F(F-A-C) → G(G-B-D)
- Avec inversion: pas de saut. C(C-E-G) → F/C(C-F-A) → G/B(B-D-G)

Les doigts bougent peu. **C'est ça le secret du jeu fluide.**`,
          exercise: `Joue C → F → G d'abord en position fondamentale, puis avec inversions (C-E-G → C-F-A → B-D-G). Ressens la différence.`,
          keyTakeaway: "Inversions = voicing intelligent = mouvement fluide. Indispensable."
        }
      ]
    },

    // ==========================================================
    // MODULE 3 — LES VOICINGS PROS
    // ==========================================================
    {
      id: 3,
      title: "Les Voicings Pros",
      subtitle: "Répartir les notes entre les 2 mains comme un pianiste de session",
      icon: "🎯",
      color: "#dc2626",
      description: "Le voicing, c'est l'art de choisir QUELLES notes jouer et OÙ. C'est ce qui sépare l'amateur du pro. Pas plus de notes — les bonnes notes.",
      lessons: [
        {
          id: "3.1",
          title: "La règle des 2 mains",
          duration: "20 min",
          objective: "Comprendre la division du travail entre main gauche (basse) et main droite (couleur).",
          theory: `**Main gauche = ancre.** Elle joue la **fondamentale** (ou la basse du slash chord) une octave grave. Souvent **1 ou 2 notes max**.

**Main droite = couleur.** Elle joue **4 notes max** choisies parmi 3, 5, 7, 9, 11, 13.

🎯 **Pourquoi:** si tu joues toutes les notes à la main droite, ça sonne empilé/dégueu. La basse à gauche libère la droite pour les harmonies.

**Cmaj9 pro:**
- Main G: **C** (seule)
- Main D: **E - G - B - D** (3-5-7-9)

**Cm9 pro:**
- Main G: **C**
- Main D: **Eb - G - Bb - D** (b3-5-b7-9)

**C13 pro:**
- Main G: **C**
- Main D: **Bb - D - E - A** (b7-9-3-13)`,
          exercise: `Joue **Fmaj9** en voicing pro: main G = F. Main D = A-C-E-G. Écoute la légèreté.`,
          keyTakeaway: "Main G = basse seule. Main D = 4 notes colorées. La règle d'or."
        },
        {
          id: "3.2",
          title: "Le voicing 'rootless'",
          duration: "20 min",
          objective: "Jouer sans la fondamentale à la main droite — le voicing des pros.",
          theory: `**Rootless** = sans la fondamentale dans la main droite (elle est déjà à la main gauche, donc inutile de la doubler).

**Cmaj9 rootless:**
- Main G: **C**
- Main D: **E - G - B - D** (pas de C!)

**Avantage:** la main droite a 4 doigts pour les couleurs (3-5-7-9 ou 3-7-9-13).

**Cmaj7 rootless minimaliste:**
- Main G: **C**
- Main D: **E - B** (juste 3 et 7 = "shell")

Ce voicing minimaliste s'appelle un **shell voicing**. Hyper utilisé en accompagnement pour ne pas surcharger le mix.`,
          exercise: `Joue Dm9 rootless: main G = D, main D = F-A-C-E. Puis simplifie en shell: main G = D, main D = F-C.`,
          keyTakeaway: "Rootless = main droite libérée de la fondamentale. Plus d'espace pour la couleur."
        },
        {
          id: "3.3",
          title: "Les guide tones (3 et 7)",
          duration: "20 min",
          objective: "Identifier les 2 notes qui définissent un accord — les 'guide tones'.",
          theory: `Les **guide tones** = les notes qui **définissent** l'accord:
- La **3e** dit si c'est majeur ou mineur
- La **7e** dit si c'est maj7, m7 ou 7 (dominant)

Toutes les autres notes (1, 5, 9, 11, 13) sont **décoratives**.

🎯 **Conséquence:** un duo guide tones + basse suffit à faire entendre l'accord!

**Cmaj7:** basse C + guide tones E (3) + B (7)
**C7:** basse C + guide tones E (3) + Bb (b7)
**Cm7:** basse C + guide tones Eb (b3) + Bb (b7)

**Utilité en gospel:** quand tu chantes par-dessus ou que tu accompagnes une voix, tu peux te contenter des guide tones pour ne pas étouffer.`,
          exercise: `Joue ces shell voicings: Dm7 (D / F-C), G7 (G / B-F), Cmaj7 (C / E-B). Écoute la progression 2-5-1 en minimaliste.`,
          keyTakeaway: "3 et 7 suffisent à dire l'accord. Tout le reste est bonus."
        },
        {
          id: "3.4",
          title: "Le voice leading",
          duration: "30 min",
          objective: "Faire bouger les doigts au minimum entre les accords — la marque du pro.",
          theory: `**Voice leading** = chaque note de la main droite se déplace vers la note **la plus proche** de l'accord suivant.

**Exemple sans voice leading (mauvais):**
- Dm9: D-F-A-C-E (5 notes)
- G13: G-B-D-F-A
- Cmaj9: C-E-G-B-D
→ Sauts énormes entre les accords

**Exemple AVEC voice leading (pro):**
- Dm9 rootless: F-A-C-E (à main droite)
- G13 rootless: F-A-B-E (seul le C → B bouge!)
- Cmaj9 rootless: E-G-B-D (le F→E, A→G, E→D bougent d'un ton)

🎯 **Les doigts bougent à peine. C'est ÇA qui sonne pro.**

**Règle:** entre 2 accords, identifie les **notes communes** (elles restent) et les **notes qui changent** (elles vont à la plus proche).`,
          exercise: `Joue le 2-5-1 en C avec voice leading: F-A-C-E → F-A-B-E → E-G-B-D. Sens le glissement.`,
          keyTakeaway: "Voice leading = mouvement minimal = son fluide. Vise toujours le plus court chemin."
        },
        {
          id: "3.5",
          title: "Le voicing en 4e",
          duration: "20 min",
          objective: "Empiler des quartes pour un son modal/contemporain.",
          theory: `Au lieu d'empiler des **tierces** (1-3-5), on empile des **quartes** (1-4-7).

**Quartal voicing sur C:**
- C - F - Bb - Eb - Ab

Sonorité: **ouverte, planante, contemporaine**. C'est le voicing des pianistes modernes (McCoy Tyner, Cory Henry).

**Application gospel moderne:**
Sur un Cm7, joue: main G = C, main D = **G - C - F - Bb** (quartes empilées).

Ça donne un son très "Kirk Franklin moderne", très "Sunday Service".

🎯 **Truc:** ces voicings sonnent mieux sur **mineurs** et **sus** que sur majeurs purs.`,
          exercise: `Joue Cm7 en voicing quartal (C / G-C-F-Bb) vs voicing tertiel (C / Eb-G-Bb-D). Compare.`,
          keyTakeaway: "Quartes = son moderne, ouvert, planant. Idéal sur les m7 et sus."
        },
        {
          id: "3.6",
          title: "Le 'spread voicing'",
          duration: "20 min",
          objective: "Étirer les accords sur 2 octaves pour un son ample/cinématique.",
          theory: `**Spread voicing** = espacer les notes pour créer de la résonance.

Au lieu de jouer Cmaj9 serré (C-E-G-B-D dans une octave), on l'étire:
- Main G: **C** (grave) + **G** (5e, octave au-dessus)
- Main D: **E - B - D** (au-dessus du do central)

Effet: **massif, ample, gospel d'église**. C'est typiquement ce qu'on entend dans les intros de morceaux puissants.

🎯 **Astuce:** ajouter la **5e à la main gauche** ('power bass') double la puissance de l'accord.`,
          exercise: `Joue Fmaj9 spread: main G = F + C (5e). Main D = A-E-G.`,
          keyTakeaway: "Espacer les notes = amplifier l'impact. Parfait pour les moments forts."
        },
        {
          id: "3.7",
          title: "Le voicing 'gospel signature'",
          duration: "25 min",
          objective: "Maîtriser LE voicing iconique du gospel: triade main droite + basse mobile main gauche.",
          theory: `Le voicing qu'on voit dans le screenshot de Peter Martin et chez 90% des pianistes gospel.

**Recette:**
- Main droite: **triade simple** (3 notes seulement!)
- Main gauche: **basse mobile** qui crée le slash chord

**Exemple en Eb majeur:**
- Main D fixe: **Eb-G-Bb** (triade Eb)
- Main G qui bouge: **G → Bb → C → Eb → F → G** (montée)

Tu obtiens: Eb/G → Eb/Bb → Eb/C (= Cm) → Eb → Eb/F → Eb/G

**C'est ça que joue Peter Martin sur le screenshot!**

🎯 La beauté: la main droite reste **immobile** (mêmes 3 notes), c'est la main gauche qui crée toute la richesse harmonique.`,
          exercise: `En Bb majeur: main D = Bb-D-F (fixe). Main G monte: F → Ab → Bb → D → Eb → F.`,
          keyTakeaway: "Triade droite + basse mobile gauche = LE son gospel. Simple à exécuter, sonne épique."
        }
      ]
    },

    // ==========================================================
    // MODULE 4 — LES PROGRESSIONS
    // ==========================================================
    {
      id: 4,
      title: "Les Progressions",
      subtitle: "Les enchaînements d'accords qui font le gospel",
      icon: "🔗",
      color: "#ea580c",
      description: "Le gospel repose sur quelques progressions clés. Une fois que tu les connais, tu peux jouer 80% du répertoire à l'oreille.",
      lessons: [
        {
          id: "4.1",
          title: "La progression 2-5-1",
          duration: "30 min",
          objective: "Maîtriser LA progression universelle: ii-V-I.",
          theory: `**Le 2-5-1 = le pilier absolu du gospel/jazz/R&B.**

En C: **Dm7 → G7 → Cmaj7** (degrés ii-V-I)

Mais en gospel, on enrichit:
**Dm9 → G13 → Cmaj9** ou **Dm11 → G7alt → Cmaj9**

**Pourquoi ça marche:** chaque accord crée une **tension** qui se résout sur le suivant.
- ii (Dm9) = "préparation"
- V (G13) = "tension max"  
- I (Cmaj9) = "résolution"

**Voicing rootless avec voice leading:**
- Dm9: F-A-C-E
- G13: F-A-B-E (1 note bouge: C→B)
- Cmaj9: E-G-B-D (toutes les notes glissent d'un ton)

Joue ça. C'est ça le son.`,
          exercise: `Joue le 2-5-1 dans 4 tonalités: C, F, Bb, G.
- C: Dm9 → G13 → Cmaj9
- F: Gm9 → C13 → Fmaj9
- Bb: Cm9 → F13 → Bbmaj9
- G: Am9 → D13 → Gmaj9`,
          keyTakeaway: "Le 2-5-1 = la formule magique. À maîtriser dans les 12 tonalités."
        },
        {
          id: "4.2",
          title: "La progression 1-6-2-5 (turnaround)",
          duration: "25 min",
          objective: "Étendre le 2-5-1 en boucle infinie de 4 accords.",
          theory: `**1-6-2-5** = la progression cyclique du gospel/jazz.

En C: **Cmaj9 → Am9 → Dm9 → G13** → (retour à Cmaj9)

**Utilité:** crée une boucle harmonique qui peut tourner indéfiniment. Idéal pour:
- Les intros qui répètent
- Les **vamps** (sections improvisées)
- Les outros qui s'estompent

**Variante gospel typique:** remplacer le Am9 par un **A7** (dominant secondaire vers Dm) → tension supplémentaire.

Cmaj9 → **A7b9** → Dm9 → G13`,
          exercise: `Joue cette boucle 8 fois en C: Cmaj9 → Am9 → Dm9 → G13. Puis 8 fois avec A7b9 à la place de Am9.`,
          keyTakeaway: "Le 1-6-2-5 = la machine à vamps. Boucle gospel par excellence."
        },
        {
          id: "4.3",
          title: "La progression 1-4-5 (gospel/blues)",
          duration: "20 min",
          objective: "Maîtriser la base traditionnelle gospel: I-IV-V.",
          theory: `**1-4-5** = la progression historique du gospel/blues.

En C: **C → F → G → C**

**Version gospel enrichie:**
- C → **Cmaj9**
- F → **Fmaj9** ou **F/A**
- G → **G13** ou **Gsus4**

**Application typique:** intros de morceaux traditionnels comme "Amazing Grace", "Oh Happy Day".

🎯 **Astuce voicing:** garde la **note commune C** dans tous les accords pour fluidité:
- Cmaj9 (C dans la basse)
- Fmaj7 (C = 5e)
- G13 (C = 4e, suspendue)`,
          exercise: `Joue I-IV-V en F: Fmaj9 → Bbmaj9 → C13 → Fmaj9.`,
          keyTakeaway: "1-4-5 = ADN du gospel traditionnel. Simple mais puissant."
        },
        {
          id: "4.4",
          title: "La progression 1-5-6-4 (pop gospel)",
          duration: "20 min",
          objective: "Apprendre la progression de millions de chansons modernes.",
          theory: `**1-5-6-4** = la progression de **"Don't Stop Believin'"**, mais aussi de tonnes de morceaux gospel moderne.

En C: **C → G → Am → F**

**Version gospel:**
- Cmaj9 → G/B → Am9 → Fmaj9

🎯 **Astuce gospel:** utiliser **G/B** au lieu de G crée une **basse qui descend** (C → B → A → F). C'est très "Hillsong/Kirk Franklin moderne".

**Pattern de basse à mémoriser:** C - B - A - F (descend chromatiquement puis saute).`,
          exercise: `Joue en G: Gmaj9 → D/F# → Em9 → Cmaj9. Note la basse: G - F# - E - C.`,
          keyTakeaway: "1-5-6-4 avec inversion sur le 5 = le son gospel/pop moderne."
        },
        {
          id: "4.5",
          title: "Le mouvement IV → iv (mineurisation)",
          duration: "20 min",
          objective: "Utiliser le truc gospel le plus émotionnel: passer du IV majeur au IV mineur.",
          theory: `**Mouvement IV → iv** = passer de l'accord IV majeur à sa version mineure.

En C: **F (IV) → Fm (iv) → C (I)**

**Pourquoi ça déchire:** la b6 de la gamme (Ab dans Fm) crée une **note pleurante** qui résout magnifiquement sur le I.

**Version gospel enrichie:**
- Fmaj9 → **Fm9** → Cmaj9
- Voicings: F-A-C-E-G → F-Ab-C-Eb-G → E-G-B-D

🎯 **Le truc émotionnel:** le **Ab** qui descend vers le **G** (5e de C) sur la résolution. C'est ça qui te fait pleurer en église.

**Exemples célèbres:** intros de chansons gospel/soul = quasi systématiquement ce mouvement.`,
          exercise: `Joue Fmaj9 → Fm9 → Cmaj9 lentement, plusieurs fois. Médite sur le passage Ab → G.`,
          keyTakeaway: "IV → iv → I = LE mouvement émotionnel gospel. Réserve-le aux moments forts."
        },
        {
          id: "4.6",
          title: "Les dominantes secondaires",
          duration: "30 min",
          objective: "Ajouter des accords de tension entre les degrés diatoniques.",
          theory: `**Dominante secondaire** = un accord 7 qui **résout** vers un degré autre que I.

Notation: **V/x** ("5 de x").

**Exemple en C:** au lieu de Cmaj9 → Am9, joue **Cmaj9 → E7 → Am9**.
- E7 = V de Am (sa dominante)
- Crée une tension forte qui "tire" vers Am

**Applications gospel courantes:**
- **V/ii** (= III7) → fait tendre vers ii (ex: Cmaj9 → A7 → Dm9)
- **V/V** (= II7) → fait tendre vers V (ex: Cmaj9 → D7 → G7)
- **V/vi** (= III7) → fait tendre vers vi (ex: Cmaj9 → E7 → Am9)

🎯 **Astuce gospel:** quasi tous les pianistes gospel ajoutent **V/ii** dans leurs progressions. Ex: C → A7 → Dm → G → C.`,
          exercise: `Joue: Cmaj9 → A7b9 → Dm9 → G13 → Cmaj9. Note la tension supplémentaire du A7b9.`,
          keyTakeaway: "Dominantes secondaires = épices entre les accords diatoniques. Crée du chemin."
        },
        {
          id: "4.7",
          title: "Le 'gospel turnaround'",
          duration: "25 min",
          objective: "Maîtriser LE turnaround de fin de phrase typique du gospel.",
          theory: `Un **turnaround** = une mini-progression qui ramène au I.

**Turnaround gospel classique en C:**
**Cmaj9 → C7 → Fmaj9 → Fm9 → Cmaj9/E → A7 → Dm9 → G13 → Cmaj9**

Décomposé:
1. Cmaj9 → C7 (transforme I en V de IV)
2. C7 → Fmaj9 (résolution sur IV)
3. Fmaj9 → Fm9 (mineurisation émotionnelle)
4. Fm9 → Cmaj9/E (résolution + inversion = basse descend)
5. Cmaj9/E → A7 (V de Dm)
6. A7 → Dm9 (résolution ii)
7. Dm9 → G13 (préparation V)
8. G13 → Cmaj9 (résolution finale!)

🎯 C'est dense, mais c'est ça qu'on entend à la fin des chansons gospel.`,
          exercise: `Apprends cette progression par cœur en C, ralenti. Joue chaque accord 1 mesure.`,
          keyTakeaway: "Le turnaround gospel = chaîne de résolutions. Le 'finale' typique."
        }
      ]
    },

    // ==========================================================
    // MODULE 5 — LES PASSING CHORDS
    // ==========================================================
    {
      id: 5,
      title: "Les Passing Chords",
      subtitle: "L'art du remplissage — ce qui transforme un pianiste en pianiste GOSPEL",
      icon: "✨",
      color: "#16a34a",
      description: "Entre 2 accords, il y a de l'espace. Les passing chords remplissent cet espace avec des accords de passage. C'est LE truc qui rend Peter Martin si juicy.",
      lessons: [
        {
          id: "5.1",
          title: "Le concept du passing chord",
          duration: "20 min",
          objective: "Comprendre ce qu'est un passing chord et pourquoi il est gospel.",
          theory: `Un **passing chord** = un accord placé **entre 2 accords principaux** pour faire la transition.

**Comparaison:**
- **Sans passing:** Cmaj9 → Dm9 (saut direct)
- **Avec passing:** Cmaj9 → **C#dim7** → Dm9 (passe par le demi-ton)

**Pourquoi gospel:** le passing chord crée un **mouvement chromatique** (par demi-tons) qui sonne ultra fluide et "soul".

🎯 **Règle générale:** un passing chord se place sur un temps faible (en croches, en triolets) et résout immédiatement.`,
          exercise: `Joue Cmaj9 → Dm9, puis Cmaj9 → C#dim7 → Dm9. Compare l'effet.`,
          keyTakeaway: "Passing chord = pont chromatique entre 2 accords. Crée du mouvement."
        },
        {
          id: "5.2",
          title: "Les accords diminués comme passing",
          duration: "30 min",
          objective: "Utiliser les dim7 pour relier 2 accords distants d'un ton.",
          theory: `**L'accord diminué** (dim7) est PARFAIT comme passing chord.

**Recette:** entre 2 accords distants d'**1 ton**, intercale un **dim7** sur la note intermédiaire.

**Exemples en C:**
- Cmaj9 → **C#dim7** → Dm9
- Dm9 → **D#dim7** → Em9
- Fmaj9 → **F#dim7** → G7
- Em9 → **Ebdim7** → Dm9 (descend!)

🎯 **Pourquoi le dim7:** il contient des notes qui résolvent toutes par demi-ton vers l'accord cible. Tension max, résolution immédiate.

**Voicing typique de C#dim7:**
- Main G: C#
- Main D: E - G - Bb (= empilement de tierces mineures)`,
          exercise: `Joue: Cmaj9 → C#dim7 → Dm9 → D#dim7 → Em9 → Fmaj9. Sens la montée chromatique de la basse: C-C#-D-D#-E-F.`,
          keyTakeaway: "Dim7 entre 2 accords espacés d'1 ton = le passing chord le plus utilisé en gospel."
        },
        {
          id: "5.3",
          title: "Le 'tritone substitution'",
          duration: "30 min",
          objective: "Remplacer un V7 par son équivalent à un triton de distance.",
          theory: `**Tritone substitution** = remplacer **V7** par **bII7**.

**Tonalité de C:**
- V = G7 (G-B-D-F)
- bII = Db7 (Db-F-Ab-Cb=B)

Surprise: G7 et Db7 partagent les **mêmes guide tones** (B et F)! On peut donc les **interchanger**.

**Application gospel:**
- Standard: Dm9 → G7 → Cmaj9
- Tritone: Dm9 → **Db7** → Cmaj9

🎯 La basse descend chromatiquement: D → Db → C. Effet ultra-jazzy/gospel sophistiqué.

**Variante mixte:** Dm9 → G7 → Db7 → Cmaj9 (double dominant, super tendu).`,
          exercise: `Joue Dm9 → Db9 → Cmaj9 lentement. Écoute la basse chromatique descendante.`,
          keyTakeaway: "Tritone sub = V7 remplacé par bII7. Crée une descente chromatique gospel."
        },
        {
          id: "5.4",
          title: "Le 'backdoor' (bVII7)",
          duration: "25 min",
          objective: "Utiliser le bVII7 comme dominante alternative.",
          theory: `**Backdoor progression:** au lieu de résoudre via V7, on résout via **bVII7**.

**En C:**
- Standard: G7 → Cmaj9
- Backdoor: **Bb7** → Cmaj9

🎯 **Pourquoi 'backdoor':** Bb7 = V7 de Eb (le relatif majeur de Cm). Donc Bb7 'voudrait' aller à Eb, mais on le détourne vers C. Surprise!

**Application gospel:** crée une couleur "soul/funk" très Stevie Wonder.

**Variante typique:** Fm7 → Bb7 → Cmaj9 (= ii-V de Eb qui résout sur C).`,
          exercise: `Joue Fmaj9 → Fm9 → Bb7 → Cmaj9. Réalise comment Fm9-Bb7 ressemble à un 2-5 de Eb, mais résout sur C.`,
          keyTakeaway: "bVII7 = porte dérobée vers le I. Couleur soul/Stevie."
        },
        {
          id: "5.5",
          title: "Les passing chords chromatiques en accords parallèles",
          duration: "30 min",
          objective: "Glisser une triade par chromatisme vers la cible.",
          theory: `**Concept:** prendre l'accord cible, le décaler d'un demi-ton au-dessus ou en-dessous, et l'utiliser comme passing.

**Exemple en C, cible = F:**
- F#m7 → Fmaj7 (descend d'un demi-ton)
- ou Em7 → Fmaj7 (monte d'un demi-ton)

**Effet en gospel:** glissement très soyeux. Utilisé énormément par Cory Henry, Greg Phillinganes.

**Mouvement type:**
Cmaj9 → **Bbm9** → **Am9** → Dm9 → G13 → Cmaj9
(Bbm9 = chromatique descendant vers Am9)

🎯 **Astuce:** ces passing fonctionnent mieux sur des **temps faibles** ou en **anticipation** (juste avant le temps fort de l'accord cible).`,
          exercise: `Joue: Cmaj9 → Bbm9 → Am9 → Dm9 → G13 → Cmaj9.`,
          keyTakeaway: "Passing chromatique = accord cible décalé d'un demi-ton, joué en anticipation."
        },
        {
          id: "5.6",
          title: "Les approches double-chromatiques",
          duration: "25 min",
          objective: "Approcher un accord par 2 demi-tons consécutifs.",
          theory: `Au lieu d'un seul passing chord, on en utilise **deux** consécutifs, descendant ou montant chromatiquement.

**Exemple:** approcher **Dm9** par le dessus.
- F#m9 → Fm9 → **Dm9** (descend)

Ou par le dessous:
- Cm9 → C#m9 → **Dm9** (monte)

🎯 **Effet gospel:** crée une mini-tension/résolution sur 2 temps avant l'accord cible.

**Application typique:** dans une vamp gospel, sur 4 temps:
- Temps 1-2: F#m9
- Temps 3: Fm9
- Temps 4: Dm9
- Temps suivant: cible suivante`,
          exercise: `Joue: Cmaj9 (1 mesure) → F#m9-Fm9-Dm9 (1 mesure) → G13 (1 mesure) → Cmaj9.`,
          keyTakeaway: "2 passing consécutifs = approche chromatique plus forte. Réserve aux transitions importantes."
        },
        {
          id: "5.7",
          title: "Le 'tag ending' gospel",
          duration: "30 min",
          objective: "Construire une fin gospel avec une cascade de passing chords.",
          theory: `Un **tag** = une fin étendue où on répète la cadence finale plusieurs fois en variant les passing.

**Tag classique en C:**
Mesure 1: Cmaj9 → C7 → Fmaj9 → Fm9
Mesure 2: Cmaj9/E → A7 → Dm9 → G13
Mesure 3 (variation): Cmaj9 → Eb dim → Dm9 → Db9 → Cmaj9

🎯 **Caractéristique gospel:** chaque répétition du tag ajoute **plus de passing chords** pour intensifier l'émotion.

**Tags célèbres:** la fin de "Total Praise" de Richard Smallwood, "Lord I Need You"... reposent sur ce principe.`,
          exercise: `Joue le tag classique ci-dessus, lentement, puis répète en accélérant légèrement.`,
          keyTakeaway: "Tag = répétition de la cadence avec passing chords variés. La signature des fins gospel."
        }
      ]
    },

    // ==========================================================
    // MODULE 6 — LA RYTHMIQUE
    // ==========================================================
    {
      id: 6,
      title: "La Rythmique",
      subtitle: "Le groove, la main gauche, le swing — sans rythme pas de gospel",
      icon: "🥁",
      color: "#9333ea",
      description: "Tu peux jouer les meilleurs accords du monde, si ta rythmique est plate, ça ne sonnera jamais gospel. Ce module se concentre sur le timing, le groove et la main gauche.",
      lessons: [
        {
          id: "6.1",
          title: "Les bases du timing",
          duration: "25 min",
          objective: "Maîtriser temps forts, temps faibles, et la sensation 4/4.",
          theory: `**4/4** = 4 temps par mesure. Le gospel est presque toujours en 4/4 (parfois 6/8 pour les ballades).

**Temps forts:** 1 et 3 (l'accord change souvent)
**Temps faibles:** 2 et 4 (le backbeat, les claps en gospel)

🎯 **Astuce essentielle:** dans le gospel, le **backbeat** (2 et 4) est **lourd**. C'est là qu'on claque les mains à l'église.

Au piano, ça veut dire que les **accords pleins** tombent souvent sur 2 et 4, ou avec un effet d'**anticipation** (un peu avant le temps).`,
          exercise: `Mets un métronome à 80 BPM. Joue Cmaj9 sur le temps 1, silence sur 2-3-4. Puis joue sur 1 et 3. Puis joue sur 2 et 4. Sens la différence.`,
          keyTakeaway: "2 et 4 = backbeat gospel. Ne joue pas tout sur 1."
        },
        {
          id: "6.2",
          title: "Le 'comping' (accompagnement)",
          duration: "30 min",
          objective: "Accompagner une voix/instrument avec un pattern rythmique simple et efficace.",
          theory: `**Comping** = jouer les accords de manière **rythmique** et **discrète** pour soutenir une mélodie.

**Pattern gospel de base:**
- Temps 1: accord court (anticipation)
- Temps 2 (et) : accord plein
- Temps 3: rien
- Temps 4 (et) : accord plein

Notation: ♪ _ ♪♪ _ _ ♪♪ _

🎯 **Règle d'or du comping:** **moins, c'est mieux**. Joue moins de notes que tu peux. Laisse de l'espace pour la voix.

**Astuce dynamique:** alterner entre **shell voicing** (3+7) sur certains temps et **voicing plein** sur d'autres.`,
          exercise: `Mets une boucle 2-5-1 en C. Comp avec le pattern: (Dm9 sur "et de 1") - (G13 sur "et de 3") - (Cmaj9 sur "1") - silence. 8 fois.`,
          keyTakeaway: "Comping = laisser respirer. La main droite syncope, pas un mur de notes."
        },
        {
          id: "6.3",
          title: "Les rythmes main gauche (basse)",
          duration: "30 min",
          objective: "Construire des patterns de basse qui groove.",
          theory: `Plusieurs patterns de basse en gospel:

**Pattern 1: 'fondamentale-5e' (gospel classique)**
- Temps 1: fondamentale (C)
- Temps 2: 5e (G)
- Temps 3: fondamentale (C, octave haute)
- Temps 4: 5e (G)

**Pattern 2: 'walking bass' (jazz-gospel)**
- Une note différente sur chaque temps, qui marche vers l'accord suivant
- Ex: C → E → G → B → C → A → D → G → C (montée puis descente vers ii-V-I)

**Pattern 3: 'gospel rolling'**
- Octaves alternées + 5e + 9e
- C (grave) - G - C (aigu) - D

🎯 **Pour débuter:** maîtrise le pattern 1 sur toutes les progressions avant de tenter les autres.`,
          exercise: `Sur une boucle 1-6-2-5 en C, joue le pattern 1 main gauche pendant que tu compes main droite.`,
          keyTakeaway: "Main gauche = ancrage rythmique. Pattern 1-5 = la base éternelle."
        },
        {
          id: "6.4",
          title: "Les triolets et le 'swing'",
          duration: "25 min",
          objective: "Sentir le balancement ternaire typique du gospel/blues.",
          theory: `**Croches binaires:** ♪♪ = 2 notes égales par temps (rock, pop)
**Croches swing (triolets):** ♪♪ avec rapport 2:1 (longue-courte) = base du jazz/gospel

**Notation pratique:** quand on écrit ♪♪ en jazz/gospel, on les joue **swing** (longue-courte).

🎯 **Application gospel:** la plupart des ballades gospel (style Whitney Houston, Mahalia Jackson) sont en **6/8** ou en **4/4 swing**. Le shuffle/swing est partout.

**Triolets pratiques:**
1 - 2 - 3 - 4 (temps)
1 et a 2 et a 3 et a 4 et a (subdivision en triolets)`,
          exercise: `Avec un métronome à 60 BPM, joue Cmaj9 en triolets (3 notes par temps): C-E-G | C-E-G | C-E-G | C-E-G.`,
          keyTakeaway: "Gospel = ternaire/swing majoritairement. Sens le balancement."
        },
        {
          id: "6.5",
          title: "Les anticipations rythmiques",
          duration: "25 min",
          objective: "Jouer un accord 'un peu avant' le temps pour créer du push.",
          theory: `Une **anticipation** = jouer un accord sur le **"et"** qui précède le temps fort, créant un effet de **propulsion**.

**Exemple sans anticipation:**
Mesure 1: Cmaj9 sur 1, silence
Mesure 2: Dm9 sur 1

**Avec anticipation:**
Mesure 1: Cmaj9 sur 1, silence... Dm9 sur le **"et de 4"** (= juste avant la mesure suivante)
Mesure 2: Dm9 prolongé

🎯 **Effet:** ça donne un swing, ça pousse en avant. C'est ce que font tous les pianistes gospel.

**Variante:** anticiper de 2 croches (sur le "4 et") au lieu d'1 (sur le "et de 4").`,
          exercise: `Joue 4 mesures de 2-5-1 en anticipant chaque changement d'accord d'1 croche.`,
          keyTakeaway: "Anticipation = pousser l'accord avant son temps fort. Crée le groove gospel."
        },
        {
          id: "6.6",
          title: "Le 'two-hand groove'",
          duration: "30 min",
          objective: "Coordonner les 2 mains pour créer un groove autonome (sans rythme externe).",
          theory: `**Two-hand groove:** la main gauche fait un pattern rythmique régulier, la main droite syncope.

**Exemple en C, 80 BPM:**

Main gauche (régulière):
Temps 1: C (grave)
Temps 2: silence
Temps 3: G (5e)
Temps 4: silence

Main droite (syncopée):
"et de 1": accord plein
Temps 2-3-4: silence
"et de 4": accord plein

🎯 **Effet:** un groove auto-suffisant. Tu peux jouer seul sans accompagnement, ça swingue.

**Difficulté:** la coordination! Démarre lentement (60 BPM) et augmente progressivement.`,
          exercise: `Boucle 2-5-1 en C, 4 mesures. Main G = pattern 1-5. Main D = anticipations. Vise 60 BPM, puis 80.`,
          keyTakeaway: "Two-hand groove = autonomie rythmique. La cible quand tu joues seul."
        },
        {
          id: "6.7",
          title: "Les fills et breaks",
          duration: "30 min",
          objective: "Ajouter des petits remplissages mélodiques entre les accords.",
          theory: `Un **fill** = une mini-mélodie de 1-2 temps entre 2 accords.

**Exemple simple en C:** entre Cmaj9 et Fmaj9, joue rapidement E-F-G-A (gamme de C qui monte vers F) en croches/triolets.

**Sources de fills:**
1. **Notes de la gamme majeure** (le plus simple)
2. **Notes de la gamme pentatonique** (toujours juste)
3. **Notes blues** (avec b3, b5, b7)
4. **Notes chromatiques** (en transition rapide)

🎯 **Règle d'or:** un fill se termine sur une **note de l'accord cible** pour résoudre.

**Pattern fill gospel typique:** E → F → G → A → **C** (résout sur le C de Fmaj9 si on cible IV).`,
          exercise: `Mets un comping main G simple en C. Avec la main D, ajoute un fill rapide juste avant le changement d'accord toutes les 2 mesures.`,
          keyTakeaway: "Fill = mini-solo de transition. Démarre simple, résout toujours sur l'accord cible."
        }
      ]
    },

    // ==========================================================
    // MODULE 7 — L'IMPROVISATION GOSPEL
    // ==========================================================
    {
      id: 7,
      title: "L'Improvisation Gospel",
      subtitle: "Inventer des mélodies, des riffs, des solos qui sonnent gospel",
      icon: "🎷",
      color: "#0d9488",
      description: "L'improvisation gospel a son propre vocabulaire: pentatoniques, gammes blues, licks signatures. Tu vas construire ta propre boîte à outils.",
      lessons: [
        {
          id: "7.1",
          title: "La gamme pentatonique majeure",
          duration: "25 min",
          objective: "Maîtriser la gamme à 5 notes qui sonne TOUJOURS juste sur les majeurs.",
          theory: `**Pentatonique majeure (de C):** C - D - E - G - A

C'est la gamme majeure **sans la 4 (F) et la 7 (B)**. Ces 2 notes "à problème" supprimées, **tout sonne bien** sur n'importe quel accord majeur de la tonalité.

🎯 **Pourquoi gospel:** la pentatonique majeure de C marche sur **Cmaj9, F (pas tout, attention au F)**, et globalement toute la famille majeure de C.

**5 doigtés à mémoriser** (positions sur le clavier):
- Position 1: C-D-E-G-A (C central)
- Position 2: D-E-G-A-C
- Position 3: E-G-A-C-D
- Position 4: G-A-C-D-E
- Position 5: A-C-D-E-G`,
          exercise: `Sur un fond de Cmaj9, joue uniquement les notes C-D-E-G-A, dans n'importe quel ordre. Improvise pendant 2 minutes.`,
          keyTakeaway: "Penta majeure = toujours juste sur les majeurs. La gamme refuge."
        },
        {
          id: "7.2",
          title: "La gamme pentatonique mineure",
          duration: "25 min",
          objective: "Utiliser la penta mineure pour improviser sur les accords mineurs et le blues.",
          theory: `**Pentatonique mineure (de A):** A - C - D - E - G

C'est la **même gamme** que la penta majeure de C (sa relative)! Mais on la centre sur A.

🎯 **Application gospel:**
- Penta mineure de A → marche sur Am, Am7, Am9, et globalement la famille A mineur
- Penta mineure de la **tonalité du morceau** marche sur les sections "bluesy/soul"

**Truc puissant:** sur une chanson en **C majeur**, tu peux improviser avec la **penta mineure de A** (= la même notes que penta majeure de C) → ça donne une couleur plus "blues/soul" que la penta majeure de C pure.`,
          exercise: `Sur une boucle Am9 → Dm9 → G13 → Cmaj9, improvise uniquement avec A-C-D-E-G.`,
          keyTakeaway: "Penta mineure = couleur soul. Même notes que penta majeure relative, centre différent."
        },
        {
          id: "7.3",
          title: "La gamme blues",
          duration: "25 min",
          objective: "Ajouter la 'note bleue' pour le son blues/gospel/soul.",
          theory: `**Gamme blues de C:** C - Eb - F - **F#** - G - Bb

C'est la penta mineure de C + une **'note bleue'** (le F# = b5).

Cette note bleue est **dissonante** mais quand elle est jouée en passage rapide, elle crée la signature blues/gospel.

🎯 **Application:** sur un blues en C, ou sur les sections "soulful" d'un gospel, improvise avec cette gamme.

**Truc gospel:** glisser du **Eb au E** (la 3e mineure vers majeure) est ULTRA gospel. Crée la tension blues/gospel.`,
          exercise: `Sur un fond C7 en boucle, improvise avec la gamme blues de C, en mettant l'accent sur les passages Eb→E.`,
          keyTakeaway: "Gamme blues = penta mineure + b5. La note bleue donne le caractère."
        },
        {
          id: "7.4",
          title: "Les 'licks' gospel signatures",
          duration: "30 min",
          objective: "Mémoriser 5 licks (phrases mélodiques) immédiatement reconnaissables comme gospel.",
          theory: `Un **lick** = une phrase mélodique courte qu'on peut réutiliser à l'infini.

**Lick 1 - 'La descente gospel':**
Sur Cmaj9 → G-A-Bb-A-G-E-D-C (descente avec passage chromatique)

**Lick 2 - 'Le bend gospel':**
Sur Cmaj9 → Eb→E (slide rapide), suivi de C-G-E

**Lick 3 - 'La résolution':**
Sur G7→Cmaj9 → F-Eb-D-E-C (descend puis remonte sur le E majeur)

**Lick 4 - 'L'arpège gospel':**
Sur Fmaj9 → A-C-E-G-A-G-E-C (arpège ascendant puis descendant)

**Lick 5 - 'Le trille gospel':**
Sur Cmaj9 → trille rapide entre D et E, résout sur C

🎯 Apprends-en un par jour pendant 5 jours, mémorise les positions exactes au clavier.`,
          exercise: `Choisis le Lick 1. Joue-le 20 fois sur un fond Cmaj9 jusqu'à ce qu'il soit automatique.`,
          keyTakeaway: "Les pros ne 'improvisent' pas 100% — ils combinent des licks mémorisés."
        },
        {
          id: "7.5",
          title: "L'improvisation modale",
          duration: "30 min",
          objective: "Improviser en utilisant les modes (dorien, mixolydien, etc.).",
          theory: `Un **mode** = une gamme majeure jouée en commençant par un degré différent.

Les modes gospel-friendly:

**Dorien (sur ii)** = gamme majeure démarrée sur la 2e
- Dorien de D = D-E-F-G-A-B-C (= gamme de C démarrée sur D)
- À jouer sur **Dm7, Dm9** dans la tonalité de C

**Mixolydien (sur V)** = gamme majeure démarrée sur la 5e
- Mixolydien de G = G-A-B-C-D-E-F (= gamme de C démarrée sur G)
- À jouer sur **G7, G13** dans la tonalité de C

**Lydien (sur IV ou Imaj7)** = gamme majeure avec #4
- Lydien de F = F-G-A-B-C-D-E
- À jouer sur **Fmaj7, Fmaj9** pour une couleur rêveuse

🎯 **Astuce gospel:** sur une vamp ii-V-I, utilise dorien sur ii, mixolydien sur V, ionien (majeur) sur I.`,
          exercise: `Sur Dm9 (4 mesures) → G13 (4) → Cmaj9 (4), improvise: dorien sur Dm9, mixolydien sur G13, majeur sur Cmaj9.`,
          keyTakeaway: "Modes = même notes, accent différent. Crée des couleurs spécifiques sur chaque accord."
        },
        {
          id: "7.6",
          title: "Les 'enclosures' chromatiques",
          duration: "25 min",
          objective: "Approcher une note cible par des notes chromatiques voisines.",
          theory: `**Enclosure** = encercler une note avec ses voisines (au-dessus et en-dessous) avant de la jouer.

**Exemple:** cible = E (3e de C).
- Encerclage simple: F → D# → **E**
- Encerclage double: F → Eb → D# → **E**

🎯 **Effet:** crée une tension chromatique avant la résolution sur la note "juste". Hyper utilisé en jazz et gospel sophistiqué.

**Application:** quand tu improvises et que tu veux viser une note d'accord, encercle-la d'abord.`,
          exercise: `Sur Cmaj9, joue un lick qui encercle la note **G** (5e): A → F# → G → tient.`,
          keyTakeaway: "Enclosure = tension chromatique vers la note cible. Sonne jazz/gospel sophistiqué."
        },
        {
          id: "7.7",
          title: "L'improvisation par phrases",
          duration: "30 min",
          objective: "Construire un solo qui raconte une histoire (questions/réponses).",
          theory: `Une improvisation efficace = des **phrases** courtes séparées par des **silences**, comme une conversation.

**Structure type 'question/réponse':**
- Phrase 1 (question): 2-4 mesures, monte vers une note tendue
- Silence (1-2 mesures)
- Phrase 2 (réponse): 2-4 mesures, descend vers une note de résolution
- Silence

🎯 **Les silences sont aussi importants que les notes.** Beaucoup de pianistes débutants jouent **trop**.

**Pattern classique gospel:**
- Phrase courte simple (call)
- Phrase plus élaborée (response)
- Répétition variée
- Phrase finale "punchy"`,
          exercise: `Improvise sur une vamp 2-5-1 en C pendant 16 mesures. Structure: phrase 4 mesures → silence 4 → phrase 4 → silence 4.`,
          keyTakeaway: "Improviser = converser. Joue, écoute (silence), réponds. Pas un flot continu."
        }
      ]
    },

    // ==========================================================
    // MODULE 8 — STYLE & RÉPERTOIRE
    // ==========================================================
    {
      id: 8,
      title: "Style & Répertoire",
      subtitle: "Approfondir les styles spécifiques et construire un répertoire",
      icon: "🏆",
      color: "#b91c1c",
      description: "Maintenant que tu maîtrises les briques, tu vas explorer les sous-styles du gospel et apprendre à jouer des morceaux complets dans le bon vocabulaire.",
      lessons: [
        {
          id: "8.1",
          title: "Le gospel traditionnel",
          duration: "30 min",
          objective: "Capturer le son du gospel des années 60-70 (Mahalia Jackson, James Cleveland).",
          theory: `**Caractéristiques:**
- Tonalités: souvent Eb, Bb, Ab, F
- Tempo: lent à moyen (60-90 BPM)
- Rythme: triolets/swing, 12/8 ou 4/4 ternaire
- Accords: surtout maj7, m7, dominantes simples (peu d'altérations)
- Main gauche: walking bass ou octaves
- Voicings: simples mais soulful

🎯 **Influence:** **blues** + **hymnes d'église**. Pas encore de jazz sophistiqué.

**Morceaux iconiques:**
- "Precious Lord, Take My Hand"
- "Amazing Grace"
- "Just A Closer Walk With Thee"

**Pratique:** joue ces hymnes en triolets avec des voicings simples, ajoutant juste quelques passing dim entre les accords.`,
          exercise: `Apprends "Amazing Grace" en G majeur, avec voicings maj7/m7 et triolets main gauche.`,
          keyTakeaway: "Gospel trad = simplicité + soul. Pas besoin de complexité harmonique."
        },
        {
          id: "8.2",
          title: "Le gospel contemporain (Kirk Franklin, etc.)",
          duration: "30 min",
          objective: "Apprendre les voicings et progressions des années 90-2000.",
          theory: `**Caractéristiques:**
- Tonalités: tous, mais souvent F#, Db, Ab pour la voix
- Tempo: large fourchette (60-130 BPM)
- Rythme: hip-hop influence, syncopes, breaks
- Accords: maj9, m9, sus, voicings quartal
- Main gauche: octaves + 5e, parfois en croches syncopées
- Voicings: clusters, quartal, modernes

🎯 **Influence:** **R&B** + **hip-hop** + **soul**.

**Morceaux iconiques:**
- "Stomp" (Kirk Franklin)
- "Imagine Me"
- "Lean on Me"

**Vocabulary:** beaucoup de **sus → maj9**, **Im → bVII → IV** (progressions modales pop).`,
          exercise: `Boucle: Cmaj9 → Bbmaj9 → Fmaj9/A → Gsus4 → G. Joue avec un groove syncopé.`,
          keyTakeaway: "Gospel contemporain = R&B + voicings quartal + grooves syncopés."
        },
        {
          id: "8.3",
          title: "Le gospel 'praise & worship' (Hillsong, Bethel)",
          duration: "25 min",
          objective: "Apprendre le style des morceaux d'église moderne (pop-rock gospel).",
          theory: `**Caractéristiques:**
- Tonalités: B, C, D, E (faciles pour chanter en congrégation)
- Tempo: moyen (70-110 BPM)
- Rythme: 4/4 binaire (rock), pas swing
- Accords: simples, peu d'altérations (à fond le sus2, add9)
- Main gauche: noires régulières (pulse 4/4)
- Voicings: épurés, ouverts (souvent en quartes ou avec doublures à l'octave)

🎯 **Influence:** **pop-rock** + **worship**. Style très "radio-friendly".

**Morceaux iconiques:**
- "Oceans" (Hillsong)
- "Reckless Love"
- "Way Maker"

**Voicing typique:** triade avec basse alternative (slash chords), peu d'extensions. Ex: D → A/C# → Bm → G.`,
          exercise: `Joue: D → A/C# → Bm → G en boucle, avec main D = triades simples + add9, main G = noires régulières sur la fondamentale.`,
          keyTakeaway: "Worship moderne = simplicité harmonique + grands espaces dans les voicings."
        },
        {
          id: "8.4",
          title: "Le quartet gospel et le 'shouting'",
          duration: "25 min",
          objective: "Comprendre le style énergique des quartets et fins explosives.",
          theory: `**Quartet gospel** = style des groupes vocaux à 4 voix (Mighty Clouds of Joy, Soul Stirrers).

**Caractéristiques piano:**
- Tonalités: Eb, Ab, F
- Tempo: rapide (110-160 BPM)
- Rythme: shuffle/swing intense
- Accords: simples mais joués avec **beaucoup** d'attaque
- Main gauche: walking bass animée
- Voicings: triades + 7, beaucoup de glissandos

**Le 'shouting':** sections de fin où le tempo s'emballe, les accords se simplifient et le pianiste joue des **gammes rapides** et **trilles** pour amener l'extase.

🎯 **Technique:** trilles à la main droite en octaves (ex: C-D-C-D-C-D rapides), main gauche en walking bass.`,
          exercise: `Sur un blues en Eb, joue 4 mesures normales puis 4 mesures de "shouting" avec trilles main D + walking bass main G.`,
          keyTakeaway: "Shouting = climax énergétique. Simplification harmonique + intensité rythmique."
        },
        {
          id: "8.5",
          title: "Le 'urban gospel' / gospel-jazz",
          duration: "30 min",
          objective: "Découvrir le style sophistiqué de Cory Henry, Robert Glasper, Peter Martin.",
          theory: `**Urban gospel/jazz** = fusion gospel + jazz + neo-soul + R&B.

**Caractéristiques:**
- Tonalités: toutes, souvent dans des tons rares (B, Db, F#)
- Tempo: lent à moyen, beaucoup de rubato
- Rythme: complexe, syncopes, polyrythmies (3 sur 4)
- Accords: extensions à fond (9, 11, 13, altérés), tritone subs, modal interchange
- Main gauche: walking bass jazz, ou patterns funk
- Voicings: quartal, clusters, voicings ouverts, polychords

🎯 **Influence:** **jazz moderne** + **neo-soul** (D'Angelo, Erykah Badu).

**Pianistes à étudier:**
- Cory Henry (Snarky Puppy)
- Robert Glasper
- Peter Martin
- Greg Phillinganes`,
          exercise: `Cherche "Cory Henry gospel piano" sur YouTube. Écoute un solo et identifie 2 passing chords qu'il utilise.`,
          keyTakeaway: "Urban gospel = sommet de la complexité. Tout ce qu'on a appris + jazz moderne."
        },
        {
          id: "8.6",
          title: "Construire un répertoire personnel",
          duration: "30 min",
          objective: "Organiser sa pratique pour apprendre des morceaux complets.",
          theory: `**Méthode pour apprendre un morceau:**

1. **Écouter** la version originale 5-10 fois (audio uniquement, focus)
2. **Identifier** la tonalité (au piano ou avec une app)
3. **Sortir la grille d'accords** (lyrics + accords trouvés en ligne ou à l'oreille)
4. **Adapter les voicings** au style gospel (passer les triades en maj9/m9 etc.)
5. **Ajouter passing chords** aux endroits clés
6. **Travailler la rythmique** (binaire vs swing, anticipations)
7. **Mémoriser** par sections (couplet, refrain, pont)
8. **Performer** en boucle, ralenti puis tempo normal

🎯 **Conseil:** apprends **5 morceaux complets** plutôt que 20 à moitié. La maîtrise compte.

**Suggestions débutant:**
- "Amazing Grace" (lent, simple)
- "Lean on Me" (R&B/gospel, accessible)
- "Stand By Me" (12 mesures simples)

**Intermédiaire:**
- "Total Praise"
- "I Smile" (Kirk Franklin)
- "Oh Happy Day"

**Avancé:**
- "Take Me to the King"
- "I Need You Now"
- Tout solo de Cory Henry`,
          exercise: `Choisis UN morceau (ex: "Amazing Grace") et applique la méthode complète en 1h.`,
          keyTakeaway: "Méthode > intuition. Apprendre un morceau, c'est une routine de 8 étapes."
        },
        {
          id: "8.7",
          title: "Jouer en groupe / en service religieux",
          duration: "25 min",
          objective: "Adapter son jeu au contexte: solo, accompagnement, groupe.",
          theory: `**Jeu solo:** tu fais tout (mélodie + accords + basse + groove). Voicings denses, fills constants.

**Accompagnement (chanteur):**
- Voicings **épurés** (shell)
- Backbeat clair
- Suivre le chanteur (pas le précéder)
- Réserver les fills aux silences vocaux

**Avec un groupe complet (basse + batterie + voix):**
- **Encore plus épuré** (le bassiste fait la basse, donc main G légère)
- Comping syncopé sur les 2-4
- Tout faire pour soutenir, jamais pour briller

🎯 **Règle d'or en groupe:** **fais ce qui manque**. Si le bassiste joue déjà, ne double pas. Si la voix monte, descends. Crée du contraste.`,
          exercise: `Imagine 3 scénarios (solo, avec chanteur, avec groupe). Sur Cmaj9 → Am9 → Dm9 → G13, joue 4 mesures en t'adaptant à chaque scénario.`,
          keyTakeaway: "Bon pianiste = pianiste qui écoute le contexte. Pas le même jeu seul ou en groupe."
        }
      ]
    }
  ]
};

// Total leçons: 7 + 8 + 7 + 7 + 7 + 7 + 7 + 7 = 57 leçons
