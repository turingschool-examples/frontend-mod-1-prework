## Day 4 Questions

1. In your own words, what is the purpose of a function?

The purpose of a function is to separate out, and store, sections of code that perform a specific task.

1. What is a parameter?    

A parameter is piece of information (a named variable) passed to the function (in parentheses `()`), that enables the function to achieve a given task.

1. What is a return value?  

A return value is the result or output of the function.   

1. In the space below, create a function named `hello` that will print `"Sam I am"`.
```
function hello() {
  console.log("Sam I am");
}
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```
function hello_someone(name) {
  console.log(name + " I am");
}
```

1. How would you call or execute the function that you created above?  
 Call the function by using its name 'hello_someone', followed by the argument (I chose the name Sam) in parentheses:

`hello_someone('Sam')`

1. What questions do you still have about functions in Javascript?  

What's the best practice for formatting functions that take in arguments? When is it better to declare the variable locally (or globally) versus passing the argument when it's being called?
