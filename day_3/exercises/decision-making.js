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
var bearChoice = 3;

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

   In between lines 17 and 21 an 'if statement' is being used to determine which string will be stored into the variable bearClothing.  If both the data type and value stored into doorChoice match the input that you are checking against (in our case its 1) then the "hat" string will be stored into the bearClothing variable. Any input other than 1 would result in the "scarf" string being stored into the bearClothing variable.

2. What variable has a new value assigned to it after the first if statement executes?

   bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

   "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

   In between lines 31 and 38, we are essentially iterating through the if-statement structure by checking each conditional statement.  Once a conditional statement is satisfied, the command that it is paired with will exectute and the if-statement will come to a halt.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

   The console will log "You stay with the bear and become it's best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

   "You tell the bear the scarf is too small and it starts to cry!"

7. What is your favorite ending?

   It definitely has to be "You stay with the bear and become it's best friend!"
*/
