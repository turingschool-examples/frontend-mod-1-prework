/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 0;

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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become its best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
 If the variable doorChoice is strictly equal to 1, hat will be assigned to the bearClothing variable. If it is not,
 scarf will be assigned to the bearClothing variable.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
If the variable bearChoice is strictly equal to 1, the string starting with "You offer the bear" will be logged to the console.
If it is not strictly equal to 1 but is strictly equal to 2, the string starting with "You tell the bear" will
be logged to the console.
If it is neither strictly equal to 1 or 2 but is strictly equal to 3, the string starting with "You run as fast" will be
logged to the console.
If none of those are true, the string starting with "You stay with the bear" will be logged to the console.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
I'm a personal fan of the fourth ending, as I like bears. */
