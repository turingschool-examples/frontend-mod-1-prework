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
var bearChoice = 2;

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

This is an if...else statement. If the doorChoice condition evaluates to True then bearClothing
will return "hat." If the doorChoice condition evaluates as false then bearClothing will return "scarf."

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

This is an else if statement. If the first condition set evaluates as true, then the first message
will be returned. If it evaluates as false then the second condition will be evaluated. If true,
that message will be returned, otherwise the third condition will be evaluated and that message will
be returned if true. If none are true, then the fourth message will be returned.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

As it is written, line 34 of code is `else if (bearClothing === 3)`, which would make the answer to this
question "You stay with the bear and become it's best friend!" However, I believe that line was meant to be
`else if (bearChoice === 3)`, thus the answer should be "You run as fast as you can into the next room.
It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

"You run as fast as you can into the next room. It's full of snakes!"
*/
