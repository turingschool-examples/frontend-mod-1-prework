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

function printName() {
  console.log("Brigette Doelp")
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function add(one, two) {
  return one + two;
}
add (6, 7)

//literally spent a half hour on this and overcomplicated the poop outta it till i
//remembered i'm literally only adding step back you're not splitting the atom AAAAAHHH nailed it.


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function mollySolverson(fargoOne, fargoTwo) {
  var fargoOne = "All that";
  var fargoTwo = "for a little bit of money";
  console.log(fargoOne.concat(" ", fargoTwo));
}

mollySolverson (fargoOne, fargoTwo)
