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