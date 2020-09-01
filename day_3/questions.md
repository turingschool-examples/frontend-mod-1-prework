## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement tells the program what to do in a given situation. Daily life conditional example: if I'm hungry in the afternoon, I eat a snack, otherwise, I don't eat a snack. A conditional is probably used in Slack when messages are sent: if someone receives a message, an alert sound is made, otherwise nothing happens.

2. Why might you want to use an `if` statement?

If statements are used to evaluate conditions and decide what code to run. This could be done to display results of a quiz someone takes online.

3. What is the JavaScript syntax for an `if` statement?

```JavaScript
if (condition) {
  console.log(); //block of code to execute if condition is true
}
```
4. How do you add multiple conditions to an `if` statement?

You add multiple conditions with an 'else if' statement.

5. What is the JavaScript syntax for an `if/else` statement?

```JavaScript
if (condition1) {
  console.log(); //block of code to execute if condition1 is true
} else if (condition2) {
  console.log(); //block of code to execute if condition1 is false and condition2 is true
} else if (condition3) {
  console.log(); //block of code to execute if condition1 and condition2 are false and condition3 is true
} else {
  console.log(); //block of code to execute if none of the above conditions are true
}
```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

Rather than running through all the code and checking each 'if' statement, you could use a 'switch' statement which speeds up the performance with the use of 'break' statements.
