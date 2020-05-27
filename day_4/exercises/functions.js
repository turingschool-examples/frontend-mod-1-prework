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
function printName(name) {
  console.log(name);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function getSum(num1, num2) {
  return num1 + num2;
}

console.log(getSum(5, 8));

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function sports() {
  var sport1 = "football"
  var sport2 = "soccer"
  return console.log(sport2 + " is known as " + sport1 + " in the US");
}

sports();
