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

Lines 17-21 is an if statement that runs one set of code if the user enters 1, meaning the first condition evaluates to true,
and a different set of code if the users enters 2. In the case that the user chooses door 1, the variable bearClothing
is assigned the value "hat", wherease if they choose door 2, bearClothing is assigned the value "scarf".

Note: For this code to really work based on user input, we would need to re-assign the variable doorChoice to the input
statement from the user before executing the if statement.

2. What variable has a new value assigned to it after the first if statement executes?

The variable bearClothing, as detailed above, gets a new value when the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The variable bearClothing would have the value "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Lines 31 - 38 is an if statement with 4 different conditions. The prompts in lines 26-28 offer the user 3 choices,
so this block of code contains a line of code to execute for if each of these choices is chosen as well as a line of code to
execute if all 3 of those are false.

Running through the code line by line, if the user inputs 1, line 30 evaluate to true and the statement indicated in line 31
will be printed to the console. Then the computer would exit out of that code block.

If the condition in line 30 instead evaluates to false (meaning the user inputted something else), the computer moves to
line 32 and tests if that if statement evlautes to true (if the user inputs 2). If so, the statement in line 33 will print
to the console.

If the condition in line 32 instead evlautes to false, the computer moves to line 34 and tests if that if statement evaluates
to true (if the user inputs 3). If so, line 35 will print a statement to the console.

Lastly, if the condition in line 34 instead evaluates to false, the computer moves to line 36 and tests if that statement is true.
This will always evaluate to true if the computer gets to this point in the code block, and it will print the statment indicated
in line 37 to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The console will print "You run as fast as you can into the next room. It's full of snakes!"

(Note: I fixed the typo so that the bearChoice variable was indicated in line 34, instead of bearClothing.)

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The console will print "You tell the bear the hat is too small and it starts to cry!"


7. What is your favorite ending?

Obviously, "You stay with the bear and become it's best friend!""
*/
