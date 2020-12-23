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
var bearChoice = 3;

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
} else if (bearChoice === 3) { // changed var bearClothing to bearChoice
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
  line 17 evaluates if the variable doorChoice is strictly equal to the integer 1
  the "if" statement declares if the statement IS true, the code on line 18 will be used.
  line 18 reassigns the variable bearClothing the value of "hat"
  lines 19 contains the statement "else" which declares that if the statement on line 17 evaluates to false, then the code on line 20 will be used
  line 20 assigns the variable bearClothing the value of "scarf"
  line 21's curly bracket ends the evaluation

2. What variable has a new value assigned to it after the first if statement executes?
  The variable bearClothing will be reassigned "hat" from no assigned value

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  the bearClothing variable will be assigned the value of "scarf" if anything besides the integer 1 is used

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
  line 31's console.log will output the string "You off the bear your " followed by the value of the variable bearClothing, followed by the string " and the bear shows you a secret passage out!"
  line 32 states that if line 30 is false BUT 32 is TRUE in the value of bearChoice being strictly equal to the integer 2, to run line 33
  line 33's console.log will output the string "you tell the bear the " following by the value of bearClothing followed by " is too small and it starts to cry!"
  line 34 states that if line 30 is false, as well as line 32, but the value of bearClothing IS strictly equal to 3, then run the code on line 35
  line 35's console.log will output the string "you run as fast as you can into the next room. It's full of snakes!"
  line 36 states if lines 30, 32, and 34's evaluations all come up false, then use the code on line 37
  line 37's console.log will output the string "You stay with the bear and become it's best friend!"
  line 38 ends the evaluations

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  all of the else if's conditions return false, and the else code runs, leaving you in constant fear of befriending a bear.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  doorChoice value of 1 will evaluate line 17 to true, reassiging the var bearClothing the value of "hat"
  bearChoice value being 2 will check false with line 30's condition, but true with 32's condition and output the string "You tell the bear the hat is too small and it starts to cry"

7. What is your favorite ending?
  My favorite ending is by far the hidden snakes ending.
*/
