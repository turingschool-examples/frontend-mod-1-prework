/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses to evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 2) {
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
Lines 17-21 basically state that if door #1 is chosen then the bears clothing will be a "hat", though if door number 2 is chosen then the bear's clothing will be a "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
the variable bearClothing has a new value assigned to it after the first if statement is executed.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
if the doorChoice variable was reassigned a value of 3, then the bearClothing would result in a "scarf"
because it is not strictly equal to 1 which is what is being compared to in the first if..else statement.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Prior to lines 31-38, you are given 3 choices in how to interact with the bear. The else if statements in lines 31-38 will yield a specific result based on the choice that was made.
If the bearChoice is 1, the execution would ask: "Is it true that 1 is strictly equal to 1?"
Because it is, the line would print out "You offer the bear your  '+ bearClothing +'  and the bear shows you a secret passage out!.".

If the bearChoice is 2, the execution would ask: "Is it true that 2 is strictly equal to 1?". False.
Next condition, "Is 2 strictly equal to 2?". True.
So the line would print "You tell the bear the  + bearClothing +  is too small and it starts to cry!".

If the bearChoice is 3, the execution would ask: "Is it true that 3 is strictly equal to 1?". False.
Next, "Is 3 strictly equal to 2?". False.
Next, "Is 3 strictly equal to 3?". True.
The line would print "You run as fast as you can into the next room. It's full of snakes!".

If the bearChoice is false for all of the above conditions, then the line would print "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The line would print "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
Becoming bffs with the bear, like Mowgli and Baloo!
*/
