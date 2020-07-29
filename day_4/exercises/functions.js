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

function printMyName() {
  console.log("Aaron Townsend");
};

printMyName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
var firstNumber = 17;
var secondNumber = 33;
function addition() {
  console.log(firstNumber + secondNumber);
  console.log("The sum of 17 and 33 = " + (firstNumber + secondNumber));
};
addition();
// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
var know = "I want to know you, ";
var see = "I want to see, ";
var say = "I want to say hello";
function treesChorus() {
  console.log(know + see + say);
};
treesChorus();
