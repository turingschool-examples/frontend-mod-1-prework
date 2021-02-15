/*
This exercise file is a little different from the others you have seen so far. Read carefully!

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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

We are evaluating an if/else statement in order to print out a possible outcome based on the doorChoice variable.
If the doorChoice variable is equal to 1, the bearClothing will be assigned a "hat" string. If the doorChoice is not
set to 1, then the variable bearClothing will be assigned to the string "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing will have a new value assigned to either "scarf" or "hat".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

bearClothing would have the value "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

We are evaluating an if/else statement with more complexity by adding else if, which will execute if their conditions evaluate
to true. In this case, bearChoice is the variable that will change with these else if statements depending on the value.
If the bearChoice has a value equal to 1, the if will evaluate to true and you will offer the bear your bearClothing and it will show you out.
On line 29, if the bearChoice variable was assigned a value equal to 2, then that block of code would return true and execute by printing you telling the bear it's bearClothing is too small and it will cry.
On line 31, if the bearChoice variable was assigned a value equal to 3, then that block of code is true and the result printed would be "You run as fast as you can into the next room. It's full of snakes!"
the else statement on line 33 means that if none of these conditions are true, execute the instructions, which is to print the string "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The else if (bearChoice === 3) would evaluate to true and the string "You run as fast as you can into the next room. It's full of snakes!" would print.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

Log would print "You see a bear putting on a scarf" and "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
My favorite ending is "You stay with the bear and become it's best friend!"
*/
