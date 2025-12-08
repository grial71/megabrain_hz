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

// ======================================================
//  CHATBOT – TEXTES MULTILINGUES
// ======================================================
const chatbotTexts = {
  fr: {
    intro:
      "Bonjour, je suis ton <strong>Coach MEGABRAIN</strong> 🧠✨. De quoi as-tu besoin maintenant ?",
    relaxAdvice:
      "Pour la <strong>relaxation</strong>, commence par 174 Hz ou 285 Hz.",
    focusAdvice:
      "Pour la <strong>concentration</strong>, les fréquences Gamma (40 Hz) sont idéales.",
    meditateAdvice:
      "Pour la <strong>méditation</strong>, essaie 963 Hz pour un état profond.",
    explainText:
      "Les fréquences influencent ton état intérieur :<br>" +
      "• 174 Hz : détente<br>" +
      "• 285 Hz : harmonie<br>" +
      "• 396 Hz : libération<br>" +
      "• 40 Hz : concentration<br>" +
      "• 963 Hz : méditation profonde",
    gotoRelax: "Je t’ai emmené à la section Relaxation.",
    gotoFocus: "Je t’ai emmené à la section Concentration.",
    gotoMeditation: "Je t’ai emmené à la section Méditation.",
    buttons: {
      relax: "Me relaxer",
      focus: "Me concentrer",
      meditate: "Méditer",
      explain: "Comprendre les fréquences",
      goto_relax: "Aller à Relaxation",
      goto_focus: "Voir Concentration",
      goto_meditation: "Voir Méditation",
      restart: "Autre besoin",
      close: "Fermer"
    }
  },

  es: {
    intro:
      "Hola, soy tu <strong>Coach MEGABRAIN</strong> 🧠✨. ¿Qué necesitas ahora?",
    relaxAdvice:
      "Para la <strong>relajación</strong>, escucha 174 Hz o 285 Hz.",
    focusAdvice:
      "Para la <strong>concentración</strong>, 40 Hz Gamma es excelente.",
    meditateAdvice:
      "Para la <strong>meditación</strong>, prueba 963 Hz.",
    explainText:
      "Las frecuencias influyen en tu estado interior:<br>" +
      "• 174 Hz: relajación<br>" +
      "• 285 Hz: armonía<br>" +
      "• 396 Hz: liberación<br>" +
      "• 40 Hz: concentración<br>" +
      "• 963 Hz: meditación profunda",
    gotoRelax: "Te llevo a Relajación.",
    gotoFocus: "Te llevo a Concentración.",
    gotoMeditation: "Te llevo a Meditación.",
    buttons: {
      relax: "Relajarme",
      focus: "Concentrarme",
      meditate: "Meditar",
      explain: "Entender frecuencias",
      goto_relax: "Ir a Relajación",
      goto_focus: "Ir a Concentración",
      goto_meditation: "Ir a Meditación",
      restart: "Otra cosa",
      close: "Cerrar"
    }
  },

  en: {
    intro:
      "Hi! I'm your <strong>MEGABRAIN Coach</strong> 🧠✨. What do you need now?",
    relaxAdvice:
      "For <strong>relaxation</strong>, start with 174 Hz or 285 Hz.",
    focusAdvice:
      "For <strong>focus</strong>, Gamma 40 Hz works incredibly well.",
    meditateAdvice:
      "For <strong>meditation</strong>, try 963 Hz.",
    explainText:
      "Frequencies influence your inner state:<br>" +
      "• 174 Hz: physical relaxation<br>" +
      "• 285 Hz: harmony<br>" +
      "• 396 Hz: emotional release<br>" +
      "• 40 Hz: focus<br>" +
      "• 963 Hz: deep meditation",
    gotoRelax: "Taking you to Relaxation.",
    gotoFocus: "Taking you to Focus.",
    gotoMeditation: "Taking you to Meditation.",
    buttons: {
      relax: "Relax",
      focus: "Focus",
      meditate: "Meditate",
      explain: "Understand frequencies",
      goto_relax: "Go to Relaxation",
      goto_focus: "Go to Focus",
      goto_meditation: "Go to Meditation",
      restart: "Something else",
      close: "Close"
    }
  }
};

// langue actuelle
let currentLang = "fr";

// ======================================================
//         TRADUCTION DE L’INTERFACE UI
// ======================================================
window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  currentLang = lang;

  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });

  document.querySelectorAll(".lang-selector button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  localStorage.setItem("megabrain_lang", lang);
};

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("megabrain_lang") || "fr";
  setLang(saved);
  currentLang = saved;
});

// ======================================================
//       MUSIQUE DE FOND
// ======================================================
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
      });
    } else {
      bgMusic.pause();
      icon.textContent = "🔇";
      musicEnabled = false;
    }
  });
}

// ======================================================
//       VIDEOS YOUTUBE
// ======================================================
window.openVideo = function (el) {
  const id = el.dataset.videoId;
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  wasPlayingBeforeVideo = musicEnabled && !bgMusic.paused;
  if (wasPlayingBeforeVideo) bgMusic.pause();

  frame.src =
    `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  modal.style.display = "flex";
};

window.closeVideo = function () {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  frame.src = "";
  modal.style.display = "none";

  if (wasPlayingBeforeVideo) bgMusic.play().catch(() => {});
};

document.addEventListener("click", (e) => {
  if (e.target.id === "videoModal") closeVideo();
});

// ======================================================
//       CHATBOT PEDAGOGIQUE
// ======================================================
let chatState = "start";

const chatToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chatbot-messages");
const chatQuick = document.getElementById("chatbot-quick");

function getPack() {
  return chatbotTexts[currentLang] || chatbotTexts["fr"];
}

if (chatToggle && chatWindow) {
  chatToggle.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "flex" ? "none" : "flex";

    if (chatWindow.style.display === "flex") {
      currentLang = localStorage.getItem("megabrain_lang") || "fr"; // 🔥 correction multilingue
      startChat();
    }
  });
}

if (chatClose) {
  chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });
}

function addChatMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.classList.add("chat-msg", from);
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setQuickButtons(buttonKeys) {
  chatQuick.innerHTML = "";
  const pack = getPack();

  buttonKeys.forEach((key) => {
    const label = pack.buttons[key] || key;
    const b = document.createElement("button");
    b.classList.add("chat-quick-btn");
    b.textContent = label;
    b.addEventListener("click", () => handleChoice(key, label));
    chatQuick.appendChild(b);
  });
}

function startChat() {
  const pack = getPack();
  chatMessages.innerHTML = "";
  chatState = "start";
  addChatMessage(pack.intro);
  setQuickButtons(["relax", "focus", "meditate", "explain"]);
}

function handleChoice(choiceKey, label) {
  const pack = getPack();
  addChatMessage(label, "user");

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
      document.getElementById("relax").scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoRelax);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "goto_focus") {
      document.getElementById("focus").scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoFocus);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "goto_meditation") {
      document.getElementById("meditation").scrollIntoView({ behavior: "smooth" });
      addChatMessage(pack.gotoMeditation);
      setQuickButtons(["restart", "close"]);
    } else if (choiceKey === "restart") {
      startChat();
    } else if (choiceKey === "close") {
      chatWindow.style.display = "none";
    }
  }
}
