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
  addTopping(hotSauce) {
    this.toppings.push(hotSauce);
  }
  removeTopping(cheese) {
    this.toppings.shift();
  }
  changeProtein(protein) {
    this.protein = "beef";
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here

console.log(dinner.protein);
Beans
console.log(dinner.base);
Rice
console.log(dinner.toppings);
[ 'cheese', 'salsa', 'guacamole' ]
