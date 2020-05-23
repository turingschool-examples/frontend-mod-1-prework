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

- Between lines 17 and 21 we have an "if else" statement basically giving the interpreter two options; the interpreter has one way to go if the choice is door 1 and another way to go (set of code to execute) if the choice is not door 1

2. What variable has a new value assigned to it after the first if statement executes?

- bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

- scarf

4. In English, using technical vocabulary, describe what is happening between lines 31 and 38.

- Between lines 31 and 38 we have an "else if" statement. This is similar to the "if else" statement in that the interpreter has more than one option but an "else if" statement is used for situations when you need more than two options.
- Like an "if else" statement the first option is “if” and the last option is “else”, but everything in between is “else if”

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

- The console would log "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

- You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

- "You stay with the bear and become it's best friend!"
*/
