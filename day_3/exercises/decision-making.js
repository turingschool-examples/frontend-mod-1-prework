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
- If the value of doorChoice is equal to 1 then the value "hat" will be assigned to the variable
bearClothing. If not then the value "scarf" will be assigned to the variable bearClothing.

2. What variable has a new value assigned to it after the first if statement executes?
- bearClothing variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
- If you changed the variable doorChoice to eqal 3, then the value for bearClothing would be scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
- If the value of bearChoice is equal to 1 it will print the string that's inside the log with bearClothing
value hat. If bearChoice doesn't eqal to 1 then it will go to the first else if statement (line  32). If the
value of bearChoice is equal to 2 it will print the string that's inside the log with bearClothing value scarf.
If bearChoice doesn't equal to 2 either then it will go to the second else if statement (line 34). If the
value of bearClothing is equal to 3 then it will print the string that's in the log. If bearClothing doesn't
equal to 3 then it will print the string that's inside the log (line 37). Because we have assigned 1 to the
variable bearChoice it will print You offer the bear your hat and the bear shows you a secret passage out!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
- If I change the variable bearChoice to equal 3 then it will print the string that's inside the log (line 37)

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
- If i change the variable doorChoice to equal 1, and the variable bearChoice to equal 2 then it will print the string
that's in the log (line 33).

7. What is your favorite ending?
- My favorite ending is that I get to stay with the bear and become it's best friend!
*/
