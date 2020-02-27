<h3>If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?</h3>

When writing this in the console as sayHello(), the console returns undefined. When you run sayHello, it returns a syntax error: unexpected token '{'. I believe this is because theres no parameters given, so the call to function never starts.

<h3>What is the difference between function parameters and arguments?</h3>

Function parameters, defined in the parentheses of the function name, use words to act like variable names inside the function. Arguments are defined in the parentheses of the function name as values or as variables to perform the calculation of the function.

<h3>What is the keyword return used for?</h3>

The return keyword is used to return a value to the code that called the function.

<h3>How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?</h3>

Local variables are better than global variables in a couple different ways. Firstly local variables require less memory as global variables because global variables will be stored in memory as long as the web page is loaded into the web browser. Global variables also increase the risk of naming conflicts. You would want to use a global variable when using the variable repeatedly and only using one Javascript file.
