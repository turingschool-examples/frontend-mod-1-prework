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
- The if statement is seeing if doorChoice is equal to integer value 1. If 1 is input, the clothing equals a 'hat.' If any other number is input, the statement executes the else statement and assigns 'scarf' as the clothing choice.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
The code is checking first to see if integer 1 was input as bearChoice. If so, it displays the secret passage option with the bearClothing var defined in the previous statement. If bearChoice is not equal to 1, it then checks for bearChoice being equal to 2. If bearChoice is 2, it executes the cry sentence with the bearClothing var. The next part may be a typo, as the var is listed as bearClothing when the var bearChoice may be the better option. Currently the only way to get this option would be to input 3 when prompted for the doors option. Finally, if bearChoice is not 1 or 2, it displays the best friend option.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
As written, the code would display the best friend option, since there is no else if statement written for bearChoice equals 3.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the scarf is too small and it starts to cry!"

7. What is your favorite ending?
Best friends!
*/
