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

button = document.querySelector('#parse')

function cleanText(value) { /* TODO: Zjednoť medzery a orež okraje. */
  return value.replace(/  +/g, ' ').trim();//da mi prec viacero medzier
}
function parseDate(text) { /* TODO: Vráť YYYY-MM-DD alebo null. */ 
  const match = text.split(" ");
  return new Date(Number(match[3]),Number(match[2]-1),Number(match[1]));
  //return [Number(match[3]),Number(match[2]-1),Number(match[1])];
}

function parseMenu(html) {
  // TODO: Vytvor oddelený dokument, vyber sekciu, dátum a platné riadky.
  const doc = new DOMParser().parseFromString(html,"text/html")
  const section = doc.querySelector('section[data-day]');

  const day = section.dataset.day;
  const date = parseDate(section.querySelector("h2").textContent);  
  const menu= section.querySelectorAll("tr"); // VSETKY TR V TABLE

  let items = [];
  let i =0;
  for(let item of menu){

    if(i!=0){

      const cells = item.querySelectorAll("td");
      const name = cleanText(cells[0].textContent);
      const price = cleanText(cells[1].textContent);

      if(name != "" && price!= ""){
        const done_cells=[name,price];
        items.push(done_cells);
      }
    }
    i++;
  }
  const objekt = {day:day,date:date,items:items};
  console.log(objekt);  
  button.textContent = JSON.stringify(objekt,null,2);
  // TODO: Vráť objekt day/date/items alebo null pri chýbajúcej sekcii.
}

// TODO: Pripoj tlačidlo a výsledok zobraz ako JSON text do #output.
button.addEventListener('click', () => {parseMenu(sourceHtml);});
