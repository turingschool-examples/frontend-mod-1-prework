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
var bearChoice = 1;

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
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
doorChoice uses a stict type comparison so compares equality in value and datatype. If  1st door is chosen it returns true executing the code in the if statement. If second door is chosen returns false moving to the else statement and executing.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Similar to answer 1, if 1 is chosen returns true and executes code "secret passage", if 2 is chosen the if is false no code executes on first else if executing code "too small" from here any there number will execute the else statement due to a an error on var bearClothing when it should have been bearChoice.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
else statement runs due to varible being wrong, so you get "best friends", if you corrected the variable to bearChoice you would get "full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
bears hats to small and you point it out making it cry.
7. What is your favorite ending?
door 1 so hat and 3 error becoming best friends. Even mistakes can make friends.
*/
