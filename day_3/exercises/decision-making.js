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
Line 17 starts with an "if" statement asking if the user imput is strictly equal to 1. If it is then bearClothing will be changed to "hat". If it's not strictly equal to one then the else statement is activated changing the bearClothing to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing is changed from an empty string "" to either "hat" or "scarf" depending on the user input.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearChoice would be "scarf", even though the promt didn't list a door 3. This is because the if statements asks if the input is directly equal to 1, else bearClothing is "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Line 30 starts with an if statement. If the input is strictly equal to 1, then a prompt is returned. If not, and the input is strictly equal to 2 a different prompt is returned. If not, and the input is strictly equal to 3 then a third prompt is returned. If an input does not strictly match any of these a fourth prompt is returned.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
A prompt of "You run as fast as you can into the next room. It's full of snakes!" is returned.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
A prompt of "you tell the bear the scarf is too small and it starts to cry!" will return.

7. What is your favorite ending?
Running from the bear's aweful clothing choices into a room full of snakes, who hopefully have better sense in fashion.
*/
