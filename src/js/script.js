const setItemOnLocalStorage = (key, value) => {
  if (key && value) localStorage.setItem(key, value);
};

const toggleThemeBtn = document.querySelector('[data-js="toggle-theme-btn"]');
const themeIcon = document.querySelector('[data-js="theme-icon"]');

const lightMode = localStorage.getItem('lightMode');

if (lightMode) {
  document.documentElement.classList.add('light-mode');
}

const toggleSiteTheme = () => {
  const html = document.querySelector('html');
  html.classList.toggle('light-mode');

  if (html.classList.contains('light-mode')) {
    themeIcon.classList = 'uil uil-moon';
    setItemOnLocalStorage('lightMode', true);
    return;
  } else {
    themeIcon.classList = 'uil uil-sun';
    localStorage.removeItem('lightMode');
  }
};

toggleThemeBtn.addEventListener('click', toggleSiteTheme);