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
    console.log(name);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function getSum(number1, number2) {
  console.log(number1 + number2);
};

getSum(3,2);
//expected output: 5

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function concatenateString(man, woman) {
  console.log("When " + man + " met " + woman)
};

concatenateString("Harry", "Sally");

function concatenatePractice(color, object){
  console.log ("The " + color + " dog jumped over the " + object);
};

concatenatePractice("brown", "fence");
// expected output: The brown dog jumped over the fence
