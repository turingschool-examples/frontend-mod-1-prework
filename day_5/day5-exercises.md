## Day-5 Questions
### Chapter 2
#### How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

To declare a variable, you write in the script a variable keyword that specifies to the computer that you are creating a variable.  That keyword is "var".  This is followed by the name of the variable you are creating so to create a variable called weight it would be var weight;  The equal sign in JavaScript is what is known as an assignment operator and it means that the values you give following it are assigned to the specified variables.

#### There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

Numbers are simply numeric data and these are commonly used in counting or calculating operations.  Numbers can be positive or negative, may be decimals, and for larger numbers there is no comma included in the value.  Strings are data types that use letters and characters.  These can be names, statements, or simply words.  String data types are given within either single or double quotation marks.  Boolean are data types that have two values and those values are represented using true and false.  These data types can be representative of values such as on / off and yes / no.  

#### What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

Rule 1: The variables names has to start with a $ sign, _ underscore sign, or a letter.  It can not start with a number.
Rule 2: Do not use a dash or period in the name of a variable.  Only use letters, numbers, dollar sign, or underscores.
Rule 3: Avoid using any keywords or reserved words.  Keywords are those which tell the computer to do something.  Reserved words are particular words that might be used in future JavaScript versions.
Rule 4: Variable names are case sensitive so pay close attention to which you use in every variable.  Also, do not name two variables the same word but with different capitalization.
Rule 5: Give the variable a name that describes the type of information it conveys.  
Rule 6: If the variable name is multiple words, the first word is all lowercase, there are no spaces between words, and every word after the first has its first letter capitalized.  
Some examples of reserved words to avoid using include const, enum, function, default, catch, super, switch, typeof.

#### How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

Arrays can be useful when dealing with multiple related values for which you don't know all of the values that will be used yet.  Arrays do not require a specified amount of values to hold so it can be easily added on to.  To access an array, you give the array name followed by the index number of the value you want and that index number is contained within square brackets.  To change a value in an array, you first access it by stating the array name and index number, then you use an assignment operator and give its new value just the same as you would do when you first created that value.  

#### What is the difference between an expression and a statement?

A statement is every individual direction or step given within JavaScript and every statement should start on a new line and is ended with a semicolon.  An expression is an operation that creates a single value for something such as the values given to a variable.  An expression can directly assigned by simply stating the value to be used, or it can be a result of two or more values being combined into one.  For example, mathematical expressions can be done to return a single value such as giving a value of 18 + 20 which would return the individual value of 38.

#### What are three types of operators and how are they used?

One of the more simple operators used is the addition operator "+" and it is used to combine values together.  For example the addition operator may be 20 + 30 to produce the result of 50.  Another operator used is the modulus operator "%" which will divide tow values and the resulting value will be any remainder that exists.  For example, if we have 20 % 7 then we divide 20 by 7 which gives us 2 with a remainder of 6.  Since the remainder is the result of this operator, it will return the value of 6.  A third operator is the multiplication operator * and it's used to multiply two values together.  For example, if we have 30 * 3 then it will result in the value of 90. 
