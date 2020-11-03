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
// class Dog {
//
//  }
// var beagle = new Dog();
// var poodle = new Dog();
//
//console.log(beagle);
//console.log(poodle);
//
// Prompt 2: Snack
// class Snack {
//
//  }
// var cookie = new Snack();
// var apple = new Snack();
//
// console.log(cookie);
// console.log(apple);
//
// Prompt 3: Shirt
// class Shirt {
//
// }
// var buttonDown = new Shirt();
// var blouse = new Shirt();
//
// console.log(buttonDown);
// console.log(blouse);

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
// class Dog {
//   constructor() {
//     this.breedClass = "working";
//     this.weight = 50;
//     this.hypoallergenicFur = true;
//   }
// }
// var boxer = new Dog();
// console.log(boxer);


// Prompt 2: Snack
// class Snack {
// constructor() {
//   this.flavor = "sweet";
//    this.healthy = false;
//    this.glutenFree = false;
//  }
// }
//
// var chocolate = new Snack();
// console.log(chocolate);

// Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.ironed = true;
//     this.size = "large";
//     this.brand = "Gap";
//   }
// }

// var collaredShirt = new Shirt();
// console.log(collaredShirt);

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
class Dog {
  constructor(breed, weight, hypoallergenic) {
    this.breedClass = breed;
    this.weight = weight;
    this.hypoallergenicFur = hypoallergenic;
  }
}

var sheepDog = new Dog("working", 100, true);
var houndDog = new Dog("sporting", 80, false);
console.log(sheepDog);
console.log(houndDog);

// Prompt 2: Snack
class Snack {
  constructor(flavor, healthy, gluten) {
    this.flavor = flavor;
    this.healthy = healthy;
    this.glutenFree = gluten;
  }
}

var carrots = new Snack("bland", true, true);
var cheetos = new Snack("cheesy", false, false);
console.log(carrots);
console.log(cheetos);

// Prompt 3: Shirt
class Shirt {
  constructor(ironed, size, brand) {
    this.ironed = ironed;
    this.size = size;
    this.brand = brand;
  }
}

var blouse = new Shirt(false, "medium", "H&M");
var tank = new Shirt(false, "small", "gap");
console.log(blouse);
console.log(cheetos);
