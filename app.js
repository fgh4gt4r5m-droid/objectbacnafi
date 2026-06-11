const studentName = "FOFANA ASSITA ALEXANDRA";

const subjects = [
  {
    name: "Mathématiques",
    coef: "Très prioritaire",
    themes: ["Suites", "Fonctions", "Limites", "Probabilités", "Nombres complexes", "Géométrie"],
    methods: [
      "Écrire les données, choisir la propriété, conclure clairement.",
      "Ne jamais sauter les domaines de définition, tableaux de signes et unités.",
      "Refaire les calculs au brouillon avant de recopier une réponse finale."
    ],
    exercises: [
      {
        title: "Sujet type BAC : suites et raisonnement",
        prompt: "On considère la suite définie par u0 = 1 et u(n+1) = (2u(n)+3)/(u(n)+4). 1) Montrer que u(n) est bien définie et positive. 2) Étudier la monotonie. 3) Si elle converge, déterminer sa limite. 4) Rédiger une conclusion complète.",
        correction: "Méthode attendue : montrer par récurrence que u(n) > 0. Comparer u(n+1)-u(n) en mettant au même dénominateur. Pour la limite L : L = (2L+3)/(L+4), donc L²+2L-3=0, d’où L=1 ou L=-3. Comme la suite est positive, la limite possible est 1. Attention : on ne conclut la convergence qu’après monotonie + encadrement."
      },
      {
        title: "Sujet type BAC : fonction logarithme",
        prompt: "Soit f(x)=x-2+ln(x)/x définie sur ]0;+∞[. 1) Calculer les limites aux bornes. 2) Étudier f'(x). 3) Dresser le tableau de variations. 4) Montrer que l’équation f(x)=0 admet une unique solution sur [1;3]. 5) Donner un encadrement à 10⁻¹.",
        correction: "Points clés : f'(x)=1+(1-ln(x))/x². Il faut étudier le signe de x²+1-ln(x), souvent positif après justification. Pour l’unicité, utiliser continuité + variations. Encadrement : calculer f(1), f(2), f(3), puis affiner. Le correcteur attend une rédaction propre, pas seulement les résultats."
      },
      {
        title: "Probabilités : arbre et conditionnement",
        prompt: "Dans un centre, 60 % des candidats suivent des cours de soutien. Parmi eux, 75 % réussissent un test blanc. Parmi les autres, 45 % réussissent. 1) Construire l’arbre pondéré. 2) Calculer la probabilité qu’un candidat réussisse. 3) Sachant qu’il a réussi, calculer la probabilité qu’il ait suivi le soutien. 4) Interpréter le résultat.",
        correction: "P(R)=0,60×0,75+0,40×0,45=0,63. P(S|R)=P(S∩R)/P(R)=0,45/0,63≈0,714. Interprétation : parmi les candidats qui réussissent, environ 71,4 % ont suivi le soutien. Ne pas confondre P(S|R) et P(R|S)."
      }
    ]
  },
  {
    name: "Physique-Chimie",
    coef: "Très prioritaire",
    themes: ["Électricité", "Mécanique", "Acides-bases", "Cinétique", "Dosage", "Énergie"],
    methods: [
      "Commencer par les grandeurs connues, les unités et le schéma.",
      "Encadrer la formule utilisée avant l’application numérique.",
      "En chimie, toujours préciser l’équation, le tableau d’avancement et l’unité finale."
    ],
    exercises: [
      {
        title: "Sujet type BAC : circuit RC",
        prompt: "Un condensateur de capacité C = 100 µF est chargé à travers une résistance R = 2,0 kΩ par un générateur de tension E = 6 V. 1) Déterminer la constante de temps. 2) Écrire l’expression de uC(t). 3) Calculer uC à t = τ. 4) Expliquer physiquement le régime permanent.",
        correction: "τ = RC = 2000×100×10⁻⁶ = 0,20 s. En charge : uC(t)=E(1-e^(-t/τ)). À t=τ, uC≈0,63E≈3,78 V. Au régime permanent, le condensateur se comporte comme un interrupteur ouvert : le courant tend vers 0."
      },
      {
        title: "Sujet type BAC : dosage acide-base",
        prompt: "On dose Va = 20,0 mL d’un acide AH par une solution de soude de concentration Cb = 0,10 mol/L. L’équivalence est obtenue pour VbE = 16,4 mL. 1) Écrire l’équation support. 2) Déterminer la concentration Ca de l’acide. 3) Dire comment repérer l’équivalence sur une courbe pH=f(Vb). 4) Citer une source d’erreur expérimentale.",
        correction: "AH + HO⁻ → A⁻ + H₂O. À l’équivalence : n(AH)=n(HO⁻), donc CaVa=CbVbE. Ca = 0,10×16,4/20,0 = 0,082 mol/L. L’équivalence correspond au saut de pH, souvent au point d’inflexion. Erreurs possibles : lecture du volume, rinçage, dépassement de l’équivalence."
      },
      {
        title: "Mécanique : mouvement avec frottements négligés",
        prompt: "Un solide de masse m = 0,50 kg glisse sur un plan incliné d’angle 30°, sans frottement. 1) Faire le bilan des forces. 2) Projeter la deuxième loi de Newton sur l’axe du mouvement. 3) Calculer l’accélération. 4) Donner la vitesse après 2,0 s si le solide part du repos.",
        correction: "Forces : poids P et réaction normale R. Sur l’axe du plan : mg sin(30°)=ma, donc a=g sin(30°)=4,9 m/s² si g=9,8. Vitesse : v=at=9,8 m/s. Le piège : ne pas mettre la réaction dans l’axe du mouvement."
      }
    ]
  },
  {
    name: "SVT",
    coef: "Prioritaire",
    themes: ["Génétique", "Immunologie", "Reproduction", "Géologie", "Communication nerveuse"],
    methods: [
      "Faire des schémas propres avec titre, légende et flèches.",
      "Répondre en s’appuyant sur les documents, pas seulement sur le cours.",
      "Utiliser les mots scientifiques exacts : allèle, anticorps, synapse, plaque."
    ],
    exercises: [
      {
        title: "Sujet type BAC : génétique et arbre généalogique",
        prompt: "Une maladie héréditaire apparaît chez un enfant alors que ses deux parents sont sains. 1) Discuter le mode de transmission probable. 2) Proposer les génotypes des parents. 3) Donner le risque pour un nouvel enfant. 4) Expliquer la différence entre génotype et phénotype.",
        correction: "Parents sains avec enfant malade : transmission récessive probable. Parents porteurs : Aa × Aa. Risque d’enfant malade aa = 1/4, soit 25 %. Génotype : combinaison d’allèles ; phénotype : caractère observable."
      },
      {
        title: "Sujet type BAC : réponse immunitaire",
        prompt: "Après vaccination, le taux d’anticorps augmente rapidement lors d’un second contact avec le même antigène. 1) Expliquer ce phénomène. 2) Nommer les cellules impliquées. 3) Montrer l’intérêt de la vaccination. 4) Préciser pourquoi la réponse est spécifique.",
        correction: "Le second contact déclenche une réponse secondaire grâce aux lymphocytes mémoires. Les lymphocytes B produisent des plasmocytes sécréteurs d’anticorps. La vaccination prépare l’organisme sans provoquer la maladie grave. La spécificité vient de la reconnaissance antigène-anticorps."
      },
      {
        title: "Exploitation de documents : réflexe nerveux",
        prompt: "On stimule un récepteur sensoriel et on observe une contraction musculaire. 1) Reconstituer le trajet du message nerveux. 2) Distinguer message sensitif et message moteur. 3) Expliquer le rôle de la synapse. 4) Faire un schéma fonctionnel légendé.",
        correction: "Trajet : récepteur → neurone sensitif → centre nerveux → neurone moteur → muscle. Le message sensitif va vers le centre, le message moteur part du centre vers l’effecteur. La synapse transmet le message grâce à des neurotransmetteurs. Le schéma doit avoir flèches, titres et légendes."
      }
    ]
  },
  {
    name: "Philosophie",
    coef: "À sécuriser",
    themes: ["La conscience", "La liberté", "La vérité", "L’État", "Le travail", "La science"],
    methods: [
      "Transformer le sujet en problème : pourquoi la question se pose ?",
      "Construire un plan en 2 ou 3 parties avec exemples.",
      "Soigner introduction et conclusion : elles rapportent beaucoup."
    ],
    exercises: [
      {
        title: "Dissertation type BAC",
        prompt: "Sujet : La liberté consiste-t-elle à faire ce que l’on veut ? 1) Définir liberté et volonté. 2) Trouver la contradiction du sujet. 3) Proposer une problématique. 4) Construire un plan détaillé en trois parties avec exemples.",
        correction: "Problématique : être libre, est-ce suivre tous ses désirs ou se donner une règle raisonnable ? Plan possible : I. La liberté semble être absence de contrainte. II. Mais suivre tous ses désirs peut rendre esclave des passions. III. La liberté véritable suppose raison, responsabilité et loi morale/sociale."
      },
      {
        title: "Sujet : science et vérité",
        prompt: "La science donne-t-elle accès à la vérité ? Préparer introduction complète : accroche, définition des termes, problème, problématique et annonce du plan.",
        correction: "Idée forte : la science recherche une vérité démontrable et vérifiable, mais ses vérités peuvent évoluer. Il faut éviter le hors-sujet religieux ou moral. Une bonne introduction montre la tension entre certitude scientifique et caractère provisoire des théories."
      }
    ]
  },
  {
    name: "Français",
    coef: "À sécuriser",
    themes: ["Résumé", "Discussion", "Commentaire", "Argumentation", "Expression écrite"],
    methods: [
      "Lire deux fois le texte avant d’écrire.",
      "Repérer thèse, arguments, connecteurs et exemples.",
      "Écrire des phrases courtes, claires, sans répétitions inutiles."
    ],
    exercises: [
      {
        title: "Discussion type BAC",
        prompt: "Sujet : Pensez-vous que la lecture soit encore nécessaire à la réussite des jeunes ? Rédiger une introduction, deux axes argumentés et une conclusion.",
        correction: "Axe 1 : la lecture enrichit vocabulaire, culture, raisonnement et expression. Axe 2 : d’autres supports instruisent aussi, mais ils ne remplacent pas l’effort de lecture. Conclusion : la lecture reste nécessaire, même si elle peut être complétée par le numérique."
      },
      {
        title: "Résumé de texte : méthode exigeante",
        prompt: "À partir d’un texte argumentatif de 600 mots, proposer la méthode pour produire un résumé au quart. Que faut-il supprimer ? Que faut-il conserver ?",
        correction: "Conserver thèse, progression logique, arguments essentiels. Supprimer exemples secondaires, répétitions, citations longues, détails illustratifs. Garder l’ordre du texte et reformuler sans avis personnel."
      }
    ]
  },
  {
    name: "Anglais",
    coef: "À pratiquer",
    themes: ["Reading comprehension", "Grammar", "Essay", "Vocabulary", "Translation"],
    methods: [
      "Lire les questions avant le texte.",
      "Répondre avec des phrases complètes mais simples.",
      "Réviser les temps : present simple, past simple, present perfect, future."
    ],
    exercises: [
      {
        title: "BAC essay",
        prompt: "Essay topic: Many students use social media while preparing for exams. Is it helpful or dangerous? Write a balanced answer with introduction, two arguments for, two arguments against and a conclusion.",
        correction: "Expected structure: introduction; advantages such as quick information, study groups and motivation; dangers such as distraction, fake information and loss of time; conclusion recommending responsible use. Useful connectors: however, moreover, on the one hand, on the other hand, therefore."
      },
      {
        title: "Reading comprehension strategy",
        prompt: "A text discusses youth unemployment in Africa. Prepare likely answers for: main idea, causes, consequences and possible solutions.",
        correction: "Main idea: youth unemployment is a social and economic challenge. Causes: lack of training, limited jobs, mismatch between school and market. Consequences: poverty, migration, frustration. Solutions: vocational training, entrepreneurship, investment, digital skills."
      }
    ]
  },
  {
    name: "Histoire-Géographie",
    coef: "À consolider",
    themes: ["Développement", "Mondialisation", "Colonisation", "Indépendances", "Cartes"],
    methods: [
      "Définir les mots clés dès l’introduction.",
      "Utiliser dates, lieux et exemples précis.",
      "Pour la géographie, penser carte, acteurs, flux et contraintes."
    ],
    exercises: [
      {
        title: "Sujet organisé : mondialisation",
        prompt: "Sujet : Les pays africains face à la mondialisation. 1) Définir mondialisation. 2) Présenter deux opportunités. 3) Présenter deux limites. 4) Conclure par une condition de réussite.",
        correction: "Opportunités : investissements, échanges, technologies, ouverture des marchés. Limites : dépendance, concurrence, dette, inégalités, exploitation des ressources. Condition : formation, industrialisation, bonne gouvernance et intégration régionale."
      },
      {
        title: "Histoire : indépendances africaines",
        prompt: "Présenter les facteurs internes et externes qui ont favorisé les indépendances africaines après 1945.",
        correction: "Facteurs internes : nationalisme, partis politiques, syndicats, anciens combattants, revendications sociales. Facteurs externes : affaiblissement des puissances européennes, ONU, guerre froide, exemple asiatique. Il faut citer des exemples précis."
      }
    ]
  }
];

