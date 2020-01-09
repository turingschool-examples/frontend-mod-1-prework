**1.  How do you declare a variable?  What does the equals sign really mean in JavaScript?  What is it called in JavaScript?**

    Before you can put a variable to use, you must announce that you want to use it.  This requires creating the variable (variable keyword) and giving it a name (variable name) in order to declare the variable.  JavaScript knows that the keyword is used to create a variable.  In order to use the variable you need to give it a name (identifier).  If the name is more than one word it is usually written in camelCase.  In camelCase the first word is all lowercase and any following words have their first letter capitalized.  Once you have created a variable you can tell it the information you would like it to store for you.  This is assigning a value to the variable.  Until you have assigned the value to a variable it will be known as undefined.  Where a variable is declared can have an effect on whether the rest of the script can use it.  This is called the scope of a variable.  When declaring a variable in JavaScript you do not need to specify the type of data it will hold.

    The equals sign is known as an assignment operator in JavaScript.  It indicates that you are going to assign a value to a variable.  It also is used to update the value given to the variable.    

**2.  There are three big data types in JavaScript: numbers, strings and booleans.  Describe what each of them are.**

    The numeric data type handles numbers.  For counting or calculating numbers you will use 0-9.  You can have positive, negative and decimals numbers as this type of data.  Numbers are not used specifically for things like calculators.  They can also be used for other tasks.  For example, they can be used to determine the size of the screen, moving the position of an element on a page or setting the amount of time it should take for an element to fade in.  Numbers are not written in quotation marks.

    The strings data type consists of letters and other characters.  This data type is enclosed in a pair of quotes.  They can be either single or double quotes but the opening type of quote must match the closing type of quote and they should be straight rather than curly.  Also, strings must be written on one line.  Strings can be used when working with any type of text.  Frequently they are used to add new content into a page and they can contain HTML markup.

    Boolean data types can only have one of two values: true or false.  They are used when your code can take more than one path.  Given that it can only have two values it may seem rather useless, but in reality this data type can be very helpful.  Booleans are helpful when specifying what part of a script should run.  

**3.  What are the six rules for naming variables?  What are a few JavaScript reserved words that you should avoid using for variable names?**

    - The name must begin with a letter, dollar sign ($) or an underscore.  It cannot start with a number.
    - The name can contain letters, numbers, dollar sign or an underscore.  You cannot use a dash (-) or a period (.) in a variable name.
    - You cannot use keywords or reserved words.  Keywords are special words that tell the interpreter to do something.  Reserved words are words that may be used in a future version of JavaScript.
    - All variables are case sensitive.  This means that feet and Feet would be two different variable names, however, it is frowned upon to create two variables that have the same name that use different cases.
    - Use a name that describes the kind of information that the variable stores.
    - If your variable name is made up of more than one word use camelCase.  This means that you are to use a capital for the first letter of every word after the first word.  You can also use an underscore between each word, but make sure you do not use a dash.

    Continue, delete, function, return and var are a few reserved words that you should avoid using for variable names in JavaScript.


**4.  How can an array be useful when dealing with multiple related values?  How do you access/change a value in an array?**

    An array is a special type of variable where it doesn't just store one value it stores a list of values.  Consider using an array when you are working with a list of values that are related to each other.  An array can be helpful when you are unsure how many items a list will contain, because when you create the array you do not need to specify how many values it will hold.  When you do not know how many values a list will contain, instead of creating enough variables for a long list, when you may not use all of them, using an array is a better solution.  

    Values in an array are accessed as if they are in a numbered list.  The numbering of this list starts at zero not one.  To access a value from an array, after the array name you specify the index number for that value in square brackets.  To change the value of an item in an array, you do so by selecting it and assigning it a new value using the equal sign and the new value for that item.  

**5.  What is the difference between an expression and statement?**

    An expression results in a single value.  There are two types of expressions: expressions that just assign a value to a variable and expressions that use two or more values to return a single value.  You can perform operations on any number of individual values to determine a single value.  

    A statement performs and controls actions but does not result in a value.  Each individual instruction or step is known as a statement and should end with a semicolon.  Statements are individual instructions that the computer should follow and each one starts on a new line.  It makes the code easier to read and follow.  When statements are surrounded by curly braces they are known as code blocks.  Code blocks are often used to group together many more statements.  This also helps to organize code and make it more readable.

**6.  What are three types of operators and how are they used?**

    Assignment operators assign a value to a variable.  They are also used to update the value given to the variable.

    Arithmetic operators perform basic math including addition, subtraction, division, multiplication, increment, decrement and modulus.  More than one arithmetic operation can be executed in one expression, but it is vital to understand how the result will be calculated.  Multiplication and division are performed before addition or subtraction.  The order can affect the result that you expect to see.  Mathematical operators can use variables that represent numbers.  This means the numbers do not need to be written definitely into the code.

    String operators combine two strings.  There are many instances where you need join multiple strings to create a single value.  Joining together two or more strings to create one new string is called concatenation.  There is only one string operator, the + symbol, and it is used to join the strings on either side of it.
