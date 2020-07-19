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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

    What is happening between lines 17 and 21 is that there is two options to choose and if the
    first option is true it executes bearClothing "hat". If the first option is false you go to else
    which is another option and it executes bearClothing "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

    bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

    In this conditional you have three rules, if one of the three rules is met or is true, it would execute that statement.
    If all three rules are false it would run the else statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    The final outcome would be, you would run as fast as you can into the next room. It's full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    The final outcome would be you would tell the bear its hat is too small and make it cry.

7. What is your favorite ending?
    My favorite ending is to stay with the bear and become best friends.
*/
