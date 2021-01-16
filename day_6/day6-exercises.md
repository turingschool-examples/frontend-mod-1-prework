1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

With parentheses you actually call upon the function, whereas without them you are just referencing the function.

2.  What is the difference between function parameters and arguments?

Parameters are pieces of information passed to the function and arguments are the values passed to the function

3.  What is the keyword `return` used for?

It ends the function execution and tells the code to return a specific value.

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

Since local variables are created inside of the function, they are not stored throughout the rest of the script. This means you won't come into any naming conflicts down the road since they won't interact.
However, globally these are carried throughout the script since they're created outside of the function. So if you have a variable that you will need multiple times throughout your code then you would want to use a global variable.
