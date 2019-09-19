## Functions & Scope

### 1. If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

When you enter `sayHello` without the following parentheses, the console wont know to run the code in the function( or code block).
`{console.log("Hello!")}`

### 2. What is the difference between function parameters and arguments?

People often use the two terms interchangeably, but there is a slight difference.

A **function parameter** is a named variable passed into a function. Inside the function those words act like variable names. An example in the function named _getArea_ below, the items inside the parentheses are known as the parameters.

`function getArea (width, height)`

**Function arguments** are the real values passed to the function. When you call to a function thats has parameters, you specify the values it should use.  

### 3. What is the keyword `return` used for?

When you write a function and expect it to provide you with an answer, the response is known as a **return** value.

### 4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

**Local variables** save memory. The interpreter creates local variables when the function is run, and removes them as soon as the task is finished. This means if the function runs twice, the variable can have different values each time. Also, two different functions can use variables with the same name without any kind of naming conflict.

**Global variables** are stored in the memory for as long as the web page is loaded into the browser. Not only does this take up more memory, it also increases the risk of naming conflicts.

It might be easier to use global variables in a simple program because you don't have to search through difficult or endless code for possible variable collision. It may also be useful when multiple functions are accessing the same data. 
