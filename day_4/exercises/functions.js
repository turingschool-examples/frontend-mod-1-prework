/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

/*
//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
};

printName();
*/
// Update the function below so that it takes an argument of your name and
// prints your name


function printName(name) {
  console.log(name)
};

printName("Shawn Truesdale");


// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function findSum(num1, num2) {
  var sumNumbers = num1 + num2
  console.log(sumNumbers)
};

findSum(2, 3);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function sandwich(ing1, ing2) {
  console.log(ing1 + " and " + ing2 + " make a delicious sandwich.")
};

sandwich("Peanut Butter", "Jelly");
