const themeKey = 'thonny-theme';
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function applyTheme(isDark) {
    if (isDark) body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');

    if (themeIcon) {
        themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function toggleTheme() {
    const current = localStorage.getItem(themeKey) === 'dark';
    const next = !current;
    localStorage.setItem(themeKey, next ? 'dark' : 'light');
    applyTheme(next);
}

// Init
applyTheme(localStorage.getItem(themeKey) === 'dark');