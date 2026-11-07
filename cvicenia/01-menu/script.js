const button = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

function toggleMenu() {  
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  menu.toggleAttribute("hidden",isExpanded);
  button.setAttribute('aria-expanded', String(!isExpanded));
}


function handleKeydown(event) {
  if (event.key === 'Escape') {
    menu.setAttribute('hidden', '');
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  }
}

// TODO: Pripoj click na tlačidlo a keydown na navigáciu.

button.addEventListener('click', () => toggleMenu());
menu.addEventListener('keydown', handleKeydown);
   

  