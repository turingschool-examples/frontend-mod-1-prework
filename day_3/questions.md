## Day 3 Questions

1. What is a conditional statement? Give three examples.
Conditional statements are based on a concept of if/then/else...
If a condition is met then the code executes one or more statements, else your code does something different (or just skips the step)

Three examples:
1) If statements

2) If..Else statements

3) Else...If statements

2. Why might you want to use an if-statement?
If statements evaluate (or checks) a condition. If the condition evaluates to be true, any statements in the subsequent code block are then executed. One might use them to congratulate test takers for passing:

var karenScore = 20;
var kevinScore = 20;
var beckyScore = 60;
var steveScore = 90;

var studentsScore = [karenScore, kevinScore, beckyScore, steveScore];
var studentName = ["karen", "kevin", "becky", "steve"];

for (var i = 0; i < studentsScore.length; i++) {
  if (studentsScore[i] >= 50) {
    console.log("Congratulations, " + studentName[i] + " you passed!");
}
}


3. What is the JavaScript syntax for an if statement?
The Javascript syntax for an if statement starts with the keyword *if* followed by parentheses *()* which encapsulate the *condition*, and then curly braces *{}* carry the code to execute if the value is true.

if (<condition>) {
console.log(<code to execute if value is true>);
}


4. How do you add multiple conditions to an if statement?
To add multiple conditions to an if statement you would add an *else* statement to it:

Example:

var karenScore = 20;
var kevinScore = 20;
var beckyScore = 60;
var steveScore = 90;

var studentsScore = [karenScore, kevinScore, beckyScore, steveScore];
var studentName = ["Karen", "Kevin", "Becky", "Steve"];

for (var i = 0; i < studentsScore.length; i++) {
  if (studentsScore[i] >= 50) {
    console.log("Congratulations, " + studentName[i] + " you passed!");
  }
  else {
    console.log("'A' for effort, " + studentName[i] + "!");
  }
}


5. What is the JavaScript syntax for an if/else if/else statement?

if (condition1) {
// block of code if condition1 is true.
} else if (condition 2) {
// block of code if condition 1 is false and condition 2 is true.
} else {
// block of code if all conditions above are false.
};


6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

To set an alarm for a specific time, or when to change the temperature on a thermostat.
