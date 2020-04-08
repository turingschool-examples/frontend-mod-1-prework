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
  add_topping(topping) {
    this.toppings.push(topping);
  }
  remove_topping(topping) {
    this.toppings.pop(topping);
  }
  change_protein(protein) {
    this.protein.push(protein);
    this.protein.shift();
  }
};

var dinner = new Burrito(["Beans"], "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);

dinner.add_topping("sour cream");

console.log(dinner.toppings);

dinner.remove_topping();

console.log(dinner.toppings);

dinner.change_protein("Steak");

console.log(dinner.protein);

console.log(dinner);
