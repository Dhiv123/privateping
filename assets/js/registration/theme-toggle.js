// theme-toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.querySelector('#theme-button');
    const darkThemeStylesheet = document.querySelector('#dark-theme-stylesheet');
    const themeOptions = document.querySelector('#theme-options');

    themeButton.addEventListener('click', () => {
        themeOptions.classList.toggle('show');
    });

    document.querySelector('#dark-theme').addEventListener('change', () => {
        if (document.querySelector('#dark-theme').checked) {
            darkThemeStylesheet.disabled = false;
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    document.querySelector('#light-theme').addEventListener('change', () => {
        if (document.querySelector('#light-theme').checked) {
            darkThemeStylesheet.disabled = true;
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.querySelector('#dark-theme').checked = true;
        darkThemeStylesheet.disabled = false;
        document.body.classList.add('dark-theme');
    } else {
        document.querySelector('#light-theme').checked = true;
        darkThemeStylesheet.disabled = true;
        document.body.classList.remove('dark-theme');
    }
});
