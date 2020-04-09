/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearClothing === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become its best friend!");
}

//
//Reflection Questions
//1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
//The program is setting up two possible outcomes using an if else conditional. we assign two possibile bearClothing outcomes with =.

//2. What variable has a new value assigned to it after the first if statement executes?
//We declared bearClothing as a variable above, after the first if statement executes, bearClothing is assigned one of two possible new values.

//3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//Because we used the === operator on line 17, any value which does not exactly equal 1 will assign "scarf" as the bearClothing value.

//4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
//We have an if else if convention which tells the program what to log on the console depending upon the value entered for bearChoice.

//5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//I would have expected the variable in line 34 to be bearChoice rather than bearClothing, but assuming it should be bearClothing, then if we changed the bearChoice
//variable to equal 3, then we stay with the bear and become its best friend.

//6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//we would make the bear cry!
//7. What is your favorite ending?
 //we should be kind to our animal friends; it's choice number 1.
