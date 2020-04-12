## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function is a procedure that will perform a calculation or task that it has been assigned. This calculation or task can be used as many times as you'd like within a script.

1. What is a parameter?

Parameters are considered named variables which are listed in a function's definition. The name following the function keyword and name is the parameter

Ex: `function greeting(hello)`- hello would be considered the parameter.

1. What is a return value?

These are the values that a function will return once it has completed its task. Each function will return a value - the default return is "undefined" if it hasn't been specified.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```
function hello() {
  console.log("Sam I am");
}

hello();
```


1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```
function hello_someone(name) {
  console.log(name + " I am");
}
```

1. How would you call or execute the function that you created above?

To call this function, you would need to do something like: `hello_someone(John);` Using "John" as an example. If you did not specify a name and left it empty `hello_someone();` it would call the function but would return the value "undefined".

1. What questions do you still have about functions in Javascript?

Which is used more often in most cases - A function **declaration** or a function **expression**? I understand that a function declaration is subject to *"hoisting"* and an expression is not. Because of this, do developers typically use one over the other?
