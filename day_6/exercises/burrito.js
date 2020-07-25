/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. addTopping
2. removeTopping
3. changeProtein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }
  removeTopping(topping) {
    var index = this.toppings.indexOf(topping);
    //Define "index" as the index number of the argument. "Topping" defined when
    //calling "removeTopping" function below.
    this.toppings.splice(index, 1);
    //Start with index position defined above and remove one item from array.
  }
  changeProtein(newProtein) {
    this.protein = newProtein;
  }
};


var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);
console.log(dinner)

// Call the methods here
dinner.addTopping("sour cream");
dinner.removeTopping("salsa");
dinner.changeProtein("steak")

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
