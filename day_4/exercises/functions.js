/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  return("Nathaniel Millard");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
  return(name)
};

printName("Nathaniel Millard");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function numberSum(first, second) {
  return (first + second);
}
numberSum(2,3)

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function cookingTest(seasoning1, seasoning2) {
  return ("Add a litte " + seasoning1 + " and a little " + seasoning2 + " and you get a well seasoned dish.");
}

cookingTest("paprika", "garlic")
