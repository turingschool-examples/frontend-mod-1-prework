## Day 3 Questions

1. What is a conditional statement? Give three examples.
Conditionals are usually if/else statements that execute code if a specified condition is true. If the condition is false, then a different set of code is executed. Three examples could be : if statements , else statements , else statements, switch statements

1. Why might you want to use an if-statement?
You might want to use an if-statement if the condition is a quick check between two conditions.
1. What is the JavaScript syntax for an if statement?
if (condition){
  run this code
}
```
if (score == 100){
  console.log("You have won!");
}
```
1. How do you add multiple conditions to an if statement?
using an else statement!
1. What is the JavaScript syntax for an if/else if/else statement?
if (condition){
  run code
} else if (conditon){
  run this code
} else {
  run this code
}
```
if (score <= 50){
  console.log("You lose!");
} else if (score <=75){
  console.log("Nice Try! Almost there!")
} else if (score > 75){
  console.log("WINNER!")
} else{
  console.log("Score to win")
}
```
1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
There are switch statements and looking into those it seems those are better for finding an end value or condition rather than iterating over and over and over. Going to look more into this! 
