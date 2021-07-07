1. If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

    Entering `sayHello` into console with identify and show me the function. Entering `sayHello()` will actually call the function and run it, returning a value. In this case the contents of the string "Hello!".


2. What is the difference between function parameters and arguments?

  **Parameters** are used when the function is declared. They act as variables within the function. These variables can also be defined in a scope outside of the function and be referenced automatically. **Arguments** are values that can be passed through to the parameters when calling a function. Replacing whatever is in the current value within scope for the function. You can do this in the form of a value or a variable.

3. What is the keyword return used for?

  The `return` keyword is used to a return a value to the code that called the function. It also acts a stopping point within the function. Statements written after it, will not be processed. This returns the raw value, so if it is a string, it will include quotes for example unlike `console.log()`.


4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

  Local variables are better because they prevent naming conflicts and require less memory. The only case I can think of declaring a global variable would be for a variable who's value will not change at any point and will be referenced often. In this case I would use `const` to declare the variable in Window.
