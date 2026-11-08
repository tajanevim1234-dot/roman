const SCHOOL = { lat: 48.151965, lng: 17.072995 };
const POINTS_STORAGE_KEY = 'practice-map-points-v1';

// Vzorec prevzatý z pôvodného map.js: výsledok je vzdušná vzdialenosť v km.
function calculateDistance(first, second) {
  const radians = Math.PI / 180;
  const latitudeDifference = (second.lat - first.lat) * radians;
  const longitudeDifference = (second.lng - first.lng) * radians;
  const a = Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(first.lat * radians) * Math.cos(second.lat * radians) *
    Math.sin(longitudeDifference / 2) ** 2;
  const boundedA = Math.max(0, Math.min(1, a));
  return 6371 * 2 * Math.atan2(Math.sqrt(boundedA), Math.sqrt(1 - boundedA));
}

function isValidPoint(point) {
  return point && Number.isSafeInteger(point.id) &&
    typeof point.name === 'string' && point.name.trim().length >= 2 &&
    point.name.trim().length <= 60 &&
    Number.isFinite(point.lat) && point.lat >= -90 && point.lat <= 90 &&
    Number.isFinite(point.lng) && point.lng >= -180 && point.lng <= 180;
}

function setupMapExercise(map, form, latitudeInput, longitudeInput) {
  let preview = null;
  let points = [];
  const pointMarkers = new Map(); // ID bodu → jeho marker v mape.
  const nameInput = document.querySelector('#point-name');
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');
  const storageStatus = document.querySelector('#storage-status');

  function savePoints() {
    try {
      localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(points));
      storageStatus.textContent = 'Body sú uložené v tomto prehliadači.';
    } catch (error) {
      storageStatus.textContent = 'Body sa nepodarilo uložiť. Po obnovení sa zmeny môžu stratiť.';
    }
  }

  function addMarker(point) {
    // Do popupu posielame DOM prvok, nie HTML reťazec od používateľa.
    const popup = document.createElement('span');
    popup.textContent = point.name;
    const marker = L.marker([point.lat, point.lng], { title: point.name, alt: point.name })
      .addTo(map).bindPopup(popup);
    pointMarkers.set(point.id, marker);
  }

  function renderPoints() {
    results.replaceChildren();
    if (points.length === 0) results.textContent = 'Zatiaľ nemáš uložené žiadne body.';
    points.forEach(point => {
      const article = document.createElement('article');
      const title = document.createElement('h3');
      const detail = document.createElement('p');
      const button = document.createElement('button');
      title.textContent = point.name;
      detail.textContent = point.lat.toFixed(6) + ', ' + point.lng.toFixed(6) +
        ' · Od školy: ' + calculateDistance(SCHOOL, point).toFixed(2) + ' km vzdušnou čiarou';
      button.type = 'button';
      button.textContent = 'Odstrániť';
      button.setAttribute('aria-label', 'Odstrániť bod: ' + point.name);
      button.addEventListener('click', () => deletePoint(point.id));
      article.append(title, detail, button);
      results.appendChild(article);
    });
  }

  function handleMapClick(event) {
    // wrap upraví zemepisnú dĺžku aj pri posunutí mapy cez okraj sveta.
    const position = event.latlng.wrap();
    latitudeInput.value = position.lat.toFixed(6);
    longitudeInput.value = position.lng.toFixed(6);
    if (preview) map.removeLayer(preview);
    preview = L.circleMarker(position, { radius: 8, color: '#b45309' }).addTo(map);
    status.textContent = 'Miesto je vybrané. Doplň názov a pridaj bod.';
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!nameInput.value.trim() || !latitudeInput.value.trim() || !longitudeInput.value.trim()) {
      status.textContent = 'Vyplň názov aj obe súradnice.';
      return;
    }
    let id = 1;
    while (pointMarkers.has(id)) id++;
    const point = {
      id: id, name: nameInput.value.trim(),
      lat: Number(latitudeInput.value), lng: Number(longitudeInput.value)
    };
    if (!isValidPoint(point)) {
      status.textContent = 'Názov musí mať 2–60 znakov, šírka −90 až 90 a dĺžka −180 až 180.';
      return;
    }
    points.push(point);
    addMarker(point);
    // Uložený marker nahradí dočasný náhľad.
    if (preview) map.removeLayer(preview);
    preview = null;
    savePoints();
    renderPoints();
    form.reset();
    status.textContent = 'Bod bol pridaný.';
  }

  function deletePoint(id) {
    // Mazanie musí prebehnúť v mape, v stave aj v localStorage.
    const marker = pointMarkers.get(id);
    if (!marker) return;
    map.removeLayer(marker);
    pointMarkers.delete(id);
    points = points.filter(point => point.id !== id);
    savePoints();
    renderPoints();
    status.textContent = 'Bod bol odstránený.';
  }

  try {
    const stored = JSON.parse(localStorage.getItem(POINTS_STORAGE_KEY) || '[]');
    if (!Array.isArray(stored) || !stored.every(isValidPoint) ||
        new Set(stored.map(point => point.id)).size !== stored.length) {
      throw new Error('Neplatné uložené body.');
    }
    points = stored;
  } catch (error) {
    storageStatus.textContent = 'Uložené body sa nepodarilo obnoviť. Môžeš pridať nové.';
  }
  points.forEach(addMarker);
  renderPoints();
  map.on('click', handleMapClick);
  form.addEventListener('submit', handleSubmit);
}

function initializeMap() {
  const status = document.querySelector('#status');
  // CDN nemusí byť dostupné. Bez knižnice nevznikne nezachytená chyba.
  if (typeof L === 'undefined') {
    status.textContent = 'Mapu sa nepodarilo načítať. Skontroluj internet a obnov stránku.';
    return;
  }
  const map = L.map('map').setView([SCHOOL.lat, SCHOOL.lng], 14);
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  tiles.on('tileerror', () => {
    status.textContent = 'Mapové podklady sa nenačítali. Súradnice môžeš zadať aj ručne.';
  });
  L.marker([SCHOOL.lat, SCHOOL.lng]).addTo(map).bindPopup('FEI STU Bratislava');
  setupMapExercise(map, document.querySelector('#point-form'),
    document.querySelector('#point-latitude'), document.querySelector('#point-longitude'));
  document.querySelector('#point-fields').disabled = false;
  status.textContent = 'Klikni na mapu alebo zadaj súradnice ručne.';
}

initializeMap();
