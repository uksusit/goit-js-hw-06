

// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input), підставляє його поточне значення
//  в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous".

let  inpt = document.getElementById('name-input')
console.log(inpt);
// console.log(inpt.textContent);

const outpt = document.querySelector('#name-output')
console.log(outpt);
