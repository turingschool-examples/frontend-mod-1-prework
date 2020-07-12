/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/comparisons.js`
*/

// example: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");
//expected output: The Chudley Cannons are Ron's favorite Quidditch team

// What happens if you include other data types when you use concatination? What data type is logged after we run this code?
//When using concatination, JavaScript helps out by converting other numbers into a string

var number = 7;
var creatures = "unicorns";

console.log("My zoo has " + number + " " + creatures + "!")
//Type coercion, JavaScript helps you out by converting the number into a string.
//expected output is a string: My zoo has 7 unicorns!

 // Write code that combines the variables below into a string that
 // reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke);
//expected output: The quick red fox jumped over the lazy brown dog

// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

 console.log("In a predictable result, the " + slowPoke + " beat the " + speedy);
