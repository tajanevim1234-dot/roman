const meals = [
  { id: 1, name: 'Paradajková polievka', type: 'soup', price: 2.5 },
  { id: 2, name: 'Kurací rezeň', type: 'main', price: 6.7 },
  { id: 3, name: 'Zeleninové rizoto', type: 'main', price: 5.2 },
  { id: 4, name: 'Cesnaková polievka', type: 'soup', price: 2.8 }
];
const results = document.querySelector('#results');
const button = document.querySelector('#render');

function renderMeals(meals) {
  // TODO: Vyčisti výsledky, ošetri prázdne pole, vytvor články a pripoj ich.
  results.innerHTML="";
  if(meals.length==0){
    results.innerHTML="Nic si tu nedal";
  }
  meals.forEach(meal => {
    const article = document.createElement("article");

    if(meal.type ==="soup"){
      article.className = "soup";
    } else if (meal.type ==="main"){
      article.className = "main";
    }else{
      console.log("roman");
    }

    article.innerHTML=
    `<span class="name">${meal.name}</span>
    <span class="type">${meal.type}</span>
    <span class="price">${meal.price} euro</span>`;
    results.appendChild(article);
  });
  // TODO: Text vkladaj cez textContent, polievkam daj triedu soup.
}


button.addEventListener("click", () => renderMeals(meals));
// TODO: Pripoj tlačidlo. Over aj opakované vykreslenie a názov <b>Test</b>.
