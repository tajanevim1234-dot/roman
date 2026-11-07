# 11. Cache na dnešný deň (35 min, rozšírenie)

Podľa: `readCache`, `loadRestaurant` a `loadAll` v `html2/js/app.js`.

V pracovnej kópii `html2` skús samostatne znovu napísať načítanie jednej reštaurácie:

- Ulož `{ days, updated }` pod vlastný kľúč pre konkrétnu reštauráciu.
- Platné údaje načítané dnes použi bez fetch. Porovnávaj miestny kalendárny deň.
- Parameter `force = true` vždy vyvolá nové načítanie.
- Pri chybe zobraz starú cache s upozornením; bez cache zobraz chybu.
- Neprepíš dobrú cache chybnými dátami.

Kontrola v Network: druhé bežné načítanie dnes nevytvorí požiadavku, vynútené áno. Včerajšie dáta vyvolajú nové načítanie. Bonus: načítaj všetky zdroje cez `Promise.allSettled` a vysvetli rozdiel oproti `Promise.all`.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Táto šablóna umožňuje najprv precvičiť cache samostatne s priloženým `menu.json` (pole dní). Namiesto HTML a parsera načítaj JSON. Potom rovnakú logiku prenes do pracovnej kópie `html2` podľa zadania vyššie.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
