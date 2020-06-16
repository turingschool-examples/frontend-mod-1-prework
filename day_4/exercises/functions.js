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

var myName = "Chris"

function printName(nameHere) {
  console.log(nameHere);
};

printName(myName);

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

var two = 2;
var three = 3;

function addition(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

addition(two, three);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function stringMerge(uno, dos){
  console.log(uno + dos);
}
var won = "We're off to "
var too = "Neverneverland!"

stringMerge(won, too);
