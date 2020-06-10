## Day 3 Questions

1. What is a conditional statement? Give three examples.

- A conditional statement is a type of logic that you want the program to perform based on what the given input is.

```JavaScript
if ("string" === "string") {
  console.log("I understand basic conditional statements!");
} else {
  console.log("I should study the README some more.");
}

if (checkbox.value == true) {
  console.log("Your bank account balance is...");
} else {
  console.log("You must accept the terms and conditions before we can present your bank account balance.");
}

if (2*6 > 10) {
  console.log("Your attack successful lands!");
} else {
  console.log("The enemy has dodged your attack!");
}
```

1. Why might you want to use an if-statement?

- You would use an if-statement when you want to perform certain actions based on the input the user has given you or it can also be used for catching error messages and sending information back to the user.

1. What is the JavaScript syntax for an if statement?

```javascript
if (condition) {

}
```

1. How do you add multiple conditions to an if statement?

```JavaScript
if (condition1) {

} else if (condition2) {

} else if (condition3) {

} else {

}
```

1. What is the JavaScript syntax for an if/else if/else statement?

```javascript
if (condition1) {

} else if (condition2) { // you can stack as many else-if statements if you would like

} else {

}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

- You can also use a condition statement as a while loop where the loop will continue to process as long as the conditional statement is made. Just beware of infinite loops!

```JavaScript
var num = 1;
while (num < 5) {
  console.log("This is a while loop!");
  num++; // this forces the num to count up so it will end the while loop once the num equals 5, otherwise it would become an infinite loop and crash the program.
}
```
