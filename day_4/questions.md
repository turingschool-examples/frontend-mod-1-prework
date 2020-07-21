## Day 4 Questions

1. In your own words, what is the purpose of a function?

   A function is a block of code that performs a task when called. A function allows the user to invoke a series of code statements with just one call name and, optionally, values used as arguments. For example, you need a task executed multiple times in your code, possibly with different parameters each time, you can set up a function so that you don't have to write the same code statements repeatedly.

1. What is a parameter?

   A parameter acts like a variable for the arguments that will be passed to the function when it is called. They're like placeholders. For example, I know I am going to pass the function a number when I call it, but I don't have the number as I'm writing the code. So using `num` as a parameter is like using a variable placeholder.

1. What is a return value?

   A return value is the value returned when a function is called. If a return value is not specified, JS returns `undefined`. The return value stops your code at that point. It can therefore be used to interrupt loops.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

   ```Javascript
   function hello() {
     console.log("Sam I am");
   }
   ```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

  ```Javascript
  function hello_someone(name) {
    console.log(name + " I am");
  }
  ```

1. How would you call or execute the function that you created above?

  `hello_someone("Insert a name")`

1. What questions do you still have about functions in Javascript?

  I'm a little confused about the difference between a return value and output. Are return values only for functions or can we call the result a method produces a return value? For example, `pop()` - can I refer to the popped element as a return value or as output?
