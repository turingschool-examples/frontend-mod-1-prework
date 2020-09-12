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

var beagle = new Dog();
var germanShepard = new Dog();

console.log(beagle);
console.log(germanShepard);

// Prompt 2: Snack

class Snack{

}

var cheetos = new Snack();
var hohos = new Snack();

console.log(cheetos);
console.log(hohos);

// Prompt 3: Shirt

class Shirt {

}

var vNeck = new Shirt();
var crewNeck = new Shirt();

console.log(vNeck);
console.log(crewNeck);

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

class Dog2 {
  constructor() {
    this.barkFrequency = "high";
    this.smallChildFriendly = "high";
    this.intelligenceLevel = "low";
  }
}

var beagle = new Dog2();

console.log(beagle);

// Prompt 2: Snack

class Snack2{
  constructor() {
    this.brand = "Frito-Lay";
    this.nutritionLevel = "low";
    this.primaryIngredient = "unknown";
  }
}

var cheetos = new Snack2();

console.log(cheetos);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.brand = "Old Navy";
    this.color = "blue";
    this. sleeveLength = "short";
  }
}

var vNeck = new Shirt2("Old Navy", "blue", "short");

console.log(vNeck);


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

class Dog3 {
  constructor(barkFrequency, smallChildFriendly, intelligenceLevel) {
    this.barkFrequency = barkFrequency;
    this.smallChildFriendly = smallChildFriendly;
    this.intelligenceLevel = intelligenceLevel;
  }
}

var beagle = new Dog3("high", "high", "low");
var germanShepard = new Dog3("low", "low", "high");

console.log(beagle);
console.log(germanShepard);

// Prompt 2: Snack

class Snack3{
  constructor(brand, nutritionLevel, primaryIngredient) {
    this.brand = brand;
    this.nutritionLevel = nutritionLevel;
    this.primaryIngredient = primaryIngredient;
  }
}

var cheetos = new Snack3("Frito-Lay", "low", "unknown");
var hohos = new Snack3("Little Debbie's", "low", "chocolate?");

console.log(cheetos);
console.log(hohos);

// Prompt 3: Shirt

class Shirt3 {
  constructor(brand, color, sleeveLength) {
    this.brand = brand;
    this.color = color;
    this. sleeveLength;
  }
}

var vNeck = new Shirt3("Old Navy", "blue", "short");
var crewNeck = new Shirt3("Abercrombie & Fitch", "white", "long");

console.log(vNeck);
console.log(crewNeck);
