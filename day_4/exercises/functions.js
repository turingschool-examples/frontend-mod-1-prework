/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/
/*
//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
};

printName();
*/
// Update the function below so that it takes an argument of your name and
// prints your name

/*
function printName(myName) { // hint.. add a parameter on this line :)
  var myName = "Albus Dumbledore"
  console.log(myName);
};

printName();
*/

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

/*
function getSum(numberOne, numberTwo) {
  var Sum = numberOne + numberTwo;
  console.log(Sum);
};

getSum(5, 8);
*/


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
// YOUR CODE HERE

function getCast(Harry, Sally) {
  var cast = "Those roles were played by " + Harry + " and " + Sally + ".";
  console.log(cast);
};

getCast("Billy Crystal", "Meg Ryan");
