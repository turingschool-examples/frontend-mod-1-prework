/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printNames() {
  console.log("Severus Snape");
}

printNames();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) { // hint.. add a parameter on this line :)
  console.log(name);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function numberSum(num1, num2){
  console.log(num1 + num2);
}

numberSum(22, 24);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function combineString(string1, string2){
  console.log(string1 + " and " + string2 + " Are going to have a great day!")
}

combineString("BoB", "Ross");
