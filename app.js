"use strict";

const lessons = [
  {
    year: 3,
    title: "Zgradba in poimenovanje",
    short: "Zgradba in imena",
    description: "Spoznajte ogljikove vezi, molekulske formule in osnovno poimenovanje organskih spojin.",
    questions: [
      {
        prompt: "Koliko kovalentnih vezi običajno tvori atom ogljika v organskih molekulah?",
        reaction: "ogljik  →  ? vezi",
        context: "Pomislite na značilno valenco ogljika.",
        options: ["Ena", "Dve", "Tri", "Štiri"],
        answer: 3,
        explanation: "Ogljik je štirivalenten: v organskih molekulah običajno tvori štiri kovalentne vezi. Te so lahko enojne, dvojne ali trojne, njihov skupni red vezi na posameznem ogljiku pa je štiri."
      },
      {
        prompt: "Katero ime ima ravnoverižni alkan s štirimi ogljikovimi atomi?",
        reaction: "CH₃–CH₂–CH₂–CH₃",
        context: "Predpone po številu ogljikov: met-, et-, prop-, but-.",
        options: ["Propan", "Butan", "Pentan", "Butil"],
        answer: 1,
        explanation: "Molekula ima štiri ogljikove atome, zato uporabimo predpono but-. Ker vsebuje samo enojne vezi, je alkan s končnico -an: butan."
      },
      {
        prompt: "Katero funkcionalno skupino prepoznate v molekuli CH₃CH₂OH?",
        reaction: "CH₃–CH₂–OH",
        context: "Poiščite skupino atomov, značilno za to vrsto organske spojine.",
        options: ["Skupino –OH, značilno za alkohole", "Skupino –COOH, značilno za karboksilne kisline", "Skupino –CHO, značilno za aldehide", "Dvojno vez C=C, značilno za alkene"],
        answer: 0,
        explanation: "Skupina –OH, vezana na ogljikov atom, je hidroksilna skupina. Spojine s to skupino imenujemo alkoholi; CH₃CH₂OH je etanol."
      }
    ]
  },
  {
    year: 3,
    title: "Ogljikovodiki",
    short: "Ogljikovodiki",
    description: "Primerjajte alkane, alkene in alkine ter njihove značilne reakcije.",
    questions: [
      {
        prompt: "Katera molekulska formula ustreza odprtoverižnemu alkanu s tremi ogljikovimi atomi?",
        reaction: "alkani: CₙH₂ₙ₊₂",
        context: "V splošno formulo alkanov vstavite n = 3.",
        options: ["C₃H₄", "C₃H₆", "C₃H₈", "C₃H₁₀"],
        answer: 2,
        explanation: "Alkani z odprto verigo imajo splošno formulo CₙH₂ₙ₊₂. Za tri ogljikove atome dobimo C₃H₈, kar je propan."
      },
      {
        prompt: "Kateri preizkus lahko pokaže, da vzorec vsebuje dvojno vez C=C?",
        reaction: "alken + bromova voda  →  ?",
        context: "Preizkus izvedemo brez UV-svetlobe.",
        options: ["Rjava bromova voda se razbarva.", "Bromova voda postane vijolična.", "Nastane moder obor.", "Voda začne svetiti."],
        answer: 0,
        explanation: "Alken lahko z bromom reagira z adicijo na dvojno vez. Rjava barva bromove vode zato izgine. Pri alkanu v običajnih pogojih brez svetlobe takšna hitra reakcija ne poteka."
      },
      {
        prompt: "Katera spojina nastane pri popolnem gorenju propana v zadostni količini kisika?",
        reaction: "C₃H₈ + 5 O₂  →  ?",
        context: "Pri popolnem gorenju ogljik tvori ogljikov dioksid, vodik pa vodo.",
        options: ["3 CO₂ + 4 H₂O", "3 CO + 4 H₂O", "C + H₂", "C₃H₆ + H₂O"],
        answer: 0,
        explanation: "Pri popolnem gorenju nastaneta ogljikov dioksid in voda. Uravnotežena enačba je C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O: na obeh straneh so trije atomi C, osem atomov H in deset atomov O."
      }
    ]
  },
  {
    year: 3,
    title: "Izomerija in aromatske spojine",
    short: "Izomerija in benzen",
    description: "Prepoznajte izomere ter osnovne značilnosti benzena in organskih reakcij.",
    questions: [
      {
        prompt: "Butan in 2-metilpropan imata enako molekulsko formulo C₄H₁₀, vendar različno zgradbo. Kaj sta?",
        reaction: "C₄H₁₀: CH₃–CH₂–CH₂–CH₃  /  (CH₃)₃CH",
        context: "Primerjamo spojini z enakim številom posameznih atomov.",
        options: ["Izotopa", "Strukturna izomera", "Enaka spojina z dvema imenoma", "Snovi z različno molekulsko formulo"],
        answer: 1,
        explanation: "Butan in 2-metilpropan imata enako molekulsko formulo, vendar se atomi povezujejo v različno ogljikovo ogrodje. Zato sta strukturna izomera."
      },
      {
        prompt: "Kaj je značilno za benzen?",
        reaction: "C₆H₆  →  šestčlenski obroč",
        context: "Benzen je najpreprostejša aromatska spojina, zgrajena iz šestih ogljikovih atomov.",
        options: ["Ima šest ogljikov v obroču in posebne lastnosti aromatske spojine.", "Je alkan z odprto verigo.", "Vsebuje skupino –COOH.", "Sestavljen je samo iz ogljikovih in kisikovih atomov."],
        answer: 0,
        explanation: "Benzen (C₆H₆) ima šestčlenski ogljikov obroč. Zaradi posebne razporeditve elektronov je aromatska spojina; pogosto ga prikazujemo kot šesterokotnik s krogom."
      },
      {
        prompt: "Kaj se pri adiciji vodika na dvojno vez etena zgodi z vezjo C=C?",
        reaction: "CH₂=CH₂ + H₂  →  CH₃–CH₃",
        context: "Pri reakciji nastane etan.",
        options: ["Dvojna vez se spremeni v enojno in na ogljika se dodata vodikova atoma.", "Dvojna vez ostane, odcepi pa se voda.", "Nastane benzen.", "Molekula izgubi oba ogljikova atoma."],
        answer: 0,
        explanation: "Pri hidrogeniranju se na oba ogljikova atoma dvojne vezi doda po en atom vodika. Vez C=C postane enojna, produkt pa je etan."
      }
    ]
  },
  {
    year: 3,
    title: "Alkoholi, kisline in estri",
    short: "Alkoholi in estri",
    description: "Spoznajte pomembne kisikove organske spojine in njihove vsakdanje uporabe.",
    questions: [
      {
        prompt: "Kateri alkohol je v alkoholnih pijačah in nastane pri alkoholnem vrenju sladkorja?",
        reaction: "C₆H₁₂O₆  →  2 C₂H₅OH + 2 CO₂",
        context: "Iščemo alkohol z dvema ogljikovima atomoma.",
        options: ["Metanol", "Etanol", "Propan-1-ol", "Glicerol"],
        answer: 1,
        explanation: "Pri alkoholnem vrenju kvasovke pretvarjajo glukozo v etanol in ogljikov dioksid. Enačba C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ je uravnotežena. Etanol ima dva ogljikova atoma; metanol je strupen in ni primeren za uživanje."
      },
      {
        prompt: "Kateri funkcionalni skupini sta značilni za karboksilne kisline?",
        reaction: "R–COOH",
        context: "V formuli prepoznajte združeno karbonilno skupino in hidroksilno skupino.",
        options: ["–OH", "–COOH", "–NH2", "C=C"],
        answer: 1,
        explanation: "Karboksilna skupina –COOH je sestavljena iz karbonilne skupine C=O in hidroksilne skupine –OH na istem ogljiku. Primer je etanojska (ocetna) kislina v kisu."
      },
      {
        prompt: "Katera snov nastane poleg estra, ko reagirata etanol in etanojska kislina?",
        reaction: "etanol + etanojska kislina  ⇌  etil etanoat + ?",
        context: "Gre za esterifikacijo, pri kateri se odcepi majhna molekula.",
        options: ["Vodik", "Kisik", "Voda", "Ogljikov dioksid"],
        answer: 2,
        explanation: "Pri esterifikaciji alkohola in karboksilne kisline nastaneta ester in voda. Etanol z etanojsko kislino tvori etil etanoat, ki ima značilen sadni vonj."
      }
    ]
  },
  {
    year: 4,
    title: "Ogljikovi hidrati",
    short: "Ogljikovi hidrati",
    description: "Razlikujte enostavne sladkorje od polisaharidov in spoznajte njihovo vlogo.",
    questions: [
      {
        prompt: "Kateri enostavni sladkor je pomemben vir energije za celice?",
        reaction: "C₆H₁₂O₆",
        context: "Ta sladkor nastane tudi pri fotosintezi.",
        options: ["Glukoza", "Celuloza", "Škrob", "Glicerin"],
        answer: 0,
        explanation: "Glukoza je enostavni sladkor (monosaharid) s formulo C₆H₁₂O₆. Celice jo uporabljajo pri celičnem dihanju za pridobivanje energije."
      },
      {
        prompt: "Iz katerih manjših gradnikov je zgrajen škrob?",
        reaction: "veliko enot glukoze  →  škrob",
        context: "Škrob je polisaharid, ki ga rastline uporabljajo za shranjevanje energije.",
        options: ["Iz aminokislin", "Iz molekul glukoze", "Iz maščobnih kislin", "Iz nukleotidov"],
        answer: 1,
        explanation: "Škrob je polisaharid, sestavljen iz številnih povezanih enot glukoze. Rastline v njem shranjujejo energijo; škrob najdemo na primer v krompirju in žitih."
      },
      {
        prompt: "Kateri preprost preizkus se pogosto uporablja za dokazovanje škroba?",
        reaction: "škrob + raztopina joda  →  ?",
        context: "Pozitiven rezultat prepoznamo po značilni spremembi barve.",
        options: ["Raztopina postane modro-črna.", "Nastane plin, ki pogasi plamen.", "Raztopina postane živo rožnata.", "Nastane srebrno ogledalo."],
        answer: 0,
        explanation: "Jodova raztopina v prisotnosti škroba dobi značilno temno modro oziroma modro-črno barvo. Tako lahko preverimo prisotnost škroba v živilih, kot je krompir."
      }
    ]
  },
  {
    year: 4,
    title: "Maščobe in mila",
    short: "Maščobe in mila",
    description: "Spoznajte zgradbo maščob in kako iz njih izdelamo milo.",
    questions: [
      {
        prompt: "Iz katerih sestavnih delov je zgrajena običajna maščoba?",
        reaction: "glicerol + 3 maščobne kisline  →  maščoba",
        context: "Maščoba je vrsta estra.",
        options: ["Iz glicerola in treh maščobnih kislin", "Iz glukoze in treh aminokislin", "Iz etanola in treh molekul vode", "Iz glicerola in treh sladkorjev"],
        answer: 0,
        explanation: "Običajna maščoba (triglicerid) nastane, ko se na eno molekulo glicerola vežejo tri maščobne kisline. Povezave med njimi so estrske vezi."
      },
      {
        prompt: "Kaj nastane pri bazični hidrolizi maščobe z natrijevim hidroksidom?",
        reaction: "maščoba + NaOH  →  glicerin + ?",
        context: "Ta reakcija se uporablja pri izdelavi trdega mila.",
        options: ["Natrijeve soli maščobnih kislin (milo)", "Glukoza", "Etilen", "Beljakovine"],
        answer: 0,
        explanation: "Pri umiljenju se estrske vezi v maščobi razcepijo. Nastaneta glicerol (glicerin) in natrijeve soli maščobnih kislin, ki jih poznamo kot milo."
      },
      {
        prompt: "Zakaj milo pomaga odstraniti mastno umazanijo z rok ali posode?",
        reaction: "milo: hidrofilni del + hidrofobni del",
        context: "Molekula mila ima en del, ki se rad meša z vodo, in drug del, ki se rad meša z maščobo.",
        options: ["Njegov maščoboljubni del se veže na maščobo, vodoljubni del pa omogoča izpiranje z vodo.", "Milo spremeni maščobo v kovino.", "Milo maščobo spremeni v kisik.", "Vsa umazanija se raztopi samo zaradi toplote."],
        answer: 0,
        explanation: "Molekule mila imajo hidrofobni del, ki se poveže z mastjo, in hidrofilni del, ki je v stiku z vodo. V vodi lahko tvorijo micele, ki maščobo razpršijo in omogočijo, da jo speremo."
      }
    ]
  },
  {
    year: 4,
    title: "Aminokisline in beljakovine",
    short: "Beljakovine",
    description: "Odkrijte gradnike beljakovin, peptidno vez in vpliv toplote.",
    questions: [
      {
        prompt: "Katera skupina je značilna za aminokisline poleg karboksilne skupine?",
        reaction: "H₂N–CH(R)–COOH",
        context: "Ime »aminokislina« namiguje na obe funkcionalni skupini.",
        options: ["Aminoskupina –NH2", "Etrska skupina –O–", "Skupina –NO2", "Dvojna vez C=C"],
        answer: 0,
        explanation: "Aminokisline vsebujejo aminoskupino –NH2 in karboksilno skupino –COOH. Na osrednji ogljik je vezana tudi stranska skupina R, ki se med aminokislinami razlikuje."
      },
      {
        prompt: "Kako imenujemo vez, ki povezuje aminokisline v beljakovini?",
        reaction: "aminokislina + aminokislina  →  peptidna vez",
        context: "Pri njenem nastanku se povežeta karboksilna in aminoskupina.",
        options: ["Peptidna vez", "Dvojna vez C=C", "Ionska vez med kovinami", "Vodikova molekula"],
        answer: 0,
        explanation: "Aminokisline se povezujejo s peptidnimi vezmi. Pri nastanku vezi se običajno odcepi molekula vode; veriga povezanih aminokislin tvori peptid oziroma beljakovino."
      },
      {
        prompt: "Kaj se lahko zgodi z beljakovino pri segrevanju jajca?",
        reaction: "toplota  →  sprememba zgradbe beljakovine",
        context: "Primer je beljak, ki med kuhanjem postane bel in čvrst.",
        options: ["Beljakovina denaturira in izgubi prvotno obliko.", "Beljakovina se spremeni v čisti ogljik.", "Vsi atomi dušika izginejo.", "Beljakovina se vedno spremeni v sladkor."],
        answer: 0,
        explanation: "Toplota lahko poruši obliko beljakovine, ne da bi nujno pretrgala njeno osnovno verigo aminokislin. Temu pravimo denaturacija; pri kuhanju jajca se beljakovine zato strdijo."
      }
    ]
  },
  {
    year: 4,
    title: "Polimeri in materiali",
    short: "Polimeri",
    description: "Spoznajte polimere, načine njihovega nastanka ter premišljeno uporabo plastike.",
    questions: [
      {
        prompt: "Kako imenujemo majhne molekule, ki se povezujejo v dolge polimerne verige?",
        reaction: "veliko monomerov  →  polimer",
        context: "Predpona mono- pomeni eden, poli- pa mnogo.",
        options: ["Monomeri", "Ioni", "Izotopi", "Katalizatorji"],
        answer: 0,
        explanation: "Monomeri so majhne molekule, ki se povezujejo v večje molekule – polimere. Beseda polimer pomeni spojino, sestavljeno iz številnih ponavljajočih se gradnikov."
      },
      {
        prompt: "Kateri polimer nastane z adicijsko polimerizacijo etena?",
        reaction: "n CH₂=CH₂  →  (–CH₂–CH₂–)ₙ",
        context: "Eten ima dvojno vez, ki se pri polimerizaciji odpre.",
        options: ["Polietilen", "Beljakovina", "Škrob", "Najlon iz aminokislin"],
        answer: 0,
        explanation: "Pri adicijski polimerizaciji se dvojne vezi etena odprejo, številne molekule pa se povežejo v verigo –(CH₂–CH₂)ₙ–. Nastali polimer je polietilen, pogosta plastika za embalažo."
      },
      {
        prompt: "Kateri pristop je najbolj smiseln za zmanjšanje vpliva plastičnih odpadkov?",
        reaction: "premisli  →  zmanjšaj, ponovno uporabi, recikliraj",
        context: "Upoštevajte celoten življenjski cikel izdelka, ne le njegovega odlaganja.",
        options: ["Vedno uporabimo nov izdelek za enkratno uporabo.", "Zmanjšamo nepotrebno porabo, izdelek ponovno uporabimo in pravilno ločujemo odpadke.", "Vso plastiko odvržemo v naravo.", "Vse vrste plastike zmešamo v isti zabojnik."],
        answer: 1,
        explanation: "Najprej je koristno zmanjšati nepotrebno porabo in izdelke večkrat uporabiti. Kadar to ni mogoče, plastiko ločujemo po lokalnih navodilih za recikliranje, saj se različne vrste ne predelujejo vedno enako."
      }
    ]
  }
];

