/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
}

printName("Severus Snape");

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(wizard) { // hint.. add a parameter on this line :)
  console.log(wizard);
}

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function getSum(numOne, numTwo) {
  console.log(numOne + numTwo);
}

getSum(3, 7);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
// YOUR CODE HERE

function footballTeam(teamOne, teamTwo) {
  console.log("The " + teamOne + " are going to crush the " + teamTwo + " both times this Year!");
}

footballTeam("Bills", "Pats");
