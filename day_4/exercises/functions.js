/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Hanna Kim");
}

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function myName(name) {
  console.log(name);
}

myName("Hanna Kim");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(1, 2));
console.log(addNumbers(2, 3));



// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
// YOUR CODE HERE

function knockKnock(fruitOne, fruitTwo) {
  console.log(fruitOne + " you glad I didn't say " + fruitTwo);
}

knockKnock("orange", "banana");
