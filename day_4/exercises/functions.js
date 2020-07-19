/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/
/*
//example: Write a function below that, when called will print your name
function printName() {
  console.log("Max B");
};

printName();
*/
// Update the function below so that it takes an argument of your name and
// prints your name

function printName() { // hint.. add a parameter on this line :)
  console.log("Max B")
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function addNumbers() {
  console.log(1+2)
}
addNumbers()
// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function storyTime(){
  console.log("When " + nameOne + " Met " + nameTwo)
}
var nameOne = "Bob"

var nameTwo = "Lisa"

storyTime()
