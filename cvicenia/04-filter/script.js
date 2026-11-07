const lessons = document.querySelectorAll('.lesson');
const buttons = document.querySelectorAll('[data-filter]');
const status = document.querySelector('#filter-status');

function applyFilter(filter) {
  console.log(filter);
  let count = 0;
  // TODO: Zmeň viditeľnosť položiek, spočítaj výsledky a aktualizuj status.
  lessons.forEach(lesson => {
    if(filter === "all"){
      lesson.hidden=false;
      count++;
    }else{
      if(lesson.dataset.type === filter){
        lesson.hidden=false;
        count++;
      }else{
        lesson.hidden=true;
      }
    }
  })
  status.innerText = `Počet výsledkov: ${count}`;
  // TODO: Nastav aria-pressed na tlačidlách.
  buttons.forEach(button => {
    if(filter === button.dataset.filter){
      button.setAttribute('aria-pressed', true);
    } else{
      button.setAttribute('aria-pressed', false);
    }
  })

}

// TODO: Pripoj udalosti a nastav počiatočný filter.
for (const button of buttons) {
  button.addEventListener('click', () => {applyFilter(button.dataset.filter)});
}

applyFilter('all');

