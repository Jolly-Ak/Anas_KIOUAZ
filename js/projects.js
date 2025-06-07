document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    let currentExpanded = null;

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Si un projet est déjà agrandi, le réduire
            if (currentExpanded) {
                currentExpanded.classList.remove('expanded');
            }
            
            // Agrandir le projet cliqué
            card.classList.add('expanded');
            currentExpanded = card;

            // Fermer l'agrandissement en cliquant à l'extérieur
            document.addEventListener('click', (e) => {
                if (!card.contains(e.target) && e.target !== card) {
                    card.classList.remove('expanded');
                    currentExpanded = null;
                }
            }, { once: true });
        });
    });
});
