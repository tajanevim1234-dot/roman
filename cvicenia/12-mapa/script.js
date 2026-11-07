// Tento súbor je pracovný zošit, nie náhrada celého pôvodného map.js.
// Nasledujúcu funkciu zavolaj v kópii initializeMap, keď už existuje mapa a formulár.
// Nepripájaj zároveň pôvodné a nové obsluhy rovnakých udalostí.
function setupMapExercise(map, form, latitudeInput, longitudeInput) {
  let preview = null;
  const pointMarkers = new Map();

  function handleMapClick(event) {
    // TODO: Vyber súradnice, vyplň vstupy, nahraď predchádzajúci náhľad.
  }

  function handleSubmit(event) {
    // TODO: Zastav submit, over vstupy, vytvor marker s bezpečným popupom.
    // TODO: Ulož marker do pointMarkers pod ID bodu.
  }

  function deletePoint(id) {
    // TODO: Odstráň marker aj bod zo stavu a uloženia.
  }

  // TODO: Pripoj map click a form submit; prepoj mazanie s ovládaním zoznamu.
}
