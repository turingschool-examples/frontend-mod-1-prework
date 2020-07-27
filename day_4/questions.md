## Day 4 Questions

1. In your own words, what is the purpose of a function?

  * A **function** lets you to group statements together as a set of steps/directions in order to perform a task. It then stores that block of code by  the functionName, so that you can call on it and use again later in your code.

1. What is a parameter?

  * A **parameter** is a piece or set of data that is needed for a function to perform the task assigned to it. The parameters act like variable names that sit in parentheses after the functionName.  

1. What is a return value?

  * The **return value** is a response, or answer, that you expect to follow when a function is run.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

  ```javascript
  function hello() {
    console.log("Same I am");
  }


1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

  ```javascript
  function hello_someone(name) {
  var greeting = name + " I am"
    return greeting
  }
  console.log(hello_someone("Lola"))
  ```

1. How would you call or execute the function that you created above?

  ```javascript
  console.log(hello_someone("Lola"))
  ```

1. What questions do you still have about functions in Javascript?

  * Is it necessary to do a variable assignment before declaring a function? Or, are there instances in which it is necessary to assign a variable AND call it when executing a function?
