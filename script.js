// ==========================
//   PACKS DE TRADUCTION
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
      "<strong>2. Fréquences spécifiques</strong> : 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. sont associées à détente, clarté mentale ou libération émotionnelle.<br><br>" +
      "<strong>3. Utilisation</strong> : ces sons ne remplacent aucun traitement médical, mais peuvent aider à se relaxer, méditer ou mieux dormir.",

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
      "<strong>1. Ondas cerebrales</strong>: algunos sonidos usan ritmos binaurales o isocrónicos para favorecer estados de calma o claridad.<br><br>" +
      "<strong>2. Frecuencias específicas</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz… se asocian a relajación, claridad y liberación emocional.<br><br>" +
      "<strong>3. Uso</strong>: no sustituyen tratamientos médicos, pero pueden ayudarte a relajarte, enfocarte o dormir mejor.",

    DonateTitle: "Apoyar el proyecto:",
    DonateButton: "Apoyar vía PayPal",
    DonateNote: "Gracias por enviar en modo «Amigos y familiares».",
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
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz… calm the body, clear the mind or help emotional release.<br><br>" +
      "<strong>3. Use</strong>: these sounds do NOT replace medical care, but can support relaxation, focus and sleep.",

    DonateTitle: "Support the project:",
    DonateButton: "Support via PayPal",
    DonateNote: "Please send using «Friends & Family».",
    FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",
  }
};

// ==========================
//      TRADUCTION
// ==========================
window.setLang = function (lang) {
  const pack = translations[lang];
  if (!pack) return;

  document.querySelectorAll("[data-tr]").forEach((el) => {
    const key = el.getAttribute("data-tr");
    if (pack[key]) el.innerHTML = pack[key];
  });

  document
    .querySelectorAll(".lang-selector button")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  localStorage.setItem("megabrain_lang", lang);
};

// appliquer la langue au chargement
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("megabrain_lang") || "fr";
  setLang(saved);
});


// ==========================
//     MUSIQUE DE FOND
// ==========================
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");

let musicEnabled = false;

musicBtn.addEventListener("click", () => {
  if (!musicEnabled) {
    bgMusic.volume = 0.35;
    bgMusic.play().catch(() => {});
    icon.textContent = "🔊";
    musicEnabled = true;
  } else {
    bgMusic.pause();
    icon.textContent = "🔇";
    musicEnabled = false;
  }
});


// ==========================
//   LECTURE VIDÉOS YOUTUBE
// ==========================
window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  // couper musique
  if (musicEnabled) bgMusic.pause();

  frame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  modal.style.display = "flex";
};

window.closeVideo = function (event) {
  if (event) event.preventDefault();

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  frame.src = "";
  modal.style.display = "none";

  if (musicEnabled) bgMusic.play();
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (e.target === modal) closeVideo();
});


// ==========================
//     CHATBOT PEDAGOGIQUE
// ==========================
let chatState = "start";

const chatToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chatbot-messages");
const chatQuick = document.getElementById("chatbot-quick");

// Ouvrir/fermer
if (chatToggle) {
  chatToggle.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "flex" ? "none" : "flex";

    if (chatWindow.style.display === "flex") startChat();
  });
}

if (chatClose) {
  chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });
}

// Ajouter un message
function addChatMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.classList.add("chat-msg", from);
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Boutons rapides
function setQuickButtons(buttons) {
  chatQuick.innerHTML = "";
  buttons.forEach((btn) => {
    const b = document.createElement("button");
    b.classList.add("chat-quick-btn");
    b.textContent = btn.label;
    b.addEventListener("click", () => handleChoice(btn.value));
    chatQuick.appendChild(b);
  });
}

// Démarrage chatbot
function startChat() {
  chatMessages.innerHTML = "";
  chatState = "start";

  addChatMessage(
    "Bonjour, je suis ton <strong>Coach MEGABRAIN</strong> 🧠.<br>Comment puis-je t’aider aujourd’hui ?"
  );

  setQuickButtons([
    { label: "Me relaxer", value: "relax" },
    { label: "Me concentrer", value: "focus" },
    { label: "Méditer", value: "meditate" },
    { label: "Comprendre les fréquences", value: "explain" },
  ]);
}


// Gestion des choix utilisateur
function handleChoice(choice) {
  addChatMessage(choice, "user");

  if (choice === "relax") {
    addChatMessage(
      "Pour la <strong>relaxation</strong>, commence par 174 Hz ou 285 Hz."
    );
    setQuickButtons([
      { label: "Voir Relaxation", value: "goto_relax" },
      { label: "Autre", value: "restart" },
    ]);
  }

  else if (choice === "focus") {
    addChatMessage(
      "Pour la <strong>concentration</strong>, les 40 Hz Gamma sont excellents."
    );
    setQuickButtons([
      { label: "Voir Focus", value: "goto_focus" },
      { label: "Autre", value: "restart" },
    ]);
  }

  else if (choice === "meditate") {
    addChatMessage(
      "Pour la <strong>méditation</strong>, essaie 963 Hz."
    );
    setQuickButtons([
      { label: "Voir Méditation", value: "goto_meditation" },
      { label: "Autre", value: "restart" },
    ]);
  }

  else if (choice === "explain") {
    addChatMessage(
      "Voici un résumé clair des fréquences :<br>" +
        "• 174 Hz : détente profonde<br>" +
        "• 285 Hz : harmonie<br>" +
        "• 396 Hz : libération émotionnelle<br>" +
        "• 40 Hz : concentration<br>" +
        "• 963 Hz : méditation intense"
    );
    setQuickButtons([
      { label: "Relaxation", value: "relax" },
      { label: "Concentration", value: "focus" },
      { label: "Méditation", value: "meditate" },
    ]);
  }

  // Redirections
  else if (choice === "goto_relax") {
    document.getElementById("relax")?.scrollIntoView({ behavior: "smooth" });
    addChatMessage("Je t’ai emmené à la section Relaxation.");
    setQuickButtons([{ label: "Fermer", value: "close" }]);
  }
  else if (choice === "goto_focus") {
    document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
    addChatMessage("Section Concentration affichée.");
    setQuickButtons([{ label: "Fermer", value: "close" }]);
  }
  else if (choice === "goto_meditation") {
    document.getElementById("meditation")?.scrollIntoView({ behavior: "smooth" });
    addChatMessage("Section Méditation affichée.");
    setQuickButtons([{ label: "Fermer", value: "close" }]);
  }

  else if (choice === "close") {
    chatWindow.style.display = "none";
  }
  else if (choice === "restart") {
    startChat();
  }
}
