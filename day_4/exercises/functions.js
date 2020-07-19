/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName(name) {
  console.log(name);
};

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) {
    console.log(name);
};

printName("Connie Hong");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function itemsSold(necklaces, rings) {
    console.log(necklaces + rings);
};

itemsSold(7, 10);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function weGoTogether(item1, item2) {
    console.log("We go together like " + item1 + " and " + item2 + ".")
}
weGoTogether("peanut butter", "jelly");
