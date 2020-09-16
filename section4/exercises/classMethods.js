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

//^^^^^'addTopping' method won't change the proteins, btw, but I will assume you meant toppings

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  changeProtein(newProtein) {
    this.protein = newProtein;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
};

const burrito1 = new Burrito('beans', 'white tortilla', [ 'cheese', 'salsa', 'sour cream' ]);

burrito1.changeProtein('steak');
console.log(burrito1);

const burrito2 = new Burrito('chicken', 'wheat tortilla', ['cheese', 'lettuce', 'avocado']);

burrito2.addTopping('salsa');
console.log(burrito2);

const burrito3 = new Burrito('chorizo', 'bowl', ['green chili', 'jalapenos', 'sour cream']);

burrito3.addTopping('cheese');
console.log(burrito3);
