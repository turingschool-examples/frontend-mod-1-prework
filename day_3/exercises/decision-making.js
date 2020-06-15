/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 0;
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
  Lines 17-21 are using an if...else statement to check if the condition of doorChoice is true or false.  This will
  determine what string will be assigned to variable bearClothing.  If the condition in line 17 is true, the
  variable bearClothing in line 18 will be assigned the string "hat".  If it's false, the varoable bearClothing
  in line 20 will be assigned to the string "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
  bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
  Lines 31-38 are using an if...else statement to determine which string to print.  Either line 31, 33, 35 or 37.
  The conditions on lines 30, 32, 34 and 36 are determined by the values assigned to variable bearChoice on line 13
  and the outcome of lines 17-21 based on variable doorChoice on line 11.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  "You stay with the bear and become it's best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
  "You offer the bear your scarf and the bear shows you a secret passage out!"  This will print if bearChoice equals 1
  and doorChoice does not equal 1.
*/
