## Day 6: JavaScript

* Chapter 3 Questions and Answers

1)  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
* Answer:  When `sayHello` is run on the console, each character after the function name 'sayHello' is printed.  In this case, "(){console.log("Hello!")}" is printed.  When `sayHello()` is entered, the function is actually called and only the statements inside of the curly brackets are executed.  In that case, `"Hello!"` is the return value.

2)  What is the difference between function parameters and arguments?
* Answer: Function parameters are values that a function needs in order to run.  
  * For example, in:
  ```javascript
  function getArea (width, height) {
  return width * height;
  }
  ```

The `parameters` of the above function are _width_ and _height_.  When the function is called, it needs `arguments` in order for the function to return a value. The arguments are the actual values entered for the parameters. Once the parameters are defined, the function can then run.
  * In the same example above, if we `call the function` with
  ```javascript
  getArea (4, 5);
  ```
  the script now has values for the `parameters` and should `return` a value of 20.

3)  What is the keyword `return` used for?
* Answer:  The `return` keyword returns the value of an executed function back to the code that called the function.  In the example above for question 2, the `return` would be '20.' The `return` will signal to the interpreter to leave the function so if any other statements are after the statement with return in it, they won't run.

4)  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
* Answer: Local variables are better than global variables in a couple of ways:  First, local variables are only used inside of a function and then they are removed.  With this, the function can run again with new arguments for the function parameters.  Also, different functions can use variables with the same name without any naming conflict.  Second, local variables take up less browser memory because the browser only remembers them during the function execution.

An instance where a global variable may be appropriate is if the variable is needed again on the webpage for another task.  The browser will remember the global variable and it doesn't need to be called again.  

Do these exercises in the console.

*   Work through [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/functions.html) in the console about functions.
  * Console work below:
    * Problem 1: ![Day6Problem1](https://user-images.githubusercontent.com/44849120/72213764-92eaa980-34ec-11ea-81cc-c52b6215d4d9.png)
    * Problem 2: ![Day6Problem2](https://user-images.githubusercontent.com/44849120/72213805-3b990900-34ed-11ea-8ec5-3a4944435e31.png)
    * Problem 3: ![Day6Problem3](https://user-images.githubusercontent.com/44849120/72213809-4bb0e880-34ed-11ea-8654-ebad9ce83da2.png)
