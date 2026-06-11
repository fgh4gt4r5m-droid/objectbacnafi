const studentName = "FOFANA ASSITA ALEXANDRA";

const subjects = [
  {
    id: "math",
    name: "Mathematiques",
    priority: "Tres prioritaire",
    course: [
      {
        title: "Fonctions et limites",
        key: "Savoir trouver le domaine, calculer les limites, et dresser un tableau de variations.",
        content: "Avant toute etude, Assita doit ecrire le domaine de definition. Ensuite elle calcule les limites aux bornes, derive la fonction, et utilise le signe de la derivee pour obtenir les variations.",
        method: ["Domaine", "Limites", "Derivee", "Signe", "Tableau", "Conclusion"]
      },
      {
        title: "Suites numeriques",
        key: "Montrer la monotonie, l'encadrement et la convergence.",
        content: "Pour une suite recurrente, commencer par une recurrence simple pour prouver que les termes existent et restent dans un intervalle. Ensuite comparer u(n+1)-u(n), puis determiner la limite avec l'equation L=f(L).",
        method: ["Recurrence", "Monotonie", "Encadrement", "Convergence", "Limite"]
      },
      {
        title: "Probabilites conditionnelles",
        key: "Ne pas confondre P(A sachant B) et P(B sachant A).",
        content: "Construire un arbre pondere, calculer les intersections avec des produits, puis utiliser la formule P(A|B)=P(A inter B)/P(B).",
        method: ["Arbre", "Intersection", "Probabilite totale", "Conditionnement"]
      }
    ],
    exercises: [
      {
        title: "Fonction logarithme",
        points: "8 pts",
        statement: "Soit f(x)=x-2+ln(x)/x sur ]0;+infini[. 1) Calculer les limites aux bornes. 2) Montrer que f'(x)=1+(1-ln(x))/x^2. 3) Etudier les variations. 4) Montrer que f(x)=0 admet une unique solution sur [1;3].",
        correction: "La limite en 0+ est -infini, en +infini elle vaut +infini. La derivee vient de (ln x / x)'=(1-ln x)/x^2. L'unicite s'obtient avec continuite et stricte croissance."
      },
      {
        title: "Suite recurrente",
        points: "7 pts",
        statement: "u0=2 et u(n+1)=(3u(n)+4)/(u(n)+5). Montrer que u(n)>0, etudier la convergence, puis determiner la limite possible.",
        correction: "La positivite se prouve par recurrence. La limite L verifie L=(3L+4)/(L+5), donc L^2+2L-4=0. On retient la racine positive."
      },
      {
        title: "Probabilites",
        points: "5 pts",
        statement: "65% des candidats suivent une preparation. 78% d'entre eux reussissent un test. Parmi les autres, 42% reussissent. Calculer P(reussite), puis la probabilite qu'un candidat ayant reussi ait suivi la preparation.",
        correction: "P(R)=0,65x0,78+0,35x0,42=0,654. P(P|R)=0,507/0,654 environ 0,775."
      }
    ],
    exam: {
      duration: 180,
      sections: [
        "Exercice 1, 5 pts : suite recurrente, recurrence, monotonie, limite.",
        "Exercice 2, 7 pts : etude complete d'une fonction logarithme.",
        "Exercice 3, 4 pts : probabilites conditionnelles avec arbre pondere.",
        "Exercice 4, 4 pts : nombres complexes, module, argument et interpretation geometrique."
      ]
    }
  },
  {
    id: "pc",
    name: "Physique-Chimie",
    priority: "Tres prioritaire",
    course: [
      {
        title: "Circuit RC",
        key: "Comprendre la constante de temps et l'evolution de la tension.",
        content: "En charge, uC(t)=E(1-exp(-t/RC)). La constante tau=RC donne l'ordre de grandeur de la duree de charge. A t=tau, uC vaut environ 63% de E.",
        method: ["Schema", "Tau=RC", "Expression", "Application numerique", "Interpretation"]
      },
      {
        title: "Mecanique",
        key: "Bilan des forces et projection de Newton.",
        content: "Toujours dessiner le systeme, choisir l'axe, faire le bilan des forces, puis projeter la deuxieme loi de Newton. Les unites doivent etre verifiees avant le calcul.",
        method: ["Systeme", "Forces", "Axe", "Projection", "Calcul"]
      },
      {
        title: "Dosage acide-base",
        key: "A l'equivalence, les reactifs sont dans les proportions stoechiometriques.",
        content: "Pour une reaction 1:1, CaVa=CbVbE. Sur une courbe pH=f(V), l'equivalence se repere au saut de pH ou au point d'inflexion.",
        method: ["Equation", "Tableau", "Equivalence", "Concentration", "Conclusion"]
      }
    ],
    exercises: [
      {
        title: "Circuit RC",
        points: "7 pts",
        statement: "C=220 microF, R=1,5 kOhm, E=12 V. Calculer tau, uC(tau), et l'energie stockee en regime permanent.",
        correction: "tau=0,33 s. uC(tau)=0,63E environ 7,56 V. Energie=1/2 CE^2=0,01584 J."
      },
      {
        title: "Plan incline",
        points: "6 pts",
        statement: "Un solide de 0,80 kg glisse sans frottement sur un plan incline de 25 degres. Calculer l'acceleration, la vitesse apres 3 s, puis la distance parcourue.",
        correction: "a=g sin(25) environ 4,14 m/s2. v=12,4 m/s. d=1/2 at2 environ 18,6 m."
      },
      {
        title: "Dosage",
        points: "7 pts",
        statement: "On dose 25,0 mL d'un acide AH par NaOH Cb=0,100 mol/L. VbE=18,6 mL. Trouver Ca et expliquer l'equivalence.",
        correction: "Ca=CbVbE/Va=0,100x18,6/25,0=0,0744 mol/L. L'equivalence est le saut de pH."
      }
    ],
    exam: {
      duration: 180,
      sections: [
        "Physique, 6 pts : circuit RC, constante de temps, courbe et energie.",
        "Physique, 5 pts : mecanique sur plan incline ou projectile.",
        "Chimie, 6 pts : dosage acide-base et concentration.",
        "Chimie, 3 pts : oxydoreduction ou cinetique."
      ]
    }
  },
  {
    id: "svt",
    name: "SVT",
    priority: "Prioritaire",
    course: [
      {
        title: "Genetique",
        key: "Relier arbre genealogique, genotype et phenotype.",
        content: "Si deux parents sains ont un enfant malade, on soupconne souvent une transmission recessive. Le raisonnement doit expliquer les genotypes probables.",
        method: ["Observation", "Hypothese", "Genotypes", "Croisement", "Risque"]
      },
      {
        title: "Immunologie",
        key: "Vaccination, anticorps et memoire immunitaire.",
        content: "La vaccination prepare le systeme immunitaire. Lors d'un second contact, les lymphocytes memoires permettent une reponse plus rapide et plus forte.",
        method: ["Antigene", "Lymphocytes", "Anticorps", "Memoire", "Protection"]
      },
      {
        title: "Reflexe nerveux",
        key: "Message sensitif, centre nerveux, message moteur.",
        content: "Le trajet du reflexe est rapide : recepteur, neurone sensitif, moelle epiniere, neurone moteur, muscle.",
        method: ["Recepteur", "Sensitif", "Moelle", "Moteur", "Muscle"]
      }
    ],
    exercises: [
      {
        title: "Heredite",
        points: "7 pts",
        statement: "Une fille malade nait de deux parents sains. Proposer le mode de transmission, les genotypes et le risque pour un autre enfant.",
        correction: "Transmission recessive probable. Parents Aa et Aa. Risque aa=25%."
      },
      {
        title: "Vaccination",
        points: "6 pts",
        statement: "Expliquer pourquoi la production d'anticorps est plus rapide au second contact avec le meme antigene.",
        correction: "Les lymphocytes memoires declenchent une reponse secondaire plus rapide. Les plasmocytes produisent les anticorps."
      },
      {
        title: "Reflexe",
        points: "7 pts",
        statement: "Reconstituer le trajet du message nerveux lorsqu'une main touche un objet chaud. Faire un schema legende.",
        correction: "Recepteur cutane -> neurone sensitif -> moelle epiniere -> neurone moteur -> muscle."
      }
    ],
    exam: {
      duration: 120,
      sections: [
        "Partie A, 7 pts : genetique et arbre genealogique.",
        "Partie B, 6 pts : immunologie et vaccination.",
        "Partie C, 7 pts : communication nerveuse et schema fonctionnel."
      ]
    }
  },
  {
    id: "philo",
    name: "Philosophie",
    priority: "A securiser",
    course: [
      {
        title: "Dissertation",
        key: "Problematique claire et plan progressif.",
        content: "Une bonne copie ne recite pas le cours. Elle transforme le sujet en probleme, definit les termes, puis construit une reponse organisee.",
        method: ["Definitions", "Probleme", "Problematique", "Plan", "Exemples"]
      },
      {
        title: "Notions probables",
        key: "Liberte, science, verite, Etat, travail.",
        content: "Assita doit preparer pour chaque notion une definition, deux theses opposees et deux exemples simples.",
        method: ["Definition", "These", "Antithese", "Exemple", "Conclusion"]
      }
    ],
    exercises: [
      {
        title: "Sujet 1",
        points: "20 pts",
        statement: "La liberte consiste-t-elle a faire ce que l'on veut ? Preparer une introduction, une problematique et un plan detaille.",
        correction: "Plan possible : liberte comme absence de contrainte ; limites du desir ; liberte comme autonomie responsable."
      },
      {
        title: "Sujet 2",
        points: "20 pts",
        statement: "La science peut-elle tout expliquer ? Construire une dissertation avec exemples.",
        correction: "La science explique beaucoup, mais ne repond pas toujours aux questions du sens, de la morale et de la valeur."
      }
    ],
    exam: {
      duration: 240,
      sections: [
        "Sujet 1 : La liberte consiste-t-elle a faire ce que l'on veut ?",
        "Sujet 2 : La science peut-elle remplacer la philosophie ?",
        "Sujet 3 : L'Etat limite-t-il ou garantit-il la liberte ?"
      ]
    }
  },
  {
    id: "fr",
    name: "Francais",
    priority: "A securiser",
    course: [
      {
        title: "Resume",
        key: "Fidelite, neutralite et concision.",
        content: "Le resume garde la these, les idees essentielles et l'ordre du texte. Il supprime exemples secondaires et repetitions.",
        method: ["Lire", "Souligner", "Regrouper", "Reformuler", "Verifier"]
      },
      {
        title: "Discussion",
        key: "Arguments solides et exemples concrets.",
        content: "Une discussion doit repondre au sujet, pas raconter le texte. Il faut une introduction, deux ou trois paragraphes argumentes et une conclusion nuancee.",
        method: ["These", "Arguments", "Exemples", "Nuance", "Conclusion"]
      }
    ],
    exercises: [
      {
        title: "Resume",
        points: "8 pts",
        statement: "La lecture forme l'esprit, enrichit le vocabulaire et aide a organiser la pensee. Les ecrans attirent les jeunes, mais ils peuvent donner une comprehension superficielle. Resume cette idee au tiers.",
        correction: "La lecture reste essentielle a la formation intellectuelle, meme si le numerique attire les jeunes. Les ecrans peuvent completer, mais ne remplacent pas l'effort de comprehension."
      },
      {
        title: "Discussion",
        points: "12 pts",
        statement: "Les ecrans menacent-ils la reussite scolaire des jeunes ? Rediger une introduction et deux axes.",
        correction: "Oui s'ils distraient ; non s'ils servent a apprendre. La reussite depend de la discipline et de l'encadrement."
      }
    ],
    exam: {
      duration: 180,
      sections: [
        "Texte argumentatif a resumer.",
        "Questions de comprehension.",
        "Discussion organisee avec exemples.",
        "Controle de langue et expression."
      ]
    }
  },
  {
    id: "en",
    name: "Anglais",
    priority: "A pratiquer",
    course: [
      {
        title: "Reading comprehension",
        key: "Lire les questions avant le texte.",
        content: "Chercher l'idee principale, les details, l'opinion de l'auteur et les mots de liaison.",
        method: ["Questions", "Main idea", "Details", "Vocabulary", "Answer"]
      },
      {
        title: "Essay",
        key: "Introduction, arguments, conclusion.",
        content: "Use simple and correct English. Prefer clear sentences to complicated sentences with mistakes.",
        method: ["Introduction", "For", "Against", "Conclusion", "Connectors"]
      }
    ],
    exercises: [
      {
        title: "Comprehension",
        points: "10 pts",
        statement: "Text idea: Internet helps students prepare exams, but social media can waste time. Give the main idea, two advantages and two dangers.",
        correction: "Main idea: internet is useful if used responsibly. Advantages: lessons, videos, groups. Dangers: distraction, false information."
      },
      {
        title: "Essay",
        points: "10 pts",
        statement: "Should students use social media during exam preparation? Write 120 to 180 words.",
        correction: "Balanced answer: useful for study groups, dangerous for distraction. Conclusion: use with discipline."
      }
    ],
    exam: {
      duration: 120,
      sections: [
        "Reading comprehension.",
        "Vocabulary and grammar.",
        "Short translation.",
        "Essay of 120 to 180 words."
      ]
    }
  },
  {
    id: "hg",
    name: "Histoire-Geographie",
    priority: "A consolider",
    course: [
      {
        title: "Mondialisation",
        key: "Opportunites et limites pour l'Afrique.",
        content: "La mondialisation ouvre les marches et les technologies, mais elle peut renforcer dependance, concurrence et inegalites.",
        method: ["Definition", "Acteurs", "Flux", "Opportunites", "Limites"]
      },
      {
        title: "Independances africaines",
        key: "Facteurs internes et externes apres 1945.",
        content: "Les independances s'expliquent par les mouvements nationalistes, les syndicats, les anciens combattants, l'ONU, la guerre froide et l'affaiblissement europeen.",
        method: ["Contexte", "Internes", "Externes", "Exemples", "Bilan"]
      }
    ],
    exercises: [
      {
        title: "Geographie",
        points: "10 pts",
        statement: "Les pays africains face a la mondialisation : definir, presenter deux opportunites et deux limites.",
        correction: "Opportunites : investissements, technologies. Limites : dependance, inegalites. Conditions : formation et bonne gouvernance."
      },
      {
        title: "Histoire",
        points: "10 pts",
        statement: "Presenter les facteurs des independances africaines apres 1945.",
        correction: "Facteurs internes : nationalisme, partis, syndicats. Facteurs externes : ONU, guerre froide, affaiblissement europeen."
      }
    ],
    exam: {
      duration: 120,
      sections: [
        "Question organisee en histoire.",
        "Question organisee en geographie.",
        "Definitions de notions.",
        "Conclusion avec exemples precis."
      ]
    }
  }
];

