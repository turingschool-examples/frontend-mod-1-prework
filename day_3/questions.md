## Day 3 Questions

1. What is a conditional statement? Give three examples.
  + A conditional statement combines an if-statement with conditional operators to evaluate whether a condition is true or false.
```
var eggs = 11;
if (eggs < 12) {
  console.log("You do not have a dozen yet!");
} else if (eggs == 12) {
  console.log("You have a dozen eggs!")
} else {
  console.log("You have more than a dozen eggs!")
}
```
1. Why might you want to use an if-statement?
  + You might want to use an if-statement to create a more robust statement that can handle a variety of input/conditions. Based on the specific input and defined conditions, the if-statement can "react" in a number of different ways to achieve an outcome.
1. What is the JavaScript syntax for an if statement?
```
if (condition1) {
  //lines of code if condition1 is true
```
1. How do you add multiple conditions to an if statement?
  + You can utilize the commands `else` and `else if` to specify multiple conditions to an if-statement. `else if` allows you to specify a new condition if the first condition is false. `else` also specifies a new condition to be executed if the first `if` statement and subsequent `else if` statements (if applicable) are all false.
1. What is the JavaScript syntax for an if/else if/else statement?
```
if (condition1) {
  //lines of code if condition1 is true
} else if (condition2) {
  //lines of code if condition1 is false and condition2 is true
} else if (condition3) {
  //lines of code if condition1 and condition2 are false and condition3 is true
} else {
  //lines of code if none of the above are true
};
```
1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
  +
