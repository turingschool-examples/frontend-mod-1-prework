/*
This exercise file is a little different from the others you have seen so far. Read carefully!

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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
The condition of doorChoice is being read where 'door' 1 will return true and make the variable bearClothing equal 'hat', where any other 'door' choice will make bearClothing equal scarf.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
The if/elseif/else statements are taking the bearChoice variable in line 10 and is asking if it is equal to 1, 2, or 3 and returning the various logs in turn. If it is none of those numbers it returns the final log.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
console.log("You run as fast as you can into the next room. It's full of snakes!");

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
console.log("You see a bear putting on a hat");
console.log("You tell the bear the hat is too small and it starts to cry!"); :(

7. What is your favorite ending?
doorChoice = 2
bearChoice = "stay!"
console.log("You stay with the bear and become it's best friend!") :D
*/
