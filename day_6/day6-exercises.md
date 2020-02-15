# Javascript: Ch. 3 pt. 1

## If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

Unless otherwise specified as a variable, `sayHello` would not return anything because it's value is not specified. Side note: It seems bad practice, to me, to have a variable and function with the same name but there was no mention of this in the assigned pages. If `sayHello ()` were written in the console, it would show `"Hello!"` as the function's return value.

## What is the difference between function parameters and arguments?

If parameters are a class, then arguments are instances of that class. More clearly defined, parameters are any specific information the function requires to perform its tasks. They are defined along the function name within the parentheses, and function as variables inside the function (inside the curly braces). The value of those parameters (as variables within the function) are called arguments. Here's the confusing bit: Those arguments can also be variables, however, these variables would be defined outside the function. More on the type of situation this may create, and why is important, at the bottom of this page.  
Another helpful way to tell the difference: When a functions is declared, it makes use of parameters. When a function is called, it then makes use of arguments.

## What is the keyword return used for?

Return returns information to the code that called it. When a function is used to assign a value to a variable, the function will more than likely end on a return statement. This allows the code to use the information the function returns (a bit repetitive, but it's pretty basic). An example may be best:
```Javascript
function calculateTotal(item1, item2, item3) {
  var total = item1 + item2 + item3;
  return total;
}  // This is now a declared function.

var paintPrice = calculateTotal(12, 35, 18); // The function is now called and returns a value of 68
var foodPrice = calculateTotal(8, 12, 18); // The function is called once again and assigns the value of 38 to the variable foodPrice.

```

## How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

**Local variables**, created inside a function using the `var` keyword, can only be used within that function. This is important for two main reason:
* The function can run any number of times with different variable values.
* The same variable names can appear in multiple functions without creating a naming conflict.
**Global variables**, those created outside functions, can be referenced anywhere on the script and are stored in memory for as long as the web page is loaded. This should be avoided for two main reason:
* The more global variables in a script the more memory it requires to run; the more memory it requires the slower the web page will respond to the user.
* The same variable name may appear in multiple functions/scripts, however, it may have different assigned values causing errors down the line.
Note: A new variable may be declared within a function without using the `var` keyword, but will be treated as a global variable. This is considered bad practice.
Global variables can come in handy, for example, a global `username` variable could prompt all the functions in a script to pull the forms related with that user, allowing them to see their profile and such. Generally, if a variable's value will not change through out a web page, it may be worthwhile declaring it on a global scope.       
