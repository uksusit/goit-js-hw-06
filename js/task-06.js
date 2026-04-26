const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const input = event.currentTarget;
  const expectedLength = Number(input.dataset.length);
  const actualLength = input.value.trim().length;

  if (actualLength === expectedLength) {
    updateClass(input, 'valid', 'invalid');
  } else {
    updateClass(input, 'invalid', 'valid');
  }
}

function updateClass(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//   якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

