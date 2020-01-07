1.  If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

    When writing the function, the parentheses make or break the output in the console.  If you use the sayHello() version, you have successfully declared the function.  If you use the sayHello version without parentheses, the console does not recognize that you are trying to declare a function and will result in an error.

2.  What is the difference between function parameters and arguments?

    A function sometimes needs specific information to perform its task.  In order to provide this information, when you declare the function you give it parameters.  Within the function the parameters act like variables.  If a function needs information to work, you indicate what it needs to know within parentheses after the function name.  The information that is stored inside these parentheses are known as parameters of the function.  To simplify, parameters are the names listed in the function's definition.

    When calling a function that has parameters, you specify the values it should use in the parentheses that follow its name.  Those values are called arguments and they can be provided as values or as variables.  As opposed to parameters, arguments use real values that are passed on to the function.   

3.  What is the keyword return used for?

    In JavaScript, return statements end execution in a function and return a value to the caller.  The keyword return is used to return a value to the code that called the function.

4.  How are local variables better than global variables?  Are there instances you can think of where you might want to use a variable that is globally scoped over local?

    When a variable is created inside a function using the var keyword, it can only be used in that function.  This is called a local (or function level) variable.  It cannot be accessed outside of the function in which it was declared.  The interpreter creates local variables when the function is run, and removes them as soon as the function has completed its task.  This means if the function is run twice the variable can have different values each time.  Also of note, two different functions can use variables with the same name without any sort of naming conflict.  If a variable was not declared using the var keyword, the variable will still work but it will be treated as a global variable instead.

    If you create a variable outside of a function, then it can be used anywhere within the script.  This is called a global variable.  Global variables are stored in memory for as long as the webpage is loaded into the web browser.  They, in turn, take up more memory than local variables and add increased risk to naming conflicts.  Due to these two issues, local variables should be used whenever possible.

    Use of global variables can reduce code difficulty in some instances.  Global variables should be considered when local variables are very complicated to the extent where it compromises readability.  It is also useful when multiple functions need to access the same data.  A database application may benefit from using global variables as long as you do not copy or connect two databases as once.
