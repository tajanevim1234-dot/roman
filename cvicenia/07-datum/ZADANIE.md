# 7. Práve prebiehajúca hodina (30 min)

Podľa: `updateSchedule` v `html/js/lessons.js`.

```js
const lessons = [
  { name: 'Matematika', day: 1, start: 8, end: 10 },
  { name: 'Programovanie', day: 1, start: 10, end: 12 },
  { name: 'Webové technológie', day: 3, start: 8, end: 10 }
];
```

Napíš `getCurrentLesson(lessons, now)`, ktorá vráti aktuálny predmet alebo `null`. Pre túto úlohu ignoruj hranice semestra. Začiatok hodiny patrí do hodiny, koniec už nie. Počítaj aj s minútami. Výsledok zobraz na stránke a obnovuj každých 30 sekúnd.

Kontrola s miestnym dátumom `new Date(2026, 10, 9, hodina, minuta)`:

- 9:30 → Matematika.
- 10:00 → Programovanie.
- 12:00 → `null`.
- Nedeľa 8. 11. → `null`.

Vysvetli číslovanie mesiacov v konštruktore `Date` a dní pri `getDay()`.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
