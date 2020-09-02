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

 */Lines 17-21 is the structure of the 'if ... else' statement used to check a condition. If it turns out the first code block is *true* then it is run, if *false* then the second code block is run instead./*

2. What variable has a new value assigned to it after the first if statement executes?

 */bearClothing because the variable for bearChoice is defined as 1 so the first code block is run at 'hat' isntead of 'scarf'./*

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

 */Scarf because the doorChoice is defined to be trictly equal to the doorChoice of 1, anything else will be considered false./*

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

 */Lines 31-38 is another structure of an 'if ... else' statement with multiple different options. It defines what will be the output for the number chosen for bearChoice. After the first choice there is another 'if' and the code that will execute be that value is true. The final line is the 'else' only which will be run for anything besides those define above it./*

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

*/"You stay with the bear and become it's best friend!" because bearChoice === 3 was not defined in the 'if ... else' statement, so by defult it will become the 'else' response./*

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

*/"You tell the bear the hat is too small and it starts to cry!" doorChoice is 1 so answer is hat and bearChoice is 2 so the response becomes true for the if statement bearChoice===2 /*

7. What is your favorite ending?
*/The 'else' result is my favorite because I would love to be best friends with a bear! /*
