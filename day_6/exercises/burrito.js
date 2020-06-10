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
  };

  addTopping(addedTopping) {
    this.toppings.push(addedTopping);
  };

  removeTopping(removedTopping) {
    this.toppings.splice(removedTopping,1);
  };

  changeProtein(newProtein) {
    this.protein = newProtein;
  };

};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

dinner.addTopping("lettuce");
dinner.removeTopping(2);
dinner.changeProtein("Chicken");

console.log(dinner.protein);
console.log(dinner.base);
console.log(dinner.toppings);

class Car {
  constructor(model, color, miles) {
    this.model = model;
    this.color = color;
    this.totalMiles = miles;
  };

  drive(miles){
    this.totalMiles = this.totalMiles + miles;
  };

  paint(color){
    this.color = color;
  };

};

var redMustang = new Car("Mustang", "Red",0);
console.log(redMustang.color);
redMustang.drive(10);
console.log(redMustang.totalMiles);
redMustang.paint("blue");
console.log(redMustang.color);
redMustang.drive(12);
console.log(redMustang.totalMiles);
