// In the exercises below, write your own code where indicated
// to achieve the desired result. Run this code using node in terminal.

// example: Write code below to assign your name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// Write code below to assign the string 'Dobby' to a variable and
// log that variable to the console:
var houseElf = "Dobby";
console.log(houseElf);

// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console:
var warning = "Harry Potter must not return to Hogwarts!";
console.log(warning);

// example: Write code below to add 2 to the variable `students` and
// log the result:

//Option 1: the code below works by reassigning the variable students:
var students = 22;
students = 22 + 2;
console.log(students);

//Option 2: the code below works by adding two variables within a third variable, then logging that variable:
var students = 22;
var plusTwo = 2;
var totalStudents = students + plusTwo;
console.log(totalStudents);

//Option 3: could also work by creating a new variable with the sum of 22 and 2, then logging that variable:
var students = 22;
var moreStudents = 22 + 2;
console.log(moreStudents);

//Option 4: using the variable students within a variable to add 2 to it's initial value:
var students = 22;
var moreStudents = students + 2;
console.log(moreStudents);

// Write the code below to subtract 2 students from the `students` variable and
// log the result:

//Option 1:
var students = 22;
students = 22 - 2;
console.log(students);

//result is 20

//Option 2:
var students = 22;
var minusTwo = 2;
var totalStudents = students - minusTwo;
console.log(totalStudents);

//Option 3:
var students = 22;
var lessStudents = 22 - 2;
console.log(lessStudents);

//Option 4:
var students = 22;
var lessStudents = students - 2;
console.log(lessStudents);
