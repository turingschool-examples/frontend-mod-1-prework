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
//class Dog {}
//var austrailianShepard = new Dog();
//var boxer = new Dog();
//console.log(austrailianShepard);
//console.log(boxer);


// Prompt 2: Snack
//class Snack {}
//var cheeto = new Snack();
//var goldfish = new Snack();

// Prompt 3: Shirt
//class Shirt {}
//var tee = new Shirt();

//console.log(polo);
//console.log(tee);

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
    this.coat = "short";
    this.temperment = "loyal";
    this.avgWeight = 70;
  }
};
var lab = new Dog2();
console.log(lab);


// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.netWeight = "goldfish";
    this.texture = "crunchy";
    this.flavor = "cheesy salty perfection";
  }
};
var goldfish = new Snack2();
console.log(goldfish);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.hasCollar = false;
    this.color = "green";
    this.material = "cotton nylon blend";
  }
};

var tee = new Shirt2();
console.log(tee);

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
  constructor(coat, temperment, avgWeight) {
    this.coat = coat;
    this.temperment = temperment;
    this.avgWeight = avgWeight;
  }
}
var austrailianShepard = new Dog3("medium-long", "energetic", 60);

console.log(austrailianShepard);
// Prompt 2: Snack
class Snack3 {
  constructor(netWeight, texture, flavor) {
    this.netWeight = netWeight;
    this.texture = texture;
    this.flavor = flavor;
  }
}
var cheetos = new Snack3(8, "crunchy", "cheesey delight");
console.log(cheetos);

// Prompt 3: Shirt
class Shirt3 {
  constructor(hasCollar, color, material) {
    this.hasCollar = hasCollar;
    this.color = color;
    this.material = material
  }
}
var polo = new Shirt3(true, "pink", "cotton blend");
console.log(polo);