const STORAGE_KEY = "reactlab-organic-chemistry-v3";
const LEGACY_STORAGE_KEYS = ["reactlab-organic-chemistry-v2", "reactlab-organic-chemistry-v1"];
const CUSTOM_LESSONS_KEY = "reactlab-custom-lessons-v1";
const ui = {
  nav: document.querySelector("#lesson-nav"),
  xp: document.querySelector("#xp-total"),
  streak: document.querySelector("#streak-total"),
  progressLabel: document.querySelector("#progress-label"),
  progressCaption: document.querySelector("#progress-caption"),
  progressBar: document.querySelector("#course-progress"),
  progressFill: document.querySelector("#course-progress-fill"),
  kicker: document.querySelector("#lesson-kicker"),
  title: document.querySelector("#lesson-title"),
  description: document.querySelector("#lesson-description"),
  counter: document.querySelector("#question-counter"),
  quizProgress: document.querySelector("#quiz-progress"),
  quizProgressFill: document.querySelector("#quiz-progress-fill"),
  content: document.querySelector("#challenge-content"),
  feedback: document.querySelector("#feedback-panel"),
  feedbackIcon: document.querySelector("#feedback-icon"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackExplanation: document.querySelector("#feedback-explanation"),
  continue: document.querySelector("#continue-button"),
  notice: document.querySelector("#storage-notice"),
  materialDialog: document.querySelector("#material-dialog"),
  materialTitle: document.querySelector("#material-lesson-title"),
  materialYear: document.querySelector("#material-year"),
  materialImage: document.querySelector("#material-image"),
  materialImagePreview: document.querySelector("#material-image-preview"),
  recognizeMaterial: document.querySelector("#recognize-material-button"),
  ocrStatus: document.querySelector("#ocr-status"),
  materialText: document.querySelector("#material-text"),
  generateQuestions: document.querySelector("#generate-questions-button"),
  generatedQuestions: document.querySelector("#generated-questions"),
  saveMaterial: document.querySelector("#save-material-button")
};

function loadCustomLessons() {
  try {
    const stored = localStorage.getItem(CUSTOM_LESSONS_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new Error("Shranjeni seznam lekcij ni veljaven.");
    parsed.forEach((item) => {
      if (!item || (item.year !== 3 && item.year !== 4) || typeof item.title !== "string" || !Array.isArray(item.questions)) return;
      const title = item.title.trim().slice(0, 60);
      const questions = item.questions.filter((question) =>
        question &&
        typeof question.prompt === "string" &&
        typeof question.context === "string" &&
        typeof question.explanation === "string" &&
        Array.isArray(question.options) &&
        question.options.length >= 2 &&
        question.options.length <= 4 &&
        question.options.every((option) => typeof option === "string") &&
        Number.isInteger(question.answer) &&
        question.answer >= 0 &&
        question.answer < question.options.length
      ).slice(0, 3);
      if (!title || questions.length === 0) return;
      lessons.push({
        year: item.year,
        title,
        short: title.length > 25 ? title.slice(0, 24).trim() + "…" : title,
        description: "Izzivi, ustvarjeni iz tvojih zapiskov.",
        isCustom: true,
        questions
      });
    });
  } catch (error) {
    ui.notice.hidden = false;
    ui.notice.textContent = "Lastnih lekcij ni bilo mogoče prebrati iz shrambe brskalnika.";
  }
}

loadCustomLessons();

function todayString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function emptyState() {
  return { xp: 0, streak: 0, lastStudyDate: null, completed: [], earnedQuestions: [], answeredQuestions: [] };
}

let needsMigration = false;

function readState() {
  try {
    const current = localStorage.getItem(STORAGE_KEY);
    const stored = current || LEGACY_STORAGE_KEYS.map((key) => localStorage.getItem(key)).find(Boolean);
    if (!stored) return emptyState();
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return emptyState();
    if (!current) {
      needsMigration = true;
      return {
        xp: Number.isFinite(parsed.xp) && parsed.xp >= 0 ? parsed.xp : 0,
        streak: Number.isFinite(parsed.streak) && parsed.streak >= 0 ? parsed.streak : 0,
        lastStudyDate: typeof parsed.lastStudyDate === "string" ? parsed.lastStudyDate : null,
        completed: [],
        earnedQuestions: [],
        answeredQuestions: []
      };
    }
    return {
      xp: Number.isFinite(parsed.xp) && parsed.xp >= 0 ? parsed.xp : 0,
      streak: Number.isFinite(parsed.streak) && parsed.streak >= 0 ? parsed.streak : 0,
      lastStudyDate: typeof parsed.lastStudyDate === "string" ? parsed.lastStudyDate : null,
      completed: Array.isArray(parsed.completed) ? [...new Set(parsed.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < lessons.length))] : [],
      earnedQuestions: Array.isArray(parsed.earnedQuestions) ? [...new Set(parsed.earnedQuestions.filter(isValidQuestionId))] : [],
      answeredQuestions: Array.isArray(parsed.answeredQuestions) ? [...new Set(parsed.answeredQuestions.filter(isValidQuestionId))] : []
    };
  } catch (error) {
    ui.notice.hidden = false;
    ui.notice.textContent = "Shranjevanje napredka v tem brskalniku ni na voljo. Trenutna seja deluje, vendar se napredek morda ne bo shranil.";
    return emptyState();
  }
}

let state = readState();
let activeLesson = null;
let questionIndex = 0;
let answeredThisVisit = [];
let selectedAnswer = null;
let answerLocked = false;
let storageFailed = false;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (!storageFailed) ui.notice.hidden = true;
  } catch (error) {
    storageFailed = true;
    ui.notice.hidden = false;
    ui.notice.textContent = "Odgovarjanje deluje, vendar brskalnik ne more shraniti napredka. Preverite, ali je lokalna shramba omogočena.";
  }
}

