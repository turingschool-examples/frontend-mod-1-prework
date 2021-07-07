# Day 5: JavaScript

## Open your local copy of frontend-module-0-capstone in Atom

In the day_5 directory, create another file called `day5-exercises.md`. This is where you'll put your answers to the following questions.

## Read Chapter 2 (Statements, Variables, Data Types, & Arrays) from [JavaScript & jQuery: Interactive Front-End Web Development](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_5?ie=UTF8&qid=1541447422&sr=8-5&keywords=duckett)

Answer these questions about the reading in your `day5-exercises.md` file:

1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
To declare a variable, you first input "var" to establish that this is a variable keyword, and then follow it with the name of your variable. For example, var quantity. The equal sign is used to declare a variable. In Javascript, it is an "assignment operator"; This assigns the variable keyword to the value that follows and is also used to update the value of the variable.
2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Number data types deal strictly with numerical data which includes whole numbers like 4 or 2 and floats (decimals) such as 3.14. String data is contained within quotes and can be alphanumeric data. An example might be "Fred" or "02/14/2020". Boolean data points have two values, true or false, and are helpful for triggering scripts.
3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
(1)Names must begin with a dollar sign, underscore, or letter, but not a number. (2) dots and dashes cannot be used in the name. (3)Keywords that have a specific command used by the interpreter cannot be used as variable names. (4)Variables are case sensitive. (5)Name of the variable should be informative about the data. (6) Camel case should be used for variables with more than one word. Underscores are also acceptable.
4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
Arrays can store an undefined amount of items in a list which avoids having to make a separate variable for each value. Accessing a value from an array, you must write the array name, and in square brackets, input the index number in the array. Changing the value requires you to use the equal sign, and then in quotes, write what the updated value is.
5.  What is the difference between an expression and a statement?
An Expression will result in a single value, this can occur by either using an assignment operator or calculating two or more values to retrieve one value. Statements are seen more as steps in a process; In a way, they are the individual steps in a recipe.
6.  What are three types of operators and how are they used?
assignment operators such as the equal sign, assign a value to a variable such as assigning the color "blue" to the variable color. Arithmetic operators perform basic mathematic functions such as addition or multiplication. String Operators are used to combine two sets of strings together into one.

Open up the Chrome Developer Tools, and open the Console tab. This is where we can write some JavaScript! If you don't remember how to get to the console, watch [this video](https://www.youtube.com/watch?v=JzZFccCEgGA) to review.

Pro tip: If you want to write more than one line of code in the console before running the code, then use `shift + enter`.

For each task listed below, enter it in the console:

*   `25`
*   `"this is my string"` (notice the output's color difference between a number and a string)
*   `var myNewString = "Hello Turing!";`
*   `myNewString` Before you hit Enter, what do you expect to see in the console?
*   `var myNum = 9;`
*   `myNum` Before you hit Enter, what do you expect to see in the console?
*   `var anotherString = "How are You?"`
*   `"Connect" + " " + "these" + " " + "strings."` What happened? This is called string concatenation. Notice the strings with spaces.
*   `myNewString + anotherString` This is also string concatenation using variables.
*   `5 > 3` returns a boolean value of true. How could you change this expression to return false?
3>5
*   `"2" === 2` and `"2" == 2` Why does one of those expressions return true and one return false?
=== is a strict operator meaning it not only looks at the value but also the data type. While == shows true due to both having 2 as a value, === reads as false because one is a number and the other is a string.
*   `if (8 < 9) {console.log("Hey!")}` Before you enter this code in the console, what do you think will happen? Will it log Hey to the console? Probably.
*   Write an if/else statement where the code in the `else` block is executed. For example: `if (3 < 1){console.log("if block")} else {console.log("else block")}`
*   Use the console to solve [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/variables.html).

## Save your day 5 file in git and push to GitHub

Using the commit message: `Add day 5`, add, commit, and push your changes to GitHub!
