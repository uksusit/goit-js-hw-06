// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  // 1. Змінюємо колір фону body через інлайн-стиль
  body.style.backgroundColor = newColor;

  // 2. Виводимо значення кольору в span.color
  colorSpan.textContent = newColor;
});

// Як це працює:
// getRandomHexColor: Ця функція генерує випадкове число, перетворює його на 
// 16-тковий рядок (Hex) і додає нулі попереду, якщо рядок вийшов коротшим за 6 символів.

// body.style.backgroundColor: Ми звертаємося напряму до властивостей стилю об'єкта body. 
// Це найбільш ефективний спосіб додати інлайн-стиль.

// textContent: Ми використовуємо цю властивість для оновлення тексту в span, оскільки 
// це безпечніше та швидше, ніж innerHTML.

// Порада щодо використання:
// Якщо ви хочете, щоб текст кольору в span завжди був читабельним незалежно від фону,
//  ви можете додати невеликий стиль у CSS для самого віджета(наприклад, білий фон з тінню),
//  щоб він не "губився" на яскравих кольорах фону body.
// 