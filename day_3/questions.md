## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement can be simply explained as an if/then statement. An example would be: If I drive my car, then I will my fuel level will go down. An example in a web application would be: If my password/username is wrong, then I must try to login again.

2. Why might you want to use an `if` statement?

You want to use an if statement if there are multiple paths regarding a user decision. It will allow the script to run different blocks of code based off certain values and if the conditions are true || false.

3. What is the JavaScript syntax for an `if` statement?
```JavaScript
var x = 1;
if (x == 1) {
  console.log("The condition is true");
}
```
4. How do you add multiple conditions to an `if` statement?

You can add multiple arguments with the `&&` operator that means 'and', the `||` operator which means 'or', and the `!` operator which means 'nor'. These are known as logical operators. Example:
```JavaScript
var x = 1;
var y = 2;
if (x > 0 && y <= 3) {
  console.log ("This statement is true");
}

if (x == 0 || y > 1) {
  console.log("This statement is true");
}
```
5. What is the JavaScript syntax for an `if/else` statement?
```JavaScript
var x = 1;
if (x == 0) {
  console.log ("You have 0 in this variable!");
}
  else {
    console.log("some is better than none!");
  }
```
6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

Theres the concept of switch statements, which is kind of the same idea as an if statement, but deals with a lot less code. A switch statement takes a single variable called a switch value, and runs a through a list of values that the switch value could be, finds the matching one, then executes some code block that corresponds with that equivalent value. I'm not to familiar with this concept but I cannot wait to learn more about it.
