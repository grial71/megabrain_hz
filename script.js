// Traductions (FR-ES-EN)
const translations = {
  fr: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Douleur", "Étude": "Étude", "Méditation": "Méditation", "Livres": "Livres",
    "Créé par Michel Quinones": "Créé par Michel Quinones",
    "intro_texte_principal": "Deux hernies discales + arthrose cervicale depuis des années → je teste tout.<br>Voici les fréquences et vidéos qui m’aident vraiment au quotidien : douleur, concentration, paix intérieure.",
    "Comment fonctionnent ces fréquences ?": "Comment fonctionnent ces fréquences ?",
    "explication_frequences": "<strong>1. Ondas binaurales</strong> → deux tons différents créent une troisième fréquence dans le cerveau…<br><strong>2. Fréquences solfège</strong> → 174 Hz (douleur), 285 Hz (régénération), 528 Hz (amour), etc.<br><strong>3. Schumann 7,83 Hz</strong> → synchronisation avec la Terre.<br><br><strong>Important :</strong> ce n’est pas un traitement médical, mais des milliers de personnes (moi compris) ressentent un vrai soulagement.",
    "Ce projet vous change la vie ? Coffee": "Ce projet vous change la vie ? Coffee",
    "Soutenir via PayPal": "Soutenir via PayPal",
    "Merci d’envoyer en mode « Amis & famille » (0 frais)": "Merci d’envoyer en mode « Amis & famille » (0 frais)",
    "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones"
  },
  es: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Dolor", "Étude": "Estudio", "Méditation": "Meditación", "Livres": "Libros",
    "Créé par Michel Quinones": "Creado por Michel Quinones",
    "intro_texte_principal": "Dos hernias de disco + artrosis cervical durante años → pruebo todo.<br>Aquí están las frecuencias y videos que realmente me ayudan a diario: dolor, concentración, paz interior.",
    "Comment fonctionnent ces fréquences ?": "¿Cómo funcionan estas frecuencias?",
    "explicacion_frequences": "<strong>1. Ondas binaurales</strong> → dos tonos diferentes crean una tercera frecuencia en el cerebro…<br><strong>2. Frecuencias Solfeggio</strong> → 174 Hz (dolor), 285 Hz (regeneración), 528 Hz (amor), etc.<br><strong>3. Schumann 7,83 Hz</strong> → sincronización con la Tierra.<br><br><strong>Importante:</strong> esto no es un tratamiento médico, pero miles de personas (yo incluido) sienten un verdadero alivio.",
    "Ce projet vous change la vie ? Coffee": "¿Este proyecto te cambia la vida? Coffee",
    "Soutenir via PayPal": "Apoyar a través de PayPal",
    "Merci d’envoyer en mode « Amis & famille » (0 frais)": "Gracias por enviar como «Amigos y familiares» (0 cargos)",
    "MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Creado con amor por Michel Quinones"
  },
  en: {
    "MEGABRAIN": "MEGABRAIN",
    "Douleur": "Pain", "Étude": "Study", "Méditation": "Meditation", "Livres": "Books",
    "Créé par Michel Quinones": "Created by Michel Quinones",
    "intro_texte_principal": "Two herniated discs + cervical osteoarthritis for years → I try everything.<br>Here are the frequencies and videos that truly help me daily: pain, concentration, inner peace.",
    "Comment fonctionnent ces fréquences ?": "How do these frequencies work?",
    "explicacion_frequences": "<strong>1. Binaural Beats</strong> → two different tones create a third frequency in the brain…<br><strong>2. Solfeggio Frequencies</strong> → 174 Hz (pain), 285 Hz (regeneration), 528 Hz (love), etc.<br><strong>3. Schumann 7.83 Hz</strong> → synchronization with the Earth.<br><br><strong>Important :</strong> this is not medical treatment, but thousands of people (myself included) feel real relief.",
    "Ce projet vous change la vie ? Coffee": "Does this project change your life? Coffee",
  	"Soutenir via PayPal": "Support via PayPal",
  	"Merci d’envoyer en mode « Amis & famille » (0 frais)": "Please send using «Friends & Family» (0 fees)",
  	"MEGABRAIN © 2025 – Créé avec amour par Michel Quinones": "MEGABRAIN © 2025 – Created with love by Michel Quinones"
  }
};

