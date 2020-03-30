## Day 3 Questions

#### 1. What is a conditional statement? Give three examples.

Conditional statements allow us to organize step by step instructions that need to be taken to reach all the different results that a script can follow. They allows to take specific paths depending on which conditions are met or not. Usually conditional statements will let know which line of code should be running once an action is triggered. In order to successfully use such statements it is important to write all the available scenarios that the code should follow.

A conditional statement is bases on the *if/then/else* concept, which means that  **if** a condition is met, **then** your code executes one or more statements, **else** the code does something different.

Examples:

```JavaScript
//example 1, the conditional statement is done by comparing the amount of not-parked cars with the amount of parked cars, if the amount of parked cars is greater than the amount of not-parked cars, it will mean that there is not more work to be done.
var parkedCars = 10;
var notParked = 0;
var workToDo = notParked > parkedCars;
console.log("Is there work to be done: " + workToDo);
// expected output: false, it means that there is not more work to do.

//example 2, this conditional statement is done by comparing the total amount of homework with the amount of homework already finished. The condition is met when there is no more homework left to be done.
var homework = 7;
var homeworkDone = 3;
console.log("Is homework finished?: " + (homeworkDone < homework))
//expected output: true

//example 3,
var caloriesIntake = 2500;
var myCalories = 1200;
console.log("Are you eating enough calories?; " + (myCalories > caloriesIntake));
//expected output: false
```

#### 1. Why might you want to use an if-statement?

Because they allow to evaluate a conditions that can resolve into a single value; either true or false. This is important because if-statements let us decide which path of code should be run next. There are two main components  to a decision:

* An expression is evaluated, which returns a value.
* A conditional statement says what to do in a give scenario.

In an if-statement, if the condition evaluated results in a *true* statement, a specific code block will run but if the condition returns *false* an other block of code will run.


#### 1. What is the JavaScript syntax for an if statement?

```JavaScript
var parkedCars = 10;
var notParked = 0;

if (notParked > parkedCars){
  console.log()
}

```

#### 1. How do you add multiple conditions to an if statement?

the way we can add multiple conditions to an if statement is by using statements such as *if, else, else if and /or  switch* statements.

**if statements** check a condition, if the result to the evaluation returns "true", any statement in the following code block will run.

**else statements** if the first line of code didn't run, *else* will do something different after or could potentially skip the step to an other block of code.

**else if statements** evaluate again an other condition and if the condition is met, the script will run accordingly.


#### 1. What is the JavaScript syntax for an if/else if/else statement?

Here is an example using if/else if /else statements. When the variable "saving" equals 5, it will show the message that the daily saving have been reached. Any number below five will give the message "stop spending and save more". If the number for saving reaches 6, will prompt the message that "Maximum amount of savings has been reached", any number above 6 will result in the  message ""you have too many savings".
```JavaScript
var savings = 5;

if (savings < 5) {
    console.log("stop spending and save more");
} else if (savings == 5) {
    console.log("You have reached your daily savings");
} else if (savings == 6) {
    console.log("Maximum savings reached");
} else {
    console.log("You have too many savings");
};
```

#### 1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?


**switch statements** manipulate variables to match them with a specific value. In a switch statement,  we can set a default line of code to run in case there are no matches. If a match is found a determined line of code will run. This can allow to connect more precisely one statement with a variable, instead of going through each one of the if/else if statements. This can provide faster script performance.

It is important to use break statement to stop the rest of the switch statements to run.
