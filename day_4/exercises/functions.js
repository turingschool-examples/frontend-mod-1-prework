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

function printName(yourName) { // added the parameter of yourName
  return yourName
};

printName("John Jacob Jingleheimer Schmidt");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function math(number1, number2) {
  return number1 + number2
}

math(2,64);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.


function outlaws(name1, name2){
  return  "Wile e " + name1 + " the kid & Razor Spurs " + name2 + " the Fearless"
}
​
 outlaws("Mike", "Grace");

 // This will print  "Wile e Mike the kid & Razor Spurs Grace the Fearless"
