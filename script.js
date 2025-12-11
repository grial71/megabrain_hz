/* ============================== */
/*     🔮 MENU ORBE OUVERTURE     */
/* ============================== */

const orbToggle = document.getElementById("orb-toggle");
const orbMenu = document.getElementById("orb-menu");

if (orbToggle && orbMenu) {
    orbToggle.addEventListener("click", () => {
        orbMenu.classList.toggle("show");
    });
}

/* ============================== */
/*        TRADUCTIONS UI         */
/* ============================== */

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
          "<strong>1. Ondes cérébrales</strong> : certaines musiques utilisent des battements binauraux ou isochrones...",

        DonateTitle: "Soutenir le projet :",
        DonateButton: "Soutenir via PayPal",
        DonateNote: "Merci d’envoyer en mode « Amis et proches ».",
        FooterText: "MEGABRAIN © 2025 – Créé par Michel Quinones",

        // 🔮 MENU ORBE
        OrbHome: "Accueil",
        OrbTelegram: "Contact Telegram",
        OrbTikTok: "Profil TikTok",
        OrbMontse: "Montse Valls – Hypnose & thérapie",
        OrbRelaxPlaylist: "Playlist Relaxation",
        OrbNeuroPlaylist: "Playlist Neurosciences",
        OrbGoFund: "Soutenir sur GoFundMe",
    },

    es: {
        MEGABRAIN: "MEGABRAIN",
        NavRelax: "Relajación",
        NavFocus: "Concentración",
        NavMeditation: "Meditación",
        NavBooks: "Libros",

        IntroTitle: "Creado por Michel Quinones",
        IntroText:
          "Selección de frecuencias sonoras y músicas pensadas para favorecer la relajación...",

        ExplainTitle: "¿Cómo funcionan estas frecuencias?",
        ExplainText:
          "<strong>1. Ondas cerebrales</strong>: algunos audios usan ritmos binaurales...",

        DonateTitle: "Apoyar el proyecto:",
        DonateButton: "Apoyar vía PayPal",
        DonateNote: "Gracias por enviar como «Amigos y familiares».",
        FooterText: "MEGABRAIN © 2025 – Creado por Michel Quinones",

        // 🔮 MENU ORBE
        OrbHome: "Inicio",
        OrbTelegram: "Contacto Telegram",
        OrbTikTok: "Perfil TikTok",
        OrbMontse: "Montse Valls – Hipnosis y terapia",
        OrbRelaxPlaylist: "Playlist Relajación",
        OrbNeuroPlaylist: "Playlist Neurociencia",
        OrbGoFund: "Apoyar en GoFundMe",
    },

    en: {
        MEGABRAIN: "MEGABRAIN",
        NavRelax: "Relaxation",
        NavFocus: "Focus",
        NavMeditation: "Meditation",
        NavBooks: "Books",

        IntroTitle: "Created by Michel Quinones",
        IntroText:
          "A selection of frequencies and music designed to support relaxation...",

        ExplainTitle: "How do these frequencies work?",
        ExplainText:
          "<strong>1. Brainwaves</strong>: some tracks use binaural or isochronic beats...",

        DonateTitle: "Support the project:",
        DonateButton: "Support via PayPal",
        DonateNote: "Please send using «Friends & Family».",
        FooterText: "MEGABRAIN © 2025 – Created by Michel Quinones",

        // 🔮 MENU ORBE
        OrbHome: "Home",
        OrbTelegram: "Telegram contact",
        OrbTikTok: "TikTok profile",
        OrbMontse: "Montse Valls – Hypnosis & therapy",
        OrbRelaxPlaylist: "Relaxation playlist",
        OrbNeuroPlaylist: "Neuroscience playlist",
        OrbGoFund: "Support on GoFundMe",
    }
};

/* ============================== */
/*   FONCTION DE TRADUCTION       */
/* ============================== */

window.setLang = function(lang){
    const pack = translations[lang];
    if(!pack) return;

    currentLang = lang;

    document.querySelectorAll("[data-tr]").forEach(el=>{
        const key = el.getAttribute("data-tr");
        if(pack[key]) el.innerHTML = pack[key];
    });

    document.querySelectorAll(".lang-selector button").forEach(btn=>{
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("megabrain_lang", lang);
};

let currentLang = "fr";
document.addEventListener("DOMContentLoaded", ()=>{
    const saved = localStorage.getItem("megabrain_lang") || "fr";
    setLang(saved);
});

/* ============================== */
/*       MUSIQUE DE FOND          */
/* ============================== */

const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");
const icon = document.getElementById("music-icon");

let musicEnabled = false;

musicBtn.addEventListener("click", ()=>{
    if(!musicEnabled){
        bgMusic.volume = 0.35;
        bgMusic.play();
        icon.textContent = "🔊";
        musicEnabled = true;
    } else {
        bgMusic.pause();
        icon.textContent = "🔇";
        musicEnabled = false;
    }
});

/* ============================== */
/*     YOUTUBE PLAYER             */
/* ============================== */

window.openVideo = function(el){
    const id = el.dataset.videoId;
    if(!id) return;

    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("ytPlayer");

    frame.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    modal.style.display = "flex";
};

window.closeVideo = function(e){
    if(e) e.preventDefault();
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("ytPlayer");

    frame.src = "";
    modal.style.display = "none";
};

/* Fermer en cliquant à côté */
document.addEventListener("click", e=>{
    const modal = document.getElementById("videoModal");
    if(e.target === modal) closeVideo();
});

/* ============================== */
/*       CHATBOT MÉGABRAIN        */
/* ============================== */
/* (Version déjà fonctionnelle – inchangée) */
/* ------------------------------------------------ */

… (garde ici ton code chatbot existant, inchangé)
