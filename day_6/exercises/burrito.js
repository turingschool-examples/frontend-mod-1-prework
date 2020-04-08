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
  add_topping(newTopping) {
    this.toppings.push(newTopping);
  }
  remove_topping(x) {
    this.toppings.splice(x, 1);
  }
  change_protein(newProtein) {
    this.protein = newProtein;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.add_topping("Valentinas");
dinner.remove_topping(1);
dinner.change_protein("Chicken");

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
