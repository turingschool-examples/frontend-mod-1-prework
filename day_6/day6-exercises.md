1.  **If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?**
  Writing only sayHello will just show the code that makes up that function. When you include the `()` you are properly calling the function to *run*. It would output the result of the statement.
2.  **What is the difference between function parameters and arguments?**
  Parameters are the things inside the parentheses of the function and inside the code block. They are like variables or placeholders that you will plug values into.
  Arguments are the actual values or variable names that will be used in the function to output a result.
3.  **What is the keyword `return` used for?**
  `return` is used to return the value of the calculation to whatever called the function. It stops the interpreter for continuing to read lines of code below it.
4.  **How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?**
  Local variables use up less memory that global variables because the browser only has to remember the variable while it is using the function, then it forgets it. You would want to use a global variable if it is going to be used throughout multiple scripts.
