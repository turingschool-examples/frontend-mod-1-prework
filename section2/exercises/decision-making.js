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

**1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.**
// The script is using an if-else statement to determine what the bear is wearing.
// If the player selects the door (precisely) equaling 1, the script will run the initial
// if statement, assigning the value "hat" to the variable bearClothing.
// If another door is selected (door #2 in this case), the else statement is run instead.
// The variable bearClothing will then have its value reassigned to "scarf", affecting
// the first set of variables printed in the statements below.

**2. What variable has a new value assigned to it after the first if statement executes?**
// var bearClothing

**3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?**
// The value would still be "scarf", as the else statement applies to any integer except 1.

**4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.**
// An if-else statement is made to determine the logic following the options from lines 23-25.
// Option 1 runs the script for the initial if statement. The variable bearClothing holds the
// value from the first if-else statement. A string is returned showing the player the way out.
// Option 2, the first else statement, runs if 1 and 3 are not selected. The variable bearClothing
// holds the initial value assigned, just like in option 1.
// Option 3 is run if the player selects the integer 3. It returns a string indicating
// that the room is full of snakes, and it does not contain any other variables.
// The final else statement is run if the player selects an integer other than 1, 2, or 3. (Sneaky!)
// A string is returned telling the player that they stay with the bear and become its best friend.

**5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?**
// The following string is returned: "You run as fast as you can into the next room. It's full of snakes!"

**6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?**
// The following string is returned: "You tell the bear the hat is too small and it starts to cry!"

**7. What is your favorite ending?**
// "You stay with the bear and become its best friend!"
// I like this ending because I'm a sucker for Easter eggs, and it rewards the player for experimenting.
