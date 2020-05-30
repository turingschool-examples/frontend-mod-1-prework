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
var myName = "Dennis Clark"

function printName2(name) {
console.log(name);
};

printName2(myName);

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.


function add(num1, num2) {
  sum = (num1 + num2);
  console.log(sum);
}

add(5, 7);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function concat(dial1, dial2) {
  return(dial1 + dial2);
}
var hobbit1 = "Sam joined "
var hobbit2 = "Frodo on his journey."

console.log (concat(hobbit1, hobbit2));
