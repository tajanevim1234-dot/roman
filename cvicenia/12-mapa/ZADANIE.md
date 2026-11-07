# 12. Mapa a udalosti knižnice (30 min, rozšírenie)

Podľa: `initializeMap` v `html/js/map.js`. Použi pracovnú kópiu projektu s už pripojeným Leafletom.

- Kliknutie na mapu zapíše súradnice do formulára na šesť desatinných miest.
- Zobraz iba jednu značku náhľadu; ďalšie kliknutie ju nahradí.
- Odoslaním platného formulára pridaj uložený marker s názvom v popupe.
- Odstránenie bodu odstráni aj jeho marker.

Kontrola: po troch kliknutiach bez uloženia je len jeden náhľad. Názov `<b>Domov</b>` sa v popupe zobrazí ako text. Bonus: použi existujúcu `calculateDistance` a zobraz vzdialenosť od školy na dve desatinné miesta; vzorec nemusíš odvodzovať.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Táto šablóna zámerne nepripája Leaflet. Skopíruj pôvodný priečinok `html` do vlastného pracovného priečinka a otvor `pages/map.html`. V kópii `js/map.js` nahraď príslušné obsluhy vlastným kódom podľa `script.js`; zachovaj inicializáciu knižnice a mapy. Cesty k pôvodnému projektu sú v tomto dokumente uvedené od priečinka `C:/Games/skola`. Mapa vyžaduje internet na knižnicu a podklady.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
