## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function can store a code block with a set of statements.  By calling the function,
this code block can be run as many times as needed.

2. What is a parameter?

A parameter is what goes inside the parentheses when giving the function a name.  The
parameters are variables that tell the function what data to work with.  This will provide the input
data needed to run the code inside the function.

3. What is a return value?

The return value is the result of running the function.  It is output after calling the function.
A return statement within the code block will specify what the function should return.  Nothing
included after the return statement will run.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

```JavaScript
function hello() {
  console.log("Sam I am");
}
```

5. Declare a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```JavaScript
function hello_someone(name) {
  console.log(name + " I am");
}
```

6. How would you _call_ or _execute_ the function that you created above?

```JavaScript
hello_someone("Sam")
```

7. What questions do you still have about functions in JavaScript?

None at this time.  Thank you!
