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

Lines 17 through 21 are an if/else statement which determines which code to run
depending on the door selection. If the door choice is exactly 1, the variable
"bearClothing" will return as "hat". Any other selection but 1 will return as
"scarf" instead.

2. What variable has a new value assigned to it after the first if statement executes?

"bearClothing"

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

These lines are an if/else if/if statement that determines which of four
possible lines will be logged to the console. The values 1 and 2
return unique lines. Any other selection returns the fourth line. The third line
"You run as fast as you can into the next room. It's full of snakes!" will not
run as there is a (likely) error where the "bearChoice" variable has been
substituted for "bearClothing".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The outcome will be the else condition "You stay with the bear and become it's
best friend!" although the intent of the coder was likely to return the line
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I would give the bear my scarf because I don't wear scarves and I don't want to
be stuck forever with this emotionally unstable bear.

*/
