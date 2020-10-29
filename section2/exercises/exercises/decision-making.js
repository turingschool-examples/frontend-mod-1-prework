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

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
   This if statement evaluates the condition (doorChoice === 1). If the variable doorChoice is
   strictly equal to 1, the program will set the variable bearClothing to "hat". If doorChoice
   is anything other than 1, the program will set the variable bearClothing to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
   bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
   If doorChoice is assigned any value other than 1, bearClothing will be set to "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
   Lines 27-35 contain a conditional statemet of the if/else if/else pattern. If the variable bearChoice is
   strictly equivalent to 1, then the program will return the first message in that code block. Otherwise,
   the program will move on to evaluate the second condition in that code block, (bearChoice === 2).
   If bearChoice is strictly equivalent to 2, then the program will return the message associated with
   that condition. Otherwise, the program will move on to evaluate the third condition in the code block,
   (bearChoice === 3). If bearChoice is strictly equivalent to 3, then the program will return the third
   message in the codeblock (the one about the snakes). Otherwise, the program will return the last
   message in the code block.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
   If bearChoice === 3, then the program will return the message:
   "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
   If doorChoice = 1 and bearChoice = 2, the program will return (among other things):
   "You see a bear putting on a hat."
   as well as
   "You tell the bear the hat is too small and it starts to cry!""

7. What is your favorite ending?
   I liked the bearChoice === 3 ending. There's something kind of wild about
   encountering a bear in a hat/scarf and then into a room full of snakes. 
*/
