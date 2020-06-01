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

  addTopping(top) {
    this.toppings.push(top);
  }

  removeTopping() {
    this.toppings.shift();
  }

  changeProtein(meat) {
    this.protein = meat;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.addTopping('lettuce')
dinner.removeTopping()
dinner.changeProtein('chicken')

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
