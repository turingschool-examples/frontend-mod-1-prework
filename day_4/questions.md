## Day 4 Questions

1. In your own words, what is the purpose of a function?

Functions can shorten the amount of total code necessary for a project to run by
providing a mechanism for streamlining repetitive tasks. Instead of running
similar segments of code over and over again, a function only requires new
arguments.

1. What is a parameter?

The variables that need to be provided for a function to run.

1. What is a return value?

A return value is what a function produces after it runs.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

function hello() {
  console.log("Sam I am");
};

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

function hello_someone(name) {
  var someone = name + " I am";
  console.log(someone);
};

1. How would you call or execute the function that you created above?

hello_someone(Sam);

1. What questions do you still have about functions in Javascript?

I'm curious to learn more about how complex functions can get. I guess that's
not really a question though...
