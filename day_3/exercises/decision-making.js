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

Between lines 17 and 21, there's an elif statement happening where if the condition isn't met for the initial if statement, then it the script will continue to run to the next option, which will execute the line of code inside of the elif brackets if the variable doorChoice does not hold the value of 1.

2. What variable has a new value assigned to it after the first if statement executes?

The variable bearClothing has a new value. When the program is being run initially, there is an empty string value assigned to the variable, but if the doorChoice variable is absolute equal to 1, then the bearClothing variable is assigned the "Hat" string value. But if the doorChoice is anything but an integer 1, then it will be assigned a value of the "scarf" string.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The value of bearClothing would be scarf since the value of doorChoice is not absolutely equal to the integer 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

This is running another if/else statement which is giving you four options that the computer will execute depending on the value stored in the bearChoice variable. If you end up storing something different than an integer data type of 1, 2, or 3, then the program will execute that last line after the else statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The final outcome would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The final outcome would be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

My personal favorite is definitely giving the variable doorChoice the value of 1 because who wouldnt love a bear trying on a hat? And then for the ending I would assign bearChoice to anything but 1, 2, or 3 beacuse lets be honest, I really want to have a bear as a best friend.
*/
