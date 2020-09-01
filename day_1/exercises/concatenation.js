/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A few are completed for you, to provide an example.

You should be able to run this
file from your terminal with the command `node day_1/exercises/concatenation.js`
*/

// example: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

// What happens if you include other data types when you use concatination? What data type is logged after we run this code?
// ANSWER to question on line 17: The other data types are included, but they end up as part of the string.

var number = 7;
var creatures = "unicorns";

console.log("My zoo has " + number + " " + creatures + "!")

// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke);

// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!");
