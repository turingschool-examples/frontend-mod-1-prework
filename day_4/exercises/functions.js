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


function printName(Elle) { // hint.. add a parameter on this line :)
  console.log(Elle);
};

printName("Albus Dumbledore");


// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumMath(A,B) {
  console.log(A+B);
};
sumMath(6,24)

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function sentance(E,T) {
  console.log(E +" and " + T +" is a perfect combo");
};
sentance("ocean","summer")
