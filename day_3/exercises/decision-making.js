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
If the variable doorChoice is exactly the integer 1, log "hat" into the display. If the variable doorChoice is anyything besides the interger 1, log "scarf" into the display.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value after the first if statement.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing value would be scarf. The parameters are that any choice besides the integer 1 selects "scarf".
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
If the variable bearChoice is exactly the integer 1, log "Your offer the bear your hat/scarf and the bear shows you a secret passage out!," into the display.
If the variable bearChoice is exactly the integer 2, log "You tell the bear the hat/scarf is too small and it starts to cry!" into the display.
If the variable bearChoice is exactly the integer 3, log "You run as fast as you can into the next room. It's full of snakes!" into the display
If the variable bearChoice is anything else besides the integers 1,2 and 3, log "You stay with the bear and become it's best friend!" into the display.
The choice between hat/scarf is decided in earlier code using the variables bearClothing and doorChoice.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!" is logged into the display.
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the scarf is too small and it starts to cry!" is logged into the display.
7. What is your favorite ending?
"You stay with the bear and become it's best friend!"
*/
