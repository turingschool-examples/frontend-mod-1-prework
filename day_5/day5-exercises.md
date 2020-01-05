# Day 5 Exercises

## Chapter 2

### 1. How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
To declare a variable you first need to create it and give it a name that describes the kind of data it will hold. Then, you need to set a value for the variable (called the quantity) using the equal sign, which is called an assignment operator. The equal sign tells the computer that you are going to assign a value to the variable.
### 2. There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
- Numeric data types handle all numbers, including negative numbers and floats.
- Strings consist of letters and other characters and is enclosed within a pair a quotes.
- Boolean data types can have one of two values: true or false.
### 3. What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. The name must start with a letter, dollar sign or an underscore. It can't start with a number.
2. The name can contain numbers, letters, dollar signs or underscores. No dashes (-) or periods.
3. You cannot use keywords or reserved words. For example, `var` is a keyword and `float`, `boolean` and `class` are examples of reserved words, which are words that may be used in a future version of Javascript.
4. It is bad practice to create two variables that have the same name using different cases, even though it technically lets you since all variables are case sensitive.
5. Use a name that describes the kind of information that the variable stores.
6. Use camelCase or underscores for variable names made up of more than one word.
### 4. How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
It's useful because you don't need to know how many items a list will contain because you don't need to specify how many values it will hold. You can access or change a value in an array by specifying the array name followed by the index number in brackets (which starts at 0). Then, you would assign it a new value with the `=` sign. For example, `employeeNames[3]='Samantha'`.
### 5. What is the difference between an expression and a statement?
An expression results in a single value using an assignment operator by assigning a value to a variable or returning a single value from two or more values, like an equation. It yields a single value. A statement is like a step in a recipe and is an individual instruction that the computer should follow. It's a series of actions that make up a script. `If` is an example of a statement.
### 6. What are three types of operators and how are they used?
- Assignment operator `(=)` - assigns a value to a variable
- Arithmetic operator - performs basic math (for example: `area = 5 * 3;`)
- String operator - combines two strings (for example: `greeting = 'Hello' + 'Ally';`)
