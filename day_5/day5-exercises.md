### Reading (Chapters 1 and 2 of Eloquent JavaScript)

**1. How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?**

Use one of the keywords for variable declaration, `var`, `let`, `const`, followed by an identifier (variable name). A value can be assigned to the variable via the assignment operator, which is the name of the `=` symbol.

**2. There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.**

   1. Numbers - Numeric values with a maximum size of 64 bits. These include positive and negative integers, fractional numbers, and scientific notation as well as special numbers infinity, negative infinity, and NaN (not a number).
   
   2. Strings - Strings represent text. JavaScript uses the Unicode standard to assign each character a number. In JavaScript, strings are written by enclosing their content in quotes, either single quotes, double quotes or backticks.
   
   3. Booleans - Boolean values distinguish between two values, in JavaScript these values are true and false.

<br />

**3. What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?**

   1. The name must begin with a letter, dollar sign ($), or an underscore(_). It must not start with a number.

   2. The name can contain letters, numbers, dollar sign ($), or an underscore (_). Note that you must use dash (-) or a period (.) in a variable name.
   
   3. You cannot use keywords or reserved words.
   
      - Examples: `break`, `case`, `catch`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `finally`, `for`, `function`, `if`, `in`, `instanceof`, `new`, `return`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with` 
   
   4. All variables are case sensitive. It is bad practice to create two variables that are the same but use differing cases.
   
   5. Use a descriptive name.
   
   6. Use camelCase for multi-word variables.
    
<br />

**4. How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?**

An array allows for the storage of multiple values in a single variable that is indexed. It's easy to iterate through an array to find what you're looking for using the many built-in methods.

One way to access a value in an array is via bracket notation, wherein the index can be entered.

<br />

**5. What is the difference between an expression and a statement?**

An expression is a piece of code that resolves to a value. A statement is an action or instruction.

<br />

**6. What are three types of operators and how are they used?**

   1. Assignment operators - Assigns a value to a variable.
   
   2. Comparison operators - Compares (<, >, etc.) two values and returns a boolean.
   
   3. Logical operators - Combines multiple expressions (&&, ||) for comparison and returns a boolean.
   
<br />
