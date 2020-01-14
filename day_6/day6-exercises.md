# Day 6 Exercises

## Chapter 3 Questions
1) If we have a function defined as ```function sayHello(){console.log("Hello!")}```, what is the difference between entering ```sayHello``` and ```sayHello()``` in the console?
  * ```sayHello``` will just return the function  ```sayHello(){console.log("Hello!")}```
  * ```sayHello``` will call the function that was just defined, so it will return Hello!


2) What is the difference between function parameters and arguments?
  * A function parameter is specific information that appears inside parentheses that act like rules telling the function how to perform the task.
  * The arguments are the values or variables specified in the parameter that need to be passed into the code to actually perform the calculation.  


3) What is the keyword ```return``` used for?
  * It is used to return a value to the code that called the function.


4) How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
  * Local or function-level variables cannot be accessed outside of the function in which it was declared, which decreases the risk of naming conflicts as well as helps to not take up as much memory as global variables do.
  * You would want to use a global variable over a local variable when it comes to storing constant variables that you know you will need to refer to often in multiple functions and want to ensure consistency and accuracy. 
