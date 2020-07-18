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
} else if (bearClothing === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

   The *if* statment checks the conditional which checks if the value of the variable
   named doorChoice is equal to one. If this condition is true, then code on line 18 runs and
   the variable bearClothing is assigned to the string value of "hat". If the condition
   is false, the code moves to the following statement. *Else* means for every conditional result
   other than true, run line 20. Line 20 assigns the value for bearClothing to the string "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

   bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

   scarf


4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

   *If* it's true that the variable bearChoice equals 1, then line 31 will run. This tells the console
   to log the message of the given string, plus the value of the variable bearClothing, plus the final given string,
   and this would be the end point for the code in this particular conditional block.
   *If* the conditional on line 30 was false, and the value of the variable bearChoice did not equal 1,
   then the next conditional statement will be checked, line 32. If the value of the variable bearChoice is equal
   to 2, line 33 will run and the console will log the message. If the conditional on line 32 is false, the
   the conditional on line 34 will be checked. The value of the variable bearClothing will be checked to equal 3.
   If true, the console will log the given string. If false, the console will log the message on line 37. Line 36
   is saying, if you got this far, then log the following message to the console. This statement is not comparing
   a conditional.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be

   The console will log the message, "You stay with the bear and become it's best friend."

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

   The console will log the message, "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

   You stay with the bear and become it's best friend.
*/
