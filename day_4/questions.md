## Day 4 Questions

1. In your own words, what is the purpose of a function?

    - A function can essentially act as a bit of memory for a script; a function can store a certain amount of code that can later
      be used whenever it is deemed necessary. So instead of having to enter the same methods, the same variables, etc, over and
      over again over the course of a project, a programmer can do that once inside of a function and then call that function to perform
      whatever tasks it it written to perform. This makes code run more efficiently and lessens the amount of work that needs doing to
      get a script running.

2. What is a parameter?

    - A function can be designed to allow different values for designated variables. In order for a function to do that, it needs to be allowed
      to integrate those entered values into the tasks it is performing. This is what parameters are for; they are set up as non-specific values
      that are substituted with specific values when a function is run. The specific values that are used when a function is called are known as
      arguments, and they are basically used how the parameters/function specify to use them.

3. What is a return value?

    - The keyword `return` when used in a function, is what gives that function a value, which is also called the return value. Functions
      must be run in order to have a value and often times that value is designated by using `return`. Again, a useful trait of functions is that
      they can store code to perform certain tasks, and those tasks will usually end with a different result depending on what is used as
      arguments. Ultimately, you will want to know what resulted from the function running it's code and it is possible to use what resulted
      through a return value.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

    ```javascript
    function hello() {
      console.log("Sam I am");
    }

    hello();

    //Output: Sam I am
    ```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.

    ```javascript
    function helloSomeone(name) {
      console.log(name + " I am");
    }

    helloSomeone(Sam);

    //Output: Sam I am
    ```

6. How would you _call_ or _execute_ the function that you created above?

    - As seen above, when calling the function, I would enter the argument (in this case, Sam) inside the parentheses which is allowed thanks
      to the parameters specified by the function.

7. What questions do you still have about functions in JavaScript?

    - Is it only appropriate to use the `return` keyword when you're making calculations/working with numbers? I'm confused on why you would
      use return for a string.

    - With more complicated functions, is there a method used to keep your code easy to read/understand? I imagine it could be difficult to
      see what the order of things are when using longer functions. 
