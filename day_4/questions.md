## Day 4 Questions

1. In your own words, what is the purpose of a function?

Functions allow several statements that perform a certain task to be grouped together so that those statements can be reused later in the script without repeating those statements.

1. What is a parameter?

A parameter is a piece of information that a function needs to complete a task.

1. What is a return value?

A return value is information that the function returns to the code that called it. They also end a function's execution.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```Javascript
function hello() {
  console.log('Sam I am');
};

hello()
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```javascript
function hello_someone(name) {
  console.log(name + ' I am');
};
```

1. How would you call or execute the function that you created above?

```javascript
hello_someone('Sam')
```

1. What questions do you still have about functions in Javascript?

Other than it stops the execution of the function, what is the difference between the `return` statement and just logging said variable?
