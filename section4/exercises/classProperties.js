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

var goldenRetriever = new Dog();
console.log(goldenRetriever);
var pug = new Dog();
console.log(pug);


// Prompt 2: Snack
class Snack {

}

var doritos = new Snack();
console.log(doritos);
var secretFamilyMix = new Snack();
console.log(secretFamilyMix);

// Prompt 3: Shirt
class Shirt {

}

var blackTankTop = new Shirt();
console.log(blackTankTop);
var whiteTankTop = new Shirt();
console.log(whiteTankTop);
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
  constructor() {
    this.color = 'black';
    this.age = 6;
    this.personality = 'playful';
  }
}

var randomDog = new Dog();
console.log(randomDog);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.flavor = 'umami';
    this.container = 'bag';
    this.brand = 'something unknown';
  }
}

var maybeTastySnack = new Snack();
console.log(maybeTastySnack);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.type = 'tank-top';
    this.color = 'black';
    this.comfort = 'high';
  }
}

var tank = new Shirt();
console.log(tank);

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
  constructor(color, age, personality) {
    this.color = color;
    this.age = age;
    this.personality = personality;
  }
}

var youngDog = new Dog('golden', 1, 'hyper');
console.log(youngDog);

var otherDog = new Dog('black', 7, 'calm');
console.log(otherDog);

// Prompt 2: Snack
class Snack {
  constructor(flvr, cntnr, brand) {
    this.flavor = flvr;
    this.container = cntnr;
    this.brand = brand;
  }
}

var secretFamilyMix = new Snack('all da tasty flavors', 'large tupperware', 'N/A');
console.log(secretFamilyMix);

var peanuts = new Snack('salty', 'plastic bottle', 'I don\'t remember');
console.log(peanuts);

// Prompt 3: Shirt
class Shirt {
  constructor (type, color, comfort) {
    this.type = type;
    this.color = color;
    this.comfort = comfort;
  }
}

var blackTank = new Shirt('tank-top', 'black', 'high');
console.log(blackTank);

var whiteTank = new Shirt('tank-top', 'white', 'high');
console.log(whiteTank);
