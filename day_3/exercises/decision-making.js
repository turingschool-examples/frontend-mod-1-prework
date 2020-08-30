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

It's saying that if the door choice is equal by data type and value to door choice 1, then the bear clothing will be a hat. If the door choice is anything else other than 1, the bear will be wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

The `bearClothing` variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If `doorChoice` was changed to equal 3 the `bearClothing` would still be a scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

If the bear choice is completely equal to 1 then it will print a specific statement inclding the bear clothing option stated previously. If the bear choice is completely equal to 2 it will print another new statement that also includes the bear clothing option. If the bear choice is equal to 3 then it will print a statement that doesn't include the bear clothing option. If anything else is the bear choice value then it will print a statement that also doesn't include the bear clothing in it.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the bearChoice varaible equals 3 then the "You run as fast as you can into the next room. It's full of snakes!" statement will be printed.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

With those selected variables the final outcome will be "You tell the bear the hat is too small and it starts to cry!".

7. What is your favorite ending?

My favorite ending is " You offer the bear your scarf and the bear shows you a secret passage out!".

*/
