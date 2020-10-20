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
// }
// var dog1 = new Dog();
// var dog2 = new Dog();
// console.log(dog1);
// console.log(dog2);

// Prompt 2: Snack
// class Snack {
//
// }
// var snack1 = new Snack();
// var snack2 = new Snack();
// console.log(snack1);
// console.log(snack2);

// Prompt 3: Shirt
// class Shirt {
//
// }
// var shirt1 = new Shirt();
// var shirt2 = new Shirt();
// console.log(shirt1);
// console.log(shirt2);

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
//     constructor() {
//         this.size = 'large';
//         this.color = 'spotted';
//         this.gender = 'female';
//     }
// }
//
// var doggo = new Dog();
// console.log(doggo);
//
// // Prompt 2: Snack
// class Snack {
//     constructor() {
//         this.sweet = true;
//         this.salty = false;
//         this.crunchy = true;
//     }
// }
// var snekSnack = new Snack();
// console.log(snekSnack);
//
// // Prompt 3: Shirt
// class Shirt {
//     constructor() {
//         this.sleeves = 'mid-length';
//         this.color = 'purple';
//         this.warmth = 5;
//     }
// }
// var midLengthSleeve = new Shirt();
// console.log(midLengthSleeve);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the constructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
    constructor(size, color, gender) {
        this.size = size;
        this.color = color;
        this.gender = gender;
    }
}
var labradoodle = new Dog('medium', 'brown', 'male');
var mixedBreed = new Dog('medium', 'black', 'female');
console.log(labradoodle);
console.log(mixedBreed);

// Prompt 2: Snack
class Snack {
    constructor(sweet, salty, crunchy) {
        this.sweet = sweet;
        this.salty = salty;
        this.crunchy = crunchy;
    }
}
var chips = new Snack(false, true, true);
var cookies = new Snack(true, false, false);
console.log(chips);
console.log(cookies);

// Prompt 3: Shirt
class Shirt {
    constructor(sleeves, color, warmth) {
        this.sleeves = sleeves;
        this.color = color;
        this.warmth = warmth;
    }
}
var tShirt = new Shirt('short', 'black', 4);
var turtleNeck = new Shirt('long', 'pink', 8);
console.log(tShirt);
console.log(turtleNeck);
