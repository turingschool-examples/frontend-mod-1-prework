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

line 17 The code is saying **IF** (keyword) the doorChoice condition returns strict equal of 1 (same data type and same number), it is true
line 18 if true, execute the codeblock contatined within the first curly braces which would be bearClothing = 'hat'
line 19 The code is saying **ELSE** (keyoword) the doorChgoice condition returns any value other than strict 1, it is false
line 20 if false, execute the codeblock contained within the second curly braces which would be bearClothing = 'scarf'
line 21 contains the closing curly braces for the else codeblock


2. What variable has a new value assigned to it after the first if statement executes?

the var bearClothing is reassigned to either the string value 'hat' or 'scarf'

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

since the **IF** statement is strictly set to equal 1, any other value will not satisfy the if condition
thus, 3 will run the else codeblock and return 'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

line 31 containts the codeblock to execute if the **IF** condition returns true, which will print the string inside the console.log(); function {which is contained in its curly brackets}
line 32 contains the first **else if** statement, if the **IF** condition returns false, it will check against its own specified condition. If its condition returns true,
line 33 it will execute the codeblock found on this line {contained in its curly brackets}
line 34 if the bearClothing variable being placed here is intentional, this and line 35 serve no purpose in this statement. bearClothing is a variable with a string data type so the strict operational comparison of === 3 would never return true, thus never meeting its condition.
line 34 if the bearClothing variable was a typo, and was meant to be bearChoice, this line contains the second **else if** statement, if the **IF** and first **else if** conditions return false, it will check against its own specified condition. If its condition returns true,
line 35 it will execute the codeblock found on this line {contained in its curly brackets}
line 36 contains the **else** statement, in order for this to run the previous conditions must have returned false, thus meaning the **else** condition is false, if the **else** condition is met,
line 37 it will execute the codeblock found on this line {contained in its curly brackets}
line 38 contains the closing curly brackets for the else statement

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

if the code on line 34 can be considered canon, the final outcome will be 'You stay with the bear and become it's best friend!' as it satisfies the **else** condition
if the variable on line 34 is changed to bearChoice, the final outcome will be 'You run as fast as you can into the next room. It's full of snakes!' as it satisfied the seond **else if** statement

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

the final outcome will be 'You tell the bear the hat is too small and it starts to cry!' as it satisfies the first **else if** statement and the variable bearClothing was changed to hat because of the doorChoice condition being met

7. What is your favorite ending?

I love bears and all, but the thought of bear in a undersized scarf crying because it was told its clothing was too small is a wonderful thing. (pretty sure every bear i have ever seen depicted in clothing was wildy small on it)
For this, the doorChoice condition not being met, and the bearChoice === 2 condition being met is my favorite outcome!
The desire to create a choose your own adventure game, featuring different wardrobes for bears, has never been higher :)

*/
