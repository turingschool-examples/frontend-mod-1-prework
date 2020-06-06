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
  addTopping(topping){
    this.toppings.push(topping);// adds a push method to and a topping
  }
  removeTopping(topping){
    var indextoRemove = this.toppings.indexOf(topping)
    this.toppings.splice(indextoRemove,1); //uses the .splice to remove the index of salsa
  }
  changeProtein(){
    (this.protein = "Chicken"); // assings Chicken as value
  }
};
var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);
dinner.addTopping('jalapenos');
dinner.removeTopping('salsa');
dinner.changeProtein("Chicken");
// Call the methods here
console.log("The burrito of the week comes with " + dinner.protein);
console.log("Which comes with a big helping of " + dinner.base);
console.log("The other toppings include " + dinner.toppings);
console.log(dinner);
