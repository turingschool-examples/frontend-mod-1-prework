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

Line 17 evaluates if you have chosen door 1.
If true, then line 18 tells us that the bear clothing will be a hat. And it doesn't need to read lines 19 - 21.
If it's false, meaning you didn't choose door 1, then it keeps reading.
And in line 20 we find out the bear clothing will be a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

From the text in line 15, it seems as though your only options for doorChoice are 1 or 2, "You enter a dark room with two doors. Do you go through #1 or #2?".
But if you are able to set the variable doorChoice to 3, than the bearClothing value would be "scarf" because you did not choose door 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

Line 30 asks if you chose option 1. If true, then the console will log line 31 and then skip lines 32 - 38.
If your bearChoice was not 1, then it will keep reading. Line 32 asks if you chose option 2. If true, then the console will log line 33 and then skip lines 34 - 38.
If your bearChoice was not 2, then it will keep reading. Line 34 asks if you chose option 3. If true, then the console will log line 35 and then skip lines 36 -38.
If your bearChoice was not 3, then it will keep reading. Line 36 asks if you did something else which will always be true if you've gotten to this point and answer to the previous questions were false. The console will log line 37.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

You offer the bear your scarf and the bear shows you a secret passage out! This is my favorite because I have way too many scarfs and I'd like to see a bear wear one of mine.
*/
