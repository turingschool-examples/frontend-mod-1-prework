## Day 3 Questions

1. What is a conditional statement? Give three examples.    
A conditional statement is a set of commands that will execute if specified condition evaluates as true.
They represent decision making in JavaScript by offering different 'choices' or 'paths' with varied outcomes based on the decision.

* **Example 1:**
`if` statements can be used independently, the statement will execute if the condition is true.
Or, if the condition evaluates to false, nothing will happen.

```
var pizzaHasCheese = true

if (pizzaHasCheese === true) {
  console.log("Yes, i'll have some.")
}

// The condition is met (pizzaHasCheese is true) the statement will execute, printing the string "Yes, i'll have some."
```

* **Example 2:**
An if/else statement provides an alternative statement to execute by default if the `if` statements condition is not met.
```
var pizzaSlices = 2 ;
var howAmIFeeling = "" ;

if (pizzaSlices >= 3) {
  howAmIFeeling = 'content';
} else {
  howAmIFeeling = 'hungry';
}
// The condition in the if statement is false so the else statement will execute, assigning the variable howAmIFeeling the value of 'hungry'.

```
* **Example 3:**   
if..else if..else statements enable multiple conditions to be tested, each with their own statement to be executed if the condition evaluates to true.
```
var pizzaSlices = 4 ;

if (pizzaSlices >= 5) {
    console.log("I'm so full! I can't move!")
} else if (pizzaSlices < 5 && pizzaSlices > 3) {
  console.log("I've had a good amount of pizza.")
} else {
  console.log("Who ate the rest of the pizza? I'm hungry!")
}
// The condition of the 'if' statement evaluates as false so it is not executed. Next, the 'else if' condition is tested and because var pizzaSlices = 4, the condition evaluates as true; the statement will execute, printing the string "I've had a good amount of pizza".

```

1. Why might you want to use an if-statement?  
An if-statement adds interactivity in an application, enabling different scenarios to play out according to inputs.

1. What is the JavaScript syntax for an if statement?  

```
if (condition) {
  statement_1; // to be executed if condition is true
}
```

1. How do you add multiple conditions to an if statement?  

a) Within an if statement, we can add multiple conditions by using **logical operators**. Logical operators evaluate multiple expressions as the condition i.e: if ((expression 1 = true) AND(&&)/OR(||) (expression two = true))  
* `&&` 'logical AND operator' BOTH expressions have to equal true
* `||` 'logical OR operator' at least ONE condition has to equal true

b) multiple conditions can be added to an `if` statement by using `else if` statements:  
Each `else if` statement has it's own condition specified in parentheses, with the code to be executed in its own set of curly brackets `{}`.
When multiple conditions are present the conditions will be tested one by one, in a sequence starting from the `if` statement and working down. Once a statement is executed, the rest of the if..else statements will be skipped (not be tested)

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
