# Chapter 3 JS Questions #

1. If we have a function defined as `function sayHello(){console.log("Hello!"_)}` , what is the difference between entering `sayHello` and `sayHello()` in the console?

- The difference between the two entries is the updateMessage() function following the latter. The parenthesis will hold parameters. The parameters are the information  needed for a function to work. When designing a script it is important to note the information the function will need to complete a task.

2. What is the difference between function parameters and arguments?

- **Parameters** are words that act as variables. The parameters are like place holders for the eventual arguments. **Arguments** are the values that pass into the code. Argument values are the information needed to perform the task. Arguments could be numbers, or they can also be variables that represent or hold real numbers.

3. What is the keyword `return` used for?

- The `return` keyword returns a value for a function. This value is retuned to the code. The interpreter (JavaScript engine) goes back to the statement with the keyword. This is important because hypothetical subsequent statements after the `return` keyword won't be processed.

4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

- **Local** variables are better because they take up less memory than **global** variables. This is because global variables are stored in the web page for as long as it is loaded into the browser. Local variables are created by the interpreter when the function is run. They are then removed when the function has finished its task. This means two different functions can have local variables with the same name while avoiding the risk of naming conflict.
- A **global scope** variable could be good for smaller applications. A plug-in for a large system might only require something simple. Some languages might not support non-global variables.  
