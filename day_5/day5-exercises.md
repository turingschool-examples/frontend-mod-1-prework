### 1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
In order to declare a variable, you must use the variable keyword `var`.  An equal sign in JavaScript is called an assignment operator.  This assigns a variable value to the variable name.  Structure goes like this: `var variableName; variableName=variableValue`

### 2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Numbers are a data type that contains any numerical value.  This could be integers or floats.  Strings contain one or more characters and must be surrounded by either single or double quotes.  A boolean can have one of two values: true or false.  

### 3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. The name cannot begin with a number.  It must start with a letter, dollar sign `$`, or underscore `_`.
2. The name cannot contain a dash `-` or period `.`.  It must contain letters, dollar sign `$`, or underscore `_`.
3. You cannot use keywords or reserved words.
4. Variables are case sensitive.  
5. The variable name should be descriptive of the information stored in that variable.
6. For names with multiple words, convention is to use all lowercase in the first word and uppercase in every following word with no spaces.  justLikeThis.

You should avoid using reserved words such as: boolean, enum, let, float, etc.

### 4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
Arrays are useful in that they allow you to store multiple values in a variable, instead of creating variables for each individual case.  To access an array you put a number value in square brackets `[]` after the array name: `variableName[3]`.  You can change the value by assigning a new value just like any other variable.  

### 5.  What is the difference between an expression and a statement?
A statement performs an action. An expression produces a value.  A statement is an individual step within the code and it should end with a semicolon `;`.  An expression can assign a single value to a variable or multiple values to return a single value.  Wherever JavaScript expects a statement, you can put an expression, but not vice versa.

### 6.  What are three types of operators and how are they used?
Assignment operators, arithmetic operators and string operators.  Assignment operators assign a value to a variable.  This can be numbers or characters.  Arithmetic operators perform basic mathematical calculations.  Arithmetic operators could be used on an online store when calculating a shopping cart total.  String operators combine the other two.  The operator in this case is the plus sign `+`.  It combines the string values on either side.  This is how online accounts display a first and last name or greet you when you login.
