const MENU_URL = './menu.json';
const STORAGE_KEY = 'practice-exam-menu-v1';
const state = { meals: [], day: 1, onlySoups: false };

function isValidMenu(value) { /* TODO */ }
async function loadMenu() { /* TODO: HTTP, JSON, validácia, stav, uloženie, chyby. */ }
function render() { /* TODO: Filtre a bezpečné vykreslenie. */ }
function handleSubmit(event) { /* TODO: Vstupy, kontrola, ID, pridanie. */ }
function deleteMeal(id) { /* TODO */ }
function saveMenu() { /* TODO */ }
function restoreMenu() { /* TODO: Rozlíš chýbajúcu cache a uložené prázdne pole. */ }

// TODO: Vyber prvky, pripoj udalosti a inicializuj stránku.
