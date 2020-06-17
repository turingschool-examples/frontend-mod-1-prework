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
 The first part 'if' is seting the keyword to tell javascript what action is to be proformed.
 The next section '(doorChoice === 1) is setting the condtition to be meet to test is true which in this case it is.
 The next part encases the code to be ran if ture which is inside the curly braces which this is true and prints "hat" from { to }
 The next section 'else' would be ran if the condtition was false example if doorChoice was set to 2 it would print "scarf" from {to }

2. What variable has a new value assigned to it after the first if statement executes?
  bearClothing = "hat" this is the 1st varible to change. In the top declarations bearClothing hold a value of ""
  Then when the if statment is ran it updates the value to "hat" this happen due to the if statment being true

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  If you changed the doorChoice to 3, the doorChoice would nmo longer === 1 in the condtition.
  This would bypass the frist { bearClothing = "hat"; } and move to the else { bearClothing = "scarf" }
  So the updated value would show as "scarf" and not "hat" this would be the samme for any value that does not === 1

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
  This log is showing the if else if and else outcomes in a funs little story. In the previous sections with the
  value was assgined to the varibles. This section of code expands upon that. The first if is the key
  like above then the (bearChoice === 1) is the condtition to be meet. If the condtition is meet then the output
  would run "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
  which the bearClothing was decided above in this case "hat". the condtition would be meet if bearChoice is === 1
  which in this case it is so this would run. If the set to 2 or 3 it would run one of the 2 middle options
  respectivly 2 === 2 or 3 === 3 whare bearChoice equals 2 or 3. The else if acts as key then runs the through the
  condtition simular to the if statment and the bearChoice === 2 would act as the condtition if true it would log
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!" or
  "You run as fast as you can into the next room. It's full of snakes!" in this case value of bearClothing being hat
  if this does not meet any of the previous condtitions the out put would hit the final else statment and log
  "You stay with the bear and become it's best friend!" this would happen if any of the values are not === 1,
  === 2, 0r === 3

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
if bearChoice was equal to 3 the final out put would be
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  The outcome would be that doorChoice would pass thorugh the if statment and provide "hat"
  Then in the sencond if statment bearChoice would pass thourgh the if statemnt to the if else === 2
  The output would be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
    My personal favorite ending would be where the bearChoice is > 3
    which would pass thorugh all the if and if else statments to log
    "You stay with the bear and become it's best friend!"
*/
