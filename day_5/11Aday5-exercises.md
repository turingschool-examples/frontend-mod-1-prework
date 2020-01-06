## Read Chapter 2 (Statements, Variables, Data Types, & Arrays) from JavaScript & jQuery: Interactive Front-End Web Development
### Answer these questions about the reading:

1. __How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?__<br />
A variable is used in computer programming to store specific values within any given program. Using var a keyword to declare a variable name and a variable value if assigned a value. This is done thru the = sign, it is saying that you are going to assign a value to the variable. The = sign is known as an assignment operator. Until value is assigned to a variable, the value is considered undefined.   

2. __There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.__<br />
For __numbers__, numeric data type is used for tasks that involve counting or calculating sums without commas and can use negative numbers and decimals. __String__ data type consists of letters and characters(any kind of text) and must be enclosed in a pair of quotes-single or double, but must match on either side of the text. __Boolean__ data types can have one of two values, true or false. They can be helpful when determining which part of a script should run.  
3. __What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?__<br />

  **Rule#1-** variable name must begin with a letter, $, or _ . It is Never to begin with a number. **Rule#2-** Variable name can contain letters, numbers, dollar sign $, or Underscore _ but no dashes or periods in the variable name. **Rule#3-** Cannot use keywords or reserved words. **Rule#4-** All variables are case sensitive, so rule and Rule would be different variable names, but to do that is bad form. **Rule#5-** use an actual name that describes or defines the kind of data that the variable actually stores. **Rule#6-** Use camelcase when using more than one word, firstName, can also use an underscore between each word.<br />
Also the following reserved or keywords should be avoided when naming variables: delete, return, var, new, case, basically function names, variable names and loop labels.
4. __How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?__<br />
Arrays are useful whenever you are working with a list or a set of values that are related to each other, especially when you don't know how many items in a list because when you create an array you don't have to say how many values it will hold.
groceryItems = ['vegetables', 'meat', 'soup', 'rice'];<br />
To access a value from an array, one would specify the index number inside of square brackets after the array name.<br />
For example; groceryItems[2] = 'soup'; Can also select an item and assign it a new value just as you might any other variable.
5. __What is the difference between an expression and a statement?__<br />
A script is a series of instructions that a computer can follow step by step. Each individual step or instruction is a statement. Every statement starts on a new line. Statements can also be organized into code blocks.<br />
An expression evaluates into a single value. Broadly speaking there are two types of expressions. Expressions that just assign a value to a variable. There is also the expression that uses two or more values to return a single value.
6. __What are three types of operators and how are they used?__
Expressions rely on operators which allow programmers to create a single value from one or more values for example:

 **String Operators** combine two strings greeting = 'Hi Molly'; making the value of greeting Hi Molly.<br />
 **Arithmetic Operators** perform basic math between numbers, area = 3 * 2; The value of area is now 6.<br />
 **Comparison Operators** compare two values and return true or false,<br />
  buy = 3 > 5; The value of buy is false.
