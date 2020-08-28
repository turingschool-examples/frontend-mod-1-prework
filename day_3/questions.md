## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
A conditional statement allows you to make decisions on what to do next based on an if/then/else statement being met.
Daily life example: If I am hungry, then I will eat lunch.
Web app example: If I scroll to the bottom of the article, then a pop up asking me to sign up for their newsletter will appear.

2. Why might you want to use an `if` statement?
`If` statements allow you to choose 2 or more different paths. Each path can perform different tasks.

3. What is the JavaScript syntax for an `if` statement?
```JavaScript
if (condition1) {
    //block of code if condition1 is true
};
```

4. How do you add multiple conditions to an `if` statement?
You can create an `if/else` statement, which evaluates a block of code when their condition is true.

5. What is the JavaScript syntax for an `if/else` statement?
```JavaScript
if (condition1) {
    //block of code if condition1 is true
} else if (condition2) {
    //block of code if condition1 is false and condition2 is true.
} else if (condition3) {
    //block of code if condition1 is false and condition2 is false and condition3 is true.
} else {
    //block of code if none of the conditions above are true.
};
```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?
`switch` statements, which allow you to indicate a possible value for a given variable and the code that should run if the variable matches that value.
