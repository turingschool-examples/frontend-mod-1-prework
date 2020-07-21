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

function printName(myName) { // hint.. add a parameter on this line :)
  console.log("print my name instead: " + myName);
};

printName("Allison Dietz");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function calculateSum (firstNum, secondNum) {
  var someSum = firstNum + secondNum;
  console.log("The total sum is " + someSum);
};

calculateSum(3, 12);

// Why isn't this working?? Figure out why avocado calculation below isn't letting me pass those variables ***RUBBER DUCKING MOMENT***

var overRipe = 2;
var underRipe = 3;
console.log(overRipe + underRipe);

function calculateAvocados() {
  var totalAvocados = overRipe + underRipe ;
  console.log(overRipe + underRipe);
  console.log( `I have ${totalAvocados} avocados.`) ;
};

calculateAvocados();

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function combineText() {
  var fullText = string1 + string2;
  console.log(fullText);
};

string1 = "I hope that we'll meet again in a world of peace";
string2 = "and freedom in the taxi cab if the accident will.";
combineText();
