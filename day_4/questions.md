## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function contains a block of code that can be called and run easily and concisely to be applied to different parts of a string of code. This way, the same operations and blocks of code do not need to be written over and over and over. Functions should be used to 'package up' lines of code and operations that are likely to appear many times, so that they can easily be called upon and nested within other blocks of code.

1. What is a parameter?

a parameter is information (defined upon the creation of the function) that are used as variables within the function's scope. Paramaters act like variables in every way within the function, and are assigned within the parentheses beside the function name when the function is called

1. What is a return value?

The return value has a few functions. It instructs Javascript what to return to the function caller. It also  interrupts whatever code is running and ends the function (or if statement, or loop, or whatever) immediately and returns the instructed value to the function caller. Even if multiple return statements are written within the same function, the first one that JavaScript reads will be the one that it executes before ending the function.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```Javascript
function hello () {
  console.log("Sam I am")
}

```


1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```Javascript
function hello_someone(name) {
  console.log(name + " I am")
}
```

1. How would you call or execute the function that you created above?

```Javascript
hello_someone("Josephi")
```

1. What questions do you still have about functions in Javascript?

N/A
