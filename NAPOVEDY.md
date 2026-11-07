# Nápovedy a otázky na vysvetlenie

Najprv skús zadanie sám. Toto sú malé nápovedy, nie hotové riešenia.

1. Menu: `getAttribute` vracia text alebo `null`. Stav porovnávaj s `'true'`. Vlastnosť `hidden` naopak používa boolean. Fokus vráti metóda `focus()`.
2. Polia: `filter` vyberá prvky, `map` ich transformuje, `find` hľadá prvý a `forEach` vykonáva činnosť pre každý prvok. Limit ceny je podmienka `<=`.
3. DOM: začni `container.replaceChildren()`. Každé jedlo vytvor ako nový uzol. Na formát ceny použi `toFixed(2)` alebo `toLocaleString` s nastavením desatinných miest.
4. Filtre: zobraziť treba položku, ak je filter `all` ALEBO sa zhoduje s jej typom. Hodnoty v `dataset` sú reťazce.
5. Formulár: `event.preventDefault()`, potom `trim()`, kontrola prázdnych vstupov, až potom `Number(...)` a `Number.isFinite(...)`. Pri mazaní vytvor pole bez zvoleného ID cez `filter`.
6. Uloženie: `localStorage` uchováva reťazce. Aj platný JSON môže obsahovať nesprávne dáta, napríklad číslo namiesto poľa. Čítanie aj zápis môžu zlyhať.
7. Čas: preved čas na minúty od polnoci. Použi interval `start <= now < end`. `getDay()` má nedeľu 0; mesiace v číselnom konštruktore `Date` začínajú nulou.
8. Fetch: poradie je fetch → kontrola `ok` → `await response.json()` → overenie údajov → zobrazenie. `finally` je vhodné miesto na odblokovanie tlačidla a zrušenie časovača.
9. Parser: `new DOMParser().parseFromString(html, 'text/html')`. Vyberaj `td`, nie všetky bunky vrátane `th`. Na medzery sa hodí `/\s+/g`. Na číselný deň nezabudni použiť `Number`.
10. Stav: checkbox mení `Set` pomocou `add` alebo `delete`; `render` kontroluje `has`. `Map` poskytuje `set` a `get`. Dáta a viditeľnosť sú dve oddelené veci.
11. Cache: oddel funkciu na čítanie cache od načítavania. Dnešný deň porovnaj cez rok, mesiac a deň v miestnom čase. ISO reťazec je v UTC, jeho prvých desať znakov nemusí označovať rovnaký miestny deň.
12. Mapa: ulož referenciu na náhľad. Pred vytvorením nového zavolaj `map.removeLayer` na starý. Markery môžeš evidovať v `Map` podľa ID bodu.
13. Hash: funkciu navigácie zavolaj pri štarte aj ako reakciu na `hashchange`.
14. HTML/CSS: `label for` sa musí zhodovať s `input id`. Na karty použi Grid alebo Flexbox a media query. Skript s `defer` sa vykoná po spracovaní HTML; klasické defer skripty zachovávajú poradie v dokumente.

## Vieš bez pozerania vysvetliť?

- Prečo `const` pole stále umožňuje `push`, ale nie priradenie iného poľa?
- Čo vracia `querySelector`, keď prvok neexistuje, a čo `querySelectorAll`?
- Prečo `Number('')` dá 0 a `Boolean('false')` dá true?
- Čím sa líši `===` od `==`?
- Kedy použiť udalosť `click`, `input`, `change` a `submit`?
- Aký je rozdiel medzi `textContent`, `innerHTML` a `input.value`?
- Prečo `dataset.day === 1` neplatí pri `data-day="1"`?
- Čo znamenajú `day?.items`, `cached || {}` a `...points` v tvojom kóde?
- Čo vracia `async` funkcia? Čo robí `await`?
- Prečo fetch pri odpovedi 404 nemusí sám vyhodiť výnimku?
- Čím sa líši `response.text()` od `response.json()`?
- Prečo je `finally` užitočné aj po chybe?
- Čo sa stane, keď `JSON.parse` dostane poškodený text?
- Prečo nepoužiť `localStorage.clear()` na vymazanie dát iba jednej aplikácie?
- Prečo render najprv odstráni starý obsah?
- Prečo sa `parsers.js` v tvojom `html2/index.html` načítava pred `app.js`?
- Ako sa líši čas načítania uloženého HTML od dátumu skutočného menu?

## Nájdi chyby

Pri každom príklade povedz, čo sa stane, a oprav ho.

```js
// A: Chceme číselný súčet dvoch vstupov.
result.textContent = firstInput.value + secondInput.value;

// B: Chceme nechať iba polievky.
const soups = meals.filter(meal => { meal.type === 'soup'; });

// C: Chceme pripojiť funkciu na kliknutie.
button.addEventListener('click', loadWeather());

// D: Chceme získať dáta odpovede.
const response = await fetch('weather.json');
const data = response.json();
console.log(data.current.temperature_2m);

// E: Chceme uložiť pole objektov.
localStorage.setItem('points', points);

// F: Chceme zistiť, či je menu otvorené.
if (button.getAttribute('aria-expanded')) {
  console.log('Menu je otvorené');
}
```

Pri D predpokladaj, že kód je v async funkcii. Over aj chybový stav HTTP, nielen chýbajúce čakanie na JSON.
