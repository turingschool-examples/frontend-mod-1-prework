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
var blackLab = new Dog();
var goldenRetriever = new Dog();

console.log(blackLab)
console.log(goldenRetriever)


// Prompt 2: Snack
class Snack {

}
var snickers = new Snack();
var twix = new Snack();

console.log(snickers)
console.log(twix)


// Prompt 3: Shirt
class Shirt {

}
var longSleeve = new Shirt();
var shortSleeve = new Shirt();

console.log(longSleeve)
console.log(shortSleeve)

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
    this.age = 10;
    this.breed = "Great Dane";
    this.name = "Duke";
  }
}

var dog1 = new Dog();
console.log(dog1)

// Prompt 2: Snack
class Snack {
  constructor(){
    this.type = "chocolate";
    this.price = 4;
    this.quantity = 1;
  }
}

var snack1 = new Snack();
console.log(snack1)
// Prompt 3: Shirt

class Shirt {
  constructor(){
    this.price = 22;
    this.brand = "Nike";
    this.size = "M";
  }
}

var shirt1 = new Shirt();
console.log(shirt1)

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
  constructor(age, breed, name) {
    this.age = age;
    this.breed = breed;
    this.name = name;
  }
}

var dog2 = new Dog(7, "Black Lab", "Jimmy");
var dog3 = new Dog(8, "Godlen Retriever", "Billy");

console.log(dog2)
console.log(dog3)



// Prompt 2: Snack
class Snack {
  constructor(type, price, quantity){
    this.type = type;
    this.price = price;
    this.quantity = quantity;
  }
}

var snack2 = new Snack("twix", 2.50, 2);
var snack3 = new Snack("skittles", 3.50, 100);

console.log(snack2)
console.log(snack3)

// Prompt 3: Shirt
class Shirt {
  constructor(price, brand, size){
    this.price = price;
    this.brand = brand;
    this.size = size;
  }
}

var shirt2 = (25, "Volcom", "L");
var shirt3 = (20, "Express", "L");

console.log(shirt2)
console.log(shirt3)
