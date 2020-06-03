## Day 3 Questions

1. What is a conditional statement? Give three examples.

A conditional statement compares two pieces of data (values) using an operator, then returns 'true' or 'false' based on wether the two pieces of data relate properly based on the operator. For example:

```javascript

console.log(25 > 300) // the conditional statement checks to see if 25 is greater than 100. expected output: false
console.log ("10" === 10) // if the operator were == this would return true, but since it is the strict === operator, it will return 'false'
console.log (trueOrFalse == true) // the operator checks the value of the 'trueOrFalse' variable, and since in this instance the variable trueOrFalse has a value of 'true' the conditional would return 'true'

```


1. Why might you want to use an if-statement?

If statements are great for creating branching paths, and helping programs to make context-sensitive decisions. Simple yes/no questions are the easiest example, for things like "Would you like to proceed" and "Do you go left or right?" But beyond that, if statements and if/Else statements can help the program make all sorts of important decisions by following paths based on data.

1. What is the JavaScript syntax for an if statement?


```javascript
if ([condition]){[executable code]
} else {[executable code]}

```


1. How do you add multiple conditions to an if statement?

Multiple conditions can be added by placing the syntax || (OR) or && (AND) between conditions.

1. What is the JavaScript syntax for an if/else if/else statement?

```javascript
if ([condition]){
  [executable code]
} else if ([secondCondition]) {
  [second executable code]
}else {
  [other executable code]
}

```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

One way I can think of using conditional statements is in iterating through arrays, with the conditional telling the program how many times it needs to increment or decrement i in order to complete the operation.
