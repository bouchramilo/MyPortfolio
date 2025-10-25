// --- Gestion du thème ---
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Charger le thème enregistré
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateButton(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButton(newTheme);
});

function updateButton(theme) {
  const icon = themeToggle.querySelector('i');
  const text = themeToggle.querySelector('span');
  if (theme === 'light') {
    icon.className = 'bi bi-moon';
    text.textContent = 'Dark';
  } else {
    icon.className = 'bi bi-brightness-high';
    text.textContent = 'Light';
  }
}
