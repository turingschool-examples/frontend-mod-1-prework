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
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.toppings.push("avacado");
dinner.toppings.shift();
dinner.protein = "Mole";


console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);

// 6/7/2020: I came back to look at this and I think the methods need to be
// with in the curly brackets for the class. This way does work? Is it acceptable? 
