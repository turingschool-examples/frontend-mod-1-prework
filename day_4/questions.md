## Day 4 Questions

1. In your own words, what is the purpose of a function?

  The purpose of a function is to perform a task based on parameters and executable code.  

  Functions can have a set of parameters, which can be considered placeholders that will be addressed later when the function is called.

  Arguments can be considered as the values of the parameters written as part of the function.

  Arguments can be changed by the user, and will replace the parameters based on position.  

  The code situated between the curly braces will substitute the arguments for the parameters, thus leading to different outputs based on which arguments are passed into the function.

1. What is a parameter?

  A parameter is a set of values that are not initially defined by the function itself.  

  Parameters are often used within the function's executable code, and when the function is called, the specific arguments assigned by the user then serve as substitutes for the parameters of the function.  

  The parameter name is often related to the function itself, but focus on values that could be passed into the function.

1. What is a return value?

  A return value immediately ends or halts function execution.  

  It is the code that is executed and logged last.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

  ```
  function hello() {
  console.log("Sam I am");
  };

  hello();

  ```
1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

    ```
    function hello_someone(name) {
    console.log(name + " I am");
    };

    ```

    hello_someone("Nicole");`

1. How would you call or execute the function that you created above?

  `hello_someone("Nicole");`

  I would replace the string "Nicole" with any other name, so that the specific name is passed in as an argument and logged as   `name + " I am"`.  

  Generally, the function call would appear as:

  `hello_someone(name);`, with `name` written as a string with quotation marks.  

  However, if no name is specified at all, the function can be called like this:

  `hello_someone();`, where the console would log `undefined I am`.

1. What questions do you still have about functions in Javascript?

  I am wondering when it would be necessary to include a return value, compared to console.log(); within the executable block of code and calling the function. The return value seems to work the way an if...else statement does, in that there is an immediate end in sight (regarding what is logged as an output) when the return keyword is read, as well as when the condition in the first part of the if statement is true.
