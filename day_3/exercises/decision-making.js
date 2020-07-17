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

  The code is checking if `doorChoice` is strickly equal to the number 1. If it evulates to true the first code block runs and `bearClothing = hat`
  If the `doorChoice` is anything other then the number 1, the code will evulate to false so the seconde code block is run and `bearClothing = scarf`.

2. What variable has a new value assigned to it after the first if statement executes?

  `bearClothing`

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  `bearClothing = "scarf"`

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

  The code is checking if `bearChoice` is strictly equal to number 1, if this evulatesto true the code block on line 31 is run.
  If `bearChoice` is not strictly equal to the number 1 the code will continue to the next condition to evaluate if `bearChoice` is strictly equal to the number 2. If this condition evaluates to ture the code on line 33 will run.
  If `bearChoice` is not strictly equal to the number 1 and `bearChoice` is not strictly equal to the number 2, then the code will continue on to evaluate if `bearClothing` is strictly equal to the number 3.
  If this evulates as true then the code on line 35 will run.
  If none of the above three conditions evaluate as true then the code on line 37 will run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  The final outcome would be "You stay with the bear and become it's best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  The final outcome would be
  "You see a bear putting on a hat"
  "It looks like that hat is too small for the bear do you..."
  "You tell the bear the hat is too small and it starts to cry!"


7. What is your favorite ending?
  My favorite ending is `var doorChoice = 2` and `bearChoice = 4`. This would make the sentances:
  "You see a bear putting on a scarf"
  "It looks like that scarf is too small for the bear, do you..."
  "You stay with the bear and become its best friend!"
