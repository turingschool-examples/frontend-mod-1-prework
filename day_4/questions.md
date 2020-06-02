## Day 4 Questions

1. In your own words, what is the purpose of a function?
   * A function saves on typing and makes code more elegant by packaging a group of code into a concise reusable structure.

1. What is a parameter?
   * A parameter is a variable defined alongside a function to be used within the function.
      * Side note, an **argument** is the real value that will be set to a parameter and passed into the function when a function is called.

1. What is a return value?
   * A return value is the value a function returns when the function has finished.
      * **Example**
      ```javascript
      function addNumbers(x) {
         return x + x;
      };

      add(3);
      ```
      * In the above example the return value is 6.
1. In the space below, create a function named `hello` that will print `"Sam I am"`.
   ```javascript
   hello() {
     console.log("sam I am");
   };
   ```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
   ```javascript
   hello_someone(name) {
     console.log(name + " I am")
   };
   ```

1. How would you call or execute the function that you created above?
   ```javascript
   hello_someone("Bret");
   ```

1. What questions do you still have about functions in Javascript?
   * Can we store a function as a variable?