if (needsMigration) saveState();

function isValidQuestionId(id) {
  if (typeof id !== "string" || !/^\d+-\d+$/.test(id)) return false;
  const [lessonIndex, index] = id.split("-").map(Number);
  return lessonIndex < lessons.length && index < lessons[lessonIndex].questions.length;
}

function questionId(lessonIndex, index) {
  return lessonIndex + "-" + index;
}

function renderStats() {
  ui.xp.textContent = String(state.xp);
  ui.streak.textContent = String(state.streak);
  const done = new Set(state.completed).size;
  ui.progressLabel.textContent = done + " / " + lessons.length;
  ui.progressCaption.textContent = done === lessons.length ? "Učna pot je zaključena. Še naprej ohranjajte znanje." : done === 0 ? "Z nekaj vaje pridete daleč." : "Izziv za izzivom krepite svoje znanje.";
  ui.progressFill.style.width = (done / lessons.length * 100) + "%";
  ui.progressBar.setAttribute("aria-valuenow", String(done));
}

function renderNavigation() {
  ui.nav.replaceChildren();
  lessons.forEach((lesson, index) => {
    const previous = lessons[index - 1];
    if (lesson.isCustom && (!previous || !previous.isCustom)) {
      const ownLabel = document.createElement("div");
      ownLabel.className = "year-divider custom-divider";
      ownLabel.textContent = "MOJA SNOV";
      ui.nav.append(ownLabel);
    } else if (!lesson.isCustom && (!previous || previous.isCustom || previous.year !== lesson.year)) {
      const yearLabel = document.createElement("div");
      yearLabel.className = "year-divider";
      yearLabel.textContent = lesson.year + ". LETNIK";
      ui.nav.append(yearLabel);
    }
    const button = document.createElement("button");
    button.className = "lesson-link";
    button.title = lesson.title;
    if (state.completed.includes(index)) button.classList.add("is-complete");
    button.type = "button";
    button.setAttribute("aria-label", "Lekcija " + (index + 1) + ": " + lesson.title + (state.completed.includes(index) ? ", zaključena" : ""));
    if (activeLesson === index) button.setAttribute("aria-current", "step");

    const number = document.createElement("span");
    number.className = "lesson-number";
    number.textContent = state.completed.includes(index) ? "✓" : lesson.isCustom ? "✦" : String(index + 1).padStart(2, "0");
    number.setAttribute("aria-hidden", "true");
    const name = document.createElement("span");
    name.className = "lesson-name";
    name.textContent = lesson.short;
    button.append(number, name);
    if (state.completed.includes(index)) {
      const check = document.createElement("span");
      check.className = "lesson-check";
      check.textContent = "✓";
      check.setAttribute("aria-hidden", "true");
      button.append(check);
    }
    button.addEventListener("click", () => startLesson(index));
    ui.nav.append(button);
  });
}

