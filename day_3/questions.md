## Day 3 Questions

1. What is a conditional statement? Give three examples.

> Examples of conditional statements are *if*, *else if*, and *else*. These state what is to be done when a condition evaluates to either **true** or **false**.

1. Why might you want to use an if-statement?

> You would use an *if*-statement when needing to tell the script to run a section of code *only if the condition evaluates to* **true**, and in the case of any result other than true, would want the script to move on without running any alternative code.

1. What is the JavaScript syntax for an if statement?

```
if (condition) {
  // code to be run IF the condition is TRUE.
};
```

1. How do you add multiple conditions to an if statement?

> Add multiple specified conditions by chaining *else if* statements to the initial *if* statement, providing other alternative conditions to be checked before eventually running the code following the final *else* statement if *none of the previous specified conditions are* **true**.

1. What is the JavaScript syntax for an if/else if/else statement?

```
if ( condition1 == true ) {
  // Perform the function(s) indicated here if condition1 evaluates to TRUE, then move on from the end of this section of code.
}; else if ( condition2 == true ) {
  // Perform the function(s) indicated here if condition1 evaluates to FALSE, AND condition2 evaluates to TRUE, then move on from the end of this section of code.
}; else if ( condition3 == true ) {
  // Perform the function indicated here if BOTH condition1 and condition2 evaluate to FALSE, AND condition3 evaluates to TRUE, then move on from the end of this section of code.
}; else {
  // If NONE of the conditions1-3 evaluate to TRUE, that is, if the result of the condition evaluates to anything ELSE, perform the function indicated here, then move on from the end of this section of code.
};
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

> Other than *if*-statements, *switch* statements are another similar way to use conditionals in determining what pieces of code should be run. Using a representative *switch value*, the statement evaluates whether the variable's value matches any of the specified cases. If one of the included *cases matches the value*, that block of code will run. If *none of the cases match the value*, the *default* case will indicate a code block to be run (similar to the *else* statement).
