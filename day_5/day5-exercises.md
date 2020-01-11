# Day 5: JavaScript

## Chapter 2 Questions and Answers
1)  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
* Answer: To declare a variable in JavaScript means that you are creating a variable and giving it a name.  To do that, it looks like this example: `var outcome;`  The 'var' part is the variable keyword and the 'outcome' part is the name of the variable.  After you have declared a variable, you can assign it a value, using the variable name, an equal sign (called and assignment operator in JavaScript) and a variable value.  In our example, we could do this: `outcome = 5` where 'outcome' is the variable name, the '=' sign is the assignment operator, and '5' is the variable value.

2)  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
* Answer:
  * **Numbers**: The number data type handles all numeric data, such as '3, 0, 0.75, -4.34' and on.  When assigning a number to a variable, you do not need to use quotes.
  * **Strings**: Strings consist of letters and other characters and when declaring a string, you do need to use quotations.  Single or double quotations both work, so long as you use the same one when declaring.  You can use numbers in a string as long as you don't need the numbers to do any calculations. An address or phone number could be a string.
  * **Booleans**: Boolean data types assign either a true or false value to the data.  Think of booleans as a light switch: either on or off.

3)  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
* Answer:  The 6 rules for naming variables are:
  * 1) The name cannot begin with a number.  It can begin with a letter, dollar sign, or an underscore.
  * 2) The name cannot have a dash(-) or a period(.) in it.  It can contain numbers, letter, dollar sign, or an underscore.
  * 3) You cannot use keywords or reserved words while naming.  Keywords are special words that tell the interpreter to do something. (ex: `var`)
  * 4) All variables are case sensitive, so `Outcome` and `outcome` would be different variables.  It's considered bad practice to name two variables the same thing but with different cases.
  * 5) Use an appropriate name that describes the kind of info the variable will store.  For example, use `totalCost` for a variable that is adding up all of the item costs.  Don't call it something abstract, like 'greenLight'.
  * 6) Use camelCase if the variable is more than one word.  camelCase is where a capital letter is used for the first letter of each word after the first word.  For example: `firstName` is camelCase.

4)  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
* Answer: When dealing with multiple related values, arrays are useful because arrays don't limit the number of items in the list and also different data types can be stored in the same array.  To access or change a value in an array, write the array name and then the index number of the item to be changed.  For example: `colors[1] = 'green'` changes the 2nd value in the array (the first value has an index of 0) to 'green'.

5)  What is the difference between an expression and a statement?
* Answer:  A statement is a line of code that performs some action, while an expression evaluates a value or values into a single value.  For example, `var area = 3 *3` returns a single value of `9`.


6)  What are three types of operators and how are they used?
* Answer:  Expressions have operators in then to evaluate the value or values. The 3 types are:
  * Assignment Operators: `color = 'blue'`
  * Arithmetic Operators: `area = 3 *3`
  * String Operators: `greeting = 'Hello' + 'Nick'`


## For each task listed below, enter it in the console:
  *   `25`
  *   `"this is my string"` (notice the output's color difference between a number and a string)
      * Answer: The string is now red.
  *   `var myNewString = "Hello Turing!";`
  *   `myNewString` Before you hit Enter, what do you expect to see in the console?
      * Answer:  Since we assigned 'myNewString' a value, I expect to see the value. (In this case: "Hello Turing")
  *   `var myNum = 9;`
  *   `myNum` Before you hit Enter, what do you expect to see in the console?
       * Answer: I should expect to see '9'
  *   `var anotherString = "How are You?"`
  *   `"Connect" + " " + "these" + " " + "strings."` What happened? This is called string concatenation. Notice the strings with spaces.  
       * Answer:  The strings connected on the next line to form "Connect these strings."
  *   `myNewString + anotherString` This is also string concatenation using variables.
  *   `5 > 3` returns a boolean value of true. How could you change this expression to return false?
       * Answer: Change the greater than sign to less than
  *   `"2" === 2` and `"2" == 2` Why does one of those expressions return true and one return false?
       * Answer: `"2" === 2` returns **false** because the `===` means a **strict equal to***.  In this case, the "2" is a string and the 2 is a number, so they are not the same because they are not the same data type.  The `"2" == 2` returns **true** because it's just comparing the two value and not data types to see if they are the same.  Using the **===** is more precise.
  *   `if (8 < 9) {console.log("Hey!")}` Before you enter this code in the console, what do you think will happen? Will it log Hey to the console?
       * Answer: I think it will enter it because 8 is less than 9.  It worked!
  *   Write an if/else statement where the code in the `else` block is executed. For example: `if (3 < 1){console.log("if block")} else {console.log("else block")}`
       * Answer: if (3 > 12){console.log("Seahawks Win")} else {console.log("Go Pack Go!")}

![Day5Console](https://user-images.githubusercontent.com/44849120/72208424-4d9d8c00-349a-11ea-96f3-6e33533f0d90.png)

  *   Use the console to solve [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/variables.html).
  * Answers:
  ![Day5Problems1-2](https://user-images.githubusercontent.com/44849120/72208962-3f9f3980-34a1-11ea-8892-8eacc568b116.png)
  ![Day5Problem3](https://user-images.githubusercontent.com/44849120/72208967-52b20980-34a1-11ea-8413-d08abcc30e5e.png)
