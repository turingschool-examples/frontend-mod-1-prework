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

beginning on line 17 is an "if else" statement. If the door chosen is the door #1, then the value of doorChoice will be equal to one. This fulfils the comparison doorchoice === 1 with 'true', so the code runs the conditional code for the first option being true, which sets the value of bearClothing to a string: "hat"
If the comparative operation being applied to doorChoice returned 'false' (i.e, if the value of doorChoice is anything but the number 1), then the program would move past it's first option and run the code for "else," which sets the value of bearClothing to the string: "scarf"

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing has it's value set to "hat"

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

The code begins checking the conditions of statements in order, first checking to see if the value of bearChoice is equal to 1. If true, it runs the code, if false, it moves on to the next conditional. The second conditional asks if the value of bearChoice is equal to 2. If true, it runs the following code. If false, it checks it's third conditional, checking to see if bearClothing is equal to 3. If false, it runs the code, and if false, since none of the conditions were met, it runs the "else" code, and you become best freinds with the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

if bearChoice was set to be equal to three, then the code would move through the first two statements, returning them as 'false.' then the code would compare the value of bearClothing strictly to 3, and bearclothing must be a string, it would return false, and move on to the 'else' code.
expected output: "You stay with the bear and become it's best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"Expected output: "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

Gotta become best friends with the bear, obviously. (by setting bearClothing to 1 and bearChoice to 3)
*/
