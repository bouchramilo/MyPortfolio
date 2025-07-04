document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments interactifs
    const activityIcons = document.querySelectorAll('.activity-icon');
    const fileItems = document.querySelectorAll('.file-item');
    const tabs = document.querySelectorAll('.tab');
    const sectionContents = document.querySelectorAll('.section-content');

    // Fonction pour changer de section
    function switchSection(sectionId) {
        // Désactive toutes les sections
        sectionContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Active la section sélectionnée
        document.getElementById(`${sectionId}-section`).classList.add('active');
        
        // Met à jour les icônes d'activité
        activityIcons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.dataset.section === sectionId) {
                icon.classList.add('active');
            }
        });
        
        // Met à jour les fichiers
        fileItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });
        
        // Met à jour les onglets
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.section === sectionId) {
                tab.classList.add('active');
            }
        });
    }

    // Ajoute les écouteurs d'événements pour les icônes d'activité
    activityIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    // Ajoute les écouteurs d'événements pour les fichiers
    fileItems.forEach(item => {
        item.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    // Ajoute les écouteurs d'événements pour les onglets
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    // Met à jour la position du curseur dans la barre d'état
    function updateCursorPosition() {
        const activeEditor = document.querySelector('.section-content.active');
        if (activeEditor) {
            const lines = activeEditor.querySelectorAll('.code-line').length;
            document.querySelector('.status-bar-right span:first-child').textContent = `Ln ${lines}, Col 1`;
        }
    }

    // Initialise la position du curseur
    updateCursorPosition();
});