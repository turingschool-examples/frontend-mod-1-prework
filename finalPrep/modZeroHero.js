// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "The Cleric";
var specialAbility = "Healing Touch";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = heroName + " will not let you fall.";
var catchphrase = "All you need is a " + specialAbility + ".";

// Declare two variables - power AND energy - set to integers

var power = 50;
var energy = 125;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = 25000;
var fullEnergy = 275;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Dr. Siphon", "Venena", "Mr. Greed"];
var sidekicks = ["Kid Confusion", "Cypher", "Miss Melody"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Captain Eviscerate");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();
sidekicks.push("Drummer Boy");

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  var dangerLevel = 51;
  var saveTheDay = "Wow, I didn't know healers could get recognition!";
  var badExcuse = "You know, I'm kind of low on potassium today, so...";

      if (dangerLevel > 50) {
      console.log(badExcuse);
    } else if (dangerLevel <= 50 && dangerLevel > 10) {
      console.log(saveTheDay);
    } else if (dangerLevel <= 10) {
      console.log("Meh. Hard pass.");
    }
}
assessSituation();

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases (???)
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Muckman",
  smell: "putrid",
  weight: 400,
  citiesDestroyed: ["Los Angeles, California", "Lincoln, Nebraska", "Anchorage, Alaska"],
  luckyNumbers: [7, 26, 46853],
  address: {
    number: 2287,
    street: "Villainy Way",
    state: "Colorado",
    zip: 80120,
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = (this.powerLevel * 5);
  }

}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var theHumanPretzel = new SuperHero("The Human Pretzel", "Super twistiness", "Sgt. Stick", 100, 50);
theHumanPretzel.sayName();
var drDork = new SuperHero("Dr. Dork", "Knows too much about everything", "Captain Condescension", 100, 50);

drDork.sayName();
drDork.maximizeEnergy();
console.log(drDork); // checking method - success!
console.log(theHumanPretzel); // comparing just in case - success!

theHumanPretzel.gainPower();
console.log(theHumanPretzel); // success! Noice.

// Reflection
// What parts were most difficult about this exerise?
  // After the situation last week, it honestly felt like all my practice went out the window.
  // Y'all weren't kidding about needing to work at it even if you feel confident.
  // I'm definitely revisiting my notes and elaborating on them after this is submitted.

// What parts felt most comfortable to you?
  // I feel comfortable with class instances, dynamic values, and logic operators!

// What skills do you need to continue to practice before starting Mod 1?
  // I need to have a chat with my good old friend Distractibility. We go way back.
  // He's a really interesting guy, but he's not great at listening.
  // I think I might buy him some highlighters. For some reason those really get him into gear.
