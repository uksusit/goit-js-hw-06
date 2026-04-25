

// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input), підставляє його поточне значення
//  в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  const value = event.currentTarget.value.trim();
  output.textContent = value !== '' ? value : 'Anonymous';
});


// Як це працює:
// input event: Ми використовуємо саме цю подію, оскільки вона спрацьовує миттєво 
// при кожній зміні значення (введення символу, видалення або вставка тексту).
// trim(): Я додав цей метод, щоб пробіли на початку або в кінці не вважалися валідним ім'ям. 
// Якщо користувач введе лише пробіли, скрипт все одно покаже "Anonymous".
// Тернарний оператор: Це компактний спосіб перевірити: «Якщо значення не порожнє — виводь текст, 
// інакше — повертай дефолтне значення».
