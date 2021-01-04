/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 4;

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

Lines 17 - 21 state that if the condition of doorChoice === 1 (is exactly equal to 1), then the variable bearClothing will be defined as "hat", but if the doorChoice is anything else, beatClothing will be defined as "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Assigning doorChoice to equal 3, would make the first if statement false, so bearClothing would be defined as "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

The code here is written in a else/if format, which means it has different outputs for a wider range of conditions. If the first condition of bearChoice === 1 is true, it will run the first code block within the first set of curly brackets, if it is false, the program will move on to the second condition bearChoice === 2 and evaluate if it is true or false.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Changing bearChoice to === 3, should make the final outcome: "You run as fast as you can into the next room. It's full of snakes!", however no matter how I ran the code I couldn't get it to output that value. When I ran it an input of bearChoice === 1 gave me "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"); When I ran an input of bearChoice === 2, I got the output of "You tell the bear the " + bearClothing + " is too small and it starts to cry!" but any other input, including bearChoice === 3 gave me "You stay with the bear and become it's best friend!". Not sure why!
I JUST FIGURED IT OUT! the third else if statement has "bearClothing === 3" as the condition, not bearChoice! I changed it to make the code run correctly!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!" (and then presumably it will eat you for being mean)

7. What is your favorite ending?

Definitely becoming best friends with the bear. My last name is Bair, so we would probably get along swimmingly.

*/
