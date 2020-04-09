/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/decision-making.js`

If/Else Statements are expressions your program uses evaluate to different outcomes.
Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
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

if (bearChoice === 3) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearClothing === "") {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

  This would be a scenario where the user is forced to make a decision. If they enter door 1, they will encounter a
  bear putting on a hat. In this scenario, the first block of code would run because entering door 1 makes the statement true
  and runs the code beginning on line 18. If they enter door 2, we know that this will create an outcome where they encounter a bear wearing
  a scarf. In this instance, we know that the second block of code, beginning on line 20, would run because we know that door 2 is not equal
  to door 1.

2. What variable has a new value assigned to it after the first if statement executes?

  The bearClothing variable is assigned once a decision is made on which door to choose. If door 1 is chosen, then the bearClothing will be
  assigned as "hat". Therefore, if door 1 is not chosen we know that the bearClothing will default to a scarf.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

   Since the first statement returns a value of false, we know that the value of bearClothing would be a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

  Starting on line 31, the code is asking if the bearChoice is strictly equal to 3. If true, the code will return "You offer the bear your hat
  or scarf and the bear show you a secreat passage out! If not true, the code will proceed to line 32 and ask if the bearChoice is strictly
  equal to 2. If true, the code will return "You tell the bear the " + bearClothing + " is too small and it starts to cry!". If the bearChoice is
  not stictly equal to 2, the code will proceed to line 34 and ask if the bear is strictly wearing "", which could be interpreted that the bear
  is not wearing clothing. If this is true, the code will return "You run as fast as you can into the next room, It's full of snakes!". However,
  if line 34 returns a value of false, we know that line 37 will return the statement "You stay with the bear and become its best friend" because
  none of the other variables returned a value of true.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  Our hero enters door 1 and sees a bear wearing a hat. Our hero notices that the bear's hat is too small and offers his own
  hat as a gift. The bear is so happy that he decides to show our hero a secret passage out.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

  Our hero enters door 1 and sees a bear wearing a hat. The hero notices the bear's hat is too small and decides to make fun
  of him. The bear is saddened by our hero's poor choices and starts to cry.

7. What is your favorite ending?

  Personally, I think the bear is lonely and just needs a friend. I also think bears wearing hats is not the greatest fashion statement or
  very utilitarian, however, a scarf would be helpful during the cold nights and could also be used as a hat. Therefore, I would decide to
  go through door 2, with my scarf in tow, and we would decide to flatten the curve together and we would become best of friends!

*/
