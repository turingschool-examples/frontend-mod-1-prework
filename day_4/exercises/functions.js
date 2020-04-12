/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(a) {
  console.log(a)
};

printName("Ben McClung");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function addTwo(a, b) {
  console.log( a + b );
};
addTwo(7, 12);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function shrekMeme(a, b) {
  console.log("The " + a + " has fallen in love with the " + b + "!");
};
var prince = "ogre";
var bride = "princess";
shrekMeme(prince, bride);
