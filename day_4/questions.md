## Day 4 Questions

1. In your own words, what is the purpose of a function?

   The purpose of a function is to allow you to perform a specific set of tasks rapidly without having to write out each line of code every time you need those tasks to be performed.  Instead, you can write those lines of code once and call the function whenever you need to perform the task set.  

2. What is a parameter?

   A parameter is essentially a variable whose value is not yet defined, but acts as a placeholder for a value which will eventually be passed into the function in the form of an argument.  

3. What is a return value?

   A return value is one which is returned when a function is called.  It is not printed as `console.log()` would be, but rather "stored behind the scenes" for lack of a better term.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

   ```
   function hello() {
     console.log("Sam I am");
   }
   ```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.

   ```
   function helloSomeone(name) {
     console.log(name + " I am");
   }
   ```

6. How would you _call_ or _execute_ the function that you created above?

   If you wanted to _call_ or _execute_ the function above you would just type the name of the function and then insert an argument into the parentheses that follow it as such:

   ```
   helloSomeone("Joe");
   ```

7. What questions do you still have about functions in JavaScript?

   No questions in particular have come up yet, but I am sure they will as the contents of functions become more complex.
