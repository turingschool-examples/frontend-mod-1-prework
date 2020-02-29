# Read Chapter 2 (Statements, Variables, Data Types, & Arrays)

##  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
  Variables are declared by combining it with an assignment operator and a variable value. The equals sign (which is the assignment operator) is basically telling the variable to remember the value that follows, at least until given more information. By storing that data you can then access that data by referring to the variable. Variables can store large amounts of information, including functions that alter other variables.

##  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
  Number data types are numerical values that can be either whole or contain decimals. Numbers should be expressed without commas and should not be written out as text. Numbers can be used both to store data and to perform calculations. Strings are expressions of text. Strings can be accepted as input, or logged and returned to the user. Strings can be combined with other strings to create new strings. Booleans are true/false statements and act like on/off switches. You can change values from true to false and back again. A car could be locked or unlocked. By changing the `isLocked` value from true to false, we can show that the car is unlocked.

##  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
  1. Variable names must not start with a number; they can start with a letter, dollar sign, or an underscore.
  2. Don't use `.` or `-` in your variables, but they must contain a letter, dollar sign or an underscore.
  3. There are some words that you can't use in a variable, like keywords. These are keywords are things like `var` or `let` which tell the interpreter to do a specific thing.
  4. Because variables are case sensitive "book" and "Book" would be two different variables. It is bad practice (confusing) to have variables that are the same words in different cases.
  5. You should use a variable name that describes the information being stored. If you were storing the title of a book, you should name the variable something like `Title`. If you were also storing the titles of movies or plays, you may use the variables `bookTitle` , `movieTitle` , `playTitle` .
  6. Variables should be written in camel case. This means that the first word of each variable is not capitalized, but that each of the following words is capitalized.

##  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

  Arrays are useful when dealing with multiple related values because arrays do not specify how many values they can hold. This is useful because if you aren't exactly certain how many values you need to store, an array can be used instead. Arrays can also be useful when storing complex data. A good example of an array would be the guest list for a party. If you are not sure exactly how many people will be attending, you can add to the array of `guestList`. To access or change a value in an array, you would need to reference the value's index number. It is important to remember that the first value in an array has an index of `[0]`, so the fifth value would have an index of `[4]`.

##  What are three types of operators and how are they used?
  1. Assignment operator: This operator allows you to tell a variable data that should be remembered. `var = 'example'`
  2. Arithmetic operator: This operator can tell assign the result of basic math functions to a variable.`height = 5 * 10` would mean that height = 50.
  3. String operator: This operator can combine strings. ` goodbye = 'Have a good night ' + 'Charles' + '.'` would mean goodbye = "Have a good night Charles." 
