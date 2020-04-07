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

The code between lines 17 and 21 is the first if/else statement. It's making a decision based on the user's input -
if the user assigns the value 1 to the variable doorChoice, then the variable bearClothing is declared with the value
of "hat". If the user assigns any other value to doorChoice, the variable bearClothing is declared with a value of "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

This is another if/else statement. It has a list of options, with specific scenarios for variable assignments of 1, 2, 3,
and then another scenario for any other input. It works through each option in the statement to see where the value of the
variable matches, and then performs whatever actions are specified inside after the corresponding if statement. If the variable
value doesn't match either 1, 2, or 3, then the script performs whatever's specified inside of the final else statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If you assign a value of 3 to the variable bearChoice, you end up running into a room full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I'm torn between being the bear's best friend and finding the secret escape tunnel. On one hand, having a bear as a best friend
would be pretty cool. On the other, I don't want to be stuck down there forever, and secret tunnels are pretty sweet.
*/
