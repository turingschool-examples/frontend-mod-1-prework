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
  addTopping(toppings) {
    this.toppings.push(toppings);
  }
  removeTopping() {
    this.toppings.pop();
  }
  changeProtein(protein) {
    this.protein = protein
  }
};





var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here
console.log(dinner.protein);
dinner.changeProtein("Carnitas");
console.log(dinner.protein);
console.log(dinner.base);
dinner.removeTopping();
console.log(dinner.toppings);
dinner.addTopping("Garlic");
console.log(dinner.toppings)
