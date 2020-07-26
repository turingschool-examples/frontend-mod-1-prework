/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name

function printName() {
  console.log("Lola Dolinsky");
};
printName();

// printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printMyName(myName) {
  return myName;
};

printMyName("Lola Dolinsky");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumNum(a, b) {
  var sum = a + b
  return sum
};

sumNum(1, 2);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function wordPlay(a, b) {
  var sentence = a + " makes" + b
  return sentence
};

wordPlay("A million errors", " millionaires" );
