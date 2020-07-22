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
/*
class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }


*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  addTopping(newTopping) {
    this.toppings.push(newTopping);
    console.log(this.toppings);
  }
  removeTopping(index) {
    this.toppings.splice(index);
    console.log(this.toppings);
  }
  changeProtein(newProtein) {
    this.protein = newProtein;
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

//1. addTopping = "sour cream"
console.log(dinner.addTopping("sour cream"));
console.log(dinner.toppings);

//2. removeTopping = "guacamole"
console.log(dinner.removeTopping(2));
console.log(dinner.toppings);

//3. changeProtein = "Beef"
console.log(dinner.changeProtein("Beef"));
console.log(dinner.protein);

// Call the methods here
console.log(dinner.toppings);
console.log(dinner.protein);
console.log(dinner.base);
