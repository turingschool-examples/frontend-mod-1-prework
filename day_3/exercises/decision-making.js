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

The first condition of if statement is choosing the door that stricly equals number 1. If this condition is true then it executes
the code between the first curly brackets which assigns the value "hat" to a variable bearClothing.
Otherwise, if the first condition is false which includes any answer other than number 1, it executes the code between
the second set of curly brackets which assigns the value "scarf" to the variable bearClothing.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.


If the first condition is true where our choice strictly equals the first choice, the code executes the first
set of curly brackets to log "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!".

If the first condition is false, the code is checking the second condition if our choice strictly equals the second choice.
If this condition is true, it executes the code between the second set of curly brackets to log
"You tell the bear the " + bearClothing + " is too small and it starts to cry!".

If the first condition is false, the second condition is false, then the code starts checking the third condition
if the choice we pick strictly equals the third choice. If condition number 3 is true, then it executes the code between the third set
of curly brackets to log "You run as fast as you can into the next room. It's full of snakes!".

Otherwise, If none of the three above conditions are true, it executes the code between the last set of curly
brackets to log "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
The first one where we get "You offer the bear your hat and the bear shows you a secret passage out!".
It's a positive ending with an extra bonus to see the secret passage out! It doesn't say that we cannot become friends if we make the first choice either, so
the possibilty to still become friends with a bear is not eliminated.

*/
