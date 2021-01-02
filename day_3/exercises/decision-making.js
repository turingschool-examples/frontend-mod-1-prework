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
On line 17 the code runs an if statement that looks to see if doorChoice is equal to 1 and if it returns true it runs the code
block right below if it returns false it jumps to the else statement and runs that code block
2. What variable has a new value assigned to it after the first if statement executes?
The bearClothing variable gets set to something different depending on your choice.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If you changed the doorChoice to 3 bearClothing would be changed to scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Between lines 31 and 38 the code runs through multiple if else statements, looking at what the current
value of bearChoice if it is equal to 1 or 2 it runs one of the first 2 if statements. If it is not equal to 1 or 2
it then checks the value of bearClothing to see if its equal to 3 and if its not it will then run the else as the final result
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If you change bearChoice to 3 the final outcome will be "You stay with the bear and become it's best friend!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome will be You tell the bear the hat is too small and it starts to cry!
7. What is your favorite ending?
I enjoy the end when the bear shows you a secert passage out.
*/
