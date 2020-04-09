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

  addTopping(topping) {
    this.toppings.push(topping);
  }

  removeTopping(topping) {
    this.toppings.shift();
  }

  changeProtein() {
    console.log(this.protein = "carne asada");
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);




// Call the methods here

dinner.addTopping("queso");
console.log(dinner.toppings);
dinner.removeTopping(0,1)
console.log(dinner.toppings);
dinner.changeProtein();
console.log(dinner);

// removeTopping(toppingArray) {
//  this.toppings.shift();
//}
