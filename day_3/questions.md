## Day 3 Questions

1. What is a conditional statement? Give three examples.

* A conditional statement evaluates an expression, and decides on a program path depending on the boolean value that is returned. Examples include:

 * **if** statements
 * **if/else** statements
 * **if/else if** statements
 * **switch** statements


2. Why might you want to use an if-statement?

* An **if** statement evaluates if a condition is true, and if so runs code contained in the **if** statement. You might want to use an **if** statement to evaluate whether a test score is high enough to pass, to determine the contents of a welcome message based on what user information has been provided, to display the appropriate greeting based on what time it is, or any other situation where you need to evaluate a condition in order to make a decision when your script has multiple possible paths/outcomes.

3. What is the JavaScript syntax for an if statement?

  ```JavaScript
  if (varName comparisonOperator value) {
    console.log('run whatever is in this code block');
  }
  ```

1. How do you add multiple conditions to an if statement?

 * Use logical operators to combine more than one condition!


5. What is the JavaScript syntax for an if/else statement?

  ```JavaScript
  if (varName comparisonOperator value) {
    console.log('run whatever is in this code block');
  } else {
    console.log('whatever is in this code block will run instead');
  }
  ```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

* Conditional statements are necessary to create loops. A loop must contain a conditional statement to determine how many times the loop executes.
