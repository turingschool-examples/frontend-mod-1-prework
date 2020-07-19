## Day 3 Questions

1. What is a conditional statement? Give three examples.

  1. 'if'- This statement runs the code block if the condition is met(true).

  2. 'else'- If the conditional was not met(false) then run this block of code

  3. 'else if'- This makes a new conditional to test for if the previous conditionals all come back false and we want to test our variables further.

1. Why might you want to use an if-statement?

In order to determine if the current code block should be run or if value of the data indicates that we should run the next code block in line.

1. What is the JavaScript syntax for an if statement?

```
if (var <= 10){
  console.log("Yay!");
}

```
1. How do you add multiple conditions to an if statement?

if ((exampleCondtion == true) && (otherCondtionToMeet >= 10)) {
  console.log("Good Times")
}

1. What is the JavaScript syntax for an if/else if/else statement?

```

if (num1 <= 10){
  console.log("Yay!");
} else if (num1 <= 15) {
  console.log("Even Better!")
} else {
  console.log("Too Much!");
}

```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

We can use these statements to trigger methods and manipulate variables in a block of code, actually changing the values, not just seeing if variables are truthy or falsey values.
