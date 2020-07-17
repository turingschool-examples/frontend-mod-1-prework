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
The script is stating, 'if the doorChoice value is strictly equal to 1 output the string hat, otherwise or else, outout the string scarf for all other values or in this case 2.'
2. What variable has a new value assigned to it after the first if statement executes?
the variable bearClothing has a new value of either hat or scarf
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
the value would be set to scarf. Here, it might be useful to set the first else to if and then the last to else with a prompt responding something like 'please choose either door 1 or 2' so users stay within the set parameters.
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
The script is evaluating the value of the variable bearChoice. If the value input is 1, log the string 'You offer the bear your' + bearClothing + 'is too small for the bear, do you...'
If the value is 2, log the string interp. 'You tell the bear the' + bearClothing  + 'is too small and it starts to cry!'
I think it is also helpful to note that the value is in response to the logged questions above. 1-3
If the value is 3, log 'You run as fast as you can into the next room. It's full of snakes!'
Otherwise or 'else' log, 'You stay with the bear and become it's best friend!'
Damn, who would've picked that... staying in the room with a full on hibernating bear... no way yall become friends... :P
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The console logs the string 'You run as fast as you can into the next room. It's full of snakes!'
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The first variable changes to hat and the final output would then be, 'You tell the bear the hat is too small and it starts to cry!'
7. What is your favorite ending?
I already commented above, but I love that staying with the cry-baby , hibernating , too big for a hat bear is a lovable best friend. lol 
*/
