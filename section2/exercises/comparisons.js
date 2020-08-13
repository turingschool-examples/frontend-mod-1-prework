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

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 10,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment, 
// in English, explaining what that line of code is doing, including what the comparison will evaluate to. 
// Be as technically precise as possible, but don't just copy and paste a definition from the readings. 
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.

var books = 3;
console.logs(4 < books);
// YOU DO: Explain.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry and has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats


// Determine if the dog loves to play and loves the dog park


// Determine if the dog loves to play or loves the dog park


// Determine if the dog loves to play and is a puppy

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console 
  // as you would expect? 