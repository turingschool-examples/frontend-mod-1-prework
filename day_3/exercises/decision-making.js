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

This is a conditional 'if' statement drawing on the value of the variable 'doorChoice'. The user is
being asked between two choices on line 15, choice 1 or choice 2. According to line 11, 'doorChoice = 1'.
Since doorChoice is *exactly* 1 (an integer, not a string, important bc '==='), the first condition
(doorChoice === 1) is 'true' and the 'bearClothing' variable is set to 'hat'. If it were any other number or
letter, etc., the first condition would be false and 'bearClothing' would be set to 'scarf'.

2. What variable has a new value assigned to it after the first if statement executes?

'bearClothing'

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

This is a conditional 'else if' statement drawing on the value of the variable 'bearChoice'. The user is
presented with three choices on lines 26-28. According to line 13, 'bearChoice = 1'.
Since the statement "if (bearChoice === 1)" is 'true', then it runs the line of code below it:
"console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");, which
reads "You offer the bear your hat and the bear shows you a secret passage out!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

I believe there is a typo on line 34 (should be bearChoice not bearClothing). If it is a typo, then
the final outcome would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I always enjoy easter eggs, so I like the line that's delivered if the answer is one not presented, that is,
"You stay with the bear and become it's best friend!"

*/
