/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log();
}

printName("Severus Snape");

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(wizard) {
  console.log(wizard);
}

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.


function calculateSum(num_1, num_2) {
  console.log(num_1 + num_2);
}

calculateSum(3, 7);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
// YOUR CODE HERE
function footballTeam(team_1, team_2) {
  console.log("The " + team_1 + " are going to crush the " + team_2 + " both times they play each other this year!");
}
footballTeam("Bills", "Pats");
