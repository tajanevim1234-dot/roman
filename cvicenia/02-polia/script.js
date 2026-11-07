const meals = [
  { id: 1, name: 'Paradajková polievka', type: 'soup', price: 2.5 },
  { id: 2, name: 'Kurací rezeň', type: 'main', price: 6.9 },
  { id: 3, name: 'Zeleninové rizoto', type: 'main', price: 5.2 },
  { id: 4, name: 'Cesnaková polievka', type: 'soup', price: 2.8 }
];

function getSoups(meals) { /* TODO: Vráť pole polievok. */
  /**
  const soups=[];
  for(let i=0;i<meals.length;i++){
    const meal=meals[i];
    if(meal.type==="soup"){
      soups.push(meal);
    }
  }
  console.log(soups);
  */
  return meals.filter(meal => meal.type ==="soup");
}

function getNames(meals) { /* TODO: Vráť pole názvov. */ 
  return meals.map(meal => meal.name);
}
function findMeal(meals, id) { /* TODO: Vráť jedlo alebo undefined. */ 
  return meals.find(meal => meal.id === id);
}
function getAffordable(meals, limit) { /* TODO: Vráť jedlá s cenou najviac limit. */ 
  return meals.filter(meal => meal.price <= limit);
}

// TODO: Zavolaj funkcie pre príklady zo zadania a vypíš výsledky.
console.log(getSoups(meals));
console.log(getNames(meals));
console.log(findMeal(meals,2));
console.log(getAffordable(meals,6));
