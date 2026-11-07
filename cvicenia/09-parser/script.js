const sourceHtml = `
<section data-day="1">
  <h2>Pondelok 9. 11. 2026</h2>
  <table>
    <tr><th>Názov</th><th>Cena</th></tr>
    <tr><td>  Paradajková   polievka </td><td>2,50 €</td></tr>
    <tr><td>Kurací rezeň</td><td>6,90 €</td></tr>
    <tr><td></td><td>3,00 €</td></tr>
  </table>
</section>`;

function cleanText(value) { /* TODO: Zjednoť medzery a orež okraje. */ }
function parseDate(text) { /* TODO: Vráť YYYY-MM-DD alebo null. */ }

function parseMenu(html) {
  // TODO: Vytvor oddelený dokument, vyber sekciu, dátum a platné riadky.
  // TODO: Vráť objekt day/date/items alebo null pri chýbajúcej sekcii.
}

// TODO: Pripoj tlačidlo a výsledok zobraz ako JSON text do #output.
