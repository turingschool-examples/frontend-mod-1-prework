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

function printName(Stacy, Potten) {
  console.log("Stacy Potten");
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function calculateSum(number1, number2) {
  return number1 + number2;
};
  var sum = calculateSum(50, 45)
  console.log(sum);

calculateSum();

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function snacks(carb, dip) {};
var carb = "chips";
var dip = "salsa";
console.log("I like to snack on " + carb + " and " + dip);

snacks();
