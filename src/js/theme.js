const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(Theme.LIGHT);

function handleCheckboxChange() {
  if (refs.body.className === Theme.LIGHT) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
      } else {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  }

  const currentTheme = refs.body.getAttribute('class');

  localStorage.setItem('theme', currentTheme);
}

refs.checkbox.addEventListener('change', handleCheckboxChange);

function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
  }
}

restoreTheme();