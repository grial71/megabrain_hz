// ==========================
//   PACKS DE TRADUCTION UI
// ==========================
const translations = {
  fr: {
    MEGABRAIN: "MEGABRAIN",
    NavRelax: "Relaxation",
    NavFocus: "Concentration",
    NavMeditation: "Méditation",
    NavBooks: "Livres",

    IntroTitle: "Créé par Michel Quinones",
    IntroText:
      "Sélection de fréquences sonores et de musiques conçues pour favoriser la relaxation, la concentration et la méditation profonde.",

    ExplainTitle: "Comment fonctionnent ces fréquences ?",
    ExplainText:
      "<strong>1. Ondes cérébrales</strong> : certaines musiques utilisent des battements binauraux ou isochrones pour encourager des états de relaxation ou de concentration.<br><br>" +
      "<strong>2. Fréquences spécifiques</strong> : 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. sont souvent associées à la détente, la clarté mentale ou la libération émotionnelle.<br><br>" +
      "<strong>3. Utilisation</strong> : ces sons ne remplacent PAS un traitement médical, mais peuvent être un support pour se relaxer, méditer, se concentrer ou mieux dormir.",

    DonateTitle: "Soutenir le projet :",
    DonateButton: "Soutenir via PayPal",
    DonateNote: "Merci d’envoyer en mode « Amis et proches ».",
    FooterText: "MEGABRAIN © 2025 – Créé par Michel Quinones",
  },

  es: {
    MEGABRAIN: "MEGABRAIN",
    NavRelax: "Relajación",
    NavFocus: "Concentración",
    NavMeditation: "Meditación",
    NavBooks: "Libros",

    IntroTitle: "Creado por Michel Quinones",
    IntroText:
      "Selección de frecuencias sonoras y músicas pensadas para favorecer la relajación, la concentración y la meditación profunda.",

    ExplainTitle: "¿Cómo funcionan estas frecuencias?",
    ExplainText:
      "<strong>1. Ondas cerebrales</strong>: algunos audios usan ritmos binaurales o isocrónicos para favorecer estados de relajación o concentración.<br><br>" +
      "<strong>2. Frecuencias específicas</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. se asocian a calma, claridad mental o liberación emocional.<br><br>" +
      "<strong>3. Uso</strong>: no sustituyen tratamientos médicos, pero pueden ayudarte a relajarte, meditar o dormir mejor.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar como «Amigos y familiares».",
    FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",
  },

  en: {
    MEGABRAIN: "MEGABRAIN",
    NavRelax: "Relaxation",
    NavFocus: "Focus",
    NavMeditation: "Meditation",
    NavBooks: "Books",

    IntroTitle: "Created by Michel Quinones",
    IntroText:
      "A selection of frequencies and music designed to support relaxation, focus, and deep meditation.",

    ExplainTitle: "How do these frequencies work?",
    ExplainText:
      "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats to create relaxed or focused states.<br><br>" +
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. are associated with calm, clarity and emotional release.<br><br>" +
      "<strong>3. Usage</strong>: these sounds do NOT replace medical care, but can help you relax, meditate, focus or sleep better.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",
    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",
  }
};

