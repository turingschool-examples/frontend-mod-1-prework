/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/comparisons.js`
*/

// example: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

// What happens if you include other data types when you use concatination? What data type is logged after we run this code?
//Type Coercion - the data type gets converted to a string. 1 becomes "1". False becomes "False"

 // Write code that combines the variables below into a string that
 // reads "The quick red fox jumped over the lazy brown dog":
var animal_1 = "quick red fox";
var animal_2 = "lazy brown dog";
console.log("The " + animal_1 + " jumped over the " + animal_2);

// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables
animal_1 = "tortoise";
animal_2 = "hare";
console.log("In a predictable result, the " + animal_1 + " beat the " + animal_2 + "!");
