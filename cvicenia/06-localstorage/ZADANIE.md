# 6. localStorage a JSON (25 min)

Podľa: `savePoints` v `html/js/map.js` a `readCache` v `html2/js/app.js`.

Rozšír úlohu 5:

- Po pridaní aj odstránení ulož pole pod kľúč `practice-points-v1`.
- Pri štarte obnov uložené body. Over, že výsledok je pole a každý bod má platné údaje aj ID.
- Chýbajúci záznam znamená prázdne pole.
- Poškodený JSON zachyť cez `try/catch`; zobraz upozornenie a umožni pokračovať s prázdnym zoznamom.
- Tlačidlo Vymazať uložené body odstráni iba tento kľúč a vyprázdni zobrazenie.

Kontrola: body prežijú obnovenie stránky. V konzole nastav `localStorage.setItem('practice-points-v1', '{pokazene')` a obnov stránku: aplikácia nespadne. Cudzí kľúč sa pri mazaní zachová. Vysvetli úlohu `JSON.stringify` a `JSON.parse`.

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Najprv prenes svoje riešenie úlohy 05 do tejto šablóny. HTML používa rovnaké ID. Nový súbor už deklaruje `points`, preto túto deklaráciu nekopíruj druhýkrát.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
