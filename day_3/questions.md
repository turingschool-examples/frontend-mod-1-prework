## Day 3 Questions

1. What is a conditional statement? Give three examples.

Conditional statement checks a condition. If first condition is true, the code executes the first
statement, if the condition is false, the code executes the second statement.  

Example 1:
```JavaScript
var weather = "rainy";

if (weather == "sunny") {
  console.log ("Take glasses");
}
else {
  console.log ("Leave glasses at home");
}

```
Example 2:
```JavaScript
var chickenTemperature = 100;

if ( chickenTemperature <= 140) {
  console.log("Chicken is not ready!");
}
else if (chickenTemperature > 140 && chickenTemperature <165) {
  console.log("Wait a little more!");
}
else {
  console.log("It's ready to eat!")
}
```
Example 3:
```JavaScript
var ageToVote = 22;

if (ageToVote < 18) {
  console.log("Not eligible to vote");
}
else {
  console.log("Eligible to vote");
}
```
1. Why might you want to use an if-statement?

If I need to take an action based on a condition.

1. What is the JavaScript syntax for an if statement?

Use keyword if to specify the block of code if the condition is true. Use round brackets
to specify condition after the keyword if. Then, use curly brackets to show the action that needs to be done if the condition is true.

```Javascript
if (condition1) {
  //action1 if condition1 is true;
}
```
1. How do you add multiple conditions to an if statement?

We can add multiple conditions using logical operators || (OR) and && (AND).

1. What is the JavaScript syntax for an if/else if/else statement?

```Javascript
if (condition1) {
  //action1 if condition1 is true;
}
else if (condition2) {
  //action2 if condition1 is false;
}
else {
  //action3 if none of the listed conditions are true;
}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

We can use if/else and if/else if statements to take different actions based on different conditions. We can also try
using conditional statement to check one variable at a time. 
