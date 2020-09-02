## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement says what to do in a given situation. In daily life, a conditional I have often is *if* my dog is scratching at the door then I will open it to let her out but otherwise (*else*) she is sleeping on my bed. On a web application, a conditional is used when *if* I click view profile on twitter the profile will be brought up to me otherwise (*else*) it will remain on the same page and I can do something else.

2. Why might you want to use an `if` statement?

You want use an 'if' statement to check or evaluate a condition. An example would be say at checkout online it as 'if' you would like to donate to a charity. With the answer of yes/true then the code will run to get more information. With the answer of no/false then the code will not run and you wont be bothered anymore about it, hopefully.

3. What is the JavaScript syntax for an `if` statement?

if (condition) {
  statement;
}

Where 'condition' is the expression that is either *truthy* or *falsy*, 'statement' is run when the condition is *truthy* otherwise it is not run.

statements can have more than one if statements nested inside using ({...}) to group them

4. How do you add multiple conditions to an `if` statement?

using '&&' for an "and" condition where both need to be method
using '||' for an "or" condition where only one needs to be method

5. What is the JavaScript syntax for an `if/else` statement?

if (condition) {
  statement1;
} else {
  statement2;
}

This is the same as an if statement but adds a 'statement2' when the conditions for the first are not met

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

We can use a *switch statement* which allows you to compare a value against possible outcomes, and can provide a default option if none match.
