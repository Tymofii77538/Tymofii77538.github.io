const themeButton = document.getElementById('themeButton');
const toggleButton = document.getElementById('toggleSectionButton');
const projectsSection = document.getElementById('projectsSection');
const themeLink = document.querySelector('link[rel="stylesheet"]');

themeButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'red.css') {
        themeLink.setAttribute('href', 'green.css');
    } else {
        themeLink.setAttribute('href', 'red.css');
    }
});

toggleButton.addEventListener('click', () => {
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
    } else {
        projectsSection.style.display = 'none';
    }
});