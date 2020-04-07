## Day 4 Questions

### 1. In your own words, what is the purpose of a function?

 Functions are a form of a statement but are not typically inclusive to all of the code on your page. They are intended to group data types into subcategories in order to better organize code and give the program direction on a specific task.

### 2. What is a parameter?

Parameters are used to give more context or information to the function. Parameters hold `arguments` which specify values for the parameter by acting like variables. everything inside the parentheses (including arguments and commas to separate arguments) of a function name is considered the parameters.

### 3. What is a return value?

The return value is the answer or output to the code you have written and called. The return itself will end the function execution. Return values are displayed in the form of data types (strings, numbers, and booleans). You can prompt them from a `console.log()` or a `return` statement.

### 4. In the space below, create a function named `hello` that will print `"Sam I am"`.

```
function hello(alias) {
  console.log(alias)
}

hello("Sam I am");
```

### 5. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```
function hello_someone(name) {
  console.log(name + " I am");
}

hello_someone("JP")
```

### 6. How would you call or execute the function that you created above?

You can just change the string associated with `hello_someone` in the parentheses at the bottom of the script if you want to call the function or execute it again.

### 7. What questions do you still have about functions in Javascript?

In the first example I displayed above, do I need to have an `argument` with the function? Is it wrong to have it?

I would love to see real life examples on how functions are used differently from other kinds of inclusive statements.

Why would you `call` a function before it is declared?
