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

  In lines 17-21, the code is saying that if the reader chooses door 1, the bear will be wearing a hat. Any other door choice will result in the bear wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

  bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

  In lines 31-38, the code is showing what will result if the reader chooses a bearChoice. The if statement and the following else if statements detail what the result will be if the reader chooses the corresponding option. There is also a final else statement that indicates an option for choices outside of 1, 2, or 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  The result will read, "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

  The final outcome will be, "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

  "You stay with the bear and become it's best friend!"
*/
