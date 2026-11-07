const restaurants = [
  { id: 'druzba', name: 'Družba', days: [
    { day: 1, items: ['Rezeň'] }, { day: 2, items: ['Rizoto'] }] },
  { id: 'eatandmeet', name: 'Eat & Meet', days: [
    { day: 1, items: ['Cestoviny'] }, { day: 2, items: ['Šalát'] }] },
  { id: 'drag', name: 'DRAG', days: [
    { day: 1, items: ['Vývar'] }, { day: 2, items: ['Guláš'] }] }
];
const state = { day: 1, menus: new Map(), visible: new Set() };

function initializeState() {
  // TODO: Naplň Map dátami a Set identifikátormi všetkých reštaurácií.
}

function render() {
  // TODO: Vykresli vybraný deň viditeľných reštaurácií; ošetri prázdny výber.
}

// TODO: Udalosti menia state a potom volajú render.
// TODO: Inicializuj stav a prvé vykreslenie.
