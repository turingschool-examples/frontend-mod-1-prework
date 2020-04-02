/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. add_topping
2. remove_topping
3. change_protein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  addToppings(toppings) {
    this.toppings.push(toppings);
  }
  removeTopping(toppings) {
    this.topping.pop(toppings);
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.toppings.push("lettuce");
//expected output: ["cheese", "salsa", "guacamole", "lettuce"]
dinner.toppings.shift();
//expected output: ["salsa", "guacamole", "lettuce"]
dinner.protein = "Tofu";
//expected output: "Tofu"

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
