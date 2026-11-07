# 2. Pole jedál a funkcie (20 min)

Podľa: filtrovanie a vykresľovanie v `html2/js/app.js`. Toto sú zjednodušené tréningové dáta; ceny sú tu čísla, v pôvodnom projekte sú texty.

```js
const meals = [
  { id: 1, name: 'Paradajková polievka', type: 'soup', price: 2.5 },
  { id: 2, name: 'Kurací rezeň', type: 'main', price: 6.9 },
  { id: 3, name: 'Zeleninové rizoto', type: 'main', price: 5.2 },
  { id: 4, name: 'Cesnaková polievka', type: 'soup', price: 2.8 }
];
```

Napíš funkcie `getSoups(meals)`, `getNames(meals)`, `findMeal(meals, id)` a `getAffordable(meals, limit)`.

Kontrola: polievky majú ID 1 a 4; limit 5 vráti ID 1 a 4; ID 99 vráti `undefined`; prázdne pole nespôsobí chybu. Pôvodné pole sa nesmie zmeniť. Vysvetli rozdiel medzi `filter`, `map`, `find` a `forEach`.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
