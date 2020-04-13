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
  bearClothing = "jacket";
} else {
  bearClothing = "pair of pants";
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

In lines 17 through 21 an "if...else" statement is being used giving the code two options depending on what the value is for the doorChoice variable. The statement tells the code that if the variable doorChoice equals 1 the variable bearClothing will be the string "jacket" but if doorChoice is anything other than 1 the var bearClothing will be the string "pair of pants"

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

pair of pants

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

In lines 31 - 38 an "else if" statement is being used giving the code more than two (in this case 4) options depending on what the value is for the bearChoice variable

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You tell the bear the jacket is too small and it starts to cry!

7. What is your favorite ending?

You stay with the bear and become it's best friend!
*/
