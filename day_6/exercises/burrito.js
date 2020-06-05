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

  addTopping(toppings) {
    this.toppings.push(toppings);
  }

  removeTopping(toppings) {
    this.toppings.pop(toppings)
  }

  changeProtein(addProtein){
    this.protein = addProtein;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.addTopping("lettuce");     //adding lettuce to toppings array
dinner.removeTopping();      //removes the last topping
dinner.changeProtein("carnitas");     //changes protein to carnitas

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
