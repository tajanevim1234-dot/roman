// Samostatný zjednodušený tréning s JSON. Prenos na HTML parser je v zadaní.
const restaurant = { id: 'training', localUrl: './menu.json' };
const CACHE_PREFIX = 'practice-menu-v1:';

function readCache(restaurant) {
  // TODO: Načítaj a over objekt { days, updated }; pri chybe vráť null.
}

function isToday(updated) {
  // TODO: Porovnaj miestny rok, mesiac a deň s dneškom.
}

async function loadRestaurant(restaurant, force = false) {
  // TODO: Použi dnešnú platnú cache, ak force nie je true.
  // TODO: Inak načítaj JSON, over days, ulož a zobraz výsledok.
  // TODO: Pri chybe zachovaj staré dáta a zobraz upozornenie.
}

// TODO: Pripoj tlačidlá s rôznou hodnotou force.
