## Day 3 Questions

1. What is a conditional statement? Give three examples.

It is a statement that is used to decide the flow of execution based on different
conditions. If a condition is true, you can perform one action and if the condition
is false, you can perform another action.

If the wine inventory < 10 bottles, it is time to order.

If the temperature outside > 85, turn on the AC. If not (else) open a window.

If the test score > 90, you get an A. If it's > 80 you get a B. If it's > 70 you
get a C.


1. Why might you want to use an if-statement?

I would use an if-statement when I need to tell the computer what to do with
certain information. It lets the program make "decisions" while it's running.

1. What is the JavaScript syntax for an if statement?

`if (condition)
{
lines of code to be executed if condition is true
}`

1. How do you add multiple conditions to an if statement?

You can add multiple conditions to an if statement by using the operators &&(and)
|| (or) and !(not); e.g.- condition 1 && condition 2- both conditions must
be true for the statement to be true.

1. What is the JavaScript syntax for an if/else if/else statement?

`if (condition1)
{
lines of code to be executed if condition1 is true
} else if(condition2)
{
lines of code to be executed if condition2 is true
} else
{
lines of code to be executed if condition1 is false and condition2 is false
}`

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

We could use a conditional statement when working with loops and the break statement. If we were writing a loop where `(*i* <= 10)` but wanted to stop *if* `(*i* == 8)`
