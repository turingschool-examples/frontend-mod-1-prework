## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement decides to perform different actions based on different conditions. One example of a daily life
conditional would be me leaving the house. If I have clothes on, continue to leave the house. If I don't have clothes on, go back into my room and put clothes on. A web app conditional example could be like submitting a text field. Maybe I'm shopping online. When I click "purchase" the web app could run a conditional statement to see if my credit card is approved. Something like `If approved, continue to Thank You screen. Else, reload page with error message: "Card Declined"`.

2. Why might you want to use an `if` statement?

An if statement is most useful when you're checking for one scenario or another. Like boolean statements: if true, run this. Or anytime you want to check through a series of conditions that relate to different outcomes.

3. What is the JavaScript syntax for an `if` statement?

The JavaScript syntax for an if statement is:
```
if (condition === something) {
  run this
}
```

4. How do you add multiple conditions to an `if` statement?

You can add multiple conditions to an if statement with `else if` and `else`.

5. What is the JavaScript syntax for an `if/else` statement?

The JavaScript syntax for an if/else statement is:

```
if (condition === something) {
  run this
} else if (condition === something else) {
  run this
} else {
  run that
}
```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

Conditional statements can be useful anytime you're trying to decide between different code blocks to run given different scenarios. Maybe there's a website feature for a sale or a specific ad that only applies to Fridays. Every time a user loads the page you might have a conditional statement to check if it is a Friday and then load a specific code block for the sale images and links.

Additionally, you could use conditional statements in a for loop where you iterate through an array and manipulate elements within.
