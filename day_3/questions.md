## Day 3 Questions

1. What is a conditional statement? Give three examples.

A conditional statement is a block of code with two or more nested statements each with a condition to execute them. The first statement within the block that has a condition that is true will execute then end the statement. The conditions are checked by comparing two or more values within the code. Consider the following:

```JavaScript
var exampleNum = 20;

if ( exampleNum >= 10 ) {
  console.log( "You pass!" );
} else {
  console.log( "You failed!" );
}
```
The above code would compare the variable exampleNum to the first condition. The condition would be true so it would execute the expression on line 11. A conditional statement can be more than two statements. Consider the following:

```Javascript
var exampleString = "banana";

if ( exampleString.length <= 3 ) {
  console.log( "That's a small sized word!");
} else if ( exampleString.length >= 4 || exampleString.length <= 6) {
  console.log( "That's a medium sized word!");
} else {
  console.log( "That's a really big word!");
}
```

This code will take the length of the variable exampleString, which is six. It will first compare that length against the condition in the first statement, which will return false and not execute the first statement. It will then test the next statement, which has two different conditions. In this specific case, it will check against both statements and, if either one is true, it will execute that statement. There is another way to structure a conditional statement and that is called a switch statement. Consider the above rewritten as a switch statement:

```Javascript
switch (true) {
  case exampleString.length <= 3:
  console.log( "That's a small sized word!");
  break;
  case exampleString.length >= 4 || exampleString.length <= 6:
  console.log( "That's a medium sized word!");
  break;
  default:
  console.log( "That's a big word!");
}
```

The switch statement works exactly like an if else statement in that it will test whatever is put into the parenthesis and test it against the conditions listed. When it matches one of the cases, it will execute the statement. The only coding difference is use of the word 'break'. Using this will tell the computer to break out of the switch statement.

1. Why might you want to use an if-statement?

An if-statement is useful for having a code block that would have different executions based on conditions within the code. For example, having a weather app that displays a the current weather, an if-statement could hold different conditions that would execute different code depending on the weather.

1. What is the JavaScript syntax for an if statement?

The syntax for an if statement is the following:

```JavaScript
if (a > 0) {
  //execute this code
} else {
  //execute this code
}
```

1. How do you add multiple conditions to an if statement?

To add multiple conditions to an if statement, you would add them after the first statement by using 'else if'.

1. What is the JavaScript syntax for an if/else if/else statement?

The syntax for an if/else statement is the following:

```JavaScript
if (a > 0) {
  //execute this code
} else if (a < 0) {
  //execute this code
} else {
  //execute this code
}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

Another form of conditional statement would be a switch statement. An if-statement and a switch statement can both be used in the same way in most cases, the only difference being in how they execute their comparisons. An if-statement will run through conditions until it has a match, then if will execute the statement. A switch statement uses a line called 'break' at the end of each tested condition, or case, to break out of the switch statement after executing the statement.
