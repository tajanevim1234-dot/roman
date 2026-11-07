# Precvičenie na zápočet – hlavne JavaScript

Pripravené podľa tvojich projektov `../html` a `../html2` na pondelok 9. 11. 2026. Sú to tréningové zadania podľa použitého kódu, nie potvrdený obsah zápočtu.

## Ako pracovať

Každú úlohu najprv skús bez pozerania do pôvodného JavaScriptu. Keď sa zasekneš, pozri nápovedu v samostatnom súbore `NAPOVEDY.md`, až potom pôvodnú funkciu. Na konci vysvetli vlastnými slovami, prečo tvoj kód funguje.

Pre samostatné úlohy si v tomto priečinku vytvor podpriečinky `01`, `02` atď. s `index.html` a `script.js`. Skript pripoj cez `<script src="script.js" defer></script>`. Úlohy označené ako úprava projektu rob v pracovnej kópii príslušného projektu. Pri fetch používaj lokálny HTTP server, napríklad Live Server vo VS Code. Výsledok kontroluj aj v konzole prehliadača.

Priorita: úlohy 1–8 a 10. Úlohy 9, 11–13 sú náročnejšie rozšírenie. Časy sú orientačné.

## 1. Otvorenie a zatvorenie menu (15 min)

Podľa: `html/js/nav.js`.

Vytvor tlačidlo Menu a navigáciu s tromi odkazmi. Na začiatku je navigácia skrytá.

- Kliknutie striedavo zobrazí a skryje navigáciu.
- Tlačidlo má správnu hodnotu `aria-expanded` a `aria-controls` odkazujúce na ID navigácie.
- Escape vo vnútri navigácie ju zatvorí a vráti fokus na tlačidlo.
- Použi `addEventListener`, nie atribút `onclick`.

Kontrola: po dvoch kliknutiach je menu opäť zatvorené. Po Escape má tlačidlo `aria-expanded="false"` a fokus. Vysvetli, prečo text `"false"` nie je boolean `false`.

## 2. Pole jedál a funkcie (20 min)

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

## 3. Vykreslenie jedál do HTML (25 min)

Podľa: `element`, `renderMeal` a `render` v `html2/js/app.js`.

Použi dáta z úlohy 2. Napíš `renderMeals(meals)`, ktorá do kontajnera vytvorí pre každé jedlo článok s názvom, typom a cenou na dve desatinné miesta.

- Použi `createElement`, `textContent` a `append`.
- Pred vykreslením odstráň predchádzajúci obsah kontajnera.
- Polievkam pridaj triedu `soup` a vlastnú farbu pozadia.
- Pre prázdne pole vypíš „Žiadne jedlá“.

Kontrola: opakované volanie nevytvorí duplikáty. Názov `<b>Test</b>` sa zobrazí doslovne, nie ako tučné písmo.

## 4. Filter rozvrhu cez data atribúty (25 min)

Podľa: `html/js/lessons.js` a `html/pages/schedule.html`.

Vytvor štyri kartičky predmetov: dve s `data-type="lecture"`, jednu s `data-type="exercise"` a jednu s `data-type="sport"`. Pridaj tlačidlá Všetko, Prednášky, Cvičenia a Šport s atribútom `data-filter`.

- Po kliknutí zobraz iba zodpovedajúce kartičky; `all` zobrazí všetky.
- Vypíš počet zobrazených predmetov.
- Iba zvolené tlačidlo má `aria-pressed="true"`.
- Použi `dataset` a cyklus. Na skrývanie kartičiek môžeš použiť `hidden`.

Kontrola: počty pre jednotlivé filtre sú 4, 2, 1, 1. Po odstránení športovej kartičky filter Šport vypíše „Žiadne predmety“. V pôvodnej tabuľke sa používa trieda `is-filtered`; vysvetli, prečo úplné skrytie bunky môže narušiť rozloženie rozvrhu.

## 5. Pridávanie a mazanie miest (35 min)

Podľa: formulár a `isValidPoint` v `html/js/map.js`. Zatiaľ bez mapovej knižnice.

Vytvor formulár s názvom, zemepisnou šírkou a dĺžkou. Platný bod pridaj do poľa `points` a zobraz v zozname. Každý bod má vlastné jedinečné ID a tlačidlo Odstrániť.

