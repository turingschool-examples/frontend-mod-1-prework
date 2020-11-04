/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var spot = new Dog();
var rover = new Dog();
console.log(spot, rover);


// Prompt 2: Snack
class Snack {

}

var popcorn = new Snack();
var chips = new Snack();
console.log(popcorn, chips);

// Prompt 3: Shirt
class Shirt {

}

var longSleeve = new Shirt();
var shortSleeve = new Shirt();
console.log(longSleeve, shortSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

/* In order to make a new class skeleton, I had to use a new class name or else
I was getting errors in the terminal. So, my class names from this point aren't
necessarily what I would use. I'm assuming there's a way to reuse a class skeleton
even after it has been declared, but I don't know that syntax yet.
*/

}
class DogProperties {
  constructor(){
    this.legCount = 4;
    this.name = "Spot";
    this.color = "Brown";
  }
}

var spot = new DogProperties();
console.log(spot);

// Prompt 2: Snack
class SnackProperties {
  constructor() {
    this.isTasty = true;
    this.isEdible = true;
    this.color = "white";
  }
}

var popcorn = new SnackProperties();
console.log(popcorn);

// Prompt 3: Shirt
class ShirtProperties {
  constructor() {
    this.isSoft = true;
    this.isWarm = true;
    this.color = "orange";
  }
}

var longSleeve = new ShirtProperties();
console.log(longSleeve);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DynamicDog {
  constructor(numLeg, dogName, dogColor) {
    this.legCount = numLeg;
    this.name = dogName;
    this.color = dogColor;
  }
}

var spot = new DynamicDog(4, "Spot", "Brown");
console.log(spot);

var rover = new DynamicDog (3, "Rover", "Black");
console.log(rover);

// Prompt 2: Snack
class DynamicSnack {
  constructor(tasty, edible, snackColor) {
    this.isTasty = tasty;
    this.isEdible = edible;
    this.color = snackColor;
  }
}

var popcorn = new DynamicSnack(true, true, "white");
console.log(popcorn);

var chips = new DynamicSnack(false, true, "orange");
console.log(chips);

// Prompt 3: Shirt
class DynamicShirt {
  constructor(soft, warm, shirtColor) {
    this.isSoft = soft;
    this.isWarm = warm;
    this.color = shirtColor;
  }
}

var longSleeve = new DynamicShirt(true, true, "Orange");
console.log(longSleeve);

var shortSleeve = new DynamicShirt(false, false, "Yellow");
console.log(shortSleeve);
