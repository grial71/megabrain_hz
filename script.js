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
      "<strong>3. Uso</strong>: no sustituyen tratamientos médicos, pero pueden ayudar a relajarte, meditar o dormir mejor.",

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
      "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats to encourage relaxed or focused states.<br><br>" +
      "<strong>2. Specific frequencies</strong>: 174 Hz, 285 Hz, 396 Hz, 40 Hz, etc. are associated with calm, clarity and emotional release.<br><br>" +
      "<strong>3. Usage</strong>: these sounds do NOT replace medical care, but can help you relax, meditate, focus or sleep better.",

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

// Appliquer la langue sauvegardée
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
//     YOUTUBE PLAYER
// ==========================
window.openVideo = function (el) {
  const id = el.dataset.videoId;
  if (!id) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("ytPlayer");

  // Couper la musique de fond
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

  // Relancer musique si elle était active
  if (musicEnabled) bgMusic.play();
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("videoModal");
  if (e.target === modal) closeVideo();
});
