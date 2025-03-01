let counterValue = 0;

const counts = document.querySelectorAll('button');
// const countDecr = document.querySelector('#counter'.childNodes);
counts.forEach(count => {    
count.addEventListener('click', onClick);
});
const value = document.querySelector('#value');
console.log("before", value.textContent);

function onClick(evt){
console.dir(evt.currentTarget);

let val = evt.currentTarget;
console.log(val);

let valDigit = (+val.textContent);
console.log("current digit", valDigit);

counterValue += valDigit;
console.log("after", counterValue);
value.textContent = counterValue;

};

