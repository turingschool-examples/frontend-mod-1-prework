## Day 3 Questions

## What is a conditional statement? Give three examples.

A conditional statement executes code blocks depending on whether or not a specified condition is determined to be true. *if, else if,* and *else* are example of these. The first executes if the statement is true; the second provides a new condition if the first is found to be false; and the third executes if all other conditions are found to be false.

## Why might you want to use an if-statement?

If statements allow for decision making. They allow programs to behave differently depending on data and inputs.

## What is the JavaScript syntax for an if statement?

`if (condition) {
  code;
  }`
"if" being our keyword, the condition specifying what data to check, and the code(s) to execute going between curly braces.

## How do you add multiple conditions to an if statement?

`&&` signifies AND, which causes both conditions to be checked. `||` signifies OR, which means only one condition needs to be true for the code to run. These can be "short circuited" and behave differently when truthy or falsy elements are in play.

## What is the JavaScript syntax for an if/else if/else statement?

`if (condition1) {
  code option 1;
  } else if (condition2) {
  code option two;
  } else {
  code option three;
  }`

## Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

We might want to use them to specify a certain order that things be done when running a program, or have a "when" trigger, i.e. don't move on until this process has gotten at least so far. 
