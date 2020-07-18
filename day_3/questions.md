## Day 3 Questions

1. What is a conditional statement? Give three examples.

   A **conditional statement** represents components of a decision that says what to do in a given situation, based on a concept of if/then/else.

   *example:*
   ```javascript
   var numDogs = 3;

   if (numDogs <= 3) {
     console.log("You need more dogs!");
   } else {
     console.log("You can never have too many dogs!");
   }
  ```
  *example:*
  ```javascript
  var meal = "lunch";

console.log("What's your favorite meal of the day?");
  if (meal == "breakfast") {
    console.log("It's the most important meal, after all!");
  } else if (meal == "lunch") {
    console.log("Me too! I love a good soup and salad deal at a restaurant.");
  } else if (meal == "dinner") {
    console.log("I prefer breakfast. But there's always breakfast for dinner!");
  } else {
    console.log("Well... as long as you're eating!");
  }
  ```
  *example:*
  ```javascript
  var band = "The Beach Boys"

  console.log("What's the best band in the world?");
    if (band == "The Beach Boys") {
      console.log("Correct!");
    } else {
      console.log("I think you meant The Beach Boys");
    }
  ```
1. Why might you want to use an if-statement?

  You'd want to use an **if-statement** when you have alternative code blocks to run that depend on the evaluation of the conditions you want checked first.

1. What is the JavaScript syntax for an if statement?

```javascript
  if (condition) {
    // code to execute if value is true
  }
```

1. How do you add multiple conditions to an if statement?

  You add connecting `else if` statements from the previous `if ` statement, ending with `else`.

1. What is the JavaScript syntax for an if/else if/else statement?

```javascript
  if (condition1) {
    // code to execute if condition1 is true
  } else if (condition2) {
    //code to execute if condition2 is true
  } else {
    //code to execute if none of the previous conditions are true
  }
```
1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

   You can also use a **ternary operatory** to test a condition and return one expression if it is `true` and another if it evaluates to `false`, which can simplify an `if...else` block of code.

   Another way of using a conditional statement is with a **switch statement**, which can input a single value and execute corresponding code by matching it to a number of choices for the one that fits. When you have more choices, it saves time on the code you need to run.
