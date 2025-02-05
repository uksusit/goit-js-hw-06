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

// var.2

// const liEl = `<li class="item">ingredient</li>`
// listEls.insertAdjacentHTML('beforeend', li);



const list = document.querySelector(".ingredients");

const listEls = [];
ingredients.forEach(ingredient => {
  console.log("ingredient: ", ingredient);

console.log(listEls);

  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  listEls.push(li);
  console.log("li.textContent: ", li.textContent);
console.log("item number ", listEls.length);
});

console.dir(listEls);

list.append([listEls]);

const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;



// Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);