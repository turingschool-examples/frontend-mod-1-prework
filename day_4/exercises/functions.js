/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Sarah Osgood");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(Sarah, Osgood) {
  console.log("Sarah Osgood")
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function calculateVolume(width, height, length) {
  var volume = width * height * length;
  return volume;
};

var volume = calculateVolume(3, 4, 3);

console.log(volume);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

//I am struggling with this one. Will come back later - 6/6/2020
function makeDrink(hotWater, favMug) {
    console.log("Tea is my favorite drink.");
}

makeDrink();
