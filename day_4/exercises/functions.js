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

function printName(name) {
  console.log(name);
};

printName("Dingus Magoo");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sum(num1, num2){
  console.log(num1 + num2);
};

sum(215, 323);
// should log 538

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function bestFriendsForever(friend1, friend2){
  console.log(friend1 + " and " + friend2 + " are BFFS")
};

bestFriendsForever("Oscar", "Ruck");