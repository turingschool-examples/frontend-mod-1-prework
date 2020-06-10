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

  changeBase(addBase){    //created an extra function to change base to an input
    this.base = addBase
  }
};

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

console.log(dinner) //prints new burrito object

dinner.addTopping("lettuce");     //add lettuce to toppings array
console.log(dinner.toppings); //print new toppings array

dinner.removeTopping();      //remove the last topping in the toppings array
console.log(dinner.toppings); //print toppings with the last topping item in toppings array removed

dinner.changeProtein("carnitas");     //change protein to carnitas
console.log(dinner.protein);    //prints new protein

dinner.changeBase("quinoa");    //change base to quinoa
console.log(dinner.base);     //print new base
