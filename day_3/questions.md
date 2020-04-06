## Day 3 Questions

### 1. What is a conditional statement? Give three examples.

A conditional statement is a piece of a condition that that provides structured code direction based on if the condition itself is true or false. It is defined by recognized keywords in Javascript such as `if`, `else if`, and `else`. Conditional statements tell the program that if the condition is met, then your code executes "x". They can also tell the program that if the condition is not met, then your code will execute "y" or "z" etc. Each conditional statement is paired with something your code will have to execute.

### 2. Why might you want to use an if-statement?

You would likely need to use an if-statement if there is not a guarantee that your variable will have the same value in every instance. So probably anytime you have a variable and a condition, you need an if-statement.

### 3. What is the JavaScript syntax for an if statement?

```
var footballTeam = "Buffalo Bills"

if (footballTeam == "Buffalo Bills") {
  console.log("Go Bills!");
}
```

### 4. How do you add multiple conditions to an if statement?

You add multiple conditions to a statement by adding `else if` and `else` conditional statements. `else if` statements will evaluate each condition in order. If the ones preceding it are false but that statement is true, then it executes the script appended to it. `else` statements will only execute if all the previous conditions are false. If you only need to direct your code dichotomously, you probably only need to use an `if` and an `else` conditional statement. If there are more conditions, you will need at least one `else if` conditional statement as well.

### 5. What is the JavaScript syntax for an if/else if/else statement?

```
var footballTeam = "Buffalo Bills"

if (footballTeam == "Buffalo Bills") {
  console.log("Go Bills!");
}
else if (footballTeam == "New England Patriots") {
  console.log("BOOOOOOOOOOOOO!!!!!")
}
else {
  console.log("The Bills are going to beat you this year.")
}
```

### 6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

You could use conditional statements in loops to determine when to begin, stop or maybe even when to change the progression of the loop. 
