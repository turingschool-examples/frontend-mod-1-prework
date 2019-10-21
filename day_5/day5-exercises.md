1.  How do you declare a variable? What does the equals sign really mean in JavaScript? What is it called in JavaScript?
When you declare a variable, you are essentially naming it and getting it ready to be used. To declare a variable you use the keyword `var` followed by the variable name and a semi-colon. Variables function similarly to variables in algebra, where something represents a different value. To assign a value to a variable, you use an equals sign (called the assignment operator) between the variable name and the variable value. You can also use the equals sign/assignment operator to update the value of a variable.

2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
* Numbers are used for anything involving counting or calculating. Numbers are represented numerically without commas. They can be negative and include decimals. Numbers can also be used for tasks involving measurements or times.
* Strings can contain any type of character within them. They are written between single or double quotes (but the opening and closing quote must be the same type). Strings are used most often when working with text or adding content to a page.
* Booleans are a data type that works only in binaries, meaning there are only two possible values (true and false). Booleans are useful when operating in conditional logic (if "true" then run this piece of code, if "false" then run this piece of code).

3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
* The name must begin with a letter, dollar sign, or underscore.
* The name can contain letters, numbers, dollar signs, or underscores. You cannot use a dash or period.
* Variable names cannot contain keywords or reserved words (like var because it is already used to declare a variable). Reserved words are words that are saved for use in future JavaScript updates.
* Variables are case sensitive, so it is important to pay attention and be consistent when naming variables. You should not assign two different variables the same name in different cases.
* Variable names should describe the information the variable stores.
* Variable names should be written in camel case if they contain more than two words. For example, the variable name `dog breed` would be written as `dogBreed`.


4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
An array stores a list of related values. If you don't know how many items a list will contain, an array is a flexible way of storing them that is easy to add to later. To create an array, you give it a name like any other variable by using the `var` keyword. Next, you create your list of values within a pair of square brackets. Values in an array are separated by commas. This method is called an array literal and is the preferred method of creating an array. Each item in the array is indexed numerically, with the first item indexed at zero. To access an item in the array, you need to include the name of the array followed by the index number of the item in square brackets. To change that list item, you simply assign a new value using the equals sign. If I wanted to change the value of the third indexed item in an array called `dogs`, I would write `dogs[3] = 'Black Lab'`.


5.  What is the difference between an expression and a statement?
In simple terms, an expression returns a single value. An expression can assign a value to a variable or use multiple values to return a single value via an operation. <br>
A statement is an instruction to perform an action, like a loop. Statements can contain expressions.

6.  What are three types of operators and how are they used?
* Assignment operators - Assignment operators assign values to variables.
* Arithmetic operators - These are used to perform basic math.
* String operators - These are used to join the strings on either side of a plus sign.
* Comparison operators - Comparison operators compare two values and give a return value of true or false.
* Logical operators - Logical operators combine expressions and give a return value of true or false.
