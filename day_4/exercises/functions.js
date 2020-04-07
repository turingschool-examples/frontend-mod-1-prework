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

function printName(name) { // hint.. add a parameter on this line :)
  console.log(name);
};

printName("Nick");

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function printSum(num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
};

printSum(2, 3);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function printSentence(str1, str2) {
  var sentence = "My cat " + str1 + " likes to play with " + str2 + ".";
  console.log(sentence);
}

printSentence("Hobbes", "Toby");
