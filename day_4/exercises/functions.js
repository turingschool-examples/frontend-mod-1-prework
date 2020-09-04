/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
};

printName("Snivilus Snape");

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
  console.log('My name is '+ name);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function addition (number1, number2) {
  console.log(number1 + number2);
};

addition(3, 8)

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function concatenation(name1 = 'Oscar', name2 = 'Rick') {
  console.log('Did you know that '+ name1 +' and '+ name2+ ' are friends?');
};

concatenation();
