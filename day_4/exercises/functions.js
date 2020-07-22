/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
//MY CODE

var name1 = "Bryce Jarrett"
function myName() {
  console.log(name1);
};

myName();

//
// Update the function below so that it takes an argument of your name and
// prints your name
function printName() {console.log(name1);
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
var num1 = 3
var num2 = 4

function square() {
  console.log(num1 + num2)
}

square();


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
var string1 = "Bryce"
var string2 = "Piper"

function sisters() {
  console.log(string1 + " and " + string2 + " are sisters!");
}

sisters();
