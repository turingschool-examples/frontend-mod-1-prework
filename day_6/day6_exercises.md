1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
- `sayHello()` is calling the declared function `{console.log("Hello!")}`
- just typing `sayHello` would not call the declared function because it is not using the correct syntax and ending in `()` after the function's name.

2.  What is the difference between function parameters and arguments?
- They are similar, but there is a `subtle` difference:
  - __PARAMETERS__ act like variables, and typically employ *words* that represent real numbers that need to be pulled into a function.
  - __ARGUMENTS__ are the actual values (#) that are passed into a function (the real information a function needs to calculate a result)

3.  What is the keyword `return` used for?
- some functions return information to the code that called them. For example, when they perform a calculation, they __return__ the result.

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
- __local variables__ require less memory, and there is less likelihood of naming conflicts because the variables are only stored temporarily while a function is executing, and within the confines of the function.
- __globally scoped__ variables are good for variables that are constant and not changing. This would be good for say the *shipping weigh* of an item when calculating the *shipping cost* on a website.
