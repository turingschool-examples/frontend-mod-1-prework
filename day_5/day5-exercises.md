# JS Chapter 2 questions #

1. How do you declare a variable? What does the equals sign really mean in JavaScript? What is it called in JavaScript?

- A variable is declared by using the variable keyword `var` followed by a variable name (also known as an identifier) followed by a semi-colon. If the variable name is more than one word, use camelCase. This creates the variable. The equals sign `=` is known as the **assignment operator** in JavaScript. The assignment operator is used to assign a value to the variable. The assignment operator can also be used to update the value given to a variable. Where the variable is declared can effect whether the rest of the script can use it. This is known as the scope of the variable.

2. There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

- Numbers (or Numeric Data Type) is the data type that handles numbers. It doesn't use commas. Numbers are used for tasks such as measuring the size of a screen, how an element moves on a page, or setting a timed fade.
- String is the data type that handles letters and other characters. String data types are enclosed in quotes. The opening quote needs to match the closing quote. These can be used to add new content to a page. HTML markup can be used in string data.
- Booleans data can only be one of two values: True or False. This can be useful to add a feature that would work like a light switch. Booleans are goo to use when determining which part of a script should run.

3. What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

- The six rules used to name a variable are as follows: The name must begin with a letter, an underscore, or a dollar sign. It cannot start with a number. A dash `-`or a period `.` cannot be used in a variable name. **Keywords** like `var` or **reserved** words (words that may become keywords in the future) cannot be used. All variables are case sensitive. Variable names should describe the kind of information stored. Use camelCase when the variable name is more than one word.

4. How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

- By creating an **array**, each item in the array is is given an index value. This value can be used to retrieve a specific item. The index values start at 0, so for example the value for the 3rd item in an array would be indexed as **2**. Arrays have a property called **length**. This allows a variable to be given its value set to the number of items in the array.
- To _access_ a value in an array we first identify the index value for the item to be changed. Use the array name and include the index value of the item to be changes in square brackets `[]`. Now assign a new value just like any other variable. Now the original value in the array has been _changed_.

5. What is the difference between an expression and a statement?

- A **statement** is an individual step or instruction that the computer follows. A statement should end with a semicolon. An **expression** uses two or more values (know as operators) to return a single value. Rather than simply following an instruction, an expression is _evaluated_ by the computer and a single value is returned.

6. What are three types of operators and how are they used?

- **Assignment operators** are  used to assign a value to a variable. Example: color = "blue". The value of `color` is now `blue`.
- **Arithmetic Operators** are used to perform basic math. Example: volume = 6 * 8. The value of area in now `6`.
- **String operators** combine two strings into one. Example: assignment = "hello" + "world". The value of `assignment` is now `hello world`.