const state = {
  subjectId: localStorage.getItem("assita-subject") || "math",
  activeTab: localStorage.getItem("assita-tab") || "course",
  score: Number(localStorage.getItem("assita-score") || 0),
  completed: Number(localStorage.getItem("assita-completed") || 0),
  timerId: null,
  remaining: 0
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function currentSubject() {
  return subjects.find((subject) => subject.id === state.subjectId) || subjects[0];
}

function save() {
  localStorage.setItem("assita-subject", state.subjectId);
  localStorage.setItem("assita-tab", state.activeTab);
  localStorage.setItem("assita-score", String(state.score));
  localStorage.setItem("assita-completed", String(state.completed));
  $("#scoreCount").textContent = state.score;
  $("#completedCount").textContent = state.completed;
}

function markDone(points) {
  state.score += points;
  state.completed += 1;
  save();
}

function renderSubjects() {
  $("#subjectSelect").innerHTML = subjects.map((subject) => (
    `<option value="${subject.id}">${subject.name}</option>`
  )).join("");
  $("#subjectSelect").value = state.subjectId;

  $("#subjectGrid").innerHTML = subjects.map((subject) => `
    <button class="subject-card ${subject.id === state.subjectId ? "active" : ""}" data-subject="${subject.id}">
      <strong>${subject.name}</strong>
      <span>${subject.priority}</span>
    </button>
  `).join("");
}

function renderTabs() {
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.activeTab);
  });
  $$(".panel").forEach((panel) => panel.classList.remove("active"));
  $(`#${state.activeTab}Panel`).classList.add("active");
}

