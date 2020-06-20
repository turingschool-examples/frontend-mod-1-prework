/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_3/exercises/comparisons.js`
*/


// example: log the result of the comparison: is firstVar greater than secondVar?
var firstVar = 1;
var secondVar = 2;
console.log(firstVar > secondVar); // this should return: false

// log the result of the comparison: is firstVar less than secondVar?
// this should return: true
console.log(firstVar < secondVar);

// log the result of the comparison: is firstVar equal to thirdVar? (use the == operator)
// this should return: true
var thirdVar = "1";
console.log(firstVar == thirdVar);

/*
note: this is an example of type coercion. Although thirdVar is a string and secondVar is an integer,
this statement still evaluated to true. Javascript forces the thirdVar into an integer to
perform this evaluation
*/

// log the result of the comparison: is firstVar strictly equal to thirdVar? (use the === operator)
// this should return: false
console.log(firstVar === thirdVar);
/*
note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the firstVar is an integer value and the thirdVar is a string value, although they are both equal to 10,
the comparison still evaluates to false.
*/

// log the result of the comparison: is firstVar not equal to secondVar?
// this should return: true
console.log(firstVar != secondVar);

// log the result of the comparison: is secondVar greater than or equal to 2?
// this should return: true
console.log(secondVar >= 2);

// log the result of the comparison: is secondVar greater than or equal to 3?
// this should return: false
console.log(secondVar >= 3);

// log the result of the comparison: is secondVar less than or equal to 2?
// this should return: true
console.log(secondVar <= 2);

// log the result of the comparison: is secondVar less than or equal to 3?
// this should return: true
console.log(secondVar <= 3);

//TODO: Is this a bit wonky of an example?

// log the result of the comparison: is 0 equal to true?
// this should return: false
console.log(0 == true);

// note: this is an example of a falsy value. In an evalution like this, 0 is considered to be false

// log the result of the comparison: is 1 equal to true?
// this should return: true
console.log(1 == true);

// note: this is an example of a truthy value. In an evalution like this, 1 is considered to be true
