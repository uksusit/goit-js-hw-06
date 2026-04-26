const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

// Додаємо слухача події 'input'
fontSizeControl.addEventListener('input', (event) => {
  // Отримуємо поточне значення повзунка
  const currentSize = event.currentTarget.value;
  
  // Оновлюємо інлайн-стиль font-size (обов'язково додаємо одиниці вимірювання 'px')
  textSpan.style.fontSize = `${currentSize}px`;
});
// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.
