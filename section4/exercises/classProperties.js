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
  constructor() {
  }
}
var newfoundland = new Dog();
var poodle = new Dog();

console.log(newfoundland);
console.log(poodle);

// This was my understanding of what to do, but I struggle to understand
// instructions sometimes. Was the constructor component necessary to the skeleton?

// Prompt 2: Snack

class Snack {
  constructor() {
  }
}
var pretzel = new Snack();
var popcorn = new Snack();

console.log(pretzel);
console.log(popcorn);

// Prompt 3: Shirt

class Shirt {
  constructor() {
  }
}
var blouse = new Shirt();
var tShirt = new Shirt();

console.log(blouse);
console.log(tShirt);

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

// I wasn't sure about naming conventions here, so I added "new" to the class.
// In the last two prompts I will change the class name just in case.

class newDog {
  constructor(size, color, careLevel) {
    this.size = size;
    this.color = color;
    this.careLevel = careLevel;
  }
}
var doodle = new newDog("medium", "various", "low");
var dalmation = new newDog("medium", "spotted (black and white)", "high");

console.log(doodle);
console.log(dalmation);

// Prompt 2: Snack
class AmericanSnack {
  constructor(price, healthy, accessibility) {
    this.price = "low";
    this.healthy = false;
    this.accessibility = "common";
  }
}
var pretzel = new AmericanSnack();
var popcorn = new AmericanSnack();

console.log(pretzel);
console.log(popcorn);

// Prompt 3: Shirt

class MensShirt {
  constructor(neckInCm, color, fit) {
    this.neckInCm = neckInCm;
    this.color = color;
    this.fit = fit;
  }
}
var newButtonUp = new MensShirt(34.5, "blue", "slim");
var newVNeck = new MensShirt("one size", "green", "athletic");

console.log(newButtonUp);
console.log(newVNeck);

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

class SmallDog {
  constructor(breed, rarity, health) {
    this.breed = breed;
    this.rarity = rarity;
    this.health = health;
  }
}

var chihuahua = new SmallDog("chihuahua", "relatively common", "generally healthy");
var pug = new SmallDog("pug", "relatively common", "unhealthy");

console.log(chihuahua);
console.log(pug);

// Prompt 2: Snack

class JapaneseSnack {
  constructor(price, rarity, healthy) {
    this.price = price;
    this.rarity = rarity;
    this.healthy = healthy;
  }
}

var nikuman = new JapaneseSnack("inexpensive", "common", false);
var yatsuhashi = new JapaneseSnack("somewhat expensive", "rare", false);

console.log(nikuman);
console.log(yatsuhashi);

// Prompt 3: Shirt

class SummerShirt {
  constructor(sleeveLength, cost, comfortLevel) {
    this.sleeveLength = sleeveLength;
    this.cost = cost;
    this.comfortLevel = comfortLevel;
  }
}

var tankTop = new SummerShirt("no sleeves", "cheap", "high");
var poloShirt = new SummerShirt("short sleeves", "expensive", "medium");

console.log(tankTop);
console.log(poloShirt);
