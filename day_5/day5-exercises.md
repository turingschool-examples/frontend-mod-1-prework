# Chapter 2
## How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
* A variable is declared by using `var` as the keyword, followed by the variable name. the `=` is an __assignment operator__, and signifies that you are going to assign a value to the variable.
## There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
* __Numeric data types__ handle numbers. These data types are used for anything from calculations to determining the size of the screen or element positioning.
* __Strings__ are data types that consist of letters and other characters. They can be used when working with any type of text.
* __Boolean__ data types can have one of two values: true or false. They are useful when determining which part of a script should run.
## What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. The name must begin with a letter, dollar sigh, or an underscore. It cannot start with a number.
2. The name can contain numbers, dollar sign, or an underscore. you cannot use a dash or a period in a variable name.
3. You cannot use keywords or reserved words. These are words that either tell the interpreter to do something, or words that may be used in future versions of JavaScript. Some reserved words include: debugger, default, delete, do, else, finally, and new.
4. Variables are case sensitive. It is bad practice to create two variables that have the same name but different cases.
5. Be descriptive with the name and make sure it describes the kind of information the variable stores (ie. 'firstName' and 'lastName').
6. Use a capital letter for the first letter of every word after the first word. ('firstName' rather than 'FirstName' or 'Firstname')
## How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
* Arrays are helpful when dealing with multiple related values and you aren't sure how many items the list will contain.
* You can access an item or value in an array by specifying the array name along with the index number in square brackets.
* You can change a value in an array by selecting it and assigning it a new value, like any other variable:
`names[1] = "Brian";`
## What is the difference between an expression and a statement?
* An __expression__ either assigns a value to a variable, or returns a single value from two or more values. In both cases, one value is assigned or returned based on the operator utilized.
* A __statement__ is the action that is performed to get a desired result. A statement can contain an expression, and an expression by itself can be a statement.
## What are three types of operators and how are they used?
1. __Assignment__ operators assign a value to a variable:
```
firstName = 'Brian';
```
2. __Arithmetic__ operators perform basic math:
```
totalSize = 5 * 2;
```
3. __String__ operators combine two strings:
```
fullName = 'firstName' + 'lastName';
fullName = 'Brian' + 'Roxbury';
```
