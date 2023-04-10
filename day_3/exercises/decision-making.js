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
The code is checking if doorChoice is strictly equal to the number 1. If the user doorChoice === 1, the first code block is executed and bearClothing = "hat".
else (in this case if doorChoice is anything other than the number 1), the code is false and the second code block  is executed which is bearClothing = "scarf".
These lines determine which code should be executed depending on the input it gets.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value assigned to it. We can see when the variables are declared bearClothing is an empty string. It isn't until the user choose a
door that the bearClothing variable has a value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing value would be ="scarf". This is because in order for bearClothing = "hat", the doorChoice === 1 (must be equal to 1). If the doorChoice is
not equal to 1 then the else block of code is executed.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
The code is checking if bearChoice is strictly equal to number 1, if this is true than the code block on line 31 is run (secret passage!)
If bearChoice is not strictly equal to the number 1 then the code will jump to line 32 to consider if bearChoice is strictly equal to 2, if this is true
then the code on line 33 will run (bear starts to cry!)
If bearChoice is not strictly equal to number 2 then the code will jump to line 34 to consider if bearChoice is strictly equal to 3, if this is true then
the code on line 35 will run (you are now in a room full of snakes!)
If bearChoice is not strictly equal to 1, 2 or 3, then the code on line 37 will run (you become best friends!)

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome would be:
"You see a bear putting on a hat"
"It looks like that hat is too small for the bear, do you..."
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
My favorite ending is "You offer the bear your hat and it shows you a secret passage out!" because I am terried of bears and snakes - I would like
to get out of there!
*/
