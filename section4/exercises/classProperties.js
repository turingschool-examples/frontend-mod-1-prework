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
class Dog1 {

};
var scooby = new Dog1;
var wishBone = new Dog1;

console.log(scooby);
console.log(wishBone);
// Prompt 2: Snack
class Snack1 {

};
var laysPotatoChips = new Snack1;
var babyCarrots = new Snack1;

console.log(laysPotatoChips);
console.log(babyCarrots);
// Prompt 3: Shirt
class Shirt1 {

};
var buttonUp = new Shirt1;
var deepV = new Shirt1;

console.log(buttonUp);
console.log(deepV);
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
  constructor(breed , age , temperament) {
    this.breed = breed;
    this.age = age;
    this.temperament = temperament;
  };
};
var scoobyDoo = new Dog("Great Dane" , 7 , "Timid")
console.log(scoobyDoo);

// Prompt 2: Snack
class Snack {
  constructor(type , cal , ounce) {
    this.type = type;
    this.calorieCount = cal;
    this.netWeightOz = ounce;
  };
};
var skittles = new Snack ("candy" , 250 , 2.17)
console.log(skittles);

// Prompt 3: Shirt
class Shirt {
  constructor(sleeve , button , material) {
    this.sleeveStyle = sleeve;
    this.buttonType = button;
    this.material = material;
  };
};
var bonobosUnbuttonDown = new Shirt ("Full sleeve" , "Button Up" , "Wool")
console.log(bonobosUnbuttonDown);
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
class DogBreed {
  constructor(size , coat , use) {
    this.breedSize = size;
    this.coatType = coat;
    this.breedUsage = use;
  };
};
var pembrokeWelshCorgi = new DogBreed ("Small" , "Sleek" , "Cattle Herding")
var shibaInu = new DogBreed ("Medium" , "Short" , "Hunting");
var saintBernard = new DogBreed ('Extra Large' , 'Shaggy' , 'Working')

console.log(pembrokeWelshCorgi);
console.log(shibaInu);
console.log(saintBernard);

// Prompt 2: Snack
class SnackFood {
  constructor(type , calories , size) {
    this.snackType = type;
    this.calorieCount = calories;
    this.servingSizeGrams = size;
  };
};
var carrotSticks = new SnackFood ("Vegetable" , 41 , 100)
var kettleChips = new SnackFood ("Fried Chips" , 150 , 28)
var candyCorn = new SnackFood ("Candy" , 110 , 31)

console.log(carrotSticks);
console.log(kettleChips);
console.log(candyCorn);

// Prompt 3: Shirt
class TeeShirt {
  constructor(material , fit , graphic , make) {
    this.shirtMaterial = material;
    this.shirtFit = fit;
    this.graphicPrint = graphic;
    this.manufacturer = make;
  } ;
};
var lyndaleVNeck = new TeeShirt ("Cotton Blend" , "Standard" , "None" , "Target");
var electricJellyfish = new TeeShirt ("100% Cotton" , "Fitted" , "Jellyfish" , "Threadless");
var bombasCrewNeck = new TeeShirt ("Merino Wool and Tencel" , "Standard" , "None" , "Bombas" );
console.log(lyndaleVNeck);
console.log(electricJellyfish);
console.log(bombasCrewNeck);
