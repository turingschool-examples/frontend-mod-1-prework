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

function printName(myName) { // hint.. add a parameter on this line :)
  return myName
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function math (number1, number2) {
  return number1 + number2
}
math(36,78)
// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function rockStars(name1, name2) {
  return "Chad couldn't believe it when he met" +name1+ ", until he met" +name2+
}
rockStars("Eddie Van Halen","Jimi Hendrix")
