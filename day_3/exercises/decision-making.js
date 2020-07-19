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
The code is saying if the user enters their door choice as 1 then return "hat" to them (which is what would happen because we assigned doorChoise as 1 in the first line). If it is anything other than 1, reutn "scarf" to them.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing will have a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If you changed the value to 3 then bearClothing would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
In lines 31-38 the code says that if the user's enter is equal to 1 the computer will return the first condition(which is what would happen because we assigned 1 to the bearChoice variable in the 3rd line of code). If the user enters 2 it'll return the second condition. If the user enters 3, the third condition. But if the user doesn't enter 1, 2 or 3 then the computer will return the last conditon under 'else'.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
doorChoice would give you a "hat" outcome and bearChoice would give you a "You tell the bear the hat is too small and it starts to cry!".

7. What is your favorite ending?
"You stay with the bear and become its best friend!"
bearChoice would need to be equal to anything other than 1, 2 or 3.
example: var bearChoice = 4
*/
