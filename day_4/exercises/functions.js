/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Severus Snape");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName() {
  console.log("Kathryn Jackson");
};

printName();




function printName() {
  console.log("Albus Dumbledore");
};

printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function add(var1,var2){
   console.log(var1+var2);
 };

add(2,3)
//5

add(8,9)
//17

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

var man="Harry"
var woman="Sally"

function romCom(){
   console.log("When "+man+" Met "+woman);
 };

 romCom()
 //When Harry Met Sally

 var man="Jason"
 var woman="Kathryn"

 romCom();
 //When Jason met Kathryn

 var hero1="Wolverine"
 var hero2="Spider-Man"

 function comicSeries(){
   console.log("What If: "+hero1+" vs. "+hero2);
   };

comicSeries();
//What If: Wolverine vs. Spider-Man
