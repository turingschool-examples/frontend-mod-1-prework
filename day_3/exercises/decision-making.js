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

Between lines 17 and 21, we hit our first conditional. At this point, the variable name doorChoice is set
to the number 1, so therefore the if conditional would resolve to true. It executes the corresponding
block of code, and sets the variable named bearClothing to the string `hat`. Since the it's an if/else,
the rest of lines 19 through 21 don't execute and we continue from line 23.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If doorChoice is anything that isn't the number 1, bearClothing will be changed to the string `scarf`

4. In English, using technical vocabulary, describe what is happening between lines lines 30 and 38.

Between lines 30 and 38, a series of if/elif/else conditionals are set up. If bearChoice is set to the number 1
it prints a message saying that you offer your hat or scarf to the bear and he helps you. If bearChoice is set
to the number 2, it prints a message that you insult the bear's hat or scarf and it cries. If bearChoice is set
to the number 3, it prints a message saying you run to a different room with snakes in it. If bearChoice is
anything else, it prints a message that says you befriend the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

It logs to the console the string "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

It prints the message "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I like hats, I like bears wearing hats, and I like friends, so doorChoice = 1, and bearChoice is not 1, 2, or 3.
*/
