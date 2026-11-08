const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('nav a');

function navigate() {
  // Prázdny alebo neznámy hash patrí na Menu.
  const sectionId = location.hash === '#o-projekte' ? 'o-projekte' : 'menu';
  sections.forEach(section => {
    section.hidden = section.id !== sectionId;
  });

  // Aktívny odkaz označíme aj pre čítačky obrazovky.
  links.forEach(link => {
    if (link.getAttribute('href') === '#' + sectionId) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  const title = sectionId === 'menu' ? 'Menu' : 'O projekte';
  document.title = title + ' – navigácia cez hash';
}

// Funguje aj pri tlačidlách Späť a Dopredu.
window.addEventListener('hashchange', navigate);
navigate(); // Pri otvorení už môže byť hash súčasťou adresy.