function renderCourse() {
  const subject = currentSubject();
  $("#coursePanel").innerHTML = `
    <div class="panel-layout">
      <div class="content-card">
        <p class="eyebrow">${studentName}</p>
        <h2>Cours - ${subject.name}</h2>
        <div class="lesson-list">
          ${subject.course.map((lesson) => `
            <article class="lesson-item">
              <h3>${lesson.title}</h3>
              <p><strong>A retenir :</strong> ${lesson.key}</p>
              <p>${lesson.content}</p>
              <div class="pill-row">
                ${lesson.method.map((item) => `<span class="pill">${item}</span>`).join("")}
              </div>
            </article>
          `).join("")}
        </div>
        <div class="actions">
          <button class="success" data-complete="5">Cours lu</button>
          <button class="secondary" data-print>Imprimer</button>
        </div>
      </div>
      <aside class="content-card">
        <p class="eyebrow">Methode premium</p>
        <h3>Comment travailler ce cours</h3>
        <p class="side-note">
          Assita lit une premiere fois, ferme l'ecran, puis recopie les mots cles sur papier.
          Ensuite seulement elle passe aux exercices. Ce petit decalage force la memorisation.
        </p>
      </aside>
    </div>
  `;
}

function renderPractice() {
  const subject = currentSubject();
  $("#practicePanel").innerHTML = `
    <div class="panel-layout">
      <div class="content-card">
        <p class="eyebrow">${studentName}</p>
        <h2>Exercices - ${subject.name}</h2>
        <div class="exercise-list">
          ${subject.exercises.map((exercise) => `
            <article class="exercise-item">
              <h3><span>${exercise.title}</span><span>${exercise.points}</span></h3>
              <p>${exercise.statement}</p>
              <div class="answer-space">
                ${Array.from({ length: 6 }, () => "<span></span>").join("")}
              </div>
              <details>
                <summary>Correction a ouvrir apres tentative</summary>
                <div class="correction">${exercise.correction}</div>
              </details>
            </article>
          `).join("")}
        </div>
        <div class="actions">
          <button class="success" data-complete="10">Exercices termines</button>
          <button class="secondary" data-print>Imprimer</button>
        </div>
      </div>
      <aside class="content-card">
        <p class="eyebrow">Regle stricte</p>
        <h3>Pas de correction avant 20 minutes</h3>
        <p class="side-note">
          La correction sert a apprendre, pas a deviner. Assita doit d'abord ecrire une vraie tentative,
          meme incomplete.
        </p>
      </aside>
    </div>
  `;
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function renderExam() {
  const subject = currentSubject();
  $("#examPanel").innerHTML = `
    <div class="panel-layout">
      <div class="exam-card">
        <p class="eyebrow">${studentName}</p>
        <h2>Epreuve realiste - ${subject.name}</h2>
        <div class="exam-tools">
          <button class="primary" id="startExam">Demarrer ${subject.exam.duration} min</button>
          <button class="secondary" id="stopExam">Terminer</button>
          <button class="secondary" data-print>Imprimer</button>
        </div>
        <div class="exam-section-list">
          ${subject.exam.sections.map((section, index) => `
            <article class="exam-section">
              <h3>Partie ${index + 1}</h3>
              <p>${section}</p>
              <div class="answer-space">
                ${Array.from({ length: 8 }, () => "<span></span>").join("")}
              </div>
            </article>
          `).join("")}
        </div>
        <h3>Zone de reponse numerique</h3>
        <textarea placeholder="Assita peut noter ici son plan, ses calculs ou les idees essentielles."></textarea>
        <div class="actions">
          <button class="success" data-complete="20">Epreuve terminee</button>
        </div>
      </div>
      <aside class="exam-card">
        <div class="timer">
          <div>
            <span>Temps restant</span>
            <strong id="timerDisplay">${formatTime(subject.exam.duration * 60)}</strong>
          </div>
        </div>
        <p class="side-note" id="timerStatus">
          Conditions examen : telephone eloigne, brouillon autorise, correction seulement a la fin.
        </p>
      </aside>
    </div>
  `;
}

function render() {
  const subject = currentSubject();
  $("#subjectTitle").textContent = subject.name;
  renderSubjects();
  renderTabs();
  renderCourse();
  renderPractice();
  renderExam();
  save();
}

function startTimer() {
  const subject = currentSubject();
  clearInterval(state.timerId);
  state.remaining = subject.exam.duration * 60;
  $("#timerStatus").textContent = "Epreuve en cours. Assita travaille comme le jour du BAC.";
  $("#timerDisplay").textContent = formatTime(state.remaining);
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    $("#timerDisplay").textContent = formatTime(Math.max(0, state.remaining));
    if (state.remaining <= 0) {
      clearInterval(state.timerId);
      $("#timerStatus").textContent = "Temps termine. Passer a la correction.";
    }
  }, 1000);
}

document.addEventListener("click", (event) => {
  const subjectButton = event.target.closest("[data-subject]");
  const tabButton = event.target.closest("[data-tab]");
  const completeButton = event.target.closest("[data-complete]");
  const printButton = event.target.closest("[data-print]");

  if (subjectButton) {
    state.subjectId = subjectButton.dataset.subject;
    render();
  }

  if (tabButton) {
    state.activeTab = tabButton.dataset.tab;
    renderTabs();
    save();
  }

  if (completeButton) {
    markDone(Number(completeButton.dataset.complete));
  }

  if (printButton) {
    window.print();
  }

  if (event.target.id === "startExam") {
    startTimer();
  }

  if (event.target.id === "stopExam") {
    clearInterval(state.timerId);
    $("#timerStatus").textContent = "Epreuve terminee. Corriger les erreurs importantes.";
  }
});

$("#subjectSelect").addEventListener("change", (event) => {
  state.subjectId = event.target.value;
  render();
});

render();
