
//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
// Додаємо стилізацію контейнера однією строкою - розкоментувати наступний рядок:
// boxesContainer.style.cssText = 'display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin-top: 20px;';

//  або так:
// Оновлений рядок стилізації для максимального використання простору
// boxesContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-start; justify-content: center; padding: 20px 0;';


createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  // Валідація згідно з атрибутами min/max
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо інпут після створення
  } else {
    alert('Будь ласка, введіть число від 1 до 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  // Спочатку очищаємо попередню колекцію (якщо це потрібно за логікою завдання)
  boxesContainer.innerHTML = '';
  
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginTop = '5px'; // Для візуального розділення
    
    elements.push(div);
    size += 10;
  }

  // Додаємо всі елементи за одну операцію
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


// Ключові моменти реалізації:Валідація: Оскільки в HTML вказано min="1" та max="100",
// я додав перевірку в JS. Це запобігає спробам створити від'ємну кількість елементів
// або завісити браузер надто великою кількістю рендерів.
// Оптимізація append(...elements): Замість того, щоб додавати кожен div
// у контейнер окремо всередині циклу (що змушує браузер щоразу перераховувати
// геометрію сторінки), ми спочатку збираємо їх у масив, а потім додаємо всі разом
// за допомогою розпилення (spread).Динамічний розмір: Змінна size ініціалізується
// як $30$ і збільшується на $10$ на кожній ітерації циклу, що забезпечує прогресію
//  розмірів.Очищення: Метод destroyBoxes просто видаляє весь внутрішній HTML контейнера,
//  що є найшвидшим способом "вбити" всі дочірні вузли.

// Рекомендація щодо CSS:
//Щоб елементи вишиковувалися гарно, ви можете додати у свій CSS файл 
//  (реалізовано тут автономно в рядку 13-14) :

//CSS

//#boxes {
//  display: flex;
//  flex-wrap: wrap;
//  align-items: flex-end;
//  gap: 10px;
//  margin-top: 20px;
//}
