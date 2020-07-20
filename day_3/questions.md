## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a line of code that will only run if a condition is met (or if a condition
evaluates as true).  
A daily life example is "Can I make a bowl of cereal?"  In order to make cereal, I need milk.
If the statement "I have milk" is true, I can make a bowl of cereal.
If the statement "I have milk" is false, I cannot make a bowl of cereal.

Conditionals are probably used for login pages on websites.  If the username and password == the correct
answer then you are logged in.  If either does not == the correct answer you get an error message.

2. Why might you want to use an `if` statement?

An `if` statement is useful any time there are multiple outcomes based on variables.  If the variable is *this*, then do this.  If the variable is not *this*, then do something else.
It would also be useful if a situation were the user is selecting from choices and the webpage has to respond
based on the choice.  If the user is choosing "blue", "green", or "yellow" on a clothing site, the site
may show a picture of the clothing item in that respective color (for example).

3. What is the JavaScript syntax for an `if` statement?

```JavaScript
if (condition) {
  //Code based on condition goes here.
}
```

Example
```JavaScript
if (height < 60) {
  console.log("You are not tall enough for this ride.")
}
```

4. How do you add multiple conditions to an `if` statement?

Within the parentheses of the `if()` statement, include two or more conditions separated
by `&&` and the `if()` will evaluate all conditions.  Alternatively, `||` with evaluate if
"condition1" OR "condition2" is true.

5. What is the JavaScript syntax for an `if/else` statement?

```JavaScript
if (condition1) {
  // Code if condition 1 is true
} else {
  // Code if condition 1 is false
}
```
6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

I'm thinking about the clothing example from above.  Like on Amazon when I am buying a shirt, I can select different colors and page will update with a picture of the shirt in that color.  Sometimes there are many different color options.  Instead of having if/else statements for every available color, maybe the conditional statement would evaluate the color input and choose from a preset list of photo options.  I think that this is what switch statements are for, but I am not fully familiar with that concept yet.
