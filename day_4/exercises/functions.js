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
  console.log(myName);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function calculateSum (num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
};
calculateSum (2, 3);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function favoriteAnimals (animal1, animal2) {
  var message = "My favorite animals are " + animal1 + " and " + animal2 + "!";
  console.log(message);
};
favoriteAnimals("whales", "birds");
