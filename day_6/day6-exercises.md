If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
sayHello will return the initial function declaration while sayHello() will call the function.

What is the difference between function parameters and arguments?
Parameters are variables used within the function.  Arguments are real numbers used to perform a calculation.

What is the keyword return used for?
return is used to return a value to the code that called the function.  If no return keyword is used, calling the function may yield undefined.

How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables can't be accessed outside of the function, therefore taking up less memory.  You can also have two different functions with the same variable name without any conflicts.  This also helps when other people are working on your code and don't know what variables have already been declared.  You might want to use a variable that is globally scoped when you have multiple functions that reference the same data.
