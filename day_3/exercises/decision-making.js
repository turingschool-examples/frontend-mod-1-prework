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

The conditional statements from line 17 to 21 are creating a conditional scenarion for variables doorChoice
and bearClothing from line 11 to 12.

In other words. Line 17 is evaluating the condition of the variable doorChoice,to be strictly equal(===)
to 1. The variable bearCloathing has been left empty with quotation marks (""),
limiting this way the result for bearCloathing to "hat" or "scarf" as listed on lines 18 and 20.
If doorChoice strictly equals 1 then bearClothing value will be "hat", however if this condition is not met,
then "scarf" will be the value for the bearCloathing variable, this is stated in the "else" statement from
line 19.


2. What variable has a new value assigned to it after the first if statement executes?

var bearClothing;  "hat" if doorChoice strictly equals 1 but if this condition it is not met then the
value will be "scarf".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If we change the value from variable doorChoice to other than 1 the result will always be "scarf",
because this variable is stating that this value must and always be the numeber 1. If we wirte a string
or any other data type, the result will alwasy be "scarf" as stated on the <else> statement,
that any other value assigned to bearCloathig will result on scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

These lines are evaluating the varibale from line 13, bearChoice. Line 30, is conditioning the
result from the variable bearChoice, saying that if the condition of bearChoice is met 'strictly equals 1',
then the console will log the result "You offer the bear your " + bearClothing + " and the bear shows
you a secret passage out!",
this line is also using the value given to the variable bearCloathing to create a full sentence.

Line 32 is saying that if bear choice it is not 1 but strictly 2 , the the following essage will log in the
the console, "You tell the bear the " + bearClothing + " is too small and it starts to cry!", this  satment
is also using the value assigne to the variable bearCloathing to form a full sentence.

Line 34 is stating that if the value for doorChoice is strictly equal to 3, then the following
sentence will log in the console, "You run as fast as you can into the next room. It's full of snakes!".
After all the statemets have been evaluated and the result has been false for all of them, then the else
statement wil be run, stating the value of, You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

Here we have another conditional statement

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2,
what will be the final outcome be?

7. What is your favorite ending?
My favorite ending is with the snakes because nobody would expect such ending. To do that
I had to edit the varible from line 34. I changed the bearCloathing variable for bearChoice to use
the piece of code. I also changed the hat value from line 113 to pair of shoes, because you will definetly
use a pair of shoes in case you find yourself in a room full of snakes.

///expected output:You enter a dark room with two doors. Do you go through #1 or #2?
/*You see a bear putting on a pair of shoes
looks like that pair of shoes is too small for the bear, do you...
Offer your own to the bear?
Point it out to the bear?
Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "pair of shoes";
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
