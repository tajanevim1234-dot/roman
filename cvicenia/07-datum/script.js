const lessons = [
  { name: 'Matematika', day: 1, start: 8, end: 10 },
  { name: 'Programovanie', day: 1, start: 10, end: 12 },
  { name: 'Webové technológie', day: 3, start: 8, end: 10 }
];

function getCurrentLesson(lessons, now) {
  // TODO: Vráť hodinu alebo null. Koniec hodiny je už mimo intervalu.
}

function updateStatus(now = new Date()) {
  // TODO: Zisti aktuálnu hodinu a vypíš výsledok.
}

const sampleNow = new Date(2026, 10, 9, 9, 30);
// TODO: Over sampleNow, hranice hodín a nedeľu.
// TODO: Pripoj tlačidlo, prvé vykreslenie a interval 30 sekúnd.
