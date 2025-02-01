
class Storage { 
    constructor(items) {
       this.items = items;
      // this.item = item;
  
    } 
        // Метод getшitems
      getItems()
    {
      return this.items;
    }

           // Метод addItem
    addItem(newItem)
   {
      this.items.push(newItem);
    }

    // metod removeItem
    removeItem(itemToRemove) {
      this.items = this.items.filter(item => item !== itemToRemove);
      // console.log(this.items.filter(item => item !== itemToRemove));
    }
    // removeItem(itemToRemove)
    //   { 
    //      console.log(itemToRemove);
        //  console.log(this.items);

    //      sessionStorage.removeItem(itemToRemove);
    //   }
  }
  
  // Change code above this line
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// приклад видалення з масиву
//   public static int[] removeItem(int[] numbers, int index){
//     for (int i = index; i < num1bers.length -1; i++) {
//         numbers[i] = numbers[i + 1];
//     }
//     return Arrays.copyOf(numbers, numbers.length - 1);
// }