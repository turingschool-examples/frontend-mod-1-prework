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
class ExampleDog {

};

var doggoOne = new ExampleDog();
console.log(doggoOne);

var doggoTwo = new ExampleDog();
console.log(doggoTwo);


// Prompt 2: Snack

class ExampleSnack {

}

var fruit = new ExampleSnack()
console.log(fruit);

var chips = new ExampleSnack()
console.log(chips);


// Prompt 3: Shirt

class ExampleShirt {

}

var dressShirt = new ExampleShirt()
console.log(dressShirt);

var tShirt = new ExampleShirt()
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

class DogOne {
  constructor(name, breed, age, weight, isGoodBoy) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.isGoodBoy = isGoodBoy;
  }
};

var newDog = new DogOne();
console.log(newDog);



// Prompt 2: Snack

class SnackOne {
  constructor(brand, type, calories) {
    this.brand = brand;
    this.type = type;
    this.calories = calories;
  }
};

var apple = new SnackOne();
console.log(apple);

// Prompt 3: Shirt

class ShirtOne {
  constructor(occasion, type, size) {
    this.occasion = "occasion";
    this.size = "size";
    this.price = "price";
  }
};

var tankTop = new ShirtOne();
console.log(tankTop);

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
  constructor(name, breed, age, weight, isGoodBoy) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.isGoodBoy = isGoodBoy;
  }
};

var newDog = new Dog("Pilgrim", "Siberian Husky", 7, "50lbs", true);
console.log(newDog);


// Prompt 2: Snack

class Snack {
  constructor(brand, type, calories,) {
    this.brand = brand;
    this.type = type;
    this.calories = calories;
  }
};

var apple = new Snack("local farm", "fruit", 90);
console.log(apple);
// Prompt 3: Shirt

class Shirt {
  constructor(occasion, size, price) {
    this.occasion = occasion;
    this.size = size;
    this.price = price;
  }
};

var tankTop = new Shirt("casual", "medium", "$25" );
console.log(tankTop);
