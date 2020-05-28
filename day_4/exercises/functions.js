/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Demaceo Howard");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
  var name;
  console.log(name);
};

printName("Demaceo");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function getSum(num1, num2) {
  var num1;
  var num2;
  console.log(num1 + num2);
};
getSum(5, 8);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function nameConc(name1, name2) {
  var name1;
  var name2;
  console.log("When " + name1 + " Met " + name2);
};
nameConc("Harry", "Sally");
