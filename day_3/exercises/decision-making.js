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

In lines 17 - 21 there is a else if statement tht says if the doorChoice is strictly equal to 1 then the bear clothing is a "hat".
If it is not strictly equal to 1, then the bearClothing is a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

After the statement executes the bearClothing has a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

I the variable doorChoice was changed to 3, then the bearClothing value would be a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

What is happening between these lines is another elseif statement. This states that, if the bearChoice is strictly equal to 1, then
you offer your "hat" and it shows you a secret way out--in the original instance. If the bear choice is not equal strictly equal to 1,
but equal to 2, then you tel the bear that his/her hat is too small and it starts to cry. However, if the bearChoice is not strictly
equal to 1, or 2, but is strictly equal to 3, then you run as fast as you can into the room full of snakes, unfortunately.
Finally if the bearChoice is not strictly equal to any of these numbers, then you stay with the bear and become its best friend.

Essentially, in these lines its saying if the first option is false, then try the second option, if that is false, then try the third. Once one is
deemed true, then the console log returns the message specific to the tue statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the bear choice was changed to equal 3, then the log reads "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

Given these parameters, the final outcome would be: "You tell the bear the 'hat' is too small and it starts to cry!"

7. What is your favorite ending?

I love the ending where you give it your clothing and it shows you a secret passage out.

*/