const plan = [
  {
    day: "Jour 1",
    focus: "Diagnostic et urgences",
    tasks: [
      "Faire 30 min de maths : suites ou fonctions.",
      "Faire 30 min de physique : électricité ou mécanique.",
      "Lister les 10 erreurs les plus fréquentes dans un carnet.",
      "Lire une méthode de dissertation philo."
    ]
  },
  {
    day: "Jour 2",
    focus: "Maths + SVT",
    tasks: [
      "Refaire un exercice complet de fonction avec dérivée.",
      "Faire un exercice de probabilités ou complexes.",
      "Réviser génétique et immunologie avec schémas.",
      "Terminer par 20 min d’anglais."
    ]
  },
  {
    day: "Jour 3",
    focus: "Physique-Chimie",
    tasks: [
      "Traiter un problème d’électricité en temps limité.",
      "Revoir dosage, pH, équivalence et tableaux d’avancement.",
      "Réciter les unités importantes.",
      "Faire une correction propre des erreurs."
    ]
  },
  {
    day: "Jour 4",
    focus: "Expression écrite",
    tasks: [
      "Faire un plan détaillé en philosophie.",
      "Faire un exercice de français : résumé ou discussion.",
      "Lire une correction modèle.",
      "Revoir connecteurs logiques et transitions."
    ]
  },
  {
    day: "Jour 5",
    focus: "Sujet blanc",
    tasks: [
      "Lancer un mode examen de 90 min.",
      "S’interdire le téléphone pendant la session.",
      "Corriger avec le barème personnel.",
      "Noter 3 chapitres à revoir le soir."
    ]
  },
  {
    day: "Jour 6",
    focus: "Consolidation légère",
    tasks: [
      "Relire les fiches et formules.",
      "Refaire seulement les erreurs déjà vues.",
      "Préparer documents, stylos, calculatrice et convocation.",
      "Dormir tôt : la mémoire travaille aussi pendant le repos."
    ]
  }
];

