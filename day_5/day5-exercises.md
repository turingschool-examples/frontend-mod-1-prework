# Chapter 2 JavaScript Answers

1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
      * Variables can be used to represent values in your scripts that are likely to change/"short term memory"
        * A script is made up of a series of statements. Each statement is like a step in a recipe
      * When you tell a variable what information you'd like it to store for you, you are *assigning a value* to the variable
        * The equals sign (=) is called an **assignment operator**/it says that you are assigning a value to the variable

2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
      * Numeric data type - handles numbers (counting or calculating sums/no comma in larger numbers/can have negative numbers and decimals)
      * String data type - consists of letters and other characters enclosed in quotes (double or single quotes/can contain HTML markup)
      * Boolean data type - true or false values

3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
      * The name must begin with a letter, dollar sign, or an underscore/must **not** start with a number
      * You can't use a dash or a period in a variable name
      * You can't use keywords or reserved words (keywords are special words that tell the interpreter to do something, like *var* being the keyword to declare a variable/reserved words are ones that may be used in a future version of JavaScript)
        * EX: break, class, finally, function, if, null, return, while, with
      * Variables are case sensitive/bad practice to create two variables with the same name using different cases
      * Use a name that describes the kind of information that the variable stores (firstName could be used to store a person's first name)
      * Use camelCase/or you can also use an underscore between each word (but not a dash)

4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
      * An array can be helpful when you don't know how many items a list will contain/when creating an array you don't need to specify how many values it will hold
        * Each item in an array is given a number called an **index**/the index values start at 0 (not 1)
        * To access a value from an array, after the array name you specify the index number for that value inside square brackets
        * To then change the value of an item in an array, you select it and assign it a new value (using the equals sign and the new value)

5.  What is the difference between an expression and a statement?
      * An expression evaluates into (results in) a single value/rely on **operators**
        * Expressions that just assign a value to a variable
        * Expressions that use two or more values to return a single value (`var area = 3 * 2;`)
      * A statement is each individual instruction or step in a script/end with a semicolon
        * Each one starts on a new line or can be organized into code blocks

6.  What are three types of operators and how are they used?
      * Assignment operators (assign a value to a variable)
        * `color = 'beige';`
      * Arithmetic operators (mathematical operators)
        * Addition (+) adds one value to another
        * Increment (++) adds one to the current number
        * Decrement (--) subtracts one from the current number
        * Modulus (%) divides two values and returns the remainder
      * String operator (joins two or more strings together)
        * Just one: the (+) symbol. It is used to join the strings on either side of it
          * Joining two or more strings together is called **concatenation**
