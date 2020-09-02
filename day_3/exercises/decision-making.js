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
An if/else statement is being set up with a boolean value either returning true or false
 based on whether your door choice is equal to 1 or not. This in turn will decide what the bearClothing variable will be, either
 a hat if doorChoice being equal to 1 is true, or a scarf if it is not true.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines 31 and 38.
This is a longer chain of if/else statements which will lead to a statement being logged in the console. If bearChoice being equal
to 1 is true, it will log the statement on line 31 and bearClothing will be replaced by either "hat" or "scarf"
depending on the value of doorChoice on line 17. If bear choice being equal to 1 is false, then it moves on to the "else if"
conditional statement on line 32. This condition states that if bearChoice being equal to 2 is true, then the statement on line
33 will be logged, again with bearClothing being replaced with the variable previously decided by the if/else statement beginning on line 17.
If that conditional statement proves false then we move on to line 34 which will log the statement on line 35 if bearClothing being equal to 3
is false. If that is the case, then the last statement is simply an else with no other condition to the statement, which means the statement
on line 37 will log in the console if all 3 of the 3 previous condtional statements have proven false.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You stay with the bear and become it's best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!
"
7. What is your favorite ending?
I personally like the room full of snakes ending haha! Out of the frying pan and into the fire, am I right?
*/