const examPapers = {
  "Mathématiques": [
    "Exercice 1, 5 pts : suite récurrente u0=2, u(n+1)=(3u(n)+4)/(u(n)+5). Montrer positivité, étudier convergence, déterminer la limite.",
    "Exercice 2, 6 pts : fonction f(x)=x-1+ln(x)/x sur ]0;+∞[. Limites, dérivée, variations, équation f(x)=0.",
    "Exercice 3, 4 pts : probabilités conditionnelles avec arbre pondéré, calcul d’une probabilité inverse.",
    "Exercice 4, 5 pts : nombres complexes ou géométrie plane, module, argument, interprétation graphique."
  ],
  "Physique-Chimie": [
    "Physique, 6 pts : circuit RC en charge. Constante de temps, expression de uC(t), lecture graphique, énergie stockée.",
    "Physique, 5 pts : mouvement sur plan incliné ou projectile. Bilan des forces, équations horaires, vitesse.",
    "Chimie, 6 pts : dosage acide-base. Équation, tableau d’avancement, concentration, pH à l’équivalence.",
    "Chimie, 3 pts : cinétique ou oxydoréduction. Identifier les espèces, écrire les demi-équations, conclure."
  ],
  "SVT": [
    "Partie A : exploitation de documents en génétique. Déterminer le mode de transmission et justifier.",
    "Partie B : immunologie. Expliquer vaccination, mémoire immunitaire et spécificité anticorps-antigène.",
    "Partie C : communication nerveuse. Trajet du message, rôle de la synapse, schéma fonctionnel.",
    "Exigence : chaque réponse doit citer un indice du document et une connaissance du cours."
  ],
  "Philosophie": [
    "Sujet 1 : La liberté consiste-t-elle à faire ce que l’on veut ?",
    "Sujet 2 : La science peut-elle remplacer la philosophie ?",
    "Sujet 3 : L’État limite-t-il ou garantit-il la liberté ?",
    "Travail attendu : introduction complète, problématique claire, plan détaillé, exemples précis."
  ],
  "Français": [
    "Résumé : identifier thèse, arguments et progression logique, puis réduire sans commentaire personnel.",
    "Discussion : sujet possible sur lecture, internet, école, jeunesse ou culture.",
    "Expression : introduction, deux ou trois paragraphes argumentés, conclusion nuancée.",
    "Contrôle final : orthographe, accords, ponctuation, connecteurs."
  ],
  "Anglais": [
    "Reading: identify topic, main idea, writer’s opinion and supporting details.",
    "Grammar: tenses, passive voice, reported speech, modals and connectors.",
    "Vocabulary: education, technology, environment, health and employment.",
    "Essay: 120-180 words with balanced arguments and clear conclusion."
  ],
  "Histoire-Géographie": [
    "Histoire : décolonisation, indépendances africaines, guerre froide et construction nationale.",
    "Géographie : mondialisation, développement, urbanisation, ressources et contraintes.",
    "Méthode : définir, problématiser, organiser en deux ou trois parties.",
    "Réponse attendue : exemples précis, dates utiles, vocabulaire géographique ou historique."
  ]
};