// ==========================
//   CHATBOT – TEXTES PAR LANGUE
//   Coach pédagogue futuriste 🧠✨
// ==========================
const chatbotTexts = {
  fr: {
    intro:
      "Bonjour, je suis ton <strong>Coach MEGABRAIN</strong> 🧠✨, un pédagogue un peu futuriste. De quoi as-tu le plus besoin maintenant ?",
    relaxAdvice:
      "Parfait. Pour la <strong>relaxation</strong>, commence par 174 Hz ou 285 Hz. Installe-toi confortablement, ferme les yeux et laisse le corps se relâcher.",
    focusAdvice:
      "Super. Pour la <strong>concentration</strong>, les fréquences Gamma (40 Hz) sont idéales pour étudier ou travailler avec clarté mentale.",
    meditateAdvice:
      "Très bon choix. Pour la <strong>méditation</strong>, 963 Hz aide à entrer dans un état intérieur plus profond et calme.",
    explainText:
      "Les fréquences servent à <strong>influencer ton état intérieur</strong> :<br>" +
      "• 174 Hz : détente physique<br>" +
      "• 285 Hz : harmonie & équilibre<br>" +
      "• 396 Hz : libération émotionnelle<br>" +
      "• 40 Hz : concentration, mémoire, clarté<br>" +
      "• 963 Hz : méditation profonde, intériorité",
    gotoRelax: "Je t’ai emmené à la section <strong>Relaxation</strong>.",
    gotoFocus: "Je t’ai emmené à la section <strong>Concentration</strong>.",
    gotoMeditation: "Je t’ai emmené à la section <strong>Méditation</strong>.",
    buttons: {
      relax: "Me relaxer",
      focus: "Me concentrer",
      meditate: "Méditer",
      explain: "Comprendre les fréquences",
      goto_relax: "Aller à Relaxation",
      goto_focus: "Voir les musiques Focus",
      goto_meditation: "Voir les musiques Méditation",
      restart: "Autre besoin",
      close: "Fermer le coach"
    }
  },

  es: {
    intro:
      "Hola, soy tu <strong>Coach MEGABRAIN</strong> 🧠✨, un guía pedagógico un poco futurista. ¿Qué necesitas ahora mismo?",
    relaxAdvice:
      "Perfecto. Para la <strong>relajación</strong>, empieza con 174 Hz o 285 Hz. Siéntate cómodo, cierra los ojos y deja que el cuerpo se suelte.",
    focusAdvice:
      "Genial. Para la <strong>concentración</strong>, las frecuencias Gamma (40 Hz) son muy útiles para estudiar o trabajar con claridad.",
    meditateAdvice:
      "Muy buena elección. Para la <strong>meditación</strong>, 963 Hz ayuda a entrar en un estado interior profundo y tranquilo.",
    explainText:
      "Las frecuencias sirven para <strong>influir en tu estado interior</strong>:<br>" +
      "• 174 Hz: relajación física<br>" +
      "• 285 Hz: armonía y equilibrio<br>" +
      "• 396 Hz: liberación emocional<br>" +
      "• 40 Hz: concentración, memoria, claridad<br>" +
      "• 963 Hz: meditación profunda, interioridad",
    gotoRelax: "Te he llevado a la sección de <strong>Relajación</strong>.",
    gotoFocus: "Te he llevado a la sección de <strong>Concentración</strong>.",
    gotoMeditation: "Te he llevado a la sección de <strong>Meditación</strong>.",
    buttons: {
      relax: "Relajarme",
      focus: "Concentrarme",
      meditate: "Meditar",
      explain: "Entender las frecuencias",
      goto_relax: "Ir a Relajación",
      goto_focus: "Ver músicas Focus",
      goto_meditation: "Ver músicas Meditación",
      restart: "Otra necesidad",
      close: "Cerrar el coach"
    }
  },

  en: {
    intro:
      "Hi, I'm your <strong>MEGABRAIN Coach</strong> 🧠✨, a slightly futuristic guide. What do you need most right now?",
    relaxAdvice:
      "Great. For <strong>relaxation</strong>, start with 174 Hz or 285 Hz. Sit comfortably, close your eyes and let your body release tension.",
    focusAdvice:
      "Nice. For <strong>focus</strong>, Gamma frequencies (40 Hz) are powerful to study or work with mental clarity.",
    meditateAdvice:
      "Excellent choice. For <strong>meditation</strong>, 963 Hz helps you drop into a deeper, quieter inner state.",
    explainText:
      "Frequencies are used to <strong>influence your inner state</strong>:<br>" +
      "• 174 Hz: physical relaxation<br>" +
      "• 285 Hz: harmony & balance<br>" +
      "• 396 Hz: emotional release<br>" +
      "• 40 Hz: focus, memory, clarity<br>" +
      "• 963 Hz: deep meditation, inner work",
    gotoRelax: "I’ve taken you to the <strong>Relaxation</strong> section.",
    gotoFocus: "I’ve taken you to the <strong>Focus</strong> section.",
    gotoMeditation: "I’ve taken you to the <strong>Meditation</strong> section.",
    buttons: {
      relax: "Relax",
      focus: "Focus",
      meditate: "Meditate",
      explain: "Understand the frequencies",
      goto_relax: "Go to Relaxation",
      goto_focus: "See Focus tracks",
      goto_meditation: "See Meditation tracks",
      restart: "Something else",
      close: "Close coach"
    }
  }
};

let currentLang = "fr";

// ==========================
//      TRADUCTION UI
// ==========================
window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  currentLang = lang;

  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });

  document
    .querySelectorAll(".lang-selector button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  try {
    localStorage.setItem("megabrain_lang", lang);
  } catch (e) {}
};

document.addEventListener("DOMContentLoaded", () => {
  const saved = (typeof localStorage !== "undefined" &&
    localStorage.getItem("megabrain_lang")) || "fr";
  setLang(saved);
});

