/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name

function getName() {
  console.log("Cole Fiscus");
};

getName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
  console.log(name)
};

printName("Cole Fiscus");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function getSum(num1, num2) {
  var sum = num1 + num2;
  return sum
}

console.log(getSum(21, 15));

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

var luke = "You killed my father.";
var vader = "No Luke, I am your father.";

function twist(char1, char2) {
  var dialogue = "Luke: " + char1 + " Darth Vader: " + char2;
  console.log(dialogue);
}

twist(luke, vader);
