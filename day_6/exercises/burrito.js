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
  addTopping(tops) {
    this.toppings.push(tops);
    return this.toppings;
  };
  removeTopping(tops) {
      for (var i = 0; i < this.toppings.length; i++) {
        if (this.toppings[i] === tops) {
      var index = this.toppings.indexOf(tops);
      this.toppings.splice(index, 1);
      return this.toppings;
      };
    }
  }
  changeProtein(protein) {
    return this.protein = protein;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);

console.log(dinner.addTopping("olives"));
console.log(dinner.removeTopping("salsa"));
console.log(dinner.changeProtein("Chicken"));
