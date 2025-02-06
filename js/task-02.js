const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  // 'Pumpkin',
];

//  var.1   / додає <li>  почергово

//   console.log("items are ", ingredients.length);

// ingredients.forEach(ingredient => {
//   console.log("ingredient: ", ingredient);
// const listEls = document.querySelector('#ingredients');
// // console.log(listEls);

//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add("item");
//   listEls.append(li);
//   console.log("li.textContent: ", li.textContent);
// console.log("item number ", listEls.querySelectorAll('li').length);
// });


// var.2     /вставить усі <li> за одну операцію у список/

const list = document.querySelector('#ingredients');

const listEls = ingredients.map(ingredient => {
  // console.log("ingredient: ", ingredient);
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  console.log("li.textContent: ", li.textContent);
  console.log(li);
return li;
});

console.log(...listEls);
list.append(...listEls);


