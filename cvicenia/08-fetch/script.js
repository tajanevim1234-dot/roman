const WEATHER_URL = './weather.json';
const button = document.querySelector('#load');
const output = document.querySelector('#weather');

async function loadWeather() {

  output.textContent = 'Načítavam…';
  button.disabled = true;

  try {
    const response = await fetch(WEATHER_URL);

    const data = await response.json();
    console.log(data);
    output.textContent = JSON.stringify(data);  

  } catch (error) {
    output.textContent = 'Počasie sa nepodarilo načítať.';

  } finally {
    button.disabled = false;
  }
  
  // TODO: Zobraz načítavanie a zablokuj tlačidlo.
  // TODO: Použi try/catch/finally, fetch, kontrolu HTTP stavu a načítanie JSON.
  // TODO: Over obe číselné hodnoty, zobraz výsledok alebo chybu.
  // TODO: Pri každom výsledku odblokuj tlačidlo.
  // BONUS: Pridaj timeout cez AbortController.
}

// TODO: Pripoj udalosť tlačidla.
button.addEventListener('click', () =>{loadWeather()});
