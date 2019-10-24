1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console? <br>
Entering `sayHello()` in the console will run the code in the `sayHello` function because it is the function name followed by parentheses. Without the parentheses, it references the function without running it.

2.  What is the difference between function parameters and arguments? <br>
Function parameters work like variables and stand in for real values (just like variables in algebra) in a function. Each time you call the function the parameters could have different values. Arguments are the data passed into those parameters/variables when the function is called.

3.  What is the keyword `return` used for? <br>
The `return` keyword is used to return a value from a function. It also stops the function (so any code coming after it is not processed as part of the function).

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local? <br>
A local variable can only be used within the function where it is created. With local variables, a function can run multiple times with different variable values. Two different functions can also use variables with the same name without any conflicts.
<br>
Global variables are created outside of a function and can be used anywhere in the script. They take up more memory than local variables and increase the risk of naming conflicts. Global variables might be useful if you are using the same variable multiple times across a large script. For example, a company's address might be stored as a global variable to enable its use in multiple parts of the script without having to redefine it each time. 
