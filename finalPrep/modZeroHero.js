// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Batman";
var specialAbility = "wealthy";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "I'm " + heroName;
var catchphrase = `${greeting} and I'm ${specialAbility}.`;

// Declare two variables - power AND energy - set to integers

var power = 1000;
var energy = 512;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 1000;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["bills", "deadlines", "commitments"]
var sidekicks = ["kindness", "freedom", "independent thinking"]

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("rules");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

//I'm assuming you meant, "to ensure you removed the first sidekick"?
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

// var badExcuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// var saveTheDay = 'Never fear, the Courageous Curly Bracket is here!';

function assessSituation(dangerLevel, badExcuse, saveTheDay) {
  var badExcuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
  var saveTheDay = 'Never fear, the Courageous Curly Bracket is here!';
  if (dangerLevel < 50 && dangerLevel >10) {
    console.log(saveTheDay);
  } else if (dangerLevel > 50) {
    console.log(badExcuse);
  } else {
    console.log("Meh. Hard pass.");
  }
}


//Test Cases

//var announcement = 'Never fear, the Courageous Curly Bracket is here!';
//var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

/*
I'm not sure why the names of the variables "bad excuse" and "saveTheDay" were changed to "announcement" and "excuse".
I kept the original variable names requested in the previous question,
and re-assigned them with the values you mention in the "test cases" section.
*/

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99);
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21);
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Hedgefundman",
  smell: "Like Money",
  weight: 180,
  citiesDestroyed: ["NYC", "San Francisco", "Chicago"],
  luckyNumbers: ["666", "13"],
  address: {
    number: "123",
    street: "Wall Street",
    state: "NY",
    zip: "10005"
  }
}

console.log(scaryMonster);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  };

  sayName(name) {
    console.log(name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(morePower) {
    this.powerLevel = 100 + morePower;
  }
};

var batman = new SuperHero("Bruce Wayne", "Wealth", "35");

batman.sayName("I'm Batman");
batman.maximizeEnergy();
batman.gainPower(150);
console.log(batman);

var thor = new SuperHero("Thor", "Humor/Strength","Unknown");
thor.sayName("I'm Thor of Asgard");
thor.maximizeEnergy();
thor.gainPower(10000000);
console.log(thor);



// Reflection
// What parts were most difficult about this exerise?

/*
The first thing I had trouble with was remembering that interpolations need `backticks`.
That was driving me crazy.

The more serious issue for me is, connecting the realtionships between
all the different techniques and methods we have learned. If there is a singular
situation that calls for declaring a function, I can do it.
But as soon as I have declare a function that can do more than one thing,
with more than one variable and different data types, I'm lost.
Especially if we were only given an exmample with something using only one variable
or one data type.

I obviously need to get a deeper understanding of the data paths, and fundamentals of Javascrit basics sooner than later.
*/

// What parts felt most comfortable to you?

//Declaring Objects, Variables, Classes (getting dynamic methods to work on object instances is a srtuggle for me)

// What skills do you need to continue to practice before starting Mod 1?

//Looks like a review of everything!
