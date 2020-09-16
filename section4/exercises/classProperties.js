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
};

const dog1 = new Dog;
const dog2 = new Dog;
console.log(dog1);
console.log(dog2);

// Prompt 2: Snack

class Snack {
  constructor() {

  }
};

const snack1 = new Snack;
const snack2 = new Snack;
console.log(snack1);
console.log(snack2);

// Prompt 3: Shirt

class Shirt {
  constructor() {

  }
};

const shirt1 = new Shirt;
const shirt2 = new Shirt;
console.log(shirt1);
console.log(shirt2);


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

class Dog {
  constructor( breed, color, hairLength ) {
    this.breed = breed;
    this.color = color;
    this.hairLength = hairLength;
  }
};

const dog1 = new Dog('husky', 'white', 'medium');
console.log(dog1);



// Prompt 2: Snack

class Snack {
  constructor( name, cost, calories ) {
    this.name = name;
    this.cost = cost;
    this.calories = calories;
  }
};

const snack1 = new Snack( 'crackers', 3.99, 305);
console.log(snack1);


// Prompt 3: Shirt

class Shirt {
  constructor(color, material, size) {
    this.color = color;
    this.material = material;
    this.size = size;
  }
};

const shirt1 = new Shirt('yellow', 'linen', 'M');
console.log(shirt1);


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
  constructor( breed, color, hairLength ) {
    this.breed = breed;
    this.color = color;
    this.hairLength = hairLength;
  }
};

const dog1 = new Dog('dalamation', 'spotted', 'short');
const dog2 = new Dog('lab', 'brown', 'medium');
console.log(dog1);
console.log(dog2);

// Prompt 2: Snack

class Snack {
  constructor( name, cost, calories ) {
    this.name = name;
    this.cost = cost;
    this.calories = calories;
  }
};

const snack1 = new Snack( 'grapes', 1.50, 25);
const snack2 = new Snack( 'Nutter Butter', 2.99, 200);
console.log(snack1);
console.log(snack2);

// Prompt 3: Shirt

class Shirt {
  constructor(color, material, size) {
    this.color = color;
    this.material = material;
    this.size = size;
  }
};

const shirt1 = new Shirt('green', 'cotton', 'L');
const shirt2 = new Shirt('blue', 'nylon', 'S');
console.log(shirt1);
console.log(shirt2);
