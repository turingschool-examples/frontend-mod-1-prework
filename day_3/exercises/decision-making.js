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
The program is checking the condition of the value of doorChoice. Depending on whether the user picks door #1 or door #2
the code will tell the user it sees a bear putting on a hat or scarf respectively.

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing has a new value of "hat" if the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing value would be "scarf" as the statement only cares about the value being "1" or anything else.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
The code is executing an if, else if, else statement to evaluate which output to display based on the user input of which decision they made.
It's taking the previous value for bearClothing and displaying it in different strings based on user decision. It also
checks an impossible outcome for bearClothing === 3 as bearClothing can only be set to the string "hat" or "scarf" from the
prior if statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be "You stay with the bear and become it's best friend!" If bearChoice is not equal to 1 or 2 then
the else command runs because the second else if command only runs if bearClothing equals 3, not bearChoice.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome would be "You tell the bear the hat is too small and it starts to cry!" as doorChoice being equal to 1
picks "hat" and bearChoice being equal to 2 selects the second string in the second if statement.

7. What is your favorite ending?
My favorite ending is the Easter egg of option 4, "You stay with the bear and become its best friend" because
only a clever or curious user would stumble upon it seeing as the prompt only provides you with "3" choices.
*/
