# 8. Načítanie údajov cez fetch (30 min)

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

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
