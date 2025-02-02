// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);
console.log("Number of categories: ", categoriesEl.querySelectorAll('li.item').length);

const listEls = categoriesEl.querySelectorAll("li.item");
console.log("");

listEls.forEach(listEl => {
    console.log("Category: ", listEl.querySelector('h2').textContent);
    console.log(listEl.querySelectorAll('li').length);
    console.log("");
  });

