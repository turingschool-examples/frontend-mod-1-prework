## Day 3 Questions

1. What is a conditional statement? Give three examples.  

  A conditional statement is an if/then statement where if a condition is met, then the 2nd clause, the "then" statement happens. In code, *if* a certain condition is met (i.e. the value is true), *then* one set of code will execute, otherwise if that condition is NOT met (i.e. the value is false), a different set of code will execute.

  - If I do my homework, then I will get a good grade.
  - If Tom eats all the crackers, then he will not be hungry.
  - If the dog plays in the park, then he will sleep well at night


2. Why might you want to use an if-statement?

  I would use an if statement if I want a certain block of code to run ONLY if certain conditions are met. For example, if I only want a certain message to print to the user if they click a button, I could use an if statement to evaluate if some sort of variable like "buttonClicked" was true or false, and then only execute the code if it evaluates to true.

3. What is the JavaScript syntax for an if statement?
```
if (condition) {
  //code to execute if condition === true;
```
4. How do you add multiple conditions to an if statement?

  You use the keywords `if`, `else if` (there can but many elif statements), and then `else`. Each of these keywords will be followed by the condition, and if it is true, will execute the following line(s) of code.

5. What is the JavaScript syntax for an if/else if/else statement?
```
if (1stcondition) {
  //code to execute if 1stcondition === true;
} else if (2ndcondition) {
  //code to execute if 1stcondition === false & 2ndcondition === true;
} else (3rdcondition) {
  //code to execute if 1st & 2nd conditions===false;
};
```

6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

  It seems that the syntax for a conditional statement would ALWAYS need to include an `if` statement, whether it's just that, an if/else statement, or a block of code containing multiple `else if` statements in between. Additionally, that `if` statement always need to evaluate whether the condition is true or false. I can't think of any other way to use a conditional statement. 
