const lessons = [
  { name: 'Matematika', day: 1, start: 8, end: 10 },
  { name: 'Programovanie', day: 1, start: 10, end: 12 },
  { name: 'Webové technológie', day: 3, start: 8, end: 10 }
];
const printLesson = document.querySelector('#lesson-status');
const button = document.querySelector('#check');

function getCurrentLesson(lessons, now) {
  // TODO: Vráť hodinu alebo null. Koniec hodiny je už mimo intervalu.
  for (const lesson of lessons) {
    if(lesson.day===now.getDay() && lesson.start<=now.getHours() && lesson.end>now.getHours()){
      return lesson;
    }
  };
  return null;
}

function updateStatus(now = new Date()) {
  // TODO: Zisti aktuálnu hodinu a vypíš výsledok.
  const lesson = getCurrentLesson(lessons,now);
  printLesson.textContent = '';

  if (lesson === null) {
    printLesson.textContent = 'Teraz neprebieha žiadna hodina.';
  } else {
    printLesson.textContent = lesson.name;
  }

}

const sampleNow = new Date(2026, 10, 9, 9, 30);
// TODO: Over sampleNow, hranice hodín a nedeľu.
// TODO: Pripoj tlačidlo, prvé vykreslenie a interval 30 sekúnd.
button.addEventListener("click", () => updateStatus(sampleNow));