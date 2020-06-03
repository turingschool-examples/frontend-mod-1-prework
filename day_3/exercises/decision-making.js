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
Here, we have an elseif statement chaned to the if bearchoice if statement. In these lines the console is evaluating
what is going to happen depending on the door the bear chooses. In addition to this the bear clothing is being added in
from the previous if statement regarding the doorChoice variable.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The console will log: "You stay with the bear and become it's best friend!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The outcome will be: "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
I love the doorChoice = 1 and bearChoice = 1 result. Nothing like a little kindness to get things done.
*/
