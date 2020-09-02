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
If you choose to go through doorChoice number 1, then the bearClothing will be a hat. If you choose any other option of door, then the bearClothing will be a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
If you choose bearChoice 1 by offering your own article of clothing to the bear then the bear shows you a secret passage out.
If you choose bearChoice 2 and point out that his bearClothing is too small, the bear starts to cry.
If you choose bearChoice 3 and make a dash for the next room, you run as fast as you can to the next room. But it's full of snakes!
If you choose anything other than bearChoice 1,2, or 3 then you stay with the bear and become its best friend!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
My favorite ending is choosing doorChoice 2 which makes the bearClothing a scarf. The scarf is too small for the bear and I choose bearChoice 1 in which I offer the bear my scarf and the bear shows me a secret passage out!
*/
