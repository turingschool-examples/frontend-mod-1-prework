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
  bearClothing = "fanny pack";
} else {
  bearClothing = "ripped jean shorts";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 3) {
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
  * in lines 17-21, an if-else statment was created. In this statement, there are two different paths that are set up through conditions.
  These paths are doorChoice 1 or else. If the path of doorChoice 1 is chosen and the condition is met, then the outcome affects bearClothing
  and the bear will wear a fanny pack. If the condition of doorChoice != 1, then the condition of "else" is met and the bearClothing would be
  ripped jean shorts.

2. What variable has a new value assigned to it after the first if statement executes?
  * The bearClothing variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  * If the varialbe doorChoice is equal to 3, then the bearClothing value would be equal to the "else" condition.
  In this case, it is "ripped jean shorts".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
  * During lines 31-38, we see a series of three if-else statements. If the first condition is true, then the code block is executed.
  If the first condition is false, then the program will move onto the next if-else statement and check if that condition is true. If it is,
  then the code block will execute, if it is not true, then the the process is repeated for the if-else statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  *The final outcome would be "you stay with the bear and become its best friend!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  * The final outcome would be, "you see a bear putting on a fanny pack." (doorChoice 1) and "you tell the bear the fanny pack is too small and it starts to cry!"
  (bearChoice 2).

7. What is your favorite ending?
  * I like the bear wearing ripped jean shorts and staying with the bear and becoming best friends. 
*/
