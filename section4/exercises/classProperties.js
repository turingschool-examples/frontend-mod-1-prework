/*
In the exercise below, write your own code where indicated
to achieve the desired result.

node section4/exercises/classProperties.js

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

var aussie = new Dog();
console.log(aussie);
var golden = new Dog();
console.log(golden);


// Prompt 2: Snack

class Snack {
}
var takis = new Snack();
console.log(takis);
var avocado = new Snack();
console.log(avocado);

// Prompt 3: Shirt

class Shirt {
}

var plainWhiteT = new Shirt();
console.log(plainWhiteT);
var birdsArentRealShirt = new Shirt();
console.log(birdsArentRealShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dogs

class Dogs {
  constructor() {
    this.coat = 'merle';
    this.age = 6;
    this.disposition = 'kind of bitey';
  }
}

var anotherDog = new Dogs();
console.log(anotherDog);

// Prompt 2: Snack

class Snacks {
  constructor() {
    this.brand = 'lays';
    this.texture = 'crunchy';
    this.type = 'Chip';
  }
}

var snack2 = new Snacks();
console.log(snack2);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.size = 'm';
    this.color = 'green';
    this.cut = 'loose';
  }
}

var vneck = new Shirt2();
console.log(vneck);

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

class Doggy{
  constructor(age, disposition, likes) {
    this.age = age;
    this.disposition = disposition;
    this.likes = likes;
  }
}

var myAussie = new Doggy(5, 'spazz', 'ground scores');
console.log(myAussie);

var myOldAussie = new Doggy(12, 'best dog in the world', 'scritches');
console.log(myOldAussie);

// Prompt 2: Snack

class Snack3 {
  constructor(type, amountCalories, brand) {
    this.type = type;
    this.amountCalories = amountCalories;
    this.brand = brand;
  }
}

var takis = new Snack3('crunchy!', 140, 'en fuego!');
console.log(takis);

var avocado = new Snack3('fruit', '200', 'haas');
console.log(avocado);


// Prompt 3: Shirt

class Shirt3 {
  constructor (size, color, cut) {
    this.size = size;
    this.color = color;
    this.cut = cut;
  }
}

var gratefulDeadShirt = new Shirt3('xl', 'tyedied', 'huge');
console.log(gratefulDeadShirt);

var vneck = new Shirt3('m', 'blue', 'fit');
console.log(vneck);

//Working model
