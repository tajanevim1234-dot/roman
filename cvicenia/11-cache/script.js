// Každá reštaurácia má vlastný kľúč v localStorage.
const restaurant = { id: 'training', localUrl: './menu.json' };
const CACHE_PREFIX = 'practice-menu-v1:';
const loadButton = document.querySelector('#load');
const refreshButton = document.querySelector('#refresh');
const status = document.querySelector('#status');
const output = document.querySelector('#output');

// Nestačí overiť pole: skontrolujeme aj dni a jednotlivé jedlá.
function isValidDays(days) {
  return Array.isArray(days) && days.every(day =>
    day !== null && Number.isInteger(day.day) && day.day >= 0 && day.day <= 6 &&
    (day.date === null || typeof day.date === 'string') &&
    Array.isArray(day.items) && day.items.every(item =>
      item !== null && typeof item.name === 'string' && item.name.trim() !== '' &&
      typeof item.type === 'string' && typeof item.price === 'string' &&
      typeof item.weight === 'string' && typeof item.allergens === 'string'
    )
  );
}

function readCache(restaurant) {
  // Čítanie úložiska aj JSON.parse môžu zlyhať, preto používame try/catch.
  try {
    const cache = JSON.parse(localStorage.getItem(CACHE_PREFIX + restaurant.id));
    if (!cache || !isValidDays(cache.days) || typeof cache.updated !== 'string' ||
        !Number.isFinite(new Date(cache.updated).getTime())) return null;
    return cache;
  } catch (error) {
    return null;
  }
}

function isToday(updated) {
  const date = new Date(updated);
  const today = new Date();
  // Porovnávame miestny deň, nie UTC dátum z toISOString().
  return date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
}

async function loadRestaurant(restaurant, force = false) {
  const cache = readCache(restaurant);
  if (!force && cache && isToday(cache.updated)) {
    output.textContent = JSON.stringify(cache.days, null, 2);
    status.textContent = 'Použitá dnešná cache bez novej sieťovej požiadavky.';
    return;
  }

  loadButton.disabled = true;
  refreshButton.disabled = true;
  status.textContent = 'Načítavam menu…';
  try {
    // no-store obíde HTTP cache; našu vlastnú cache riadi parameter force.
    const response = await fetch(restaurant.localUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error('HTTP chyba: ' + response.status);
    const days = await response.json();
    if (!isValidDays(days)) throw new Error('Neplatné menu.');
    output.textContent = JSON.stringify(days, null, 2);
    status.textContent = 'Menu bolo načítané zo súboru a uložené do cache.';
    // Chyba zápisu nesmie zahodiť úspešne načítané dáta.
    try {
      localStorage.setItem(CACHE_PREFIX + restaurant.id, JSON.stringify({
        days: days, updated: new Date().toISOString()
      }));
    } catch (error) {
      status.textContent = 'Menu je načítané, ale cache sa nepodarilo uložiť.';
    }
  } catch (error) {
    // Chybné dáta nikdy neuložíme namiesto pôvodnej dobrej cache.
    if (cache) {
      output.textContent = JSON.stringify(cache.days, null, 2);
      status.textContent = 'Načítanie zlyhalo. Zobrazujem cache, ktorá nemusí byť aktuálna.';
    } else {
      status.textContent = 'Menu sa nepodarilo načítať a platná cache nie je dostupná.';
    }
  } finally {
    // Odblokovanie prebehne pri úspechu aj pri chybe.
    loadButton.disabled = false;
    refreshButton.disabled = false;
  }
}

loadButton.addEventListener('click', () => loadRestaurant(restaurant));
refreshButton.addEventListener('click', () => loadRestaurant(restaurant, true));
