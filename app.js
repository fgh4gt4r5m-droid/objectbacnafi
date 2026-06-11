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
        title: "Suites numériques",
        prompt: "On considère u0 = 2 et u(n+1) = 0,5u(n) + 3. Montrer que la suite converge et déterminer sa limite.",
        correction: "Si u(n) converge vers L, alors L = 0,5L + 3, donc L = 6. On étudie ensuite v(n)=u(n)-6 : v(n+1)=0,5v(n), donc v est géométrique et tend vers 0."
      },
      {
        title: "Étude de fonction",
        prompt: "Étudier les variations de f(x)=x²-4x+1 sur R, puis donner son minimum.",
        correction: "f'(x)=2x-4. Elle est négative avant 2 et positive après 2. Le minimum est f(2)=-3."
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
        title: "Circuit électrique",
        prompt: "Un conducteur ohmique de résistance R = 20 Ω est traversé par I = 0,30 A. Calculer la tension et la puissance reçue.",
        correction: "U = R × I = 20 × 0,30 = 6 V. P = U × I = 6 × 0,30 = 1,8 W."
      },
      {
        title: "Dosage acide-base",
        prompt: "À l’équivalence d’un dosage, rappeler la relation entre les quantités de matière pour une réaction 1:1.",
        correction: "À l’équivalence, les réactifs sont introduits dans les proportions stœchiométriques : n(acide) = n(base), donc CₐVₐ = CᵦVᵦ si les coefficients valent 1."
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
        title: "Génétique",
        prompt: "Deux parents hétérozygotes Aa ont un enfant. Donner les génotypes possibles et les proportions.",
        correction: "Croisement Aa × Aa : AA 25 %, Aa 50 %, aa 25 %. Si A domine a, le phénotype dominant apparaît dans 75 % des cas."
      },
      {
        title: "Immunologie",
        prompt: "Expliquer le rôle des anticorps lors d’une infection.",
        correction: "Les anticorps reconnaissent spécifiquement un antigène, facilitent sa neutralisation et participent à son élimination par les cellules immunitaires."
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
        title: "Dissertation",
        prompt: "Sujet type : La science peut-elle tout expliquer ? Proposer une problématique et un plan.",
        correction: "Problématique possible : la méthode scientifique suffit-elle à rendre compte de toute réalité ? Plan : puissance de la science ; limites devant le sens, la morale et la subjectivité ; complémentarité avec d’autres formes de pensée."
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
        title: "Discussion",
        prompt: "Rédiger un plan sur : Les nouvelles technologies favorisent-elles la réussite scolaire ?",
        correction: "Plan possible : elles facilitent l’accès au savoir ; elles peuvent distraire ; leur efficacité dépend de l’encadrement et de la méthode de travail."
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
        title: "Essay",
        prompt: "Write 8 lines about how students can use the internet responsibly.",
        correction: "Plan: introduction, two advantages, two risks, conclusion. Useful words: responsibly, reliable sources, distraction, improve, learning."
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
        title: "Question organisée",
        prompt: "Montrer deux avantages et deux limites de la mondialisation pour les pays africains.",
        correction: "Avantages : échanges, investissements, accès aux technologies. Limites : dépendance, inégalités, concurrence, pression sur les ressources."
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
    "Étudier les variations d’une fonction rationnelle ou polynomiale.",
    "Résoudre une question sur les suites : monotonie, limite, somme.",
    "Traiter un exercice de probabilités avec arbre ou loi binomiale.",
    "Rédiger proprement les conclusions et vérifier les domaines."
  ],
  "Physique-Chimie": [
    "Analyser un circuit ou un mouvement avec schéma et unités.",
    "Établir une relation entre grandeurs puis faire l’application numérique.",
    "Traiter un dosage acide-base avec équivalence.",
    "Conclure avec une phrase physique ou chimique, pas seulement un chiffre."
  ],
  "SVT": [
    "Exploiter un document scientifique et relever les indices.",
    "Construire une réponse organisée avec vocabulaire précis.",
    "Produire ou compléter un schéma légendé.",
    "Relier observation, connaissance et conclusion."
  ],
  "Philosophie": [
    "Analyser le sujet et définir les notions.",
    "Formuler une problématique.",
    "Construire un plan en deux ou trois parties.",
    "Rédiger introduction et conclusion."
  ],
  "Français": [
    "Lire le texte, relever la thèse et les arguments.",
    "Rédiger un résumé fidèle et neutre.",
    "Préparer une discussion avec exemples.",
    "Soigner orthographe, ponctuation et transitions."
  ],
  "Anglais": [
    "Read the text and identify the main idea.",
    "Answer comprehension questions in complete sentences.",
    "Revise grammar: tenses, modals, connectors.",
    "Write a short essay with introduction, arguments and conclusion."
  ],
  "Histoire-Géographie": [
    "Définir le sujet, les bornes et les mots clés.",
    "Mobiliser dates, lieux, acteurs et exemples.",
    "Organiser la réponse en paragraphes clairs.",
    "Ajouter une ouverture ou un bilan en conclusion."
  ]
};

const state = {
  score: Number(localStorage.getItem("bacd-score") || 0),
  done: JSON.parse(localStorage.getItem("bacd-done") || "[]"),
  history: JSON.parse(localStorage.getItem("bacd-history") || "[]"),
  examDate: localStorage.getItem("bacd-date") || guessExamDate(),
  selectedSubject: "Mathématiques",
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
renderProgress();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
