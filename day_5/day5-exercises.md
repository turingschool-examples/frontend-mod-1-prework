# Day 5 Exercises

## Chapter 2 Questions
1) How do you declare a variable? What does the equals sign really mean in JavaScript? What is it called in JavaScript?
  * To declare a variable, you need to use the variable keyword ```var``` and then give it a name (identifier).
  * The equal sign in JavaScript called an assignment operator and is used to assign a value to the variable. Until this is used, the variable's value is undefined.


2) There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
  * Numbers: numerical data that can be negative, positive, or a decimal. However, there should be no commas used between thousands and hundreds.
  * Strings: data consisting of letters and other characters enclosed in a pair of quotes. They can be single or double quotes, but the opening quote must match the closing quote.
  * Booleans: data with one of two values, true or false. These are most helpful when determining which part of a script should run.


3) What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
  1. The name must begin with a letter, dollar sign, or an underscore.
    * It cannot start with a number.
  2. The name can contain letters, numbers, dollar sign, or an underscore.
    * You cannot use a dash or a period in the name.
  3. You cannot use keywords or reserved words.
    * For example, some reserved words are: char, delete, return, new, this, if, final, break, var, void, with.
    * More examples can be found here: http://javascriptbook.com/extras/keywords-and-reserved-words/
  4. Variables are case sensitive and it is bad practice to create two variables with the same name using different cases.
  5. Use names that describes the kind of information that the variable stores.
  6. Use camel case if a variable name is made up of more than one word. You can also use an underscore, but the preferred method is camel case.


4) How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
  * Arrays can be useful for lists or other sets of values that are related to each other, but especially when you don't know how many items that list will contain since you do not need to specify how many values an array will hold.
  * To access a value from an array, you need to specify the array name and then the index number for that value in square brackets.
    * Note: index values start at 0, not 1. So the third items on your list actually has an index value of 2, not 3.
  * TO change the value of an array, you need to select it using the steps above, and assign it a new value just as you would any other variable (using the equal sign).


5) What is the difference between an expression and a statement?
  * Expressions evaluates into a single value where a statement is a line of code that performs an action. Expressions can either just assign a value to a variable, or use two(+) more values to return a single value.


6) What are three types of operators and how are they used?
  * Assignment operators: assign a value to a variable ```=```
  * Arithmetic operators: perform basic math ```*, +, -, /, ++, --, %```
  * String operators: combine two strings into one (concatenation) 
    * Example: ```greeting = 'Hi ' + 'Luna';``` returns the value of greeting to now be ```'Hi Luna'```
