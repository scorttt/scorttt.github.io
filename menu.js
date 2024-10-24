document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const projectsLink = document.getElementById('projects-link');
    const projectsMenu = document.getElementById('projects-menu');

    if (projectsLink && projectsMenu) {
        projectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            projectsMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!projectsLink.contains(e.target) && !projectsMenu.contains(e.target)) {
                projectsMenu.classList.remove('active');
            }
        });
    }
});
