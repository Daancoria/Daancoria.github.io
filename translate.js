const translations = {
        es: {
          "About Me": "Sobre mí",
          "Skills": "Habilidades",
          "Projects": "Proyectos",
          "See the Projects in Action": "Ver los proyectos en acción",
          "Contact": "Contacto",
          "Feel free to reach out via:": "No dudes en ponerte en contacto a través de:",
          "Email": "Correo electrónico",
          "GitHub": "GitHub",
          "LinkedIn": "LinkedIn",
          "American Translators Association": "Asociación Americana de Traductores",
          "Software Developer": "Desarrollador de Software",
          "Hi, I am @Daancoria": "Hola, soy @Daancoria",
          "I am interested in game development, Python projects, building interactive applications, and languages translation and interpretation.":
            "Estoy interesado en el desarrollo de juegos, proyectos en Python, creación de aplicaciones interactivas y traducción e interpretación de idiomas.",
          "Currently working on Pygame, Kivy, and state management for web applications, mobile apps, games and much more.":
            "Actualmente trabajando en Pygame, Kivy y gestión de estados para aplicaciones web, aplicaciones móviles, juegos y mucho más.",
          "Looking to collaborate on open-source game projects, quiz applications, and creative coding challenges.":
            "Buscando colaborar en proyectos de juegos de código abierto, aplicaciones de cuestionarios y desafíos de programación creativa.",
          "Fun fact: I love building logic-based games, tweaking mechanics to make gameplay feel just right, and exploring new languages!":
            "Dato curioso: ¡Me encanta crear juegos basados en lógica, ajustar mecánicas para que el juego sea perfecto y explorar nuevos idiomas!",
        },
        fr: {
          "About Me": "À propos de moi",
          "Skills": "Compétences",
          "Projects": "Projets",
          "See the Projects in Action": "Voir les projets en action",
          "Contact": "Contact",
          "Feel free to reach out via:": "N'hésitez pas à me contacter via :",
          "Email": "E-mail",
          "GitHub": "GitHub",
          "LinkedIn": "LinkedIn",
          "American Translators Association": "Association Américaine des Traducteurs",
          "Software Developer": "Développeur de logiciels",
          "Hi, I am @Daancoria": "Bonjour, je suis @Daancoria",
          "I am interested in game development, Python projects, building interactive applications, and languages translation and interpretation.":
            "Je m'intéresse au développement de jeux, aux projets Python, à la création d'applications interactives et à la traduction et l'interprétation de langues.",
          "Currently working on Pygame, Kivy, and state management for web applications, mobile apps, games and much more.":
            "Actuellement en train de travailler sur Pygame, Kivy et la gestion d'état pour les applications web, les applications mobiles, les jeux et bien plus encore.",
          "Looking to collaborate on open-source game projects, quiz applications, and creative coding challenges.":
            "Je cherche à collaborer sur des projets de jeux open-source, des applications de quiz et des défis de programmation créative.",
          "Fun fact: I love building logic-based games, tweaking mechanics to make gameplay feel just right, and exploring new languages!":
            "Fait amusant : J'adore créer des jeux basés sur la logique, ajuster les mécaniques pour que le gameplay soit parfait et explorer de nouvelles langues !",
        },
        it: {
          "About Me": "Chi sono",
          "Skills": "Competenze",
          "Projects": "Progetti",
          "See the Projects in Action": "Guarda i progetti in azione",
          "Contact": "Contatto",
          "Feel free to reach out via:": "Sentiti libero di contattarmi tramite:",
          "Email": "Email",
          "GitHub": "GitHub",
          "LinkedIn": "LinkedIn",
          "American Translators Association": "Associazione Americana Traduttori",
          "Software Developer": "Sviluppatore di Software",
          "Hi, I am @Daancoria": "Ciao, sono @Daancoria",
          "I am interested in game development, Python projects, building interactive applications, and languages translation and interpretation.":
            "Sono interessato allo sviluppo di giochi, progetti in Python, creazione di applicazioni interattive e traduzione e interpretazione di lingue.",
          "Currently working on Pygame, Kivy, and state management for web applications, mobile apps, games and much more.":
            "Attualmente sto lavorando su Pygame, Kivy e gestione dello stato per applicazioni web, app mobili, giochi e molto altro.",
          "Looking to collaborate on open-source game projects, quiz applications, and creative coding challenges.":
            "Cerco di collaborare a progetti di giochi open-source, applicazioni di quiz e sfide di programmazione creativa.",
          "Fun fact: I love building logic-based games, tweaking mechanics to make gameplay feel just right, and exploring new languages!":
            "Curiosità: Adoro creare giochi basati sulla logica, modificare le meccaniche per rendere il gameplay perfetto ed esplorare nuove lingue!",
        },
      };
    
      document.getElementById("language").addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
    });
const translatePage = (language) => {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[language][key] || key;
  });
};

document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  translatePage(selectedLanguage);
});