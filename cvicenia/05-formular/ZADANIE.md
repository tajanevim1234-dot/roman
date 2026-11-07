# 5. Pridávanie a mazanie miest (35 min)

Podľa: formulár a `isValidPoint` v `html/js/map.js`. Zatiaľ bez mapovej knižnice.

Vytvor formulár s názvom, zemepisnou šírkou a dĺžkou. Platný bod pridaj do poľa `points` a zobraz v zozname. Každý bod má vlastné jedinečné ID a tlačidlo Odstrániť.

- Spracuj `submit` a zabráň obnoveniu stránky.
- Názov po orezaní medzier má 1–60 znakov.
- Šírka je číslo od −90 do 90, dĺžka od −180 do 180. Nula je platná.
- Prázdnu súradnicu odmietni ešte pred prevodom na číslo.
- Pri chybe zobraz správu; pri úspechu obnov zoznam a vyprázdni formulár.
- Mazanie funguje podľa ID, aj keď majú dve miesta rovnaký názov.

Kontrola: `Škola, 48.15, 17.07` prejde; názov z medzier, šírka 91 a prázdna dĺžka neprejdú; súradnice `0, 0` prejdú. Vysvetli výsledok `Number('')`.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