const worksheets = [
  {
    id: "math-bac-1",
    subject: "Mathematiques",
    title: "Sujet d'entrainement 1 - Fonctions, suites et probabilites",
    duration: "2 h 30",
    points: "20 points",
    instructions: [
      "Traiter les exercices dans l'ordre souhaite.",
      "Justifier chaque reponse : un resultat sans justification rapporte peu.",
      "Interdiction de regarder la correction avant d'avoir termine la tentative."
    ],
    exercises: [
      {
        title: "Exercice 1 - Etude de fonction",
        points: "7 pts",
        questions: [
          "On considere f definie sur ]0 ; +infini[ par f(x)=x-2+ln(x)/x. Calculer les limites de f en 0+ et en +infini.",
          "Montrer que f'(x)=(x^2+1-ln(x))/x^2.",
          "On admet que x^2+1-ln(x)>0 sur ]0 ; +infini[. Dresser le tableau de variations de f.",
          "Montrer que l'equation f(x)=0 admet une unique solution alpha sur [1 ; 3].",
          "Donner un encadrement de alpha a 10^-1 pres."
        ],
        correction: "Limites : ln(x)/x tend vers -infini en 0+, donc f tend vers -infini ; en +infini, ln(x)/x tend vers 0 et f tend vers +infini. La derivee s'obtient avec (ln x / x)'=(1-ln x)/x^2. La fonction est strictement croissante. Comme f(1)=-1 et f(3)>0, l'unique solution est dans [1;3]. Encadrer par essais successifs."
      },
      {
        title: "Exercice 2 - Suite recurrente",
        points: "6 pts",
        questions: [
          "Soit u0=2 et u(n+1)=(3u(n)+4)/(u(n)+5). Montrer par recurrence que u(n)>0 pour tout n.",
          "Calculer u(n+1)-u(n) et etudier le signe obtenu.",
          "En deduire que la suite est monotone et convergente.",
          "Determiner sa limite eventuelle L.",
          "Expliquer pourquoi la valeur negative eventuelle doit etre rejetee."
        ],
        correction: "Si u(n)>0 alors numerateur et denominateur sont positifs, donc u(n+1)>0. La comparaison se fait au meme denominateur : u(n+1)-u(n)=[3u+4-u(u+5)]/(u+5). La limite L verifie L=(3L+4)/(L+5), donc L^2+2L-4=0. On garde la racine positive."
      },
      {
        title: "Exercice 3 - Probabilites conditionnelles",
        points: "7 pts",
        questions: [
          "Dans un lycee, 65 % des eleves suivent une preparation au BAC. Parmi eux, 78 % reussissent un test blanc. Parmi ceux qui ne suivent pas la preparation, 42 % reussissent.",
          "Construire l'arbre pondere.",
          "Calculer la probabilite qu'un eleve choisi au hasard reussisse.",
          "Sachant qu'un eleve a reussi, calculer la probabilite qu'il ait suivi la preparation.",
          "Interpreter le resultat en une phrase claire."
        ],
        correction: "P(R)=0,65x0,78+0,35x0,42=0,654. P(P|R)=P(P inter R)/P(R)=0,507/0,654 environ 0,775. Donc environ 77,5 % des eleves qui reussissent avaient suivi la preparation."
      }
    ]
  },
  {
    id: "pc-bac-1",
    subject: "Physique-Chimie",
    title: "Sujet d'entrainement 2 - Electricite, mecanique et dosage",
    duration: "2 h",
    points: "20 points",
    instructions: [
      "Toujours ecrire la formule avant l'application numerique.",
      "Convertir les unites avant de calculer.",
      "Presenter les resultats avec unite et phrase de conclusion."
    ],
    exercises: [
      {
        title: "Exercice 1 - Circuit RC",
        points: "7 pts",
        questions: [
          "Un condensateur C=220 microF est charge a travers R=1,5 kOhm par un generateur E=12 V. Calculer la constante de temps tau.",
          "Ecrire l'expression de uC(t) pendant la charge.",
          "Calculer uC(tau).",
          "Determiner l'energie stockee dans le condensateur en regime permanent.",
          "Expliquer pourquoi le courant devient presque nul en regime permanent."
        ],
        correction: "tau=RC=1500x220x10^-6=0,33 s. uC(t)=E(1-exp(-t/tau)). uC(tau)=0,63E environ 7,56 V. Energie : Ec=1/2 C E^2=0,5x220x10^-6x144=0,01584 J. En regime permanent, le condensateur bloque le courant continu."
      },
      {
        title: "Exercice 2 - Plan incline",
        points: "6 pts",
        questions: [
          "Un solide de masse 0,80 kg glisse sans frottement sur un plan incline de 25 degres. Faire le bilan des forces.",
          "Projeter la deuxieme loi de Newton selon l'axe du mouvement.",
          "Calculer l'acceleration avec g=9,8 m/s^2.",
          "Le solide part du repos. Calculer sa vitesse apres 3,0 s.",
          "Calculer la distance parcourue pendant ces 3,0 s."
        ],
        correction: "Forces : poids et reaction normale. Sur l'axe : mg sin(25)=ma, donc a=g sin(25) environ 4,14 m/s^2. v=at=12,4 m/s. d=1/2 at^2 environ 18,6 m."
      },
      {
        title: "Exercice 3 - Dosage acide-base",
        points: "7 pts",
        questions: [
          "On dose 25,0 mL d'un acide AH par une solution de soude Cb=0,100 mol/L. L'equivalence est obtenue pour VbE=18,6 mL.",
          "Ecrire l'equation de la reaction.",
          "Determiner la concentration Ca de l'acide.",
          "Expliquer comment reperer l'equivalence sur une courbe pH=f(Vb).",
          "Citer deux precautions experimentales pour limiter les erreurs."
        ],
        correction: "AH+HO- -> A- + H2O. A l'equivalence : CaVa=CbVbE, donc Ca=0,100x18,6/25,0=0,0744 mol/L. L'equivalence correspond au saut de pH ou au point d'inflexion. Precautions : rinçage correct, lecture au bas du menisque, ajout goutte a goutte pres de l'equivalence."
      }
    ]
  },
  {
    id: "svt-bac-1",
    subject: "SVT",
    title: "Sujet d'entrainement 3 - Genetique, immunologie et reflexe",
    duration: "1 h 45",
    points: "20 points",
    instructions: [
      "Repondre avec des phrases scientifiques courtes.",
      "Toujours relier observation, connaissance et conclusion.",
      "Faire au moins un schema propre et legende."
    ],
    exercises: [
      {
        title: "Exercice 1 - Heredite",
        points: "7 pts",
        questions: [
          "Une maladie genetique apparait chez une fille alors que ses deux parents sont sains.",
          "Proposer le mode de transmission le plus probable et justifier.",
          "Donner les genotypes probables des parents.",
          "Calculer le risque d'avoir un nouvel enfant malade.",
          "Expliquer les mots genotype, phenotype, allele dominant et allele recessif."
        ],
        correction: "Parents sains avec enfant malade : transmission recessive probable. Parents porteurs Aa et Aa. Risque aa=1/4 soit 25 %. Genotype : ensemble d'alleles ; phenotype : caractere observable ; dominant s'exprime avec un seul allele ; recessif s'exprime surtout a l'etat homozygote."
      },
      {
        title: "Exercice 2 - Vaccination",
        points: "6 pts",
        questions: [
          "Apres vaccination, une deuxieme exposition au meme antigene provoque une production rapide d'anticorps.",
          "Expliquer le role des lymphocytes memoires.",
          "Nommer les cellules qui produisent les anticorps.",
          "Montrer l'interet collectif de la vaccination.",
          "Dire pourquoi la reponse immunitaire est specifique."
        ],
        correction: "Les lymphocytes memoires gardent l'information du premier contact. Les lymphocytes B deviennent plasmocytes producteurs d'anticorps. La vaccination protege l'individu et reduit la circulation de l'agent infectieux. La specificite vient de la reconnaissance antigene/anticorps."
      },
      {
        title: "Exercice 3 - Reflexe nerveux",
        points: "7 pts",
        questions: [
          "Lorsqu'on touche un objet tres chaud, la main se retire rapidement.",
          "Reconstituer le trajet du message nerveux.",
          "Distinguer message sensitif et message moteur.",
          "Expliquer le role de la moelle epiniere.",
          "Realiser un schema fonctionnel du reflexe."
        ],
        correction: "Recepteur cutane -> neurone sensitif -> moelle epiniere -> neurone moteur -> muscle. Le message sensitif va vers le centre nerveux ; le message moteur va vers le muscle. La moelle epiniere permet une reponse rapide sans attendre une decision consciente."
      }
    ]
  },
  {
    id: "philo-bac-1",
    subject: "Philosophie",
    title: "Sujet d'entrainement 4 - Dissertation",
    duration: "2 h",
    points: "20 points",
    instructions: [
      "Ne pas rediger directement : preparer d'abord le probleme et le plan.",
      "Utiliser des exemples precis.",
      "Soigner introduction et conclusion."
    ],
    exercises: [
      {
        title: "Sujet au choix 1",
        points: "20 pts",
        questions: [
          "La liberte consiste-t-elle a faire ce que l'on veut ?",
          "Travail demande : analyser les termes, formuler une problematique, construire un plan detaille, rediger l'introduction et une conclusion."
        ],
        correction: "Probleme : suivre tous ses desirs peut sembler libre, mais peut aussi rendre esclave des passions. Plan possible : I. La liberte comme absence de contrainte. II. Les limites du desir et de l'arbitraire. III. La vraie liberte comme autonomie, raison et responsabilite."
      },
      {
        title: "Sujet au choix 2",
        points: "20 pts",
        questions: [
          "La science peut-elle tout expliquer ?",
          "Travail demande : proposer deux exemples scientifiques et une limite non scientifique ou morale."
        ],
        correction: "La science explique par observation, experience et demonstration. Mais elle ne repond pas toujours aux questions du sens, de la morale ou de la valeur. Plan possible : puissance explicative ; limites ; complementarite avec philosophie et ethique."
      }
    ]
  },
  {
    id: "francais-bac-1",
    subject: "Francais",
    title: "Sujet d'entrainement 5 - Resume et discussion",
    duration: "2 h",
    points: "20 points",
    instructions: [
      "Lire le texte deux fois avant de repondre.",
      "Dans le resume : rester fidele, neutre et concis.",
      "Dans la discussion : argumenter avec exemples."
    ],
    exercises: [
      {
        title: "Texte support",
        points: "8 pts",
        questions: [
          "La lecture forme l'esprit. Elle enrichit le vocabulaire, developpe l'imagination et apprend a organiser sa pensee. Pourtant, beaucoup de jeunes lui preferent les ecrans, plus rapides et plus seduisants. Les images donnent l'impression de comprendre sans effort. Mais comprendre vraiment exige du temps, de l'attention et une confrontation avec des idees complexes. L'ecole doit donc reconcilier les jeunes avec la lecture, non en rejetant le numerique, mais en montrant que livre et technologie peuvent se completer.",
          "Resume ce texte au tiers de sa longueur environ.",
          "Degage la these de l'auteur.",
          "Trouve deux arguments utilises dans le texte."
        ],
        correction: "These : la lecture reste essentielle a la formation de l'esprit, meme si le numerique peut la completer. Arguments : enrichissement du vocabulaire ; organisation de la pensee ; les ecrans donnent parfois une comprehension superficielle."
      },
      {
        title: "Discussion",
        points: "12 pts",
        questions: [
          "Sujet : Les ecrans menacent-ils la reussite scolaire des jeunes ?",
          "Rediger une introduction.",
          "Developper deux arguments pour et deux arguments contre.",
          "Conclure par une position nuancee."
        ],
        correction: "Position nuancee : les ecrans peuvent distraire et reduire l'attention, mais bien utilises ils donnent acces a des cours, dictionnaires, videos et exercices. La reussite depend de l'encadrement, de la discipline et du choix des contenus."
      }
    ]
  },
  {
    id: "anglais-bac-1",
    subject: "Anglais",
    title: "Sujet d'entrainement 6 - Reading and essay",
    duration: "1 h 30",
    points: "20 points",
    instructions: [
      "Answer in complete sentences.",
      "Use simple, correct English.",
      "For the essay, write a short introduction, arguments and conclusion."
    ],
    exercises: [
      {
        title: "Reading comprehension",
        points: "10 pts",
        questions: [
          "Text: Many African students use the internet to prepare for exams. Online lessons, videos and discussion groups can help them understand difficult topics. However, social media can also waste their time and expose them to false information. To succeed, students should choose reliable sources, plan their study time and avoid distractions.",
          "What is the main idea of the text?",
          "Give two advantages of the internet for students.",
          "Give two dangers mentioned in the text.",
          "What advice does the text give to students?"
        ],
        correction: "Main idea: the internet can help students prepare for exams if they use it responsibly. Advantages: online lessons, videos, discussion groups. Dangers: wasting time, false information, distraction. Advice: choose reliable sources, plan study time, avoid distractions."
      },
      {
        title: "Essay",
        points: "10 pts",
        questions: [
          "Topic: Should students use social media during exam preparation?",
          "Write 120 to 180 words.",
          "Use connectors: firstly, however, moreover, therefore, in conclusion."
        ],
        correction: "A strong answer is balanced: social media can help through study groups and quick information, but it can distract students and spread false information. Conclusion: students may use it only with discipline and clear study goals."
      }
    ]
  },
  {
    id: "hg-bac-1",
    subject: "Histoire-Geographie",
    title: "Sujet d'entrainement 7 - Afrique et mondialisation",
    duration: "1 h 30",
    points: "20 points",
    instructions: [
      "Definir les mots importants.",
      "Utiliser des exemples precis.",
      "Organiser la reponse en paragraphes."
    ],
    exercises: [
      {
        title: "Geographie",
        points: "10 pts",
        questions: [
          "Sujet : Les pays africains face a la mondialisation.",
          "Definir mondialisation.",
          "Presenter deux opportunites pour les pays africains.",
          "Presenter deux limites ou dangers.",
          "Conclure par deux conditions pour mieux profiter de la mondialisation."
        ],
        correction: "Opportunites : investissements, marches, technologies, echanges. Limites : dependance, concurrence, inegalites, exploitation des ressources. Conditions : formation, industrialisation, bonne gouvernance, integration regionale."
      },
      {
        title: "Histoire",
        points: "10 pts",
        questions: [
          "Sujet : Les facteurs des independances africaines apres 1945.",
          "Presenter deux facteurs internes.",
          "Presenter deux facteurs externes.",
          "Citer des acteurs ou organisations utiles.",
          "Rediger une conclusion de synthese."
        ],
        correction: "Facteurs internes : nationalisme, partis politiques, syndicats, anciens combattants. Facteurs externes : affaiblissement des puissances europeennes, ONU, guerre froide, exemple des independances asiatiques. Acteurs : leaders nationalistes, mouvements politiques, ONU."
      }
    ]
  }
];

