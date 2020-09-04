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
This is the 'if statement'. This statement evaulates a condition, and if it is true, then the following code block is put into play. The === means 'a strict equal to'. So it's saying, if the door that is chosen is number 1, the bear will be wearing a hat. The second keyword to look at is 'else', which means that if anything other than door 1 is chosen, the 'else' code will be executed and the bear will be wearing a scarf
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing is dependent on the doorChoice if statement
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Depending on what the user inputs for the answer to line 30's if statement, the program will either print text about a passage (if user inputs 1), crying (user inputs 2), or room full of snakes (user inpust 3). For anything else that the user inputs, the
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You will run into the next room full of snakes!!
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You will see a bear in a hat and you will tell the bear the hat is too small. he starts to cry 
7. What is your favorite ending?
line 37 for sure!
*/
