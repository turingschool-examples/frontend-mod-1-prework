/*
* The Fortune Teller
* Why pay a fortune teller when you can just program your fortune yourself?
*
* Store the following into variables: number of children, partner's name,
* geographic location, job title. Output your fortune to the screen like so:
* "You will be a X in Y, and married to Z with N kids."
*
*/


var numChildren = 3;
var partnerName = "Sven";
var geoLocation = "Stockholm";
var job = "Snowman";
console.log("You will be a " + job + " in " + geoLocation + ", and married to "
            + partnerName + " with " + numChildren + " kids.");


/*
* The Age Calculator
* Forgot how old you are? Calculate it!

* Store the current year in a variable.
* Store your birth year in a variable.
* Calculate your 2 possible ages based on the stored values.
* Output them to the screen like so: "You are either NN or NN",
* substituting the values.
*/

var currentYear = 2020;
var birthYear = 1967;
var numYears1 = currentYear - birthYear;
var numYears2 = currentYear - birthYear - 1;
console.log("You are either " + numYears1 + " or " + numYears2);


/*
* The Lifetime Supply Calculator
* Ever wonder how much a "lifetime supply" of your favorite snack is?
* Wonder no more!
*
* Store your current age into a variable.
* Store a maximum age into a variable.
* Store an estimated amount per day (as a number).
* Calculate how many you would eat total for the rest of your life.
* Output the result to the screen like so:
* "You will need NN to last you until the ripe old age of X".
*/

var favSnack = "oreos";
var currentAge = 52;
var maxAge = 99;
var numPerDay = 7;
var totalGoodies = (99 - 52) * 365 * numPerDay;
console.log("You will need " +  totalGoodies + " " + favSnack +
            " to last you until the ripe old age of " + maxAge + ".");
