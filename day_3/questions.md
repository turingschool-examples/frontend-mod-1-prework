## Day 3 Questions

1. What is a conditional statement? Give three examples.
 * A  statement that sets a condition using comparison operators. If the condition is met (i.e., true), then the code will execute a specified statement; If it is not met (i.e., false), then it will execute a different statement. It's a way to create different pathways of code for the interpreter to run depending on values entered by a user.
   - If testScore >= 80, then log statement "You have passed the test." If testScore is < 80, then log the statement: "You did not pass the test. "
   - If musicDecibel <= 70, then log statement "Enjoy your listening." If musicDecibel > 71, log statement: "Turn it down. Your neighbor is knocking."
   - If ouncesWater >= 64, then log statement "You are hydrated."; If ouncesWater < 64, log statement: "Drink up, buttercup."

1. Why might you want to use an if-statement?
 * Use an if-statement to create more complex and dynamic code that runs based on the choices and input of a user.

1. What is the JavaScript syntax for an if statement?

 ```javascript

var variableNumber == 1

 if (variableNumber == 1) {
   console.log("This is the number 1");
 } else {
   console.log("That is not the number 1");
 }
 ```

1. How do you add multiple conditions to an if statement?
 * You can use the following logical operators:
   - **logical AND** `&&` : *both* conditions must be *true*
   - **logical OR** `||` :  *one or both* conditions must be *true*

1. What is the JavaScript syntax for an if/else if/else statement?
 * Use `else if` (condition: variable, <comparison operator>, <value>) {console.log("statement")}
 * Example below:

```javascript

var weather = 'rainy';

if (weather == 'sunny') {
  console.log("sunscreen");
} else if (weather == 'rainy') {
  console.log("umbrella");
} else if (weather == 'snowy') {
  console.log("coat");
} else if (weather == 'icy') {
  console.log("yak traks");
} else{
  console.log("good to go!");
}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
 * We might want to test boolean values, i.e., test a variable to see if it is true, or if it even exists.
