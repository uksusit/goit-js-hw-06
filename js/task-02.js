const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  // "Pumpkin",
];

//  var.1
  console.log("items are ", ingredients.length);

ingredients.forEach(ingredient => {
  console.log("ingredient: ", ingredient);
const listEls = document.querySelector('#ingredients');
// console.log(listEls);

  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  listEls.append(li);
  console.log("li.textContent: ", li.textContent);
console.log("item number ", listEls.querySelectorAll('li').length);
});

// var.2

// const liEl = `<li class="item">ingredient</li>`
// listEls.insertAdjacentHTML('beforeend', li);