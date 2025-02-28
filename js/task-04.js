let counterValue = 0;

const counts = document.querySelectorAll('button');
// const countDecr = document.querySelector('#counter'.childNodes);
counts.forEach(count => {    
count.addEventListener('click', onClick);
});

function onClick(evt){
console.dir(evt.currentTarget);

let val = evt.currentTarget;


console.log(val.);
counterValue += 1;
console.log(counterValue);
};

