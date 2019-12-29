## Chapter 3 (Functions & Scope)
# If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
* Entering `sayHello` by itself with only show the code associated with that function. Entering `sayHello()` will call the function and return "Hello!".
# What is the difference between function parameters and arguments?
* __Function parameters__ are used when declaring a function, and are used like variables within the function. Parameters help describe what information is needed to make the function work. __Arguments__ are actual values (or variables that hole real numbers) that represent the parameters within the function.
# What is the keyword `return` used for?
* The `return` keyword is used to return a value to the code that called the function, and is specified when you declare the function.
# How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
* __Local Variables__ are advantageous because they use less memory, allowing the site to load and perform better. They are also useful to avoid naming conflicts, as their scope is limited to their function. __Global__ variables might be useful when you have a universal variable that is referenced multiple times in the script.
