/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses to evaluate different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

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
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

Lines 17-21 include an `if` statement and an `else` statement.  The `if` statement features a `condition`.  The condition is
whether or not the variable `doorChoice` is equal to 1.  If doorChoice is equal to 1 then the variable
`bearClothing` is defined as "hat".  If the doorChoice is NOT equal to 1 then the interpreter will
move to the `else` statement and the the bearClothing will be defined as "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

`bearClothing` has a new value assigned after hte first if statement.  It will either be "hat" or "scarf".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If `doorChoice` is assigned as 3, then the bearClothing will be "scarf", but 3 is not equal to 1.  Anything other than 1
will result in bearClothing changing to "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Lines 31-38 are running through various if, else if, and else statements based on the condition
(bearChoice === 1).  If bearChoice does equal 1, then console will log the first line of code and the
bear shows you a secret passage.  If bearChoice is not equal to 1, but is equal to 2, then it logs the
second line of code and the bear starts to cry.  If bearChoice is not equal to 1 or 2, but is equal to 3, then the third
code runs and you go into a room full of snakes.  Finally, if bearChoice is not equal to 1, 2, or 3
(but is any other number) it will go to the `else` statement and run the final code block ("You stay
with the bear and become it's best friend!").

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If bearChoice is 3 then "You run as fast as you can into the next room.  It is full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

With those variables, you see a bear putting on a "hat".  The hat is too small.  You tell the bear the
hat is too small and the bear begins to cry.

7. What is your favorite ending?

I like the ending about the snakes.  There's a good moral that you shouldn't make hasty decisions
when faced with uncertain situations!

*/
