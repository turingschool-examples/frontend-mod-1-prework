/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
/*
function printName() {
  console.log("Jordy Shryock");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) { // hint.. add a parameter on this line :)
  console.log(name)
};

printName("Jordy Shryock");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function printSum(num1 , num2) {
  var sum = num1 + num2;
  console.log(sum)
}
printSum(3 , 1);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function phraseMaker(name1 , name2) {
  var newPhrase = [name1 + ' and ' + name2 + ' sitting in a tree. K I S S I N G']
  console.log(newPhrase);
}
phraseMaker('Jordy', 'Paige');
