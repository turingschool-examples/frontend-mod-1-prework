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

  add_topping(toppings) {
    this.toppings.push(toppings);
  }

  remove_toppings(toppings) {
    this.toppings.pop(toppings);
  }

change_protein(protein) {
  this.protein = protein
}
};


var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
console.log('My Examples Next');
dinner.add_topping("sour cream");
console.log(dinner.toppings);
dinner.remove_toppings();
console.log(dinner.toppings);
dinner.change_protein('steak');
console.log(dinner.protein);
