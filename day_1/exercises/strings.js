/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/comparisons.js`
*/

// example: Write code below to log your name in the console:
console.log("Alan Turing");

// Write code below to log `Welcome to Turing!` in the console:
console.log("Welcome to Turing!"/*YOUR CODE HERE*/);

// Write code below to log `99 bottles of pop on the wall...`:
console.log("99 bottles of pop on the wall...");// YOUR CODE HERE
//Or if i understand this correctly this should work
var bottleNumber = 99;
var songPart1 = " bottles of pop on the wall, ";
var songPart2 = " bottles of pop, take one down pass it around. ";
console.log(bottleNumber + songPart1 + bottleNumber + songPart2 + (bottleNumber - 1) + songPart1);
