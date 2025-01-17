document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').slice(1); // Supprime le '#' pour obtenir l'ID
        const targetElement = document.getElementById(targetId);

        // Vérifie si l'élément cible existe
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error(`L'élément avec l'ID "${targetId}" n'existe pas dans le DOM.`);
        }
    });
});