// ==========================
//     MUSIQUE DE FOND
// ==========================
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");

let musicEnabled = false;
let wasPlayingBeforeVideo = false;

if (musicBtn && bgMusic && icon) {
  musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
      bgMusic.volume = 0.35;
      bgMusic.play().then(() => {
        icon.textContent = "🔊";
        musicEnabled = true;
      }).catch(() => {
        // si le navigateur bloque l’autoplay, on ne fait rien
      });
    } else {
      bgMusic.pause();
      icon.textContent = "🔇";
      musicEnabled = false;
    }
  });
}

// ==========================
//     YOUTUBE PLAYER
// ==========================
window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (!modal || !frame) return;

  // mémoriser état musique
  wasPlayingBeforeVideo = musicEnabled && !bgMusic.paused;
  if (wasPlayingBeforeVideo) {
    bgMusic.pause();
  }

  frame.src =
    "https://www.youtube.com/embed/" +
    id +
    "?autoplay=1&rel=0&modestbranding=1";

  modal.style.display = "flex";
};

window.closeVideo = function (event) {
  if (event) event.preventDefault();
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");
  if (!modal || !frame) return;

  frame.src = "";
  modal.style.display = "none";

  // relancer musique de fond si elle était en cours
  if (wasPlayingBeforeVideo && musicEnabled) {
    bgMusic.play().catch(() => {});
  }
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (!modal) return;
  if (e.target === modal) {
    window.closeVideo();
  }
});

// ==========================
//   CHATBOT PÉDAGOGIQUE
// ==========================
let chatState = "start";

const chatToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chatbot-messages");
const chatQuick = document.getElementById("chatbot-quick");

function getPack() {
  return chatbotTexts[currentLang] || chatbotTexts["fr"];
}

// ouvrir / fermer
if (chatToggle && chatWindow) {
  chatToggle.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "flex" ? "none" : "flex";
    if (chatWindow.style.display === "flex") {
      startChat();
    }
  });
}

if (chatClose && chatWindow) {
  chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });
}

function addChatMessage(text, from = "bot") {
  if (!chatMessages) return;
  const div = document.createElement("div");
  div.classList.add("chat-msg", from);
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setQuickButtons(buttonKeys) {
  if (!chatQuick) return;
  const pack = getPack();
  chatQuick.innerHTML = "";

  buttonKeys.forEach((key) => {
    const label = (pack.buttons && pack.buttons[key]) || key;
    const b = document.createElement("button");
    b.classList.add("chat-quick-btn");
    b.textContent = label;
    b.addEventListener("click", () => handleChoice(key, label));
    chatQuick.appendChild(b);
  });
}

function startChat() {
  if (!chatMessages) return;
  const pack = getPack();
  chatMessages.innerHTML = "";
  chatState = "start";
  addChatMessage(pack.intro);
  setQuickButtons(["relax", "focus", "meditate", "explain"]);
}

function handleChoice(choiceKey, userLabel) {
  const pack = getPack();
  addChatMessage(userLabel, "user");

  if (chatState === "start") {
    if (choiceKey === "relax") {
      chatState = "relax1";
      addChatMessage(pack.relaxAdvice);
      setQuickButtons(["goto_relax", "restart"]);
    } else if (choiceKey === "focus") {
      chatState = "focus1";
      addChatMessage(pack.focusAdvice);
      setQuickButtons(["goto_focus", "restart"]);
    } else if (choiceKey === "meditate") {
      chatState = "med1";
      addChatMessage(pack.meditateAdvice);
      setQuickButtons(["goto_meditation", "restart"]);
    } else if (choiceKey === "explain") {
      chatState = "explain1";
      addChatMessage(pack.explainText);
      setQuickButtons(["relax", "focus", "meditate"]);
    }
  } else {
    if (choiceKey === "goto_relax") {
      const s = document.getElementById("relax");
      if (s) s.scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoRelax);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "goto_focus") {
      const s = document.getElementById("focus");
      if (s) s.scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoFocus);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "goto_meditation") {
      const s = document.getElementById("meditation");
      if (s) s.scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoMeditation);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "restart") {
      startChat();
    } else if (choiceKey === "close") {
      if (chatWindow) chatWindow.style.display = "none";
    }
  }
}

// si la fenêtre était déjà ouverte au chargement
document.addEventListener("DOMContentLoaded", () => {
  if (chatWindow && chatWindow.style.display === "flex") {
    startChat();
  }
});
