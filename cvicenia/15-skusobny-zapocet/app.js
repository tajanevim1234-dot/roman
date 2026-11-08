const MENU_URL = './menu.json';
const STORAGE_KEY = 'practice-exam-menu-v1';
const state = { meals: [], day: 1, onlySoups: false };
const loadButton = document.querySelector('#load');
const daySelect = document.querySelector('#day');
const soupsCheckbox = document.querySelector('#only-soups');
const form = document.querySelector('#meal-form');
const results = document.querySelector('#results');
const count = document.querySelector('#count');
const status = document.querySelector('#status');
const storageStatus = document.querySelector('#storage-status');
// Rozlišuje prvé otvorenie bez dát od uloženého prázdneho poľa.
let hasMenu = false;

function isValidMenu(value) {
  if (!Array.isArray(value)) return false;
  const ids = new Set();
  for (const meal of value) {
    if (!meal || !Number.isSafeInteger(meal.id) || ids.has(meal.id) ||
        typeof meal.name !== 'string' || meal.name.trim() === '' ||
        ![1, 2].includes(meal.day) || !['soup', 'main'].includes(meal.type) ||
        !Number.isFinite(meal.price) || meal.price <= 0) return false;
    ids.add(meal.id); // Set pomáha odhaliť opakované ID.
  }
  return true;
}

async function loadMenu() {
  loadButton.disabled = true;
  status.textContent = 'Načítavam menu…';
  try {
    const response = await fetch(MENU_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('HTTP chyba: ' + response.status);
    const meals = await response.json();
    if (!isValidMenu(meals)) throw new Error('Neplatné dáta menu.');
    // Stav nahradíme až po overení. Pri chybe pôvodné jedlá zostanú.
    state.meals = meals;
    hasMenu = true;
    saveMenu();
    render();
    status.textContent = 'Menu bolo načítané zo súboru.';
  } catch (error) {
    status.textContent = 'Načítanie zlyhalo. Doterajšie jedlá zostali zachované.';
  } finally {
    loadButton.disabled = false;
  }
}

function render() {
  // && znamená, že obidva filtre musia platiť súčasne.
  const meals = state.meals.filter(meal =>
    meal.day === state.day && (!state.onlySoups || meal.type === 'soup')
  );
  results.replaceChildren();
  count.textContent = 'Počet výsledkov: ' + meals.length;
  if (meals.length === 0) {
    results.textContent = hasMenu ? 'Pre tento výber nie sú žiadne jedlá.' : 'Načítaj menu';
    return;
  }
  meals.forEach(meal => {
    const article = document.createElement('article');
    article.className = meal.type;
    const name = document.createElement('h3');
    const detail = document.createElement('p');
    const button = document.createElement('button');
    // textContent zobrazí aj <b>Test</b> ako obyčajný text.
    name.textContent = meal.name;
    const type = meal.type === 'soup' ? 'Polievka' : 'Hlavné jedlo';
    detail.textContent = type + ' · ' + meal.price.toFixed(2).replace('.', ',') + ' €';
    button.type = 'button';
    button.textContent = 'Odstrániť';
    button.setAttribute('aria-label', 'Odstrániť jedlo: ' + meal.name);
    button.addEventListener('click', () => deleteMeal(meal.id));
    article.append(name, detail, button);
    results.appendChild(article);
  });
}

function handleSubmit(event) {
  event.preventDefault(); // Zastaví obnovenie stránky pri odoslaní.
  const name = document.querySelector('#meal-name').value.trim();
  const priceText = document.querySelector('#meal-price').value.trim();
  const day = Number(document.querySelector('#meal-day').value);
  const type = document.querySelector('#meal-type').value;
  // Number('') je 0, preto prázdny vstup overujeme ešte pred prevodom.
  if (name === '' || priceText === '') {
    status.textContent = 'Vyplň názov aj cenu. Samotné medzery nestačia.';
    return;
  }
  // Prvé voľné celé ID nekoliduje ani po obnovení stránky.
  let id = 1;
  const ids = new Set(state.meals.map(meal => meal.id));
  while (ids.has(id)) id++;
  const meal = { id: id, name: name, day: day, type: type, price: Number(priceText) };
  if (!isValidMenu([meal])) {
    status.textContent = 'Over deň, typ a cenu. Cena musí byť konečné číslo väčšie než 0.';
    return;
  }
  state.meals.push(meal);
  hasMenu = true;
  saveMenu();
  render();
  form.reset();
  const visible = meal.day === state.day && (!state.onlySoups || meal.type === 'soup');
  status.textContent = 'Jedlo bolo pridané.' + (visible ? '' : ' Aktuálny filter ho nezobrazuje.');
}

function deleteMeal(id) {
  // Menia sa iba jedlá, filtre zostávajú zachované.
  state.meals = state.meals.filter(meal => meal.id !== id);
  saveMenu();
  render();
  status.textContent = 'Jedlo bolo odstránené.';
}

function saveMenu() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.meals));
    storageStatus.textContent = 'Zmeny sú uložené v tomto prehliadači.';
  } catch (error) {
    storageStatus.textContent = 'Uloženie zlyhalo. Po obnovení stránky sa zmeny môžu stratiť.';
  }
}

function restoreMenu() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) return; // Chýbajúca cache nie je to isté ako [].
    const meals = JSON.parse(stored);
    if (!isValidMenu(meals)) throw new Error('Neplatná cache.');
    state.meals = meals;
    hasMenu = true;
    storageStatus.textContent = 'Obnovené uložené menu.';
  } catch (error) {
    storageStatus.textContent = 'Uložené menu sa nepodarilo obnoviť. Načítaj ho zo súboru.';
  }
}

// Udalosť → zmena dát → uloženie pri zmene jedál → vykreslenie.
loadButton.addEventListener('click', loadMenu);
form.addEventListener('submit', handleSubmit);
daySelect.addEventListener('change', () => {
  state.day = Number(daySelect.value);
  render();
});
soupsCheckbox.addEventListener('change', () => {
  state.onlySoups = soupsCheckbox.checked;
  render();
});
daySelect.value = '1';
soupsCheckbox.checked = false;
restoreMenu();
render(); // Automatický fetch by prepísal aj úmyselne vymazané menu.
