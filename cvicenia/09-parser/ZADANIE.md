# 9. Parser HTML menu (35 min)

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

## Súbory a postup

- `index.html`: pripravené prvky a ich ID.
- `script.js`: vstupné dáta a funkcie s TODO; doplň logiku aj udalosti.
- `style.css`: základné štýly, prípadné rozšírenia doplň podľa zadania.

Toto je samostatná šablóna; pôvodný projekt nemusíš meniť. Cesty k pôvodným súborom vyššie slúžia ako referencia od `C:/Games/skola`.

Hotovo máš až po splnení kontrolných príkladov v zadaní.
