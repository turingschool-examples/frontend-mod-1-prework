# Mod 0 Capstone

## DAY 5


## Read Chapter 2 (Statements, Variables, Data Types, & Arrays) from [JavaScript & jQuery: Interactive Front-End Web Development](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_5?ie=UTF8&qid=1541447422&sr=8-5&keywords=duckett)
***

1.  **How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?**
 * You declare a variable with the variable keyword(var) followed by a space and the variable name
 * '=' is an assignment operator. This assigns a variable name with a variable value.
 ***
2.  **There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.**
  * Number : Numerical data type(decimals, integers)
  * Boolean :  These are binary true false values.
  * String : This represents characters and letters.
 ***
3.  **What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?**
	 1. The name must begin with a `letter`, `$`, or `_`.
	 1. The name can contain `letters`, `$`, or `_`, but cannot contain `-` or `.`.
	 1. You cannot use `keywords` or `reserved` words that tell the interpreter to do something. IE `var`,`and`,`or` etc.
	 1. All variables are case sensitive so two of the same `variableName` can have a different variable meaning based on the `VariableName` capitalization.
	 1. Use a descriptive name for the kind of information that the variable stores.
	 1. If a variableName has two words capatalize the second word or use an underscore between each word.
  ***
4.  **How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?**
 * Arrays are useful since they create a list of items, instead of creating multiple independent items that are similar it is useful to group these into an array for easy access.
 * You can access a value in an array by using an index number of the item that you want to access. Be aware the first item is 0, not 1.
 * Chaning an item in the array is as easy as using an assignment operator on the array index number. IE cars[2] = 'Mazda' would take the 3rd element in the cars[] array and change the value to 'Mazda'
 ***
5.  **What is the difference between an expression and a statement?**
	 1. An expression can be used in any location a value is expected. This would be var numberOne=3, varNumberTwo=3+x, myfunc("a","b")
	 1. A statement performs an action. Loops and if statements perform an action, but do not have a value.
 ***
6.  **What are three types of operators and how are they used?**
 * String: Performs modifications to strings.
  >* Concatenate two strings (+)
 * Arithmetic : Performs basic mathematics.
  >* `--`: Subtracts one from the number.
  >* `++`: Adds one from the number.
  >* `+`,`-`,`/`,`*` : Typical matmatics operators. Does what you think.
  >* `%` : Divides two numbers and returns the remainder.
 * Assignment: These assign a value to a variable.
  >* `=` Assigns a variable name with a variable value.