// --- Logique de Traduction ---
window.setLang = function(lang) {
    document.querySelectorAll('.lang-selector button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });

    const translationSet = translations[lang];
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translationSet[key] !== undefined) {
            element.innerHTML = translationSet[key];
        }
    });

    localStorage.setItem('megabrainLang', lang);
};


// --- Logique d'affichage des vidéos ---
const modal = document.getElementById('video-modal');
const player = document.getElementById('youtube-player');

window.openVideo = function(videoElement) {
    const videoId = videoElement.getAttribute('data-video-id');
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3`;
        player.src = embedUrl;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = function() {
    modal.style.display = 'none';
    player.src = '';
    document.body.style.overflow = 'auto';
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});


// --- Logique du Ciel Étoilé et du Phénix en 3D (AVEC THREE.JS) ---

let scene, camera, renderer, starField, phoenix;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function initThreeJS() {
    const starsBackgroundContainer = document.getElementById('stars-background');

    // 1. SCENE
    scene = new THREE.Scene();
    
    // 2. CAMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true pour un fond transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    starsBackgroundContainer.appendChild(renderer.domElement);

    // 4. ÉTOILES EN 3D
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVertices = [];
    for (let i = 0; i < 1000; i++) { // Plus d'étoiles en 3D
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 200;
        starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 5. CHARGEMENT DU PHÉNIX (PLACEHOLDER)
    // Ici, vous devrez charger votre modèle 3D de phénix. C'est la partie la plus complexe.
    // Pour l'instant, je vais ajouter une simple boîte comme "phénix" pour visualiser.
    const phoenixGeometry = new THREE.BoxGeometry(1, 1, 1);
    const phoenixMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500, wireframe: true }); // Orange, mode fil de fer
    phoenix = new THREE.Mesh(phoenixGeometry, phoenixMaterial);
    phoenix.position.set(0, 0, 0); // Position initiale au centre
    scene.add(phoenix);

    // Si vous aviez un modèle GLTF (le plus courant pour des modèles animés):
    // const GLTFLoader = new THREE.GLTFLoader();
    // GLTFLoader.load( 'chemin/vers/votre_phenix.gltf', function ( gltf ) {
    //     phoenix = gltf.scene;
    //     scene.add( phoenix );
    //     // Gérer les animations si le modèle en a
    //     // mixer = new THREE.AnimationMixer( phoenix );
    //     // const action = mixer.clipAction( gltf.animations[ 0 ] );
    //     // action.play();
    // }, undefined, function ( error ) {
    //     console.error( error );
    // } );


    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 100; // Plus grande intensité de mouvement
    mouseY = (event.clientY - windowHalfY) / 100;
}

function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);

    // Mouvement des étoiles
    if (starField) {
        starField.rotation.y += 0.0005; // Rotation lente pour un effet de mouvement
        starField.rotation.x += 0.0002;
    }

    // Mouvement du phénix (notre boîte placeholder)
    if (phoenix) {
        phoenix.rotation.x += 0.01;
        phoenix.rotation.y += 0.005;
        // Simule un vol en changeant sa position avec le temps
        phoenix.position.x = Math.sin(Date.now() * 0.001) * 3;
        phoenix.position.y = Math.cos(Date.now() * 0.0008) * 2;
        phoenix.position.z = Math.sin(Date.now() * 0.0005) * 5;
    }

    // Effet parallaxe de la caméra avec la souris
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position); // La caméra regarde toujours le centre de la scène

    renderer.render(scene, camera);
}


// --- Initialisation au chargement de la page ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('megabrainLang') || 'fr'; 
    setLang(savedLang);
    
    initThreeJS(); // Initialise la scène 3D
    animateThreeJS(); // Lance la boucle d'animation
});
