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

function printName(name) { // hint.. add a parameter on this line :)
  return "My name is " + name;
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function calculateSum(num1, num2) {
  return num1 + num2;
}

calculateSum(10, 7);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function makeSentence(name1, name2) {
  return "Have you talked to " + name1 + " or " + name2 + " about their plans for this weekend?";
}

makeSentence("Ashley", "Stacy");
