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

In this code block we are using an if/else statement to tell the computer to do one thing or the other. If the code in line 17 returns "truthy" the string "hat" will be assigned to the variable bearClothing. If the code is "falsy" then the computer will move onto the next bit of code following the 'else' statement. This step will assign the string "scarf" to the variable bearClothing. 

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing is assigned a new value after the first if statement. This is indicated by the singular equal sign, which represents variable assignment, as opposed to the double equal sign which represents the conditional operator that evaluate to true or false. 

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If you changed the door choice to number 3, the value would be undefined. This is because the if statement only evaluates for 1 and 2.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Similarly to lines 17 - 21, the computer is reading an if statement. The code will run synchronously, evaluating if each statement given is true or false. If it evaluates to false, the code moves to the next line. If it evaluates to true, the function related to that statement will be executed.  However, in this case, if the user fails to select a value of 1, 2, or 3, the program has a catchall that will print "You stay with the bear and become it's best friend!" Which is just delightful.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be "You run as fast as you can into the next room. It's full of snakes!" Line 34 had read ```if (bearClothing === 3)``` but I had assumed that was a typographical error, since bearClothing is supposed to be assigned a string, and 3 is a number, meaning that it would return an error.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You see a bear putting on a hat.
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

You stay with the bear and become it's best friend!

*/