- Spracuj `submit` a zabráň obnoveniu stránky.
- Názov po orezaní medzier má 1–60 znakov.
- Šírka je číslo od −90 do 90, dĺžka od −180 do 180. Nula je platná.
- Prázdnu súradnicu odmietni ešte pred prevodom na číslo.
- Pri chybe zobraz správu; pri úspechu obnov zoznam a vyprázdni formulár.
- Mazanie funguje podľa ID, aj keď majú dve miesta rovnaký názov.

Kontrola: `Škola, 48.15, 17.07` prejde; názov z medzier, šírka 91 a prázdna dĺžka neprejdú; súradnice `0, 0` prejdú. Vysvetli výsledok `Number('')`.

## 6. localStorage a JSON (25 min)

Podľa: `savePoints` v `html/js/map.js` a `readCache` v `html2/js/app.js`.

Rozšír úlohu 5:

- Po pridaní aj odstránení ulož pole pod kľúč `practice-points-v1`.
- Pri štarte obnov uložené body. Over, že výsledok je pole a každý bod má platné údaje aj ID.
- Chýbajúci záznam znamená prázdne pole.
- Poškodený JSON zachyť cez `try/catch`; zobraz upozornenie a umožni pokračovať s prázdnym zoznamom.
- Tlačidlo Vymazať uložené body odstráni iba tento kľúč a vyprázdni zobrazenie.

Kontrola: body prežijú obnovenie stránky. V konzole nastav `localStorage.setItem('practice-points-v1', '{pokazene')` a obnov stránku: aplikácia nespadne. Cudzí kľúč sa pri mazaní zachová. Vysvetli úlohu `JSON.stringify` a `JSON.parse`.

## 7. Práve prebiehajúca hodina (30 min)

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

## 8. Načítanie údajov cez fetch (30 min)

Podľa: `loadWeather` v `html/js/map.js` a `loadRestaurant` v `html2/js/app.js`.

V pracovnom priečinku vytvor súbor `weather.json` s obsahom:

```json
{"current":{"temperature_2m":12.5,"wind_speed_10m":8.2}}
```

Napíš `async function loadWeather()`, ktorá ho načíta cez fetch a vypíše teplotu a vietor.

- Počas načítania zobraz „Načítavam…“ a zablokuj tlačidlo Načítať.
- Skontroluj `response.ok`, načítaj JSON a over, že obe hodnoty sú konečné čísla.
- Chybu zobraz používateľovi a umožni nový pokus.
- Tlačidlo odblokuj pri úspechu aj chybe.

Kontrola: platné dáta zobrazia 12,5 °C a 8,2 km/h; neexistujúca URL, chybný JSON aj teplota `"teplo"` zobrazia chybu. Vysvetli, prečo samotný `catch` nestačí na zachytenie HTTP 404 bez kontroly odpovede.

Bonus: cez `AbortController` ukonči požiadavku po 5 sekundách a časovač vždy uprac.

## 9. Parser HTML menu (35 min)

Podľa: `html2/js/parsers.js`.

Tento reťazec je vstup tvojej funkcie `parseMenu(html)`:

```html
<section data-day="1">
  <h2>Pondelok 9. 11. 2026</h2>
  <table>
    <tr><th>Názov</th><th>Cena</th></tr>
    <tr><td>  Paradajková   polievka </td><td>2,50 €</td></tr>
    <tr><td>Kurací rezeň</td><td>6,90 €</td></tr>
    <tr><td></td><td>3,00 €</td></tr>
  </table>
</section>
```

Použi `DOMParser` a selektory. Vráť objekt `{ day: 1, date: '2026-11-09', items: [...] }`. Každé jedlo má `name` a `price` ako text. Vynechaj hlavičku aj riadky bez názvu, viacnásobné medzery zjednoť. Ak chýba sekcia, vráť `null`; ak chýba dátum, nastav ho na `null`.

Kontrola: presne dve jedlá; prvé má názov `Paradajková polievka` a cenu `2,50 €`. Vstup nevkladaj do živej stránky. Bonus: uprav funkciu na viac sekcií a pole dní.

## 10. Stav stránky, Map a Set (30 min)

Podľa: objekt `state`, filtre a `render` v `html2/js/app.js`.

Vytvor tri reštaurácie s ID `druzba`, `eatandmeet`, `drag`. Každej priprav v JavaScripte aspoň jedno pondelkové a jedno utorkové jedlo.

