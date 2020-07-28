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
    console.log("ADDED: " + top);
    console.log("NEW TOPPINGS: " + this.toppings)
  }

  removeTopping(top) {
    const index = this.toppings.indexOf(top);
    this.toppings.splice(index, 1);
    console.log("SPLICED: " + top);
    console.log("TOPPINGS: " + this.toppings)
  }

  changeProtein(newPro) {
    this.protein = newPro;
    console.log("CHANGED PROTEIN: " + newPro);
  }
}

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);
console.log(dinner);
// Call the methods here
dinner.addTopping("mushroom");
dinner.removeTopping("guacamole");
dinner.changeProtein("Pepperoni");
console.log(dinner);
//
//
//
// console.log(dinner.protein);
// console.log(dinner.base);
// console.log(dinner.toppings);
