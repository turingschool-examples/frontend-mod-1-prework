Javascript & jQuery Chapter 3 Questions

1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
  sayHello returns the function while sayHello() actually calls the function.
2.  What is the difference between function parameters and arguments?
  When you declare a function, parameters are placed in parenthesis to be used as variables in a function while arguments are values or variables given in parenthesis when a function is called.
3.  What is the keyword `return` used for?
  return is used to specify the value that a function returns after running.
4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
  Local variables don't conflict with local variables in other functions and take up less memory than global variables. The module design pattern, ie. YUI, uses a global variable to contain an object returned from an anonymous function.
