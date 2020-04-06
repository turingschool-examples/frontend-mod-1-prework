/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName(name) {
  var name = "Severus Snape";
  // console.log("Severus Snape");
  return name;
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name
/*
function printName() { // hint.. add a parameter on this line :)
  // YOUR CODE HERE
};

printName("Albus Dumbledore");*/

function printName(name){
  var name = "Orlando";
  return name;

};
printName();
//expected output: "Orlando"
// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumNumbers(num1, num2){
  var num1 = 19;
  var num2 = 88;
  var total = num1 + num2;
  return total;
console.log(num1 + num2);
};
// expected output: 107
sumNumbers();
//
function sumNumbers(total){
  var total = 1 + 2;
  return total;
}
sumNumbers();
//expected output: 3



// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function cookingInstructions(foodiItem, time){
  var foodItem = "boil potatoes";
  var time = " for 25 minutes";
  var result = foodItem + time;
  return result;
}
cookingInstructions()
