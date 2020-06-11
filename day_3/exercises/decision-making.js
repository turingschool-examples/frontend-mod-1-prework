/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = 3;
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

   // An elseif conditional statement is being made with the condition being the bear choice equalling exactly 1.
   // If the condition is met (or the value is true), the result is "hat."
   // Otherwise, (if the value is false), the result is "scarf."

2. What variable has a new value assigned to it after the first if statement executes?

   // The variable "bearClothing" would have a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

   // "scarf"

4. In English, using technical vocabulary, describe what is happening in lines lines 31 and 38.


   // A series of decisions are being made depending on the variables from above,
   // and further decision points are given in the case that the previous `if` or `else if` returns fasle.
   // In line 31, an 'if' condition is being given in the case that the bearChoice equals 1.
   // In line 33, the condition is given for when bearChoice equals 2.
   // Line 35 will never run, because of the If/Else statement that was laid out above.
   // note: I think I said that better in my answer for question 7. See below!
   // Line 37 will run if bearChoice equals anything except `1` or `2`.
   // In line 38, the entire else code block is being closed.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

   // "You stay with the bear and become it's best friend!"
   // I don't think bearClothing can ever run in this .

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

   // "It looks like the hat is too small for the bear, do you..."
   // "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

   // My favorite ending is "You run as fast as you can into the next room. It is full of snakes!"
   // However, that one can't be reached in this case. the bearChoice else if code blocks run first, and so bearClothin is never executed.
   // I think you would have to change bearClothing to bearChoice, or make some other kind of change that I am not aware exists yet.
   // I don't know if I am using the correct techical vocabulary yet. I am trying to reference the book, etc., but I have a feeling I am still at the stage where I mix up vocabulary.
   // I am ok with that. It's all part of the learning curve! :)
*/
