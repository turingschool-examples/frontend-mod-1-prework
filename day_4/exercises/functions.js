/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
}

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(firstName, lastName) {
  console.log(firstName + " " + lastName)
};

printName("Alyssa", "Bull");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function simpleSum (num1, num2) {
  console.log (num1 + num2);
}

simpleSum (3, 8)

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function dreamVacation (destination1, destination2){
  console.log ("For my next vacation, I would love to go to " +destination1 + " or " + destination2 + "!")
}

dreamVacation ("Hawaii", "Italy")
