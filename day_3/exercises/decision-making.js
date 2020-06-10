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
Between thes lines is an if else statement that is evaluating if the door choice is exactly number 1,
else it must be door 2 and the bear is wearing the respective clothing.
2. What variable has a new value assigned to it after the first if statement executes?
The bear clothing has a new value assigned to it after the first if statement executes.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The value would then be "scarf".
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Between these lines, there is are several elsif statements chaned to an if statement. The code in these lines determines what should
be run given the variables bearChoice or bearClothing. If bearChoice is equal to `1`, then it prints a message that you offer your hat or scarf and it helps
you. If the bearChoice is equal to `2`, then it prints a message that you insult the bear's hat or scarf and it cries. If the bear choice is equal to 3, then it
the else statement runs, because there is no conditions for `bearChoice === 3`. In this case you stay with the bear and become it's best friend.
It shuld be mentioned that bearClothing will never run because there is no instance where bearClothing will equal `3`.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The console will log: "You stay with the bear and become it's best friend!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The outcome will be: "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
I love the doorChoice = 1 and bearChoice = 1 result. Nothing like a little kindness to get things done.
*/
