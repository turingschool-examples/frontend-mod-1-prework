Answer these questions about the reading in your `day5-exercises.md` file:

1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
* You declare a variable by using the keyword “var” (short for variable) and assigning it a variable a name (identifier).
* The equal sign means that you are assigning a value to a variable.  It does not mean the variable is equal to the value.
* In JavaScript, the equal sign means “assignment operator,” since the value can change or be reassigned.

2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
* Number type includes both integer and floats.  
  1. An integer is a whole number that can be positive, negative or zero.  It cannot be a fraction or have decimal places.
  2. A float is a number that contain a decimal and can also be positive or negative.
* String type is used to represent text and are contained by parenthesis (“”).
* Boolean type is a value that is either true or false.

3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
* The six rules for naming variables are:
  1. Variable names must begin with a letter, an underscore or a dollar sign.
  2. Variable names can only contain letters, numbers, underscores, or dollar signs.
  3. You cannot use keywords or reserved words.
  4. Variable names are case-sensitive.
  5. Use a name that describes the kind of information that the variable stores and
  6. camelCase must be used when the variable is name is made up of more than one word. (an underscore can be used b/t words as well)
* Example of reserved words: break, `case, catch, continue, debugger, default, delete`

4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
* It's useful since you do not need to specify how many values it will hold.
* You access a value from an array by specifying the index number for that value inside square brackets. ie: ``colors[2]``
* You change the value of an item in an array by selecting it and assigning it a new value. ie: ``colors[2] = "beige";``

5.  What is the difference between an expression and a statement?
* An expression is any unit of code that can be evaluated (result in) to a single value.  Expressions produce values.
* A statement is an instruction to perform a specific action.

6.  What are three types of operators and how are they used?
* Assignment Operators (=) assign a value to a variable.
* Arithmetic Operators (+, -, /, etc) Perform basic math.
* String Operators, combine two strings. ie: ``var greeting = "Hi" + "Molly";``
