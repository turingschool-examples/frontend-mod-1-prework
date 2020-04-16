## Day 3 Questions

1. What is a conditional statement? Give three examples.

Conditional statements are segments of code that help assist in decision making based on certain conditions.
- **If-statements** code segments that are to be executed if the statement returns *true*
- **Else-statements** code segments that are to be executed if that same statement returns *false*
- **Else if-statements** code segments that specify a new condition to test if the first condition returns *false*

1. Why might you want to use an if-statement?

You would want to use an if-statement if you are wanting to do a check in a program before allowing the user to proceed. Or it allows us to do something to allow an outcome to happen.

For example, someone logging into an account would be prompted to enter their username and password at the login screen. If-statement would be able to check the match of their username/password. An if-statement would allow the user to proceed into their account, else-statement would cause them to be returned to the login screen and have to re-enter the username/password.

1. What is the JavaScript syntax for an if statement?

JavaScipt syntax for an if statement is "if". It would look something like this:
- `if (number == 3)`

1. How do you add multiple conditions to an if statement?

To add multiple conditions to an if statement, you use the logical *AND* operator **"&&"** or the logical *OR* operator **"||"**

1. What is the JavaScript syntax for an if/else if/else statement?

The sytax for if is **"if"**, else if is **"else if"**, and else is **"else"**
```
var numberGuess = 3
if (numbers == 3) {
  console.log("Correct!");
} else if (numbers < 3) {
  console.log("Too low!");
} else{
  console.log(Too high!);
}
```
1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

Another way we could use a conditional statement rather than using if-statements, would be to use a switch-statement. This would allow us to select one code block among many that may be stored in our data.

The expression value would be evaluated, it would then find a matching expression in the data, then execute the statements associated with the matching expression.
