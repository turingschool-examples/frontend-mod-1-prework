1. If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
    * The parentheses at the end runs the function and outputs `Hello!`.  Without the parentheses, the output is just the function itself, and that's not what we want.

2. What is the difference between function parameters and arguments?
    * Parameters are the names used in the function's definition.  While arguments are the values passed to the function.

3. What is the keyword return used for?
    * It returns a value to the code that called the function and also ends function execution

4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
    * Local variables are better because they use less memory and also decreases the risk of naming conflicts
    * If you want to use the same variable that stays constant (not just the variable name) in multiple functions/statements you might consider using a globally scoped variable over a locally scoped one 
