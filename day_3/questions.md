## Day 3 Questions

1. What is a conditional statement? Give three examples.

A conditional statement says what to do in a given situation

```JavaScript
if (score > 100) {
  console.log("You win!");
}

if (onVaction == true) {
  console.log("I will get back to you next week.");
}

if (dessert == "cookie") {
  console.log("Mouse wants a glass of milk.");
}
```

1. Why might you want to use an if-statement?

You'll want to use an if-statement when there are different things that will happen dependent upon some condition.

1. What is the JavaScript syntax for an if statement?

```JavaScript
if (conditional statement) {
  execute();
}
```

1. How do you add multiple conditions to an if statement?

You can add multiple conditions with logical operators. The logical and operator, &&, will evaluate to true if and only if both expressions are true. The logical or operator, ||, will evaluate to true if either or both expressions are true.

1. What is the JavaScript syntax for an if/else if/else statement?

```JavaScript
if (conditional statement) {
  execute();
} else if (conditional statement) {
  execute();
} else if (conditional statement) {
  execute();
} else {
  execute();
}
```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

At this point, I think of the terms if-statement and conditional statements as being interchangeable. But I believe conditional statements can also be used in switch statements which match a value to a case.
