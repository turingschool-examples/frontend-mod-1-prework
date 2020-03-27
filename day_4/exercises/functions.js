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

function printName(getName) { // hint.. add a parameter on this line :)
  var getName = 'Joshua Sevy';
  console.log(getName);
};

printName();
//Here is another way to execute this function

function printName(getName) {
  var getName = [firstName , lastName];
  console.log(getName[0] + " " + getName[1]);
};
var firstName = 'Joshua';
var lastName = 'Sevy';
printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function sumCalc(sum) {
  var sum = num1 + num2;
  return sum;
};
var num1= 24;
var num2 = 36;
sumCalc();
// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function printString(love) {
  var love = [father , son];
  console.log(love[1] + love[0]);
};
var father = 'Luke, I am your FATHER, just kidding. I\'m Darth.';
var son = 'Hi, I\'m Luke, and you are ? ' ;
printString();
