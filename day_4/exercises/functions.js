/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name

function printName() {
  var myName = ("Eric Berglund")
  console.log("Hi, my name is " + myName);
};
printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(nickName) { // hint.. add a parameter on this line :)
  var nickName = ("Berg")
  console.log("You can call me " + nickName);

};
printName();


// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

var num1 = 22
var num2 = 11

function getSum() {
  return num1 + num2;
}
console.log(getSum());


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

var goodAdvice = ("remember to wear sunscreen during the day");
var badAdvice = ("remember to wear sunscreen at night")

function chooseAdvice() {
  console.log("The choice is yours. Do you " + goodAdvice + " " + "or do you " + badAdvice + "?");
}

chooseAdvice();
