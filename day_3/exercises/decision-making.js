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

This if-statement is evaluating the different outcomes of bearCLothing.
If doorChoice is equal to 1 evaluates as true, then the value of bearClothing is "hat".
If this statement returns as false, then the value of bearCLothing is "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The value of bearCLothing would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Here, we are using else if statement to evaluate mutliple conditions.
If bearChoice equals 1 returns true, the subsequent block of code is executed.
If bearChoide equals 1 returns false, the program moves on to else if (bearChoice === 2).
If this condition returns true, the subsequent block of code is executed.
But if this condition returns false, the program moves on to else if (bearClothing === 3).
Again, if this condition is true, the subsequent block of code is executed.
But if it returns false, then the program moves on to else (line 36) and returns the code block that follows (meaning none of the conditions were true).

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

When I ran this code, the final outcome was "You stay with the bear and become it's best friend!"
Initially I was confused, thinking line 34 listed the condition (bearChoice === 3),
so I thought the outcome would be "You run as fast as you can into the next room. It's full of snakes!"
But then figured out line 34 actually said (bearClothing === 3).
Not sure if this was a typo or not, but based on the code given, none of the conditions returned true, so the last block of code was run.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

Based on the order of the previous questions, the final outcome is: "You tell the bear the scarf is too small and it starts to cry!"
But if you go back and run the first if-statement again, and rerun the else if statement, the value of bearCLothing changes to "hat",
making the final outcome "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

My favorite ending is: "You stay with the bear and become it's best friend!"
*/
