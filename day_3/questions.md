## Day 3 Questions

1. What is a conditional statement? Give three examples.  
Conditional statements allow your code to make decisions on whether or not certain code needs to run. In a flowchart, there comes a point when you have to make a decision and the code can take one of two paths, each path has different tasks (or code). In order to determine which path to take, you must set a "condition". The conditional values are either true or false. Based on the answer, certain code will trigger.

Ex 1: If Statement
Ex 2: If...Else Statement
Ex 3: If...Else If...Else Statement

1. Why might you want to use an if-statement?  

 You might want to use an if-statement if you are writing a script that requires any sort of decision making.
 The if-statement checks a condition and evaluates whether it is true or false. Depending on the outcome, subsequent code will be executed.  

1. What is the JavaScript syntax for an if statement?  

If (condition) {
  line of code to be executed if condition is true;
}

Ex:
if (pizza == 'cheese') {
  console.log("pizza is yummy");
}

1. How do you add multiple conditions to an if statement?  

You use the logical operator "&&" to combine more than one condition and compare the results of more than one comparison operator (==, <, <=, etc...).

Ex:
  if (cupsOfFlour == 1 && hasSauce == true) {
  console.log("I cannot make pizza");

1. What is the JavaScript syntax for an if/else if/else statement?  

if (condition1) {
 line of code to be executed if condition is true;
} else if (condition2) {
  line of code to be executed if condition1 is false and condition2 is true;
} else (condition) {
  line of code to be executed if none of the conditions above are true;
}

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?  

Yes, we can use if/else and else statements if we want to create more complex statements where we may have multiple conditions, decisions and outcomes that require different code.
