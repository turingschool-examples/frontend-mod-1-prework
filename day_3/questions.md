## Day 3 Questions

1. What is a conditional statement? Give three examples.

Conditional statements evaluate to true or false
* 20 < 10 (false)
* 20 == 10 (false)
* 20 > 10 (true)

1. Why might you want to use an if-statement?

To control conditional instructions. A great example is given in the lesson regarding water boiling. Essentially the time on the water boiling could be four data points that we're interested in - 7 minutes exactly, less than 7 minutes, 8 minutes, and over 8 minutes. Depending on how long the water is boiling, we will receive a different response.

1. What is the JavaScript syntax for an if statement?

```
if (condition) {
    //block of code if condition is true
} else {
    //block of code if condition above is not true
};
```

1. How do you add multiple conditions to an if statement?

You would use an elseif statement

1. What is the JavaScript syntax for an if/else statement?

```
if (condition1) {
    //block of code if condition1 is true
} else if (condition2) {
    //block of code if condition1 is false and condition2 is true
} else if (condition3) {
    //block of code if condition1 is false and condition2 is false and condition3 is true
} else {
    //block of code if none of the conditions above are true
};
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

In the 'for' loop, we use a conditional statement in the second part of the loop

Example:
```
var students = ['Joe','Sue','Liz']
for(i = 0; i < students.length; i++) {
  console.log(students[i])
}
```
Where `i < students.length;` is the conditional statement.
