function toggleImage(card) {
    const img = card.querySelector('.project-image');
    if (img.classList.contains('show')) {
      img.classList.remove('show');
      setTimeout(() => img.classList.add('hidden'), 500);
    } else {
      img.classList.remove('hidden');
      setTimeout(() => img.classList.add('show'), 10);
    }
}

// Fonction pour agrandir un projet au centre de la page
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne toutes les cartes de projet
  const projectCards = document.querySelectorAll('.project-card');
  
  // Création de l'overlay pour le fond
  const projectOverlay = document.createElement('div');
  projectOverlay.className = 'project-overlay';
  projectOverlay.style.position = 'fixed';
  projectOverlay.style.top = 0;
  projectOverlay.style.left = 0;
  projectOverlay.style.width = '100vw';
  projectOverlay.style.height = '100vh';
  projectOverlay.style.background = 'rgba(10, 10, 20, 0.9)';
  projectOverlay.style.backdropFilter = 'blur(10px)';
  projectOverlay.style.zIndex = 9998;
  projectOverlay.style.display = 'none';
  projectOverlay.style.opacity = 0;
  projectOverlay.style.transition = 'opacity 0.3s ease';
  projectOverlay.style.overflow = 'auto';
  projectOverlay.style.padding = '50px 20px';
  projectOverlay.style.justifyContent = 'center';
  projectOverlay.style.alignItems = 'flex-start';
  
  document.body.appendChild(projectOverlay);
  
  // Pour chaque carte de projet
  projectCards.forEach(card => {
    // On ajoute un écouteur d'événement sur le header du projet
    const header = card.querySelector('.project-header');
    header.style.cursor = 'pointer';
    
    // Effet visuel au survol
    header.addEventListener('mouseenter', function() {
      header.style.background = 'rgba(102, 126, 234, 0.1)';
      header.style.borderRadius = '10px';
      header.style.transition = 'background 0.2s';
    });
    
    header.addEventListener('mouseleave', function() {
      header.style.background = 'transparent';
    });
    
    header.addEventListener('click', function(e) {
      // Ne pas agrandir si on clique sur un lien
      if (e.target.closest('.project-link')) return;
      
      // Création d'une copie de la carte pour l'affichage agrandi
      const expandedCard = card.cloneNode(true);
      expandedCard.className = 'project-card expanded';
      
      // Récupération des informations de base du projet
      const projectTitle = expandedCard.querySelector('h3') ? expandedCard.querySelector('h3').textContent : 'Projet';
      const projectDescription = expandedCard.querySelector('p') ? expandedCard.querySelector('p').textContent : '';
      const projectTechText = expandedCard.querySelector('.project-tech') ? expandedCard.querySelector('.project-tech').textContent : '';
      
      // Contenu personnalisé selon le projet
      let customContent = {};
      
      // Définition du contenu spécifique selon le titre du projet
      if (projectTitle.includes("Hardis")) {
        customContent = {
          objectives: [
            "Comprendre le fonctionnement global d’une entreprise du numérique (organisation, stratégie, valeurs)",
            "Analyser la transition numérique et écologique d’une entreprise réelle",
            "Concevoir une maquette et développer un site web éducatif accessible à un jeune public"
          ],
          teamwork: "Projet réalisé en équipe de 3 étudiants, avec une phase de recherche approfondie suivie de la conception collaborative d’un site web. Répartition des tâches, validation par itérations (retours sur maquette), et coordination via Chamilo pour les rendus.",
          personalContribution: [
            "Recherche et synthèse des informations clés sur Hardis Group : activité, clients, valeurs, stratégie, transition écologique",
            "Rédaction vulgarisée de contenus adaptés à un public de collégiens",
            "Participation à la conception de la maquette du site web en respectant les critères de sobriété visuelle et accessibilité",
            "Conception du plan du site, structuration des pages et intégration du glossaire métier"
          ],
          skills: [
            "Recherche documentaire et analyse d’entreprise (secteur numérique)",
            "Vulgarisation de contenu technique et économique pour un public non expert",
            "Conception UI/UX simple et fonctionnelle",
            "Travail en équipe avec itérations successives sur la base de retours enseignants"
          ]
        };
      }
      else if (projectTitle.includes("JavaFX") || projectTitle.toLowerCase().includes("erp")) {
customContent = {
  objectives: [
    "Concevoir et développer une application de gestion d’événements sportifs (ERP) pour les Grands Prix automobiles",
    "Appliquer les principes de modélisation UML et de conception logicielle orientée objet",
    "Mettre en œuvre une interface utilisateur ergonomique et fonctionnelle avec JavaFX"
  ],
  teamwork: "Projet réalisé en équipe de 6 personnes (équipe D-16), avec une répartition claire des rôles (chef de projet, responsable conception, code, IHM, communication...). Le travail s’est déroulé en mode collaboratif avec une organisation semi-Agile : réunions régulières, coordination via Discord, rédaction collaborative sur Google Docs, et versioning du code sur GitLab.",
  personalContribution: [
    "Participation à la rédaction et la modélisation des cas d’utilisation, scénarios et diagrammes UML (classes, objets, séquences)",
    "Contribution à la modélisation de l’interface utilisateur en cohérence avec les besoins des personas identifiés (directeur, sécurité, technicienne circuit)",
    "Implémentation de modules spécifiques tels que la création des Grands Prix, la configuration des écuries et des pilotes, et les règles de sécurité",
    "Application des critères ergonomiques (guidage, lisibilité, feedback) dans le développement de l’IHM JavaFX"
  ],
  skills: [
    "Modélisation UML complète (cas d'utilisation, classes métier, séquences, objets)",
    "Développement d’interfaces JavaFX orientées utilisateur avec respect des critères ergonomiques",
    "Conception d’une architecture logicielle conforme aux principes du modèle MVC",
    "Travail collaboratif structuré, gestion de version (GitLab), et rédaction de livrables académiques"
  ]
};

      }
      else if (projectTitle.toLowerCase().includes("sort") || projectTitle.toLowerCase().includes("game")) {
        customContent = {
          objectives: [
            "Concevoir et développer un jeu interactif avec interface utilisateur en Python (Qt5)",
            "Mettre en œuvre une architecture orientée objet pour la logique du jeu",
            "Assurer une expérience utilisateur fluide avec des interactions graphiques et textuelles"
          ],
          teamwork: "Projet réalisé en binôme avec une répartition claire des tâches. Suivi documenté dans un carnet de bord, coordination continue durant le développement. Utilisation d'outils collaboratifs comme Canva pour la création du tableau de bord et des supports visuels.",
          personalContribution: [
            "Développement des classes de base du jeu dans `classes_bs.py`",
            "Implémentation de l’interface graphique avec PyQt5 (design des tubes, boutons, affichage)",
            "Programmation de l’interface textuelle du jeu avec détection de la langue de l’utilisateur (français/anglais)",
            "Correction des bugs d'affichage et finalisation du comportement interactif des éléments de l’interface"
          ],
          skills: [
            "Développement d’applications Python avec interface graphique (Qt5)",
            "Programmation orientée objet et gestion des événements utilisateur",
            "Organisation personnelle et suivi de projet via carnet de bord"
          ]
        };

      }
      else if (projectTitle.toLowerCase().includes("api") || projectTitle.toLowerCase().includes("rest")) {
        customContent = {
          objectives: [
            "Concevoir une API RESTful respectant les standards du web",
            "Développer un système d'authentification sécurisé avec JWT",
            "Documenter l'API de manière claire et précise"
          ],
          teamwork: "Projet réalisé en équipe de 4 personnes avec répartition des fonctionnalités. Nous avons travaillé avec Git Flow pour maintenir une organisation stricte des branches de développement.",
          personalContribution: [
            "Conception de l'architecture de l'API et des endpoints",
            "Implémentation du système d'authentification JWT",
            "Tests d'intégration et validation des performances"
          ],
          skills: [
            "Conception d'APIs RESTful selon les bonnes pratiques",
            "Sécurisation des échanges de données et gestion de l'authentification",
            "Documentation technique d'API avec Swagger/OpenAPI",
            "Tests automatisés pour garantir la fiabilité"
          ]
        };
      }
      else if (projectTitle.toLowerCase().includes("mobile") || projectTitle.toLowerCase().includes("android")) {
        customContent = {
          objectives: [
            "Développer une application mobile native pour Android",
            "Implémenter une interface utilisateur intuitive suivant les guidelines Material Design",
            "Optimiser les performances et la consommation de batterie"
          ],
          teamwork: "Projet réalisé en équipe de 3 développeurs, avec une approche Agile. Planification des fonctionnalités via un backlog priorisé et des stand-ups quotidiens pour suivre l'avancement.",
          personalContribution: [
            "Développement de l'interface utilisateur avec Android Studio",
            "Implémentation de la persistance des données avec Room/SQLite",
            "Intégration des fonctionnalités de géolocalisation"
          ],
          skills: [
            "Développement Android avec Java/Kotlin",
            "Conception d'interfaces respectant les principes Material Design",
            "Gestion du cycle de vie des activités et fragments",
            "Utilisation des APIs Google pour la géolocalisation"
          ]
        };
      }
      else if (projectTitle.toLowerCase().includes("qsdf") || projectTitle.toLowerCase().includes("dépêches")) {
customContent = {
  objectives: [
    "Développer une application de classification automatique de dépêches journalistiques en plusieurs catégories thématiques",
    "Implémenter un algorithme de machine learning supervisé basé sur des glossaires pondérés et des scores de similarité",
    "Optimiser les performances de l’algorithme en termes de précision et de temps de traitement"
  ],
  teamwork: "Projet réalisé en binôme avec une répartition équilibrée des tâches. Chaque fonctionnalité a été conçue, développée, testée et documentée de manière collaborative. Coordination assurée via des échanges réguliers et un suivi rigoureux de l’avancement.",
  personalContribution: [
    "Création manuelle et automatique de glossaires pondérés pour chaque catégorie (sport, politique, économie, culture, sciences)",
    "Développement d’algorithmes de score de dépêche selon les occurrences pondérées de mots, puis classification selon la catégorie la mieux scorée",
    "Implémentation de l’algorithme k-NN par proximité lexicale pour améliorer la précision",
    "Optimisation du traitement (temps d'exécution) en remplaçant les recherches linéaires par des recherches binaires"
  ],
  skills: [
    "Programmation orientée objet en Java",
    "Implémentation d’algorithmes de classification supervisée (score, k-NN)",
    "Optimisation algorithmique (recherche binaire, structures de données efficaces)",
    "Analyse de la complexité algorithmique et validation des performances par tests statistiques"
  ]
};
      }
      else if (projectTitle.includes("Sort Game")) {
        customContent = {
          objectives: [
            "Développer un jeu complet avec une interface graphique intuitive",
            "Implémenter une logique de jeu basée sur le tri d'éléments dans des tubes",
            "Créer une expérience utilisateur engageante avec une difficulté progressive"
          ],
          teamwork: "Projet individuel développé en autonomie, avec tests utilisateurs auprès d'amis et de camarades de classe pour recueillir des retours sur l'expérience de jeu et l'ergonomie.",
          personalContribution: [
            "Conception et développement intégral du jeu",
            "Création d'une architecture orientée objet pour la logique de jeu",
            "Implémentation de l'interface graphique interactive avec Tkinter",
            "Mise en place du système de niveaux et de la sauvegarde de progression",
          ],
          skills: [
            "Développement d'applications graphiques avec Tkinter",
            "Conception orientée objet appliquée au développement de jeux",
            "Gestion des événements utilisateur et interactions",
            "Internationalisation () d'applications",
            "Conception d'algorithmes pour la logique de jeu"
          ]
        };
      }
      else {
        // Contenu par défaut pour les autres projets
customContent = {
  objectives: [
    "Développer des solutions techniques d'intelligence artificielle basées sur les réseaux de neurones convolutifs (CNN)",
    "Mettre en œuvre un pipeline complet de traitement et classification d’images",
    "Appliquer concrètement les connaissances acquises en deep learning, traitement d'images et outils de développement collaboratif"
  ],
  teamwork: "Ce projet a été réalisé en autonomie sur une période de 3 semaines, avec une charge de travail estimée à 14 jours. J’ai assuré l’ensemble des étapes du développement, de la conception à l’évaluation du modèle.",
  personalContribution: [
    "Développement du modèle CNN avec TensorFlow/Keras pour la classification d’images multi-classes et détection d'événements dans des vidéos de jeu (Valorant)",
    "Mise en place du pipeline complet : prétraitement, entraînement, validation, visualisation et sauvegarde du modèle",
    "Création de scripts de prédiction par lot et renommage automatique des fichiers selon la classe prédite",
    "Tests, débogage, et optimisation de la performance du modèle"
  ],
  skills: [
    "Utilisation avancée de TensorFlow, Keras, OpenCV, NumPy et Matplotlib",
    "Structuration modulaire d’un projet de deep learning avec gestion efficace des datasets et des modèles entraînés",
    "Déploiement d’outils de prédiction automatisée à partir d’images",
    "Autonomie, gestion du temps et planification d’un projet technique individuel"
  ],

};
      }
      // Création du contenu détaillé au format PPP
      const detailedContent = document.createElement('div');
      detailedContent.className = 'project-detailed-content';
      
      // Structure des informations selon le format PPP avec le contenu personnalisé
      detailedContent.innerHTML = `
        <h3>${projectTitle}</h3>
        <div class="project-section">
          <h4>Description</h4>
          <p>${projectDescription}</p>
        </div>
        <div class="project-section">
          <h4>Compétences mobilisées</h4>
          <div class="project-tech-expanded">${projectTechText}</div>
        </div>
        <div class="project-section">
          <h4>Objectifs du projet</h4>
          <ul>
            ${customContent.objectives.map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>
        <div class="project-section">
          <h4>Travail en groupe</h4>
          <p>${customContent.teamwork}</p>
        </div>
        <div class="project-section">
          <h4>Ma contribution personnelle</h4>
          <ul>
            ${customContent.personalContribution.map(contrib => `<li>${contrib}</li>`).join('')}
          </ul>
        </div>
        <div class="project-section">
          <h4>Techniques et savoir-faire acquis</h4>
          <ul>
            ${customContent.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
      `;
      
      // Conservation des images du projet
      const projectImages = expandedCard.querySelector('.project-images');
      
      // Vidage et reconstruction du contenu
      expandedCard.innerHTML = '';
      expandedCard.appendChild(detailedContent);
      
      // Réintégration des images si elles existent
      if (projectImages) {
        const imagesSection = document.createElement('div');
        imagesSection.className = 'project-section';
        imagesSection.innerHTML = '<h4>Captures d\'écran</h4>';
        projectImages.className = 'project-images expanded-images';
        imagesSection.appendChild(projectImages);
        expandedCard.appendChild(imagesSection);
      }
      
      // Ajout d'un bouton de fermeture
      const closeBtn = document.createElement('button');
      closeBtn.innerText = '×';
      closeBtn.className = 'project-close-btn';
      expandedCard.appendChild(closeBtn);
      
      // Affichage de l'overlay et de la carte agrandie
      projectOverlay.innerHTML = '';
      projectOverlay.appendChild(expandedCard);
      projectOverlay.style.display = 'flex';
      setTimeout(() => {
        projectOverlay.style.opacity = 1;
      }, 10);
      
      // Désactiver le scroll sur le body
      document.body.style.overflow = 'hidden';
      
      // Gestion de la fermeture
      const closeExpandedCard = function() {
        projectOverlay.style.opacity = 0;
        setTimeout(() => {
          projectOverlay.style.display = 'none';
          projectOverlay.innerHTML = '';
          document.body.style.overflow = '';
        }, 300);
      };
      
      closeBtn.addEventListener('click', closeExpandedCard);
      projectOverlay.addEventListener('click', function(e) {
        if (e.target === projectOverlay) {
          closeExpandedCard();
        }
      });
      
      // Fermeture avec la touche Echap
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeExpandedCard();
        }
      });
    });
  });
});
