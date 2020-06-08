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


Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

/*
This is an example of an If/Else statement. We see the "if" on line 17, immediately letting us know that this is a conditional statement.
If the door choice is strictly related to 1 (is euqal to 1), the return for bearClothing will be "hat". If the door choice is anything that
is not 1, we will see a return of "scarf" for bearClothing.
line by line:
17. If the condition of doorChoice is strictly equal to 1 //is true
18. execute the statement between the curly brackets "bearClothing = hat"
19. otherwise
20. execute the statement between the curly brackets "bearClothing = scarf"
21. close curly bracket to execute
*/

2. What variable has a new value assigned to it after the first if statement executes?

/*
bearClothing
*/

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

/*
Since 1 is not strictly related to 3, the return would be "scarf".
*/

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.




5. If you changed the variable bearChoice to equal 3, what will the final outcome be?

/*
console.log("You stay with the bear and become it's best friend!")
*/

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will the final outcome be?



7. What is your favorite ending?

/*
Door one - "You offer the bear your hat and the bear shows you a secret passage out!"
...not a fan of hats and really don't really want to be stuck in a room with a bear..
even if it's a super rad bear, the secret passage *does* exist for a reason ¯\_(ツ)_/¯
doorChoice = 1
bearChoice = 1
*/
