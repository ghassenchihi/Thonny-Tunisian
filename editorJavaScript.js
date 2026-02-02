const themeKey = 'thonny-theme';
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

function applyTheme(isDark) {
    if (isDark) body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');

    const icon = themeBtn.querySelector('i');
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function toggleTheme() {
    const current = localStorage.getItem(themeKey) === 'dark';
    const next = !current;
    localStorage.setItem(themeKey, next ? 'dark' : 'light');
    applyTheme(next);
}

themeBtn.addEventListener('click', toggleTheme);
applyTheme(localStorage.getItem(themeKey) === 'dark')