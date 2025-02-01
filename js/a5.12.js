// Завдання 12/20
// Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.

// В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.

// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість
// Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

// Завдання 12/20
// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"

class Car {
    // Change code below this line
    #brand;
  
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.model = model;
      this.price = price;
    }
    getBrand() {
        return this.#brand;
      }
    
      changeBrand(newBrand) {
        this.#brand = newBrand;
      }
    // Change code above this line
  }
const car1 = 
  new Car({ brand: "Audi", model: "Q3", price: 36000 });
      console.log(car1.getBrand());
      const car2 = 
  new Car({ brand: "bmw", model: "X5", price: 58900 });
  console.log(car2.getBrand());
  const car3 = 
  new Car({ brand: "Nissan", model: "Murano", price: 31700 });
  console.log(car3.getBrand());
  car3.changeBrand("Honda");
  console.log(car3.getBrand());

