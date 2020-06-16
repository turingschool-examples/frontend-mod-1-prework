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

    Between lines 17 and 21, the console starts by checking the boolean value of the condition (doorChoice === 1) against the value assigned to `var doorChoice`.

    Since (doorChoice === 1) is evaluated as true, the code pertaining to that condition is executed.

    In this case, the string "hat" will be assigned to bearClothing and the console will not look at the rest of the code in that if/else statement.

    If (doorChoice === 1) had evaluated as false, the console would then look at the code associated with else  and assign the string "scarf" to bearClothing instead.

2. What variable has a new value assigned to it after the first if statement executes?

    The variable that has a new value assigned to it after the first if statement executes is the bearClothing variable on line 20.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    If I changed the variable doorChoice to equal 3, the bearClothing value would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

    Between lines 31 and 38, the console continues running JavaScript code.

    First, the console checks the boolean value of the condition (bearChoice === 1).

    If bearChoice has been assigned an integer of 1, the console returns true, then the following code would execute, and the rest of the statement would be ignored: `console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");`

    If bearChoice has not been assigned an integer of 1, the console returns false, then looks for the next condition: (bearChoice === 2).

    At this point, if bearChoice is equal to integer of 2, the console returns true, then executes the following code, ignoring anything written later in the if/else if/else statement: console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");

    If bearChoice has not been assigned an integer of 2, already having ruled out an integer of 1, the console would evaluate the condition (bearChoice === 3) and return a boolean value of true or false.

    If bearChoice is equal to integer of 3, then the console evaluates the condition as true, and the following code is executed: console.log("You run as fast as you can into the next room. It's full of snakes!");
    Then the console would stop looking for conditions to evaluate and code to execute.

    If bearChoice is not equal to integer of 3, then the console will neither read nor execute the code associated with (bearChoice === 3).

    The console will move on to the next condition and determine whether code should be executed.  If the console makes it all the way to the else statement, that means none of the previous conditions had a boolean value of true.  This can be considered the route taken when all other conditions have not yet applied.

    Now there is not a condition to evaluate, just code to be executed by the console due to variety of other values that could have been assigned to var bearChoice.

    The console automatically executes the following code:   console.log("You stay with the bear and become it's best friend!");

    "You stay with the bear and become it's best friend!" is logged as the last line in the output.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    If I changed the variable bearChoice to equal 3, the final outcome will be: "You stay with the bear and become its best friend!"

    This is due to the fact that line 34 refers to bearClothing, not bearChoice, so the else code would run here.

    Side note: I noticed an inconsistency in the variable naming...should line 34's (bearClothing === 3) be changed to (bearChoice === 3) ?

    If bearChoice === 3, then "You run as fast as you can into the next room.  It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    If I changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, the final outcome will be:

    You enter a dark room with two doors. Do you go through #1 or #2?
    You see a bear putting on a hat
    It looks like that hat is too small for the bear, do you...
    1. Offer your own to the bear?
    2. Point it out to the bear?
    3. Make a dash for the next room?
    You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

    My favorite ending is "You run as fast as you can into the next room.  It's full of snakes" with (bearChoice === 3) because it is the most exciting and is encouraging of a sequel!

*/
