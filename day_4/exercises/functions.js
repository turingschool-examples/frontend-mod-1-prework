/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
/*function printName() {
  console.log("Severus Snape");
};

printName();*/

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(functionName) { // hint.. add a parameter on this line :)
  console.log(functionName)
};

printName("Kevin Hartmann");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
//YOUR CODE HERE

function getSum(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber)
};

getSum(12, 11);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function printSentence(nameOne, nameTwo){
  console.log(nameOne + " and " + nameTwo + " " + "went on vaction to London!")
};

printSentence("Kevin", "Marian");
