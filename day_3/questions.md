## Day 3 Questions

1. What is a conditional statement? Give three examples.
   * A conditional statement is a set of rules performed if a condition is met using the concept if/then/else.  *If* a condition is met, *then* it will run the line(s) of code, *else* it will run the next line(s) of code.
###### Example:
```
var hungry = 8;

if (hungry < 10) {
  console.log("I'm hungry!");
} else if (hungry >= 10) {
  console.log("I'm full!");
}
// returns "I'm hungry!"
```
```
var numberOfKittyPets = 17;

if (numberOfKittyPets < 10) {
  console.log("More pets plz");
} else if (numberOfKittyPets >= 10) {
  console.log("BITE!!!");
}
// returns "BITE!!!"
```
```
var thirstLevel = 10;

if (thirstLevel < 3) {
  console.log("DON'T STOP");
} else if (thirstLevel == 4) {
  console.log("Almost there, keep drinking!");
} else if (thirstLevel == 5) {
  console.log("JUUUST right");
} else {
  console.log("I gotta pee!");
}
// returns "I gotta pee!"
```
2.  Why might you want to use an if-statement?
    * An if-statement is used if there is a decision to make in order to determine what line(s) of code should run.
3. What is the JavaScript syntax for an if statement?
```
var input = 0;
if (input === 0) {
  console.log("say this");
} else {
  console.log("say this instead");
}
// returns "say this"
```
4. How do you add multiple conditions to an if statement?
   * Multiple conditions can be added to an if statement using the `else if` statement.  You must add another condition after `else if`.  If you only have one condition to evaluate, `else` must be used.
5. What is the JavaScript syntax for an if/else if/else statement?
```
var input = 4;
if (input < 4) {
  console.log("say this");
} else if (input == 5) {
  console.log("say this instead");
} else {
  console.log("this is my final answer");
}
// returns "this is my final answer"
```
6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
   * There are multiple other ways to use a conditional statement.  One we have already covered is in a `for` loop.
