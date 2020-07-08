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
  };
  addTopping(topping) {
    this.toppings.push(topping);
  };
  removeTopping() {
    this.toppings.pop();
  };
  changeProtein(protein) {
    this.protein = protein;
  };
};

var dinner = new Burrito("beans", "rice", ["cheese", "salsa", "guacamole"]);
dinner.addTopping("lettuce");
dinner.removeTopping();
dinner.changeProtein("beef");

// Call the methods here

console.log(dinner.protein);
//expected output: beef
console.log(dinner.base);
//expected output: rice
console.log(dinner.toppings);
//expected output: ["cheese", "salsa", "guacamole"]
console.log(dinner);
//expected output: Burrito {protein: "beef", base: "rice", toppings: ["cheese", "salsa", "guacamole"]
}
