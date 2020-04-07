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

The code is checking if the doorChoice is exactly equal to the integer 1.
If so the code is assiging the variable bearClothing to the string value "hat".
If doorChoice is anything other than the integer 1, the code assigns bearClothing the stirng value "scarf"

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The output log will be "You offer the bear the scarf and the bear shows you a secret passage out!"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

The code fist checks if bearChoice is exactly the integer 1. If so it outputs the message regarding giving the bear your bearClothing and it showing you the way out.
If bearChoice is not integer 1, the code then checks if bearChoice is exactly integer 2. If so it outputs the message about talking to the bear about bearClothing and it starting to cry.
If bearChoice is not integer 1 or integer 2, the code checks if it is exactly integer 3. If so it ouptups code about running into a room of snakes.
Finally if bearClothing is anything other than exactly integer 1, 2, or 3, the code will execute to output that you and th bear become friends.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The ouput log will be "You run as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The output log will be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

I like the hidden ending of not making one of the given choices of reaction to the bear and becoming the bears friend.
*/
