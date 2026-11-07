const POINTS_STORAGE_KEY = 'practice-points-v1';
let points = [];
// TODO: Prenes sem svoje funkcie a udalosti z vyriešenej úlohy 05.
const form = document.querySelector('#point-form');
const list = document.querySelector('#points');
const status = document.querySelector('#status');
const results = document.querySelector('#results');
const del = document.querySelector('#del');
let cnt=0;

function readPoint() {
  // TODO: Načítaj vstupy. Over prázdne hodnoty pred prevodom súradníc.
  const name = document.querySelector('#point-name').value.trim();
  const latitude = document.querySelector('#point-latitude').value;
  const longitude = document.querySelector('#point-longitude').value;

  if(name === ""|| latitude ===""||longitude===""){
    status.textContent = 'Vyplň všetky polia.';
    return null;
  }
  // TODO: Vráť bod s jedinečným ID alebo null pri chybe.
  return {id:cnt ,name:name, latitude: Number(latitude), longitude: Number(longitude) };
}

function isValidPoint(point) {
  // TODO: Skontroluj názov, ID, číselné typy a rozsahy súradníc.

  if (!Number.isFinite(point.latitude) || !Number.isFinite(point.longitude)) {
    return false;
  }
  if(point.name.trim().length <2 || point.name.trim().length >60){
    return false;
  }
  if(point.latitude>90 || point.latitude<-90){
    return false;
  }
  if(point.longitude>180 || point.longitude<-180){
    return false;
  }
  return true;
}

function renderPoints() {
  // TODO: Vykresli body a tlačidlá na odstránenie podľa ID.
  results.innerHTML="";

  points.forEach(point => {
    const article = document.createElement("article");

    article.innerHTML=
    `<span class="name">${point.name}</span>
    <span class="la">${point.latitude}</span>
    <span class="lo">${point.longitude}</span>
    <button type="button">X</button>`;

    const button = article.querySelector('button');
    button.addEventListener('click', () => {
      deletePoint(point.id);
    });

    results.appendChild(article);
  });
}

function deletePoint(id) {
  // TODO: Odstráň bod zo stavu a obnov zoznam.
  points = points.filter(point => point.id !== id);
  savePoints();
  renderPoints();
}

function handleSubmit(event) {
  // TODO: Zabráň obnoveniu stránky, over bod, pridaj ho, vykresli a resetuj formulár.
  event.preventDefault();
  const point=readPoint();
  if (point === null) {
    return;
  }

  console.log(point);

  if (!isValidPoint(point)) {
    status.textContent = 'Neplatný názov alebo súradnice.';
    return;
  } else{
    status.textContent = "";
  }

  points.push(point);
  savePoints()
  cnt++;
  renderPoints();
  form.reset();
  status.textContent = 'Bod bol pridaný.';
}
// TODO: Pripoj submit na formulár.
form.addEventListener('submit',handleSubmit);

function savePoints() {
  // TODO: Serializuj body a ulož ich. Ošetri chybu zápisu.
  localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(points));
}

function loadPoints() {
  points = JSON.parse(localStorage.getItem(POINTS_STORAGE_KEY) || '[]');
  // TODO: Načítaj a parsuj JSON, over pole aj každý bod.
  // TODO: Pri chýbajúcom zázname vráť []; pri chybe aj zobraz upozornenie.
}

function clearPoints() {
  points = [];
  localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(points));
  cnt = 0;
  renderPoints();
}

// TODO: Pri štarte načítaj body; pri každej zmene ich ulož.
loadPoints();
points.forEach(point => {
  if (point.id >= cnt) {
    cnt = point.id + 1;
  }
});
renderPoints();
// TODO: Pripoj tlačidlo #clear-points.
del.addEventListener('click', () => clearPoints());
