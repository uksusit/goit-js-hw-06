// Завдання 5/20
// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ

// До завдання

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor)
{
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;
};

console.log(parent);

const child = Object.create(parent)
{
child.name = "Jason";
  child.age = 27;
};

console.log(child);

console.log("ancestor.isPrototypeOf(parent)---true", ancestor.isPrototypeOf(parent));
console.log("parent.isPrototypeOf(child)---true", parent.isPrototypeOf(child));
console.log("true", ancestor.hasOwnProperty("surname"));
console.log("Dawson", ancestor.surname );
console.log("true", parent.hasOwnProperty("surname"));
console.log("Moore", parent.surname);
console.log(child.hasOwnProperty("surname"));
console.log("Moore", child.surname);
console.log("true", ancestor.hasOwnProperty("heritage"));
console.log("Irish", ancestor.heritage);
console.log(parent.hasOwnProperty("heritage"));
console.log("Irish", parent.heritage);
console.log(child.hasOwnProperty("heritage"));
console.log("Irish", child.heritage);

// Change code above this line


// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()