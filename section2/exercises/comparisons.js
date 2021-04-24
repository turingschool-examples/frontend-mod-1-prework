/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?

console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);

// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true

console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false

console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("Is numberStudents less than or eual to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.

// This is will log the result of asking: Is the number 4 less than the number 9)?
// The result will print `true`

var books = 3;
console.log(4 < books);
// YOU DO: Explain.

//The first line is declaring the variable `books`, and assigning it to the value of 3 (number data type)
//The second line will log the result of asking: Is the number 4 less than the number of books?
//The result will print `false`

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.

//The first line is declaring the variable `friends`, and assigning it to the value of 6 (number data type)
//The second line is declaring the variable `siblings`, and assigning it to the value of 2 (number data type)
//The third line will log the result of asking: Is the value assigned to friends greater than the value assigned to siblings
//The result will be `true`

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.

//The first line is declaring the variable `attendees`, and assigning it the value of 9 (number data type)
//The second line is declaring the variable `meals`, and assigning it the value of 8 (number data type)
//The third line will log the result of asking: Is the number of attendees not equal to the number of meals?
// The result will be `true`

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);
//`true`

// Determine if the dog loves to play and loves the dog park

console.log(lovesToPlay && lovesDogPark);
//`false`

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);
//`true`

// Determine if the dog loves to play and is a puppy

console.log(lovesToPlay && age);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:

/*
  The result was: 1
  We did not assign the value of `age` to a boolean `true` or `false` answer... but more interestingly,
  I noticed that if I change the value of `lovesToPlay` = `false`, the result prints false.
  This tells me that if the state is inherently `true`, then perhaps by coercion, Javascript prints the number
  because there are no flasehoods in the statement.
  However, if there is a `false` in the statement, Javascript automatically renders the statement `false`.
  This may only be the case with Logical Operators, as I don't have any experience with too much else yet.
  I came to this conclusion after working through the Pizza Making question in the if-statement excersize
  and observing the behavior of the hasSauce value.
  */

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
//
