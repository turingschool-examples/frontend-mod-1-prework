/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate two different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "belt";
} else {
  bearClothing = "clown shoes";
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

This is an if/else statement. It contains the condition which is denoted by the "===" operator and is essentially asking if the the statement is true or false. It contains conditions statements - "if" and "else" which give dichotomous options based on if the result of the condition is true or false. It has an If Code Block which is everything within the curly braces after the If condition statement but before the Else statement. Lastly it has an Else Code Block which is everything within the curly braces after the Else statement.

In other words this condition is stating, "if the door choice is equal to 1, the bear clothing is 'belt'. If it's not equal to 1, the bear clothing is 'clown shoes'."


2. What variable has a new value assigned to it after the first if statement executes?


bearClothing


3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"clown shoes"


4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

This is an if/else else/if statement. It contains the condition which is denoted by the "===" operator and is essentially asking if the statement is true or false. It contains three different condition statements and four total - "if", two "else If" statements, and "else". Each condition statement has it's own code block appended to it in curly braces. Those are called If Clode Block, Else If Code Blocks, and Else Code Block. These code blocks contain unique messages to be logged depending on the value of the condition.

The If Condtition Statement is declaring that if the condition is true, then run the code block associated with it. If the Bear Choice is equal to 1, then the block below it will run.

The first Else If Condition Statement is declaring that if the Bear Choice is not equal to 1, but it is equal to 2, then the code block below it will run.

The second Else If Condition Statement is declairing that if the Bear Choice is not equal to 1, and it's not equal to 2, but it is equal to 3, then the code block below it will run.

The Else Condition Statement is declaring that if the Bear Choice is not equal to 1, it's not equal to 2, and it's not equal to 3, then the code block below it will run.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You run as fast as you can into the next room. It's full of snakes!


6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You tell the bear the belt is too small and it starts to cry!


7. What is your favorite ending?

My favorite ending is if my bear choice is not 1, 2, or 3. It could be 4 or 0 or -1. This results in the happiest circumstance - "You stay with the bear and become it's best friend!"

*/
