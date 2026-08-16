const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const navigationLinks = document.querySelectorAll('.main-nav a');
const year = document.querySelector('#year');

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.classList.remove('is-open');
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('is-open');
    navigation.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));
}

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

if (year) year.textContent = new Date().getFullYear();
