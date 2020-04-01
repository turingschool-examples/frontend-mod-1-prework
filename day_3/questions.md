## Day 3 Questions

1. What is a conditional statement? Give three examples.

    A **conditional statement** follows the logic that every decision has two separate outcomes: one that is either true or false. If the return value is true, the script should execute a specific statement. If false, the script should execute a different statement or move on to a different code block.
```javascript
var eatYourVeggies = true;  // This is an example of an "if" statement

if (eatYourVeggies == true) {
  console.log("You get dessert!") // Outcome 1: My son gets a cookie
} else {
  console.log("No dessert!") // Outcome 2: My son starts to cry!
}
```
```JavaScript
var isAwake = false;  // This is an example of an "else" statement

if (awake = true) {
  console.log("I'm awake!")
} else {
  console.log("I'm sleeping!")
}
```
```javascript
var testScore = "";

if (testScore >= 60) {
  console.log("Congrats, you passed!")
} else if (testScore == "") {      // This is an "else if" statement example
    console.log("You still need to take your test!")
} else {
  console.log("You failed miserably!")
}
```
2. Why might you want to use an if-statement?

    If-statements are helpful when you want a user to make a decision and the result of that decision determines what path they take. Typically, if the first condition of the statement is true, then a specific code is run. If the condition is untrue, another action of code is performed.

    Once my son learned how to communicate, I learned that this skill is critical to help influence his behavior. For example, if I want my son to eat his vegetables I might say, "If you eat your vegetables (true), you can have a cookie". Theoretically, there's only two outcomes, if he eats his veggies (true) he will get a cookie, if he does not eat his veggies (false) he will not get a cookie!

3. What is the JavaScript syntax for an if statement?
```javascript
  if (condition) {
    console.log(run this code if condition is true)
  } else {
    console.log(run some other code instead)
  }
  ```
4. How do you add multiple conditions to an if statement?

    One or more `else if` statements can be added to your code to allow more than two outcomes, this also expands the user's options.

5. What is the JavaScript syntax for an if/else if/else statement?
```javascript
  if (condition1) {
    console.log(run this code if condition1 is true)
  } else if (condition2) {
    console.log(run this code if condition1 is false and condition2 is true)
  } else {
    console.log(run this code if both condition1 and condition2 are false)
  }
  ```
6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

    One might use a conditional statement nested within an if-statement. For example, if I were driving my car I might encounter the following decision:
```javascript
var greenLight = false;
var yellowLight = true;
var policeCar = false;

if (greenLight == true) {
  console.log("Keep on trucking")
} else if ((yellowLight == true) && (policeCar == true)) {
  console.log("Slow your ass down!")
} else if ((yellowLight == true) && (policeCar == false)) {
  console.log("Speed up!") // Speed up because you're late to class!
} else {
  console.log("Stop or you'll crash!")
}
```