function setLessonHeader(index) {
  const lesson = lessons[index];
  ui.kicker.textContent = lesson.isCustom ? "MOJA SNOV · " + lesson.year + ". LETNIK" : lesson.year + ". LETNIK · TEMA " + String(index + 1).padStart(2, "0") + " / " + String(lessons.length).padStart(2, "0");
  ui.title.textContent = lesson.title;
  ui.description.textContent = lesson.description;
}

function startLesson(index) {
  activeLesson = index;
  questionIndex = 0;
  answeredThisVisit = [];
  selectedAnswer = null;
  answerLocked = false;
  setLessonHeader(index);
  renderNavigation();
  renderQuestion();
  document.querySelector("#lesson-card").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderQuestion() {
  const lesson = lessons[activeLesson];
  const question = lesson.questions[questionIndex];
  ui.feedback.hidden = true;
  ui.feedback.classList.remove("is-wrong");
  ui.content.hidden = false;
  ui.counter.textContent = "IZZIV " + (questionIndex + 1) + " OD " + lesson.questions.length;
  ui.quizProgressFill.style.width = (answeredThisVisit.length / lesson.questions.length * 100) + "%";
  ui.quizProgress.setAttribute("aria-valuenow", String(answeredThisVisit.length));
  ui.quizProgress.setAttribute("aria-valuemax", String(lesson.questions.length));
  ui.content.replaceChildren();

  const heading = document.createElement("h3");
  heading.className = "question-prompt";
  heading.id = "challenge-title";
  heading.tabIndex = -1;
  heading.textContent = question.prompt;
  const reaction = document.createElement("div");
  reaction.className = "reaction-line";
  reaction.setAttribute("aria-label", "Reakcijska shema: " + question.reaction);
  reaction.textContent = question.reaction;
  const context = document.createElement("p");
  context.className = "question-context";
  context.textContent = question.context;
  const answers = document.createElement("fieldset");
  answers.className = "answer-list";
  const legend = document.createElement("legend");
  legend.className = "eyebrow";
  legend.textContent = "IZBERITE NAJBOLJŠI ODGOVOR";
  answers.append(legend);

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.dataset.answer = String(index);
    const key = document.createElement("span");
    key.className = "option-key";
    key.setAttribute("aria-hidden", "true");
    key.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = option;
    button.append(key, label);
    button.addEventListener("click", () => selectAnswer(index));
    answers.append(button);
  });
  ui.content.append(heading);
  if (question.reaction) ui.content.append(reaction);
  ui.content.append(context, answers);
  ui.content.querySelector(".question-prompt").focus({ preventScroll: true });
}

