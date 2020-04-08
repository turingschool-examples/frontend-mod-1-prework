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

If you choose door 1, and ONLY door 1, then that code block resolves as true, and is executed. If it does not resolve as true,
then the else statement resolves as true.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Similar to what is happening between lines 17 - 21, only with logging info! If the first statement resolves as true, then
the statement is logged with the clothing choice. If that first statement resolves as false, it moves onto the next,
and the next until you hit one that resolves as true and prints the data.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

I would run into the next room and find it full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

I would have made the bear cry and I honestly can't live with that Next Question.

7. What is your favorite ending?

I GIVE THE BEAR CLOTHES THAT FIT AND DON'T MAKE IT CRY. T_T
*/
