/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
function printName() {
  console.log("Joe Varela");
};

printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(lastName, firstName) {
    var firstName = "Joe";
    var lastName = "Varela";
    console.log(firstName + " " + lastName);
}
printName();

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function addNumbers(a,b) {
  var getTotal = (a + b);
  console.log(getTotal);
}

addNumbers(10,12);


// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be (man, woman) and
// the end result might be "When Harry Met Sally".  Then, call that function.
function romCom(man, woman) {
  console.log("When " + man + " Met " + woman);
}
romCom("Harry", "Sally");
romCom("Joe", "Anna");
