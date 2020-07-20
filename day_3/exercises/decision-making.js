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
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Reflection Questions
1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.

      if (doorChoice === 1) {
        bearClothing = "hat";
      } else {
        bearClothing = "scarf";
      }

    In this if..else statement, it is determined that if the variable doorChoice is strictly equal to the number 1,
    the value of the variable bearClothing will then be set to the string "hat". If the variable doorChoice
    evaluates to anything other than the number 1, the value of the variable bearClothing will then be set to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

    The variable bearClothing is an empty string until the first if-statement executes,
    then is assigned a new value based on the first if-statement and evaluation of the condition
    comparing the value of the variable doorChoice to the number 1.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    If doorChoice is set equal to the number 3, the value of the variable BearClothing would be set to the string "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.

      if (bearChoice === 1) {
      console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
      } else if (bearChoice === 2) {
      console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
      } else if (bearClothing === 3) {
      console.log("You run as fast as you can into the next room. It's full of snakes!");
      } else {
      console.log("You stay with the bear and become it's best friend!");
      }

    In this if/else if/else statement, it is determined that the first line of code will run to print the string
    "You offer the bear your hat and the bear shows you a secret passage out!" because the variable bearChoice
    is equal to the number 1. It is also shown that if the variable bearChoice were set equal to the number 2, the code would be
    run to print the string "You tell the bear the hat is too small and it starts to cry!".
    It is then shown that if the variable bearClothing (*EDITED: I assumed this was a typo and should actually also refer to the variable bearChoice*)
    were set equal to the number 3, the code would be run to print the string "You run as fast as you can into the next room. It's full of snakes!".
    If the variable bearChoice were evaluated to anything other than strictly equal to the numbers 1, 2 or 3, the code would run to
    print the string "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    Assuming that the variable doorChoice in this case remains equal to the number 1, the code would initially still run to print the strings
    "You see a bear putting on a hat", then "It looks like that hat is too small for the bear, do you..." and then provide the list of three choices.
    (*See note in answer to Question4 regarding edit to the assumed typo on line 34*)
    Because the variable bearChoice in this case has been set equal to the number 3, the code will then be run to print the string
    "You run as fast as you can into the next room. It's full of snakes!".

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    In this case that the variable doorChoice equals the number 1 and the variable bearChoice equals the nuber 2, the code would initially still run to
    print the strings "You see a bear putting on a hat", then "It looks like that hat is too small for the bear, do you..." and then provide the list of three choices.
    Because the value of the variable bearChoice has been set equal to the number 2, the code will then be run to print the string
    "You tell the bear the hat is too small and it starts to cry!".

7. What is your favorite ending?

    My favorite ending is the result of the values of both variables doorChoice and  bearChoice being set equal to the number 1.
    The doorChoice actually seems less consequential than the choice made when facing the bear, but it makes less sense to me that a scarf would seem 'too small'...
    I like that choosing the option wherin the value of bearCHoice is set to the number 1 reflects the reciprocal effect of kindly offering help to the bear!
*/
