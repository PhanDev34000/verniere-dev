// Mode DARK
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const mainElement = document.querySelector('main');

// Vérifie le thème actuel au chargement
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  mainElement.style.backgroundImage = "url('https://www.verniere-dev.com/images/CodeDark.png')";
  mainElement.classList.add('dark');
  darkIcon.classList.remove('hidden');
  lightIcon.classList.add('hidden');
} else {
  document.documentElement.classList.remove('dark');
  mainElement.style.backgroundImage = "url('images/CodeAP.png')";
  mainElement.classList.remove('dark');
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    mainElement.style.backgroundImage = "url('https://www.verniere-dev.com/images/CodeDark.png')";
    mainElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    mainElement.style.backgroundImage = "url('images/CodeAP.png')";
    mainElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');
});

// =============================================
// SWITCH DE TOUTES LES IMAGES DARK / LIGHT
// =============================================

// Correspondances : { id, src_light, src_dark }
const imagesASwitch = [
  // --- images/ ---
  { id: 'header-logo',         light: 'images/Logo.png',          dark: 'images/LogoNB.png' },
  { id: 'footer-logo',         light: 'images/Logo.png',          dark: 'images/LogoNB.png' },
  { id: 'logo-linkedin',       light: 'images/linkedin_b.png',    dark: 'images/linkedin.png' },
  { id: 'logo-github',         light: 'images/github_b.png',      dark: 'images/github.png' },
  { id: 'img-linkedin-bandeau',light: 'images/linkedin.png',      dark: 'images/linkedin_b.png' },
  { id: 'img-github-bandeau',  light: 'images/github.png',        dark: 'images/github_b.png' },
  { id: 'img-cv',              light: 'images/file.png',          dark: 'images/file_b.png' },
  { id: 'img-adrar',           light: 'images/ADRAR.png',         dark: 'images/ADRAR_b.png' },
  { id: 'img-diplome',         light: 'images/diplome.png',       dark: 'images/diplome_b.png' },
  { id: 'img-photographe',     light: 'images/photographe.png',   dark: 'images/photographe_b.png' },
  { id: 'img-studi',           light: 'images/Studi.png',         dark: 'images/Studi_b.png' },
  // --- icones/ ---
  { id: 'icone-api',           light: 'icones/api.png',           dark: 'icones/api_b.png' },
  { id: 'icone-express',       light: 'icones/expressN.png',      dark: 'icones/express_b.png' },
  { id: 'icone-github',        light: 'icones/githubN.png',       dark: 'icones/github_b.png' },
  { id: 'icone-mongodb',       light: 'icones/mongodb.png',       dark: 'icones/mongodb_b.png' },
  { id: 'icone-node',          light: 'icones/node.png',          dark: 'icones/node_b.png' },
];

function updateLogos() {
  const isDark = document.documentElement.classList.contains('dark');
  imagesASwitch.forEach(({ id, light, dark }) => {
    const el = document.getElementById(id);
    if (el) el.src = isDark ? dark : light;
  });
}

// Vérification initiale + au clic
updateLogos();
themeToggleBtn.addEventListener('click', updateLogos);

// =============================================
// ANIMATION ICÔNE <...> EN MODE DARK
// =============================================

const animatedIcon = document.getElementById('animated-icon');

function updateIconColors() {
  if (document.documentElement.classList.contains('dark')) {
    animatedIcon.setAttribute('colors', 'primary:white,secondary:white');
  } else {
    animatedIcon.setAttribute('colors', 'primary:#1f3a93,secondary:#1f3a93');
  }
}

updateIconColors();
themeToggleBtn.addEventListener('click', updateIconColors);