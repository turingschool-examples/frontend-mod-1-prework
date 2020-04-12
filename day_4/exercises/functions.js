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

function printName() {
  console.log("Chad Dickerson");
}
printName()
Chad Dickerson
// Update the function below so that it takes an argument of your name and
// prints your name

function printName(firstName, lastName) { // hint.. add a parameter on this line :)
return firstName + lastName;
}
printName("Chad ", "Dickerson");
Chad Dickerson


// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function sumNumbers(num1, num2) {
  return num1 + num2;
}
num1 = 3;
num2 = 5;
sumNumbers(num1, num2);
8
// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function concantIt(princess, animalGroup) {
  console.log(princess " was so beside herself with chores that she called a " + animalGroup + " to help her complete them.");
}
princess = "Snow White";
animalGroup = "flock of birds";
concantIt(princess, animalGroup);
Snow White was so beside herself with chores that she called a flock of birds to help her complete them.
