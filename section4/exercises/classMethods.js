/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  // ADD CODE
  changeProtein(newProtein){
    this.protein = newProtein;
  }

  addTopping(newTopping){
    this.toppings.push(newTopping);
  }
};

// ADD CODE
var cheese = new Burrito("tofu", "rice", ["guacamole", "pico", "peppers"]);
var fish = new Burrito("fish", "beans", ["guacamole", "pico", "cheese"]);
var chicken = new Burrito("chicken", "rice", ["guacamole", "pico", "salsa"]);

cheese.changeProtein("beef");
console.log(cheese);

fish.addTopping("cilantro");
console.log(fish);

chicken.addTopping("queso");
console.log(chicken);
