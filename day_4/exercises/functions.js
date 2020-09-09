/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printNameEx() {
  console.log("Severus Snape");
};

printNameEx();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) { // hint.. add a parameter on this line :)
  console.log(name);
};

printName("Chris Spohn");

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumFunction (num1, num2) {
  return console.log(num1 + num2);
};

sumFunction(16,161);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function concat (string1, string2) {
  console.log("Wow, it's crazy how much " + string1 + " is learning at " + string2 + "!");
};

concat("Chris", "Turing");
