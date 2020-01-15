# Capstone Day 5

## Chapter 2 Questions and Answers:

1. **How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?**

To declare a variable in JavaScript, you write var followed by your variable name. The equal sign in JavaScript is called the assignment operator and it tells the interpreter that you're going to assign a value to the variable you declared

2. **There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.**

- numbers: this data type handles numbers. The numbers data type is involved in tasks such as calculations or counting. They can be negatice, decimals, and whole numbers.

- strings: enclosed in quotes, the string data type is used when working with text. Strings can be numbers, letters, characters, etc

- boolean: the boolean data type is either true or false, acting as a sort of on off switch for which parts of a code should run

3. **What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?**

- The first rule is that a variable name must begin with a letter, dollar sign, or an underscore but never a number

- The second rule says that a name can contain letters, numbers, dollar sign, or an underscore but never a dash or period

- Third, you cannot use keywords or reserved words such as naming a variable var

- Fourth, all variables are case sensitive meaning that variables with the same name but different cases would be considered different Variables

- Fifth, you should use a name that describes the info that variable stores

- Sixth, use camelCase to name variables consisting of more than one word. This means you should leave the first word uncapitalized and capitalize every following word   

- Some JavaScript reserved words are: var, void, new, delete

4. **How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?**

Using an Array keeps you from creating numerous related variables, which is especially useful if you don't know how many variables you'll need to create. To access an item within an array, you simply specify the array name followed by the desired index number in brackets. Array index values start with 0, so the second item in an array would actually be index number 1. Changing a value within an array can be done by typing the array name and index number for the item to be changed in brackets, followed by an equal sign and the new array value `arrayName[2] = 'range'`

5. **What is the difference between an expression and a statement?**

- Expression: An expression uses operators such as the assignment operator, arithmetic operator, or comparison operator to result in a single value. Expressions either assign a value to a variable or use two or more values to return a single value, such as an arithmetic operator being used to add 5 and 2

- Statement: A statement is an individual step in a script, ending with a semicolon. Statements can be comprised of expressions and can be grouped together to form a code block to organize a script

6. **What are three types of operators and how are they used?**

- Assignment Operators: These operators are used to assign a value to a variable such as `var bestFood = "turkey"`

- String Operators: combine two strings to create a single string `storeName = "best" + "buy`

- Arithmetic Operators: These operators perform basic math, such as addition, subtraction, division, or things like increment or decrement which would add one or subtract one from a value respectively 