- Menu uchovávaj v `Map`, kde kľúč je ID reštaurácie.
- Viditeľné reštaurácie uchovávaj v `Set` ich ID.
- Checkboxy menia viditeľné reštaurácie, tlačidlá menia vybraný deň.
- Jedna funkcia `render()` vykreslí obsah podľa aktuálneho stavu.
- Pri nulovom výbere zobraz „Vyber aspoň jednu reštauráciu“.

Kontrola: vypnutie DRAG a prepnutie dňa ho znovu nezobrazí; viacnásobné pridanie rovnakého ID do `Set` nezvýši počet položiek. Vysvetli rozdiel medzi poľom, `Map` a `Set`.

## 11. Cache na dnešný deň (35 min, rozšírenie)

Podľa: `readCache`, `loadRestaurant` a `loadAll` v `html2/js/app.js`.

V pracovnej kópii `html2` skús samostatne znovu napísať načítanie jednej reštaurácie:

- Ulož `{ days, updated }` pod vlastný kľúč pre konkrétnu reštauráciu.
- Platné údaje načítané dnes použi bez fetch. Porovnávaj miestny kalendárny deň.
- Parameter `force = true` vždy vyvolá nové načítanie.
- Pri chybe zobraz starú cache s upozornením; bez cache zobraz chybu.
- Neprepíš dobrú cache chybnými dátami.

Kontrola v Network: druhé bežné načítanie dnes nevytvorí požiadavku, vynútené áno. Včerajšie dáta vyvolajú nové načítanie. Bonus: načítaj všetky zdroje cez `Promise.allSettled` a vysvetli rozdiel oproti `Promise.all`.

## 12. Mapa a udalosti knižnice (30 min, rozšírenie)

Podľa: `initializeMap` v `html/js/map.js`. Použi pracovnú kópiu projektu s už pripojeným Leafletom.

- Kliknutie na mapu zapíše súradnice do formulára na šesť desatinných miest.
- Zobraz iba jednu značku náhľadu; ďalšie kliknutie ju nahradí.
- Odoslaním platného formulára pridaj uložený marker s názvom v popupe.
- Odstránenie bodu odstráni aj jeho marker.

Kontrola: po troch kliknutiach bez uloženia je len jeden náhľad. Názov `<b>Domov</b>` sa v popupe zobrazí ako text. Bonus: použi existujúcu `calculateDistance` a zobraz vzdialenosť od školy na dve desatinné miesta; vzorec nemusíš odvodzovať.

## 13. Navigácia cez hash (20 min, rozšírenie)

Podľa: `navigate` v `html2/js/app.js`.

Vytvor sekcie Menu a O projekte s odkazmi `#menu` a `#o-projekte`. Podľa `location.hash` zobraz správnu sekciu, zmeň `document.title` a aktívnemu odkazu nastav `aria-current="page"`. Neznámy alebo prázdny hash zobrazí Menu.

Kontrola: funguje pri otvorení adresy s hashom aj pri tlačidlách Späť a Dopredu v prehliadači.

## 14. Krátke HTML a CSS opakovanie (20 min)

Podľa: `html/pages/schedule.html`, `html/css/styles.css` a `html2/index.html`.

Vytvor stránku s `header`, `nav`, `main`, `footer`, jedným `h1`, formulárom s prepojenými `label` a `input` a tabuľkou s `caption`, `thead`, `tbody` a `th`. Pridaj tri karty vedľa seba, ktoré sa pod 768 px zoradia pod seba. Klávesnicový fokus musí byť viditeľný.

Kontrola: každý vstup má popis, stránka sa dá ovládať Tabom a pri šírke 360 px nepretečie vodorovne. Vysvetli relatívnu cestu `../js/nav.js`, účel `defer` a rozdiel medzi `id` a `class`.

## Plán do pondelka

- Piatok: 1–4, potom bez pomoci vysvetli DOM, udalosti a metódy polí.
- Sobota: 5–8 a 10. Najviac času venuj formuláru, validácii a fetch.
- Nedeľa: skúšobný zápočet zo súboru `SKUSOBNY_ZAPOCET.md`, potom oprav slabé miesta. Ak ostane čas, 9 a 11–14.
- Pondelok pred zápočtom: prejdi kontrolné otázky v `NAPOVEDY.md` a znova napíš jednu udalosť, jeden filter a jednoduchý fetch.
