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
  addTopping(topping) {
   this.toppings.push(topping);
  }
 removeTopping() {
  this.toppings.shift();
}

 changeProtein(otherProtein) {
   this.protein = otherProtein;
 }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

// Call the methods here
dinner.addTopping("sour cream");
dinner.removeTopping();
dinner.changeProtein("chicken");


console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);

console.log(dinner)
