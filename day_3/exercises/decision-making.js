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

Inside of lines 17 and 21, the code is telling us that the variable named doorChoice is set to 1.
This would make our if/else statement set to true.
The variable bearClothing will be set to the string "hat"
Since it is an if/else statemet and it is set to true we wouldnt use lines 19 through 21 and just begin from line 23.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If the doorChoice is set to anything thats not the number 1, then the bearClothing value will be set to "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

In lines 31 through 38 we are presented with a bunch of if/else statemets.
We have 3 choices after walking into the door.
If bearChoice 1 is chosen, then id offer the bear my bearClothing and it would help me out through a secret passage.
if bearChoice 2 is chosen, then id tell the bear its bearClothing is too small and it would then start to cry.
If bearchoice 3 is chosen, then id run scared into a room thats full of snakes, and if i
input anything else then it says that i befriend the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If i were to choose bearChoice 3 then the final outcome would have me run as fast as
I can into the next room, only to find that its full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If i set doorChoice equal to 1 the bear would be wearing the "hat".
With bearChoice equal to 2 my final outcome will involve me
telling the bear that it's hat is too small and then it begins to cry :(

7. What is your favorite ending?

My favorite ending is the one where i give the bear my hat or scarf and it shows me the secret way out.
Im all about good endings or taking the good choice in a list of bad. It was a close tie
with staying and becoming the bears friend.
*/
