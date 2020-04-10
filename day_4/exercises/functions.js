/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
var myName = "Nicole Latifi"

function printName1() {
  console.log("My name is " + myName);
}

printName1();

//Or

function printName2() {
  console.log("Nicole");
}

printName2();

//Or

function printName3() {
  var myName = "Nicole L";
  console.log(myName)
}

printName3();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName4(firstName, lastName) {
  var firstName = "Nicole";
  var lastName = "Latifi";
  console.log(firstName + lastName)
};

printName4();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumTwoNumbers(firstNumber, secondNumber) {
  var firstNumber = 2;
  var secondNumber = 5;
  console.log(firstNumber + secondNumber)
};

sumTwoNumbers();

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function cocktailGenerator(alcohol, mixer) {
  var alcohol = "rum";
  var mixer = "coke";
  console.log("I'll have a " + alcohol + " and " + mixer + ", please!")
};

cocktailGenerator();
