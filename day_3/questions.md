## Day 3 Questions

1. What is a conditional statement? Give three examples.

**A conditional statement is used to run different codes based on different conditions**
*If tests a code, which will be executed if it's true.
*Else runs a different code if the condition is false.
Else if allows you to specify a new condition if the 'if statement' is false*


1. Why might you want to use an if-statement?

**If statements are used to create conditional code. If something is true, then something will happen. If it's false, then something else will happen**

1. What is the JavaScript syntax for an if statement?

if (condition) {
  // code goes here
} else {
  // code goes here
}

1. How do you add multiple conditions to an if statement?

Else if allows you to add multiple options for conditional statements.

1. What is the JavaScript syntax for an if/else if/else statement?

if (condition) {
  // code goes here
} else if (new condition) {
  // code goes here
} else {
  // code goes here
}

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

**Switch statements are used when you want to take a single input (expression/value) & look through a bunch of options until there's a match**
*These are used when the if/else statement has a lot of choices; it makes it easier to attach a variable to a certain condition.*

ex: switch(value) {
  case 1:
  // code goes here
  break;

  case 2:
  // code goes here
  break;

  // more cases can be listed

}

#break triggers the code to stop running if the condition is true