const state = {
  score: Number(localStorage.getItem("bacd-score") || 0),
  done: JSON.parse(localStorage.getItem("bacd-done") || "[]"),
  history: JSON.parse(localStorage.getItem("bacd-history") || "[]"),
  examDate: localStorage.getItem("bacd-date") || guessExamDate(),
  selectedSubject: "Mathématiques",
  selectedWorksheet: localStorage.getItem("bacd-worksheet") || "math-bac-1",
  timerId: null,
  remaining: 0
};

function guessExamDate() {
  const date = new Date();
  date.setDate(date.getDate() + 6);
  return date.toISOString().slice(0, 10);
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function save() {
  localStorage.setItem("bacd-score", String(state.score));
  localStorage.setItem("bacd-done", JSON.stringify(state.done));
  localStorage.setItem("bacd-history", JSON.stringify(state.history));
  localStorage.setItem("bacd-date", state.examDate);
  renderProgress();
}

function addHistory(label, points) {
  state.score += points;
  state.history.unshift({
    label,
    points,
    time: new Date().toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" })
  });
  state.history = state.history.slice(0, 30);
  save();
}

function switchView(view) {
  $$(".view").forEach((item) => item.classList.remove("active"));
  $$(".nav").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.getElementById(view).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCountdown() {
  $("#examDate").value = state.examDate;
  const target = new Date(`${state.examDate}T00:00:00`);
  const now = new Date();
  const diff = Math.ceil((target - now) / 86400000);
  $("#daysLeft").textContent = diff <= 0 ? "JOUR J" : `J-${diff}`;
}

function renderPlan() {
  $("#planList").innerHTML = plan.map((day, dayIndex) => `
    <article class="plan-day">
      <div class="day-badge">${day.day}<br>${day.focus}</div>
      <div class="task-list">
        ${day.tasks.map((task, taskIndex) => {
          const id = `plan-${dayIndex}-${taskIndex}`;
          const done = state.done.includes(id);
          return `
            <div class="task ${done ? "done" : ""}">
              <span>${task}</span>
              <button class="task-button" data-task="${id}" data-label="${day.day} : ${task.replaceAll('"', "'")}">${done ? "Validé" : "Valider"}</button>
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderSubjectMenu() {
  $("#subjectMenu").innerHTML = subjects.map((subject) => `
    <button class="subject-button ${subject.name === state.selectedSubject ? "active" : ""}" data-subject="${subject.name}">
      ${subject.name}<br><small>${subject.coef}</small>
    </button>
  `).join("");
}

function renderSubjectPanel() {
  const subject = subjects.find((item) => item.name === state.selectedSubject);
  $("#subjectPanel").innerHTML = `
    <p class="eyebrow">${subject.coef}</p>
    <h2>${subject.name}</h2>
    <div class="pill-row">
      ${subject.themes.map((theme) => `<span class="pill">${theme}</span>`).join("")}
    </div>
    <div class="method-grid">
      ${subject.methods.map((method) => `<article class="method-card">${method}</article>`).join("")}
    </div>
    <h3>Exercices types à faire aujourd’hui</h3>
    ${subject.exercises.map((exercise) => `
      <details class="exercise-card">
        <summary>${exercise.title}</summary>
        <p><strong>Énoncé :</strong> ${exercise.prompt}</p>
        <p><strong>Correction rapide :</strong> ${exercise.correction}</p>
      </details>
    `).join("")}
    <button class="primary" data-review="${subject.name}">J’ai travaillé cette matière</button>
  `;
}

function renderExamOptions() {
  $("#examSubject").innerHTML = subjects.map((subject) => `
    <option value="${subject.name}">${subject.name}</option>
  `).join("");
}

function renderPaper() {
  const subject = $("#examSubject").value;
  $("#paperTitle").textContent = `Sujet blanc : ${subject}`;
  $("#paperBody").innerHTML = `<ol>${examPapers[subject].map((item) => `<li>${item}</li>`).join("")}</ol>`;
}

function renderWorksheetOptions() {
  $("#worksheetSelect").innerHTML = worksheets.map((sheet) => `
    <option value="${sheet.id}">${sheet.subject} - ${sheet.title}</option>
  `).join("");
  $("#worksheetSelect").value = state.selectedWorksheet;
}

function renderWorksheet() {
  const sheet = worksheets.find((item) => item.id === state.selectedWorksheet) || worksheets[0];
  $("#worksheetSheet").innerHTML = `
    <div class="worksheet-head">
      <div>
        <p class="eyebrow">Objectif BAC D 2026 - Cote d'Ivoire</p>
        <h2>${sheet.title}</h2>
        <p>Sujet d'entrainement original inspire du format BAC, pour revision intensive.</p>
      </div>
      <div class="student-box">
        <strong>Candidate</strong>
        <span>${studentName}</span>
        <strong>Classe</strong>
        <span>Terminale D</span>
      </div>
    </div>
    <div class="worksheet-meta">
      <span><strong>Matiere :</strong> ${sheet.subject}</span>
      <span><strong>Duree conseillee :</strong> ${sheet.duration}</span>
      <span><strong>Bareme :</strong> ${sheet.points}</span>
    </div>
    <div class="worksheet-instructions">
      ${sheet.instructions.map((instruction) => `<span>${instruction}</span>`).join("")}
    </div>
    ${sheet.exercises.map((exercise, index) => `
      <section class="worksheet-exercise">
        <h3><span>${exercise.title}</span><span>${exercise.points}</span></h3>
        <ol>
          ${exercise.questions.map((question) => `<li>${question}</li>`).join("")}
        </ol>
        <div class="answer-lines" aria-label="Espace de reponse">
          ${Array.from({ length: index === 0 ? 9 : 7 }, () => "<span></span>").join("")}
        </div>
        <details class="correction-block">
          <summary>Correction guidee - a ouvrir apres la tentative</summary>
          <p>${exercise.correction}</p>
        </details>
      </section>
    `).join("")}
  `;
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function startExam() {
  clearInterval(state.timerId);
  state.remaining = Number($("#examDuration").value) * 60;
  $("#timer").textContent = formatTime(state.remaining);
  $("#examStatus").textContent = "Session en cours. Silence, brouillon, concentration.";
  renderPaper();
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    $("#timer").textContent = formatTime(Math.max(0, state.remaining));
    if (state.remaining <= 0) {
      finishExam();
    }
  }, 1000);
}

function finishExam() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  $("#examStatus").textContent = "Session terminée. Place à la correction.";
  addHistory(`Sujet blanc ${$("#examSubject").value}`, 15);
}

function saveAnswer() {
  const answer = $("#studentAnswer").value.trim();
  if (!answer) {
    $("#examStatus").textContent = "Ajoute au moins quelques lignes avant d’enregistrer.";
    return;
  }
  addHistory(`Tentative enregistrée : ${$("#examSubject").value}`, 5);
  $("#examStatus").textContent = "Tentative enregistrée dans le suivi.";
}

function renderProgress() {
  $("#scoreMetric").textContent = state.score;
  $("#doneMetric").textContent = state.done.length;
  $("#weakMetric").textContent = findWeakSubject();
  $("#progressScore").textContent = state.score;
  $("#progressCount").textContent = state.done.length + state.history.length;
  $("#progressLast").textContent = state.history[0]?.label || "Aucune";
  $("#history").innerHTML = state.history.length
    ? state.history.map((item) => `
      <div class="history-item">
        <span>${item.label}<br><small>${item.time}</small></span>
        <strong>+${item.points}</strong>
      </div>
    `).join("")
    : "<p>Aucune activité enregistrée pour le moment.</p>";
}

function findWeakSubject() {
  const counts = Object.fromEntries(subjects.map((subject) => [subject.name, 0]));
  state.history.forEach((item) => {
    subjects.forEach((subject) => {
      if (item.label.includes(subject.name)) counts[subject.name] += 1;
    });
  });
  return Object.entries(counts).sort((a, b) => a[1] - b[1])[0][0];
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  const jump = event.target.closest("[data-jump]");
  const task = event.target.closest("[data-task]");
  const subject = event.target.closest("[data-subject]");
  const review = event.target.closest("[data-review]");

  if (nav) switchView(nav.dataset.view);
  if (jump) switchView(jump.dataset.jump);
  if (task) {
    if (!state.done.includes(task.dataset.task)) {
      state.done.push(task.dataset.task);
      addHistory(task.dataset.label, 4);
      renderPlan();
    }
  }
  if (subject) {
    state.selectedSubject = subject.dataset.subject;
    renderSubjectMenu();
    renderSubjectPanel();
  }
  if (review) addHistory(`Révision ${review.dataset.review}`, 8);
});

$("#examDate").addEventListener("change", (event) => {
  state.examDate = event.target.value;
  save();
  renderCountdown();
});

$("#examSubject").addEventListener("change", renderPaper);
$("#worksheetSelect").addEventListener("change", (event) => {
  state.selectedWorksheet = event.target.value;
  localStorage.setItem("bacd-worksheet", state.selectedWorksheet);
  renderWorksheet();
});
$("#printWorksheet").addEventListener("click", () => {
  switchView("worksheets");
  window.print();
});
$("#markWorksheet").addEventListener("click", () => {
  const sheet = worksheets.find((item) => item.id === state.selectedWorksheet);
  addHistory(`Fiche traitee par ${studentName} : ${sheet.title}`, 20);
});
$("#startExam").addEventListener("click", startExam);
$("#finishExam").addEventListener("click", finishExam);
$("#saveAnswer").addEventListener("click", saveAnswer);
$("#resetProgress").addEventListener("click", () => {
  state.score = 0;
  state.done = [];
  state.history = [];
  save();
  renderPlan();
});

renderCountdown();
renderPlan();
renderSubjectMenu();
renderSubjectPanel();
renderExamOptions();
renderPaper();
renderWorksheetOptions();
renderWorksheet();
renderProgress();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