function selectAnswer(index) {
  if (answerLocked || activeLesson === null) return;
  answerLocked = true;
  selectedAnswer = index;
  const question = lessons[activeLesson].questions[questionIndex];
  const id = questionId(activeLesson, questionIndex);
  const correct = index === question.answer;
  ui.content.querySelectorAll(".answer-option").forEach((button) => {
    button.disabled = true;
    const choice = Number(button.dataset.answer);
    if (choice === question.answer) button.classList.add("is-correct");
    if (choice === selectedAnswer && !correct) button.classList.add("is-wrong");
  });
  if (!state.answeredQuestions.includes(id)) state.answeredQuestions.push(id);
  if (correct && !state.earnedQuestions.includes(id)) {
    state.earnedQuestions.push(id);
    state.xp += 10;
  }
  answeredThisVisit.push(id);
  saveState();
  renderStats();
  ui.feedback.hidden = false;
  ui.feedback.classList.toggle("is-wrong", !correct);
  ui.feedbackIcon.textContent = correct ? "✓" : "!";
  ui.feedbackTitle.textContent = correct ? "Pravilno. Odlično sklepanje." : "Ne čisto. Poglejmo ključno idejo.";
  ui.feedbackExplanation.textContent = question.explanation;
  ui.continue.focus({ preventScroll: true });
}

