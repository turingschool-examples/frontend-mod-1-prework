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
> An if statement with a conditional instruction of the door choice of being strictly equal to 1 is set. When evaluated, the if statement will print the bearClothing (a hat because the variable doorChoice is set to 1). 

2. What variable has a new value assigned to it after the first if statement executes?
> During the "else" conditional statement, the variable bearClothing is reassigned to "scarf" if the doorChoice variable is set to another number aside from 1. 

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
> The variable bearClothing would print as scarf because the else conditional statement includes anything other than 1 being inputed.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
> In this if/else if/else statement, the conditional statement resolves based on the bearChoice variable being strictly equal to 1. 

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
> When the variable bearChoice is equal to 3, then the final conditional statement resolves the story in a different way. Specifically, the else statement will be envoked because the else if statement of bearChoice strictly equal to 2 is evaluated as false as well as the bearClothing strictly equal to 3. 

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
> The bear wears a hat and the elseif statement with the variable bearChoice strictly equal to 2 will be envoked. (I tell the bear its hat is too small and it starts to cry.)

7. What is your favorite ending?
> Obviously the last one! I want to be friends with a bear. To do that, I would be sure that the variables bearChoice is _not_ set to 1 or 2. Additionally, that the variable bearClothing is _not_ strictly equal to 3. 
*/
