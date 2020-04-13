## Day 3 Questions

1. What is a conditional statement? Give three examples.  

   A conditional statement is code that checks if a statement is true and executes code based on that condition. Examples:  
   ```javascript
   var myScore = 10
   var student1Score = 11
   var pass = 8
   var testPoints = 14

   //code to check if I have passed
   if (myScore >= pass) {
     console.log("You passed!");
   } else {
     console.log("You failed.");
   }

   //code to check if student1 beat me
   if (myScore === student1Score) {
     console.log("You and student 1 tied.");
   } else if (myScore < student1Score) {
     console.log("Student 1 beat you.");
   } else {
     console.log("You beat Student 1.");
   }

   //code to check if test is passible
   if (pass > testPoints) {
     console.log("This test is impossible.");
   } else {
     console.log("What a fun test.");
   }
   ```

1. Why might you want to use an if-statement?  

   You would use an if-statement if you want your code to check on something and then do something else in response to that outcome.

1. What is the JavaScript syntax for an if statement?  

  Start with the keyword `if` followed by a condition to be checked, such as: `(a == b)`, then curly brackets `{}` that enclose code to execute.

1. How do you add multiple conditions to an if statement?  

    To add multiple conditions to an if-statement you would use the else if syntax. You can see this in my second code example to check if student1 beat me.

1. What is the JavaScript syntax for an if/else if/else statement?  

   After the curly brackets `{}` of your original if statement you can add additional keywords, such as `else` or `else if`, with their own condition to follow, for example `(a > b)`, then again another set of curly brackets, `{}`, encasing different code to be executed.

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?  

   I would think that you could use a conditional statement when needing to output boolean checks for code. For example: You have two variable, firstVariable and secondVariable, that the are somewhere in the code and you want to see if they are the same. You could log to get a boolean response.
   ```javascript
   console.log(firstVariable === secondVariable);
   ```
