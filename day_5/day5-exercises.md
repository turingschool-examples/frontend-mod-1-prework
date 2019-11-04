## Day 5 Exercises

### Statements, Variables, Data Types & Arrays

#### How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
You need to declare a variable in order to use it. To be able to use a variable you need to declare it and give it a name like so `var firstName;`. Variables do not need values to be declared, they can be defined without a value. The equals sign is called an assignment operator. The assignment operator assigns a value to the variables name. For example: `var firstName = "Harry"`.

#### There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Numbers are any numeric value. Numbers can be integers (whole numbers) or floats (numbers with decimals). Strings contains letters and other characters. Strings are surrounded by quotes (either double or single). Booleans data types hold one of two values; either true or false. Booleans are also referred to as similar to a light switch, they are either on or off.

#### What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. Variables must start with a letter, dollar sign, underscore and cannot begin with a number.
2. Variable names can contain a letter, number, dollar sign, or underscore. Variables can not contain periods (.) or dashes (-).
3. You cannot use a keyword or reserved word for a JavaScript variable.
4. Variables are case sensitive, so firstName is different than firstname. It's bad practice to create two variable with the same name but different case.
5. Variable names should be descriptive of the data they hold. firstName should be used for a first name.
6. When variables are two or more words, they should use camelCase formatting. camelCase means the first word is lowercase, and any additional words are capitalized, like so: `veryLongVariableName`.

Some reserved keywords to be avoided are: var, break, case, else, finally, switch, throw, void, etc.

#### How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
Array are useful because they can store multiple values. Arrays are constructed with a variable name and values inside square brackets separated by commas; `var mySiblings = ['Maddie', 'John', 'Spencer']`. Each value in an array is given an index. The index of an array starts are the 0 not 1. To access or change a value in an array, you use square brackets followed by the index of the value you want to change.

#### What is the difference between an expression and a statement?
Statements are a set of instructions given to the computer. A statement starts on a new line and ends with a semicolon. Each step in a set of instructions would be considered a statement. Example of statement: `var firstName;`. This statement declares a variable.

An expression evaluates to a result of a single value. By declaring the variable fistName without assigning it a value, it is given a value of undefined which is technically a datatype. By assigning it a value, we are giving it an expression. Ex: `var firstName = "Harry"`. An expression is a single value, or the result of multiple values and operators such as the following example to achieve a single value:
```
var firstName = "Harry";
var lastName = "Borrelli";
var fullName = firstName + " " + lastName;
```
The variable of fullName would return "Harry Borrelli".

#### What are three types of operators and how are they used?
Three types of operators are +, - and ++. The plus can be used to get the sum of two numbers, or to combine two or more strings like so `var fullName = "Harry " + "Borrelli";`. The minus is used to subtract two numbers `8 - 5`. And the ++ operator is used to increment a value by one:
```
var age = 27;
age++
```
The age variable would now return 28.
