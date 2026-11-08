const restaurants = [
  { id: 'druzba', name: 'Družba', days: [
    { day: 1, items: ['Rezeň'] }, { day: 2, items: ['Rizoto'] }] },
  { id: 'eatandmeet', name: 'Eat & Meet', days: [
    { day: 1, items: ['Cestoviny'] }, { day: 2, items: ['Šalát'] }] },
  { id: 'drag', name: 'DRAG', days: [
    { day: 1, items: ['Vývar'] }, { day: 2, items: ['Guláš'] }] }
];
const state = { day: 1, menus: new Map(), visible: new Set() };
const results = document.querySelector('#results');

function initializeState() {
  // TODO: Naplň Map dátami a Set identifikátormi všetkých reštaurácií.
    for (const restaurant of restaurants) {
      state.menus.set(restaurant.id, restaurant);
      state.visible.add(restaurant.id);
  }
}

function render() {
  // TODO: Vykresli vybraný deň viditeľných reštaurácií; ošetri prázdny výber.
  results.innerHTML="";
  if (state.visible.size === 0) {
    results.textContent = "Nie je vybraná žiadna reštaurácia.";
    return;
  }
  for(const restaurant  of restaurants){
    if (!state.visible.has(restaurant.id)) continue;
    const article = document.createElement("article");

    article.innerHTML=
    `<span class="name">${restaurant.name}</span>
    <div class="days"></div>`;

    const daysContainer = article.querySelector(".days");

    for (const day of restaurant.days) {
      if (day.day !== state.day) continue;
      const div = document.createElement("div");
      div.innerHTML = `Deň ${day.day}: ${day.items}`;
      daysContainer.appendChild(div);
    }


    results.appendChild(article);
  }
 
}

document.querySelectorAll('#days button[data-day]').forEach(button => {
  button.addEventListener("click", () => {
    state.day = Number(button.dataset.day);
    render();
  });
});

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      state.visible.add(checkbox.value);
    } else {
      state.visible.delete(checkbox.value);
    }
    render();
  });
});

// TODO: Udalosti menia state a potom volajú render.
// TODO: Inicializuj stav a prvé vykreslenie.
initializeState();
render();
