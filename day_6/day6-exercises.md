### 1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
Without the parentheses the function will not actually be called.

### 2.  What is the difference between function parameters and arguments?
Parameters are the values within the parentheses.  These are the information required for the function to work and they can act like variable names in the function.  Arguments are the specific values assigned to the parameters.  'width, height' would be a parameter while '5, 12' would be the argument.

### 3.  What is the keyword `return` used for?
The keyword `return` will return a value to the code that called the function.  

### 4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables take up less memory and reduce the risk of naming conflicts.  The only time I can think of using a global scope over a local scope is when you *want* the other scripts and funcitons on the page to access the variable.
