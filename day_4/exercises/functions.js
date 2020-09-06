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
//prints your name

function printName() {
  console.log("Brian Andrew Forbes")
};

printName()

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function addNum(num1, num2) {
  var num1 = 2
  var num2 = 4
  console.log(num1 + num2);
}
//YOUR CODE HERE

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function bestFriendsClub(myCharacter, bestFriend1, bestFriend2, bestFriend3, bestFriend4) {
  var myCharacter = "Villithrax"
  var bestFriend1 = "Hoggle"
  var bestFriend2 = "Fetch"
  var bestFriend3 = "Noam"
  var bestFriend4 = "Spliffers"
  console.log(myCharacter + ", " + bestFriend1 + ", " + bestFriend2 + ", " + bestFriend3 + " and " + bestFriend4 + " are all members of the Best Friends Club.")
}

bestFriendsClub()

//For context, the variables listed above are all names of D&D characters in my weekly game, and Best Friends Club is the name of our adventuring party.
// YOUR CODE HERE
