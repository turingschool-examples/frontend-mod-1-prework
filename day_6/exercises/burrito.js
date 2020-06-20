/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/burrito.js`

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

  addTopping() {
    this.toppings.push("Sour Cream");
  }

  removeTopping() {
    this.toppings.shift();
  }

  changeProtein() {
    this.protein = ("Chicken");
  }
};

var dinner = new Burrito("Steak", "Rice", ["Cheese", "Salsa", "Guacamole"]);

console.log(dinner);

dinner.addTopping();
dinner.removeTopping();
dinner.changeProtein();
console.log(dinner);
