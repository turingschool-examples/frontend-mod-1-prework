Answer these questions about the reading in your `day6-exercises.md` file:

1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
* When you call the function by entering `sayHello()`, it returns what was written in the statement or code block, which is Hello!
* When you enter `sayHello`, it returns the entire function or function name and code block.

2.  What is the difference between function parameters and arguments?
* Parameter is the variable in the declaration of function.
* Argument is the actual value of this variable that gets passed to function.

3.  What is the keyword `return` used for?
* The `return` statement ends function execution and specifies a value to be returned to the function caller.

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
* Local Variable are better in the sense that they use less memory and have less naming conflicts than a global variable.
* An instance that you might want to use a global variable could be when you need to use multiple local variables to build off a fixed/constant variable that will never change.  So you'll want that global variable to be accessed by multiple local variables.
