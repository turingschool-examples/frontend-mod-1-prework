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
var bearChoice = 3;

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

    There is an else/if statement that is saying, if the value of the variable doorChoice is currently
    equal to the integer 1 (since the strict equal to comparison operator is being used), then the
    variable bearClothing is reassigned to "hat". If the value of the variable is not equal to 1, meaning if it is
    any other integer, or any other data type, then the variable bearClothing is reassigned to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

    bearClothing has a new value after the first if statement. That value will either be "hat" or "scarf",
    depending on whether the variable has a value of 1 or not at the time that the if statement is run.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    The variable bearClothing would be reassigned to "scarf". This is because the if statement that is run
    is not very detailed; if the value of doorChoice is 1, then bearClothingis reassigned to "hat". If doorChoice
    is ANYTHING ELSE, bearClothing is reassigned to "scarf", thanks to the else statment. This includes any other integer
    and any other data type. Even a string that says "1" would not trigger the first part of the if statement thanks to the
    strict equal to operator (===) that requires that the data types being compared must also be the same.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

    Between lines 30 and 38 lies an if/elseif/else statement. This is a detailed conditional statement that allows
    a programmer to make three or more comparisons (conditional statements) to ultimately only run one section of the code
    structure. Initially the condition is set to examine whether the variable bearChoice is equal to the value of the integer 1.
    If bearChoice does equal 1, then the block of code directly under that first conditional statement runs and returns the string
    "You offer the bear your bearClothing and the bear shows you a secret passage out!" Here the variable bearClothing would be
    filled with the value previously determined. The rest of related the code is then ignored since the conditional statement has
    already been met.

    However, if the variable bearChoice is not equal to 1, the JS operator will continue reading to the next line - the first
    else if statement. Here the computer is being asked to compare the variable bearChoice to the value of 2 (still as an integer).
    If bearChoice is 2, the code beneath will run and ignore the rest of the code, but if bearChoice is not 2, the computer will
    continue to the next else if statement. The second else if statement does the same thing as the first, but it is comparing the
    value of bearChoice to the value of 3. Finally, if the first three conditional statements all return as false, meaning the value
    of bearChoice is not currently 1, 2, or 3, the code following the else statement will run since the else statement is basically
    the catch all for all other values that bearChoice could hold.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    I'm answering this after changing what I assumed to be a typo in line 34 which originally read as bearClothing == 3.
    If the variable bearChoice is equal to 3, the final outcome will be the string "You run as fast as you can into the next room.
    It's full of snakes!" This is because the if/elseif/else statment will run the code that tells the computer to print that string
    if bearChoice is equal to 3, which in this case it is.

    If however, that was not a typo, the final result would be the string "You stay with the bear and become it's best friend!".
    This is because in the if/elseif/else statement, the else conditional statement would run because bearChoice holding a value of 3
    is not being compared as the variable bearClothing is sitting in it's place in the second elseif statement; since it is not
    a value of 1 or 2, the else statement code would run.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    The final result would be the string "You tell the bear the hat is too small and it starts to cry!" The word 'hat' in this string
    is a result of doorChoice holding the value 1, thanks to the first if statement, and the entire string is a result of
    bearChoice being equal to 2.

7. What is your favorite ending?

    My favorite ending is the world where I can be best friends with a bear.

*/