function finishLesson() {
  const firstCompletion = !state.completed.includes(activeLesson);
  if (firstCompletion) {
    state.completed.push(activeLesson);
    state.xp += 20;
  }
  updateStreak();
  saveState();
  renderStats();
  renderNavigation();
  ui.counter.textContent = "TEMA ZAKLJUČENA";
  ui.quizProgressFill.style.width = "100%";
  ui.quizProgress.setAttribute("aria-valuenow", String(lessons[activeLesson].questions.length));
  ui.feedback.hidden = true;
  ui.content.hidden = false;
  ui.content.replaceChildren();

  const wrapper = document.createElement("div");
  wrapper.className = "completion-card";
  const mark = document.createElement("div");
  mark.className = "completion-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "✓";
  const heading = document.createElement("h3");
  heading.id = "challenge-title";
  heading.textContent = firstCompletion ? "Odlično! Sklop je zaključen." : "Sklop zaključen še enkrat.";
  heading.tabIndex = -1;
  const description = document.createElement("p");
  description.textContent = "Zaključili ste temo »" + lessons[activeLesson].title + (firstCompletion ? "« in pridobili 20 XP za temo." : "« še enkrat.") + " Napredek je shranjen v tej napravi. Razlage lahko kadar koli znova preberete, če ponovite temo.";
  const next = document.createElement("button");
  next.className = "primary-button";
  next.type = "button";
  const nextIndex = lessons.findIndex((_, index) => !state.completed.includes(index));
  if (nextIndex >= 0) {
    next.append(document.createTextNode("Naslednja tema "));
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    next.append(arrow);
    next.addEventListener("click", () => startLesson(nextIndex));
  } else {
    next.textContent = "Ponovite temo";
    next.addEventListener("click", () => startLesson(0));
  }
  wrapper.append(mark, heading, description, next);
  ui.content.append(wrapper);
  document.querySelector("#challenge-title").focus({ preventScroll: true });
}

function updateStreak() {
  const today = todayString();
  if (state.lastStudyDate === today) return;
  const yesterdayDate = new Date(today + "T12:00:00");
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = todayStringFromDate(yesterdayDate);
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function todayStringFromDate(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

ui.continue.addEventListener("click", () => {
  if (activeLesson === null || !answerLocked) return;
  questionIndex += 1;
  selectedAnswer = null;
  answerLocked = false;
  if (questionIndex >= lessons[activeLesson].questions.length) {
    finishLesson();
  } else {
    renderQuestion();
  }
});

let previewUrl = null;
let generatedQuestionsForLesson = [];
let isRecognizingMaterial = false;
const closeMaterialDialog = document.querySelector("#close-material-dialog");

function loadOcrLibrary() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Tesseract) resolve(window.Tesseract);
      else reject(new Error("Knjižnica za prepoznavanje besedila se ni pravilno naložila."));
    };
    script.onerror = () => reject(new Error("OCR-knjižnice ni bilo mogoče prenesti. Preveri internetno povezavo in poskusi znova."));
    document.head.append(script);
  });
}

