/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Whitney Wilkes");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

> function printsMyName(firstName, middleName, lastName) {
... ;console.log("Whitney " + " Leigh " + " Wilkes");
... };
undefined
>
> printsMyName("Whitney Leigh Wilkes");
Whitney  Leigh  Wilkes
undefined
>

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

> function sumOf(firstNumber, secondNumber) {
... let numbersCalculated = firstNumber + secondNumber;
... console.log(numbersCalculated)
... };
undefined
>
> sumOf(134, 466);
600
undefined
>

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

> function fishingLyrics (lineOne, lineTwo) {
...   let favoriteVerse = lineOne + " / " + lineTwo + " / " + "Stop and talk about it"
... console.log(favoriteVerse);
... }
undefined
> fishingLyrics("Words walk by", "Describing definition");
Words walk by / Describing definition / Stop and talk about it
undefined
>
