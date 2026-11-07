# 4. Filter rozvrhu cez data atribúty (25 min)

Podľa: `html/js/lessons.js` a `html/pages/schedule.html`.

Vytvor štyri kartičky predmetov: dve s `data-type="lecture"`, jednu s `data-type="exercise"` a jednu s `data-type="sport"`. Pridaj tlačidlá Všetko, Prednášky, Cvičenia a Šport s atribútom `data-filter`.

- Po kliknutí zobraz iba zodpovedajúce kartičky; `all` zobrazí všetky.
- Vypíš počet zobrazených predmetov.
- Iba zvolené tlačidlo má `aria-pressed="true"`.
- Použi `dataset` a cyklus. Na skrývanie kartičiek môžeš použiť `hidden`.

Kontrola: počty pre jednotlivé filtre sú 4, 2, 1, 1. Po odstránení športovej kartičky filter Šport vypíše „Žiadne predmety“. V pôvodnej tabuľke sa používa trieda `is-filtered`; vysvetli, prečo úplné skrytie bunky môže narušiť rozloženie rozvrhu.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
