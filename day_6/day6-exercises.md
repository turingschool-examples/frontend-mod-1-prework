# Day 6

## Chapter 3 questions:

### If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
The difference is when you enter sayHello is comes back with the function and if you put sayHello() then it comes back with the return value, since JavaScript is case sensitive.

### What is the difference between function parameters and arguments?
They are often used interchangeably. Parameters are used like variables in the function and are put in parentheses. When you specify real numbers in the parentheses instead, then they are values in the code and are called arguments.

### What is the keyword return used for?
The return keyword is used to return a value that called the function. So this could be the return value of a calculation.

### How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
The use of local variables it preferred for a few different reasons:
  * It takes up less memory than global variables, which are stored the whole time the browser window is open.
  * The local variable can have different values each time is it ran.
  * Different functions can use variables with the same name without any conflict.
Global variables, however, can be used anywhere in the script so they may have some benefits, like if the same variable applied to most areas on the page. Local variables are better practice though.
