/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Patrick Findley");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(first, last) {
  var first = "Patrick "
  var last = "Findley"
  return first + last
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
var tacos = 3
var burritos = 1

function foodEaten() {
return tacos + burritos;
};

foodEaten(tacos, burritos);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
var eMail = "patfindley@gmail.com"
var phone = "215-620-8777"

function verifyContact(eMail, phone) {
  return "You've listed " + eMail + " as your e-mail address and " + phone + " as your main phone number, is this correct?"
};

verifyContact(eMail, phone);
