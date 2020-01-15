# Day 5: JavaScript

## Chapter 2 Questions

1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

  To declare a variable in JavaScript, you must have a variable keyword and a variable name. e.g.:
  ```
  var greeting
  var age
  ```

  An equals sign is known as an assignment operator. It says that you are going to assign a value to the variable.


2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

* Numbers: Are used for calculating or counting. Numbers can be negative. Can be with or without decimals.
* Strings: Contains letters or other characters. Used with any kind of text.
* Booleans: true or false. Can perform logic tasks with logical operators e.g. `&&` or `||`


3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
  1. Must not begin with a letter, dollar sign, or underscore. Must not start with number.
  2. Names can contain letters, numbers, dollar signs, or underscore. No dashes or periods are permitted.
  3. Cannot use keywords or reserved words for variables.
  4. Variables are case sensitive.
  5. Use variables that describe the kind of information that variable stores.
  6. Use camelCase for naming variables.

  Reserved words:
  * break
  * else
  * new
  * continue
  * while


4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

  Arrays are useful when dealing with multiple related values because they are perfectly set up to be changed iteratively. A loop needs to cycle through the array to use each piece of data. You access the value of an item in an array by specifying the index number for that value in square brackets.

5.  What is the difference between an expression and a statement?

  An expression relies on operators whereas statements don't need to have them. All expressions are statements, but not all statements are expressions.

  Statements:
  ```
  var hello
  document.getElementById('subtotal')
  ```
  Expressions:
  ```
  var hello = 'Hi there!';
  var totalValue = initialValue + finalValue;
  ```


6.  What are three types of operators and how are they used?

* Assignment operators: Assign a value to a variable
* Arithmetic operators: Perform basic math
* String operators: Combine two strings with `+`


For each task listed below, enter it in the console:

*   `25`
*   `"this is my string"` (notice the output's color difference between a number and a string)
*   `var myNewString = "Hello Turing!";`
*   `myNewString` Before you hit Enter, what do you expect to see in the console?

  ```
  "Hello Turing"
  ```

*   `var myNum = 9;`
*   `myNum` Before you hit Enter, what do you expect to see in the console?
  ```
  9
  ```
*   `var anotherString = "How are You?"`
*   `"Connect" + " " + "these" + " " + "strings."` What happened? This is called string concatenation. Notice the strings with spaces.

  The words were concatenated into `Connect these strings.`

Connect these strings
*   `myNewString + anotherString` This is also string concatenation using variables.
*   `5 > 3` returns a boolean value of true. How could you change this expression to return false?

You could write `5 < 3`

*   `"2" === 2` and `"2" == 2` Why does one of those expressions return true and one return false?

  Triple equals signs mean that the two values are the same type and have the same value. The expression on the left compares a string to a number.

*   `if (8 < 9) {console.log("Hey!")}` Before you enter this code in the console, what do you think will happen? Will it log Hey to the console?

  The console will print `"Hey"`.



*   Write an if/else statement where the code in the `else` block is executed. For example: `if (3 < 1){console.log("if block")} else {console.log("else block")}`


*   Use the console to solve [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/variables.html).

1.
```
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");
```

2.
```
console.log("You are either " + age + " or " + (age - 1));
```

3.
```
console.log("You will need" + totalNeeded + " cups of tea to last you until the ripe old age of " + maxAge);
```
