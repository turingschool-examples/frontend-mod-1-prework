/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Kelsie");
};

printName(); //prints out my name

// Update the function below so that it takes an argument of your name and
// prints your name

function printFullName(first, last) { // hint.. add a parameter on this line :)
  console.log("Kelsie", "Besinger-Yeh");
};

printFullName("Kelsie", "Besinger-Yeh");

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.

function area(width, height) {
 console.log(width + height);
};

area(2, 4);


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.

function food(food1, food2) {
  console.log("My favorite foods are " + food1 + " and " + food2 +"");
};

food("Pizza", "Mac and Cheese");
