/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/burrito.js`

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
    console.log(this.toppings);
  }

  removeTopping() {
    this.toppings.pop();
    console.log(this.toppings);
  }

  changeProtein(differentProtein) {
    this.protein = differentProtein;
    console.log(this.protein);
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.addTopping("onions");
dinner.removeTopping();
dinner.changeProtein("Tofu");

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