async function prepareImage(file) {
  if (typeof createImageBitmap !== "function") return file;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 2400 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Slike ni bilo mogoče pripraviti za prepoznavanje.");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Slike ni bilo mogoče pripraviti za prepoznavanje."));
    }, "image/jpeg", 0.92);
  });
}

async function recognizeMaterial(file) {
  isRecognizingMaterial = true;
  ui.recognizeMaterial.disabled = true;
  ui.materialImage.disabled = true;
  closeMaterialDialog.disabled = true;
  ui.ocrStatus.textContent = "Prenašam brezplačno orodje in slovenski jezikovni paket …";
  let worker = null;
  try {
    const Tesseract = await loadOcrLibrary();
    worker = await Tesseract.createWorker("slv", 1, {
      workerPath: "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js",
      corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1",
      langPath: "https://tessdata.projectnaptha.com/4.0.0",
      logger: (message) => {
        if (message.status === "recognizing text") {
          const percent = Math.round((message.progress || 0) * 100);
          ui.ocrStatus.textContent = "Prepoznavam besedilo … " + percent + " %";
        } else if (message.status === "loading language traineddata") {
          ui.ocrStatus.textContent = "Prenašam slovenski jezikovni paket …";
        } else if (message.status === "loading tesseract core") {
          ui.ocrStatus.textContent = "Pripravljam OCR …";
        }
      }
    });
    const image = await prepareImage(file);
    const result = await worker.recognize(image);
    const recognized = result.data.text.trim();
    if (!recognized) {
      ui.ocrStatus.textContent = "Besedila nisem našel. Poskusi z ostrejšo fotografijo, boljšo svetlobo ali prepis vnesi ročno.";
      ui.materialText.focus();
      return;
    }
    ui.materialText.value = recognized.slice(0, 12000);
    ui.ocrStatus.textContent = "Besedilo je prepoznano. Rokopis, šumnike in formule preglej ter jih po potrebi popravi.";
    ui.materialText.focus();
  } catch (error) {
    ui.ocrStatus.textContent = error instanceof Error ? error.message : "Besedila ni bilo mogoče prepoznati. Poskusi znova.";
  } finally {
    try {
      if (worker) await worker.terminate();
    } catch (error) {
      ui.ocrStatus.textContent = "OCR je končan, vendar se njegova seja ni pravilno zaprla. Osveži stran pred naslednjim prepoznavanjem.";
    } finally {
      isRecognizingMaterial = false;
      ui.materialImage.disabled = false;
      closeMaterialDialog.disabled = false;
      ui.recognizeMaterial.disabled = !ui.materialImage.files.length;
    }
  }
}

const genericWords = new Set([
  "ampak", "biti", "brez", "deli", "delov", "drugih", "lahko", "medtem", "molekula",
  "molekule", "molekul", "nastane", "nastanejo", "oziroma", "primer", "reakcija",
  "reakcije", "spojina", "spojine", "snovi", "stanje", "strani", "tako", "tudi",
  "veliko", "vseh", "vsaka", "vsak", "zaradi", "zapis", "zapisa"
]);
const sloveneStopWords = new Set([
  "ali", "ampak", "če", "da", "do", "in", "iz", "je", "jo", "kaj", "ki", "ko", "kot",
  "lahko", "med", "na", "nad", "ne", "ob", "od", "pa", "po", "pri", "se", "so", "s",
  "ta", "te", "ti", "to", "tudi", "v", "za", "z", "zaradi"
]);

function extractTerms(text) {
  const terms = new Map();
  const matches = text.match(/[\p{L}][\p{L}\p{M}-]{3,}/gu) || [];
  matches.forEach((term) => {
    const normalized = term.toLocaleLowerCase("sl");
    if (!sloveneStopWords.has(normalized) && !genericWords.has(normalized) && !terms.has(normalized)) {
      terms.set(normalized, term);
    }
  });
  return [...terms.values()];
}

function makeQuestionsFromNotes(text) {
  const statements = [...new Set(
    text.replace(/\r/g, "").split(/(?<=[.!?])\s+|\n+/u)
      .map((statement) => statement.replace(/^[\s•*-]+/, "").trim())
      .filter((statement) => statement.length >= 20)
  )];
  const allTerms = extractTerms(text).sort((a, b) => b.length - a.length);
  if (allTerms.length < 2) return [];
  const questions = [];
  statements.forEach((statement) => {
    if (questions.length >= 3) return;
    const target = extractTerms(statement).sort((a, b) => b.length - a.length)[0];
    if (!target) return;
    const position = statement.toLocaleLowerCase("sl").indexOf(target.toLocaleLowerCase("sl"));
    if (position < 0) return;
    const promptSentence = statement.slice(0, position) + "_____" + statement.slice(position + target.length);
    const options = [target];
    allTerms.forEach((term) => {
      if (options.length < 4 && term.toLocaleLowerCase("sl") !== target.toLocaleLowerCase("sl")) options.push(term);
    });
    if (options.length < 2) return;
    for (let index = options.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
    }
    questions.push({
      prompt: "Dopolni poved: »" + promptSentence.slice(0, 220) + "«",
      reaction: "",
      context: "Beseda je iz prepoznanih zapiskov. Po potrebi jo preveri na izvirni fotografiji.",
      options,
      answer: options.indexOf(target),
      explanation: "V prepisu zapiskov piše: »" + statement.slice(0, 320) + "« Preveri izvirno fotografijo, saj OCR lahko napačno prebere besede ali kemijske formule."
    });
  });
  return questions;
}

