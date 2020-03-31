/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log('Aaron Burris-DeBoskey');
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
  console.log(name);
};

printName('Aaron Burris-DeBoskey');

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(20, 4);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function paradox(thing1, thing2) {
  console.log('There\'s nothing quite as perplexing as the paradox of the ' +
  thing1 + ' and the ' + thing2 + '.');
}

paradox('chicken', 'egg');
