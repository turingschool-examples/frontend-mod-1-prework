/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

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

1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

    Line 17 creates an else statement (or the instructions of what to do if the condition listed after 'if' isn't met) to set the variable bearClothing to "scarf". Line 20 says we need to output the string "You see a bear putting on a " concatenated with the variable bearClothing, which will be assigned to either 'hat' or 'scarf' depending on the doorChoice. Line 21 console logs another string concatenated with the same variable.

2. What variable has a new value assigned to it after the first if statement executes?

    The variable bearClothing has a new value assigned. When that variable is created, it's an empty string, and the first if statement assigns one of two options, 'hat' or 'scarf'.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

    In lines 31-38, there's been an if statement established that checks if the condition of the variable bearChoice was been set to '1', and if it has, it gives a specific, concatenated string to log to the console. It has else if statements that deliniate other directions for the computer to follow given other specific values of bearChoice, like '2' or '3', with their own output strings. If the value of bearChoice is not '1', '2', or '3', it outputs the last else function, which outputs the string 'You stay with the bear and become it's best friend.'

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    the console would log: You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    the console would log: You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

    Well, I don't want to make a bear cry, or go to a room of snakes... and I like dark rooms and bears, so staying with the bear and being its best friend sounds nice.

*/
