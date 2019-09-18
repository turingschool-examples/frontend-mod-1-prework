# Day 5: JavaScript

# Chapter 2 (book two)

# 1. How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
**Answer:**
To declare a variable in JavaScript you use the variable keyword `var` followed by the variable name and a semicolon. (Example: `var dogName;`) To assign a value to a variable, you use the assignment operator `=` with the variable name and value. (Example: `dogName = 'George';`) The assignment operator says that you are going to assign a value to a variable. It is also used to update the value given to a variable.

# 2. There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
**Answer:**
1. Numeric: The numeric or number data type handles, you guessed it, numbers! This means the digits 0 through 9. Negative numbers and decimals are also included, but not commas.
2. String: The string data type is for letters and characters and need to live between single or double quotes. This can be a name like `'George'` or a full sentence like `'Your Tickets have been Purchased!'`.
3. Boolean: The boolean data type can only have one of two values, `true` or `false`. Booleans are helpful when determining which script to run.

# 3. What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
**Answer:**
1. The name must begin with a letter, dollar sign, or underscore.
2. The name can contain letters, numbers, dollar sign, or underscore. You must not use a dash or period in a variable name.
3. You cannot use keywords or reserved words. Keywords are special words that tell the interpreter to do something. For example, `var` is a keyword used to declare a variable. Reserved words are ones that may be used in a future version of JavaScript.
4. All variables are case sensitive, so dog and Dog would be different variables.
5. It is good practice for a variable name to be relevant to its meaning. (Example: `firstName` to store a person's first name)
6. If your variable is made up of more than one word, use camel case or underscores between words.<br>

Examples of reserved words: abstract, arguments, await,	boolean, break,	byte,	case, catch, char,	class, const,	continue, debugger,	default,	delete,	do, double,	else

# 4. How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
**Answer:**
An array is a special type of variable that stores a list of values, rather than just one. Arrays are useful when you do not know how many items a list will contain. To access a value from an array, after the array name you specify the index number surrounded by square brackets. (Note: array list index numbers start with `0` rather than `1`). You can change the value of an item in an array by selecting it and assigning it a new value using the `=` followed by the new value for that item.

# 5. What is the difference between an expression and a statement?
**Answer:**
An expression is an operation that results in a single value. (Example: `var color = 'tomato';` where the value of `color` is `tomato`) A statement performs an action. `loops` and `if` statements are examples of a statement.

# 6. What are three types of operators and how are they used?
**Answer:**
1. Assignment: Used to assign a value to a variable. (Example: `color = 'tomato';` the value of `color` is now `tomato`)
2. Arithmetic: Used to perform basic math. (Example: `areaOfRoom = 8 * 9;` the value of `areaOfRoom` is now `72`)
3. String: Used to combine two strings. (Example: `greeting = 'Yo ' + 'Brad';` the value of `greeting` is now `Yo Brad`)
