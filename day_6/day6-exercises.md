# Day 6 Exercises

## Chapter 3

### 1. If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
If we enter `sayHello`, it references it and returns our function but if we enter `sayHello()`, it prints `Hello!` to the console. We need to include the parentheses with a function when calling it, even if there are no parameters.
### 2. What is the difference between function parameters and arguments?
Parameters are information the function may need to work. They are located in the parentheses after the function name and they act like variable names. The arguments are the specified values or variables of the parameters once you call a function.
### 3. What is the keyword return used for?
The return keyword is used to return a value to the code that called the function. For example, if the function was `calculateArea` with parameters of width and height, the return would most likely be specified as `area` ( w x h).
### 4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Global variables use more memory than local variables and they increase the risk of naming conflicts. I think you would only want to use it for variables that are used for multiple functions or for something that won't change. If we were talking about a store's site, maybe the name or address could be global variables. We would want to be explicit for name, for example, like `storeName` so we don't run into naming conflicts.
