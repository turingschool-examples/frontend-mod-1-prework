## Day 3 Questions

1. What is a conditional statement? Give three examples.
A conditional statement is a set of commands that will execute if specified condition evaluates as true. The `if` statement will execute if the condition is true. Optionally an 'else' clause can be used to specify an alternative statement if the condition if false. We can test multiple conditions within a code block using the 'else if' statement.

* Example 1:
`if` statements can be used on independently. It will execute if the condition is true, or won't do anything if the condition evaluates to false (the specified condition is not met).

```
var pizzaHasCheese = true

if (pizzaHasCheese === true) {
  console.log("Yes, i\'ll have some.")
}

// because the condition is met (pizzaHasCheese === true) the statement will execute, printing the string "Yes, i'll have some."
```

* Example 1:
Using a conditional if..else statement to decide which new value to assign to a variable.

```
var pizzaSlices = 4 ;
var howAmIFeeling = "" ;

if (pizzaSlices >= 3) {
  howAmIFeeling = 'content';
} else {
  howAmIFeeling = 'hungry';
}
// because the condition in the if statement evaluates to true (4 is greater or equal to 3) the if statement will execute (howAmIFeeling = 'content'), assigning the variable howAmIFeeling the new value of 'content'.

```
* Example 3:

Using a conditional if..else if..else statement to decide which statement to log according to the value of the variable we input.
```
var pizzaSlices = 4 ;

if (pizzaSlices >= 5) {
    console.log("I\'m so full! I can't move!")
} else if (pizzaSlices < 5 && pizzaSlices > 3) {
  console.log("I\'ve had a good amount of pizza.")
} else {
  console.log("Who ate the rest of the pizza? I'm hungry!")
}
// the condition of the 'if' statement evaluates as false so it is not executed. Next, the 'else if' condition is tested and because var pizzaSlices = 4, the condition evaluates as true; the statement will execute, printing the string "I've had a good amount of pizza". The rest of the code block is not tested.

```

1. Why might you want to use an if-statement?
An if-statement adds interactivity in an application, enabling different scenarios to play out according to inputs.

1. What is the JavaScript syntax for an if statement?

```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

1. How do you add multiple conditions to an if statement?

Multiple conditions can be added to an `if` statement by using `else if` which essentially means. Each `else if` statement has it's own condition specified in parentheses. When multiple conditions are listed in a code block, the conditions will be tested one by one, in a sequence starting from the top of the code block.

1. What is the JavaScript syntax for an if/else if/else statement?

```
if (condition1) {
  statement_1;
} else if (condition2) {
  statement_2;
} else {  
  statement_3
}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

Another way we can use a conditional statement is for a **switch statement**. The switch statement is useful when one variable can have multiple values, and you want to perform a different function for each value. In a switch statement the variable is mentioned only once at the start of the switch statement. Thereafter, a `case` command checks for matches. If a match is found it will execute that statement. 
