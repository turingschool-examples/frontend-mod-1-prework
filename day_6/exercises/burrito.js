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
  addTopping(newTopping){
    this.toppings.unshift(newTopping);
  }
  removeTopping(){
    this.toppings.pop();
  }
  changeProtein(newProtein){
    this.protein = newProtein;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.changeProtein("fish");
dinner.removeTopping();
dinner.addTopping("mango");

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);
