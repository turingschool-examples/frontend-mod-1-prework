/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Connie Hong");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(names) {
  var names = ["Connie Hong", "Albus Dumbledore"];
    console.log(names[0]);
};

printName("Albus Dumbledore");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function itemsSold(necklaces, rings) {
  var necklaces = 7;
  var rings = 10;
    console.log(necklaces + rings);
}
itemsSold();

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function weGoTogether(item1, item2) {
  var item1 = "peanut butter";
  var item2 = "jelly";
    console.log("We go together like " + item1 + " and " + item2 + ".")
}
weGoTogether();
