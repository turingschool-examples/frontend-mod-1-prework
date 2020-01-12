# Chapter 3 JavaScript Answers

1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
    * Entering `sayHello` will return the entire function, as that is the function name
    * Entering `sayHello()` calls the function and returns the word "Hello"

2.  What is the difference between function parameters and arguments?
    * Parameters indicate what the function needs to work inside the parentheses of a function/these words act like variable names
    * Arguments are the values that you pass into the code when calling a function

3.  What is the keyword `return` used for?
    * The `return` keywords returns a value to the code that called the function
      * The interpreter leaves the function when `return` is used and is goes back to the statement that called it

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
    * A **local** variable or **function-level** variable is a variable that was created inside a function using the *var* keyword/cannot be accessed outside of the function in which it was declared
      * If the function runs twice, the variable can have different values each time
      * Two different functions can use variables with the same name without conflict
    * A **global** variable is one that was created outside of a function/can be used anywhere within the script
      * Stored in memory for as long as the web page is loaded into the web browser/take up more memory than local variables/increases the risk of naming conflicts
        * Use global variables when multiple functions need to access the data or write to an object
