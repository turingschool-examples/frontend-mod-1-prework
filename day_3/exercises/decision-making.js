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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
When the door choice is strictly equal to 1, the execution goes: "Is it true that door choice is exactly 1?
If yes, print "hat" for the bear clothing variable. If no, print "scarf" for the bear clothing variable.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
When bearChoice is strictly equal to 1 then the execution goes: Is it true that bearChoice is strictly equal to 1?
If yes print out "You offer the bear your (bearClothing variable) and the bear shows you a secret passage out"
If no, next, is it true that bearchChoice is strictly equal to 2? If yes, print out "You tell the bear the (bearClothing variable)
is too small and it starts to cry!" If no, next is it true that (bearchChoice... I think there was a typo, it says bearClothing in
the code but I think it should say bearChoice) is exactly equal to 3? If yes print "You run as fast as you can into the next room.
It's full of snakes!" next, if none of the above were true then execute the else and print "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!" would print

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!" will print

7. What is your favorite ending?
*/
var doorChoice = 2;
var bearClothing = "";
var bearChoice = 4;

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}
//Expected output: You stay with the bear and become it's best friend!
