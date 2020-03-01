1. How do you declare a variable? What does the equals sign really mean in JavaScript? What is it called in JavaScript?
    * `var` `variable name;` `= variable value`
      * `var name = alex;` is a variable called name where name is alex
    * The equals sign means that you are going to give a value to the variable and is called an assignment operator

2. There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
    * Numbers - handles numbers
      * Used for counting or calculations and no commas are used
      * Includes integers and floats
    * Strings - handles letters and special characters
      * Enclosed in quotes (single or double quotes are okay, they just have to match)
      * Can contain HTML markup  
    * Booleans - handles true or false situations
      * Can think of it in terms of a light switch. It's either on or off but can't be both

3. What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
    1. The name must begin with a letter, dollar sign, or an underscore. NOT a number
    2. The name can have letters, numbers, dollar sign, or underscores.
        * You must use a dash or a period in a variable name
    3. You can't use keywords or reserved words
        * keywords are special words that tell the interpreter to do something
        * Reserved words are words that may be used in a future version of JS
    4. All variables are case sensitive
    5. Use a name that describes the kind of info the variable stores
    6. Use camelCase when naming a variable that's more than one word
        * You can also use an underscore between words but NOT a dash
    * Examples of reserved words:
        * abstract
        * class
        * return
        * true
        * void

4. How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
    * It's useful because you don't need to specify how many items a list has, and you don't have to go through each item in the list to create a variable for each one
    * To access a value in an array, you specify the index number for the corresponding value after the name of the array and using square brackets
        * EX: `colors[2]` will give you the 3rd value of the array named colors
    * You change the value in an array by selecting it using the index method and setting it equal to a new value
        * EX: `colors[2] = 'blue';` changes the third value in an area named colors to blue

5. What is the difference between an expression and a statement?
    * Expressions evaluate a single value.  
        * There are two main types:
            1. expressions that assign a value to a variable
            2. expressions that perform operations
    * Statements perform an action
    * The difference between the two is a statement can perform an action across multiple values where an expression is used for single values
    * JS can treat any expression as a statement but cannot treat statements as expressions

6. What are three types of operators and how are they used?
    1. Assignment operators - assigns a value to a variable
        * EX: `firstName = alex;`
    2. Arithmetic operators - performs basic math
        * EX: `weeklySum = 500 + 600;`
    3. String operators - combines two strings
        * EX: `goodbye = "Bye" + "Joe";`
