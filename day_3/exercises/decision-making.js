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
In line 17, there is an if/else statement. The first condition specifies what happens if the user keeps the variables
doorChoice at 1 and the next line has the code block that would run. On line 19, the else part of the if/else statement
is specified. If the user chooses changes the doorChoice variable from 1, the block of code on line 20 will run instead
of the block of code on line 18.

2. What variable has a new value assigned to it after the first if statement executes?
the var bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
the bearClothing value would be scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
If the user uses 1 for the variable bearChoice, the block of code on line 31 will run. If the user selects 2 for the
variable bearChoice, the block of code on line 33 will run. If the user selects 3 for the variable bearChoice, the
block of code on line 35 will run. If the user doesn't make a number choice between 1-3, the final else statement will
be selected and the code on line 37 will run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be the user running into a room full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The bear would have a hat and the user would tell the bear that the hat is too small and make the bear cry.

7. What is your favorite ending?
You become best friends with the bear.
*/