function renderGeneratedQuestions(questions) {
  ui.generatedQuestions.replaceChildren();
  generatedQuestionsForLesson = questions;
  if (questions.length === 0) {
    const message = document.createElement("p");
    message.className = "ocr-status";
    message.textContent = "Iz tega prepisa nisem mogel pripraviti vprašanj. Dodaj nekaj celih povedi ali pomembnih pojmov in poskusi znova.";
    ui.generatedQuestions.append(message);
    ui.generatedQuestions.hidden = false;
    ui.saveMaterial.disabled = true;
    return;
  }
  const heading = document.createElement("h3");
  const questionLabel = questions.length === 1 ? "vprašanje" : questions.length === 2 ? "vprašanji" : "vprašanja";
  heading.textContent = "Predogled " + questions.length + " " + questionLabel;
  ui.generatedQuestions.append(heading);
  questions.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "generated-question";
    const prompt = document.createElement("p");
    prompt.textContent = (index + 1) + ". " + question.prompt;
    const answer = document.createElement("small");
    answer.textContent = "Pravilen odgovor: " + question.options[question.answer];
    card.append(prompt, answer);
    ui.generatedQuestions.append(card);
  });
  ui.generatedQuestions.hidden = false;
  ui.saveMaterial.disabled = false;
}

function resetMaterialForm() {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  document.querySelector("#material-form").reset();
  ui.materialImagePreview.hidden = true;
  ui.materialImagePreview.removeAttribute("src");
  ui.recognizeMaterial.disabled = true;
  ui.ocrStatus.textContent = "Fotografija se obdela v tej napravi. Za prvo uporabo je potrebna internetna povezava za prenos brezplačnega OCR-ja. Rokopis je lahko prepoznan slabše.";
  ui.materialImage.disabled = false;
  closeMaterialDialog.disabled = false;
  ui.generatedQuestions.replaceChildren();
  ui.generatedQuestions.hidden = true;
  ui.saveMaterial.disabled = true;
  generatedQuestionsForLesson = [];
}

document.querySelector("#add-material-button").addEventListener("click", () => {
  ui.materialDialog.showModal();
  ui.materialTitle.focus();
});
closeMaterialDialog.addEventListener("click", () => ui.materialDialog.close());
ui.materialDialog.addEventListener("close", resetMaterialForm);
ui.materialDialog.addEventListener("cancel", (event) => {
  if (isRecognizingMaterial) event.preventDefault();
});
document.querySelector("#material-form").addEventListener("submit", (event) => event.preventDefault());

ui.materialImage.addEventListener("change", () => {
  const file = ui.materialImage.files[0];
  ui.materialText.value = "";
  ui.generatedQuestions.replaceChildren();
  ui.generatedQuestions.hidden = true;
  generatedQuestionsForLesson = [];
  ui.saveMaterial.disabled = true;
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  if (!file) {
    ui.materialImagePreview.hidden = true;
    ui.recognizeMaterial.disabled = true;
    return;
  }
  if (!file.type.startsWith("image/") || file.size > 15 * 1024 * 1024) {
    ui.materialImage.value = "";
    ui.materialImagePreview.hidden = true;
    ui.recognizeMaterial.disabled = true;
    ui.ocrStatus.textContent = "Izberi slikovno datoteko, manjšo od 15 MB.";
    return;
  }
  previewUrl = URL.createObjectURL(file);
  ui.materialImagePreview.src = previewUrl;
  ui.materialImagePreview.hidden = false;
  ui.recognizeMaterial.disabled = false;
  ui.ocrStatus.textContent = "Slika je pripravljena. Začni prepoznavanje ali besedilo vnesi ročno.";
});

ui.recognizeMaterial.addEventListener("click", () => {
  const file = ui.materialImage.files[0];
  if (file) recognizeMaterial(file);
});
ui.generateQuestions.addEventListener("click", () => renderGeneratedQuestions(makeQuestionsFromNotes(ui.materialText.value)));
ui.saveMaterial.addEventListener("click", () => {
  if (!document.querySelector("#material-form").reportValidity() || generatedQuestionsForLesson.length === 0) return;
  const title = ui.materialTitle.value.trim();
  const lesson = {
    year: Number(ui.materialYear.value),
    title,
    short: title.length > 25 ? title.slice(0, 24).trim() + "…" : title,
    description: "Izzivi, ustvarjeni iz tvojih zapiskov.",
    isCustom: true,
    questions: generatedQuestionsForLesson
  };
  const customLessons = lessons.filter((item) => item.isCustom);
  customLessons.push(lesson);
  try {
    localStorage.setItem(CUSTOM_LESSONS_KEY, JSON.stringify(customLessons));
  } catch (error) {
    ui.ocrStatus.textContent = "Lekcije ni bilo mogoče shraniti. Sprosti prostor v shrambi brskalnika in poskusi znova.";
    return;
  }
  lessons.push(lesson);
  const lessonIndex = lessons.length - 1;
  renderStats();
  renderNavigation();
  ui.materialDialog.close();
  startLesson(lessonIndex);
});

function beginFirstUnfinished() {
  const firstUnfinished = lessons.findIndex((_, index) => !state.completed.includes(index));
  startLesson(firstUnfinished < 0 ? 0 : firstUnfinished);
}

document.querySelector("#start-button").addEventListener("click", beginFirstUnfinished);
document.querySelector("#empty-start-button").addEventListener("click", beginFirstUnfinished);
renderStats();
renderNavigation();
