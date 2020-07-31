/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName(villian) {
  var name = villian

  console.log(villian);
};

printName("Severous Snape");
  //console.log("Severus Snape");

// Update the function below so that it takes an argument of your name and
// prints your name

function Name(name) { // hint.. add a parameter on this line :)
  var myName = name
  console.log(name);// YOUR CODE HERE
};
Name("Eva");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function number(num1, num2) {
  var sum = num1 + num2
  console.log(sum);

};
  number(10, 18);//YOUR CODE HERE

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function People (man, woman) {
  var name1 = (man)
  var name2 = (woman)
  console.log("when" + name1 + " met " + name2 );
};
  People(" Harry "," Sally");
// YOUR CODE HERE
