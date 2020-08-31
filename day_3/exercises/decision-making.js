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

You are answering the string logged in line 15, "You enter a dark room with two doors. Do you go through #1 or #2?"
Line 17 is has the keyword `if` setting the condition that if the user inputs STRICTLY 1. The bear will wear a hat.
The `===` is saying the input **must be** 1. Not "#1, `1` (as a string),"
Line 19 states that any other input would be false, in return "scarf" will be logged.

2. What variable has a new value assigned to it after the first if statement executes?

'bearClothing'

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The bearClothing value would return false, as `3 === 1` would return as a false statement.
It would continue to look to the `else` condition and log `bearClothing` as `scarf`.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

There are 4 conditional statements being presented, if user imput is strictly `1` the code to execute is...
line 31 - "You offer the bear you **hat** and the bear shows you a secret passage out!"
`else if` user input is strictly `2`, the if statement returns false... the code continues to look for an `else` and finds the to execute is line 33 - "you tell the bear the hat is too small and it starts to cry!"
If the user inputs strictly `3`, the conditional statments on lines 30 & 32 return false, making line 34 conditional statment true.
Return log will say "You run as fast as you can into the next room. It's full of snakes!"
Lastly, if anything else (literally anything else) is inputted. All conditional statements above return false.
`console.log` on line 37 will run. "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Look above at line 34, its says `else if (bearClothing === 3)`, I believe if you changed
`var bearChoice` to `3` (on the current code) it would use the last conditional statment on
line 36.
If you were to change line 34 to `else if (bearChoice === 3)`, the code to execute would be
on line 34/35. "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You would make the bear CRY!

7. What is your favorite ending?
I like "You offer the bear your hat and the bear shows you a secret passage way"!
There nothing better than a story that shows when you are kind and generous to people (or bears), it all works out in the end!
*/
