/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

//node section2/exercises/decision-making.js

var doorChoice = 2;
var bearClothing = "monkeySuit";
var bearChoice = -1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "monkeySuit";
} else {
  bearClothing = "dashingCamelhairScarf";
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
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

Console logging the string "You enter a dark room with two doors. Do you go through #1 or #2?",
keyword "if" is setting up a condition that if the doorChoice is equal value and type to 1, then the bear will be wearing a monkey suit.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

dashingCamelhairScarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Line 27 is console logging a string with the third choice of Make a dash for the next room. 29+ If (the keyword) followed by the condition is equal value/type to 1, it will run the code. If not, the else/if statement condition will determine if it will run the code, repeat with line 33 & 34. Lines 35 and 36 establish that if there in any other condition, or lack of one, then it will execute code: "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The code to execute "You run as fast as you can into the next room. It's full of snakes!" will be run.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The code to execute "You tell the bear the monkeySuit is too small and it starts to cry!" will be run.

7. What is your favorite ending?

Changing: var bearChoice = -1;, and becoming it's best friend!
//My addition, as it was missing from this file
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
//I did!
*/
