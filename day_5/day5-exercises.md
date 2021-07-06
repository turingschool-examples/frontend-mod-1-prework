Chapter 2

How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

- A variable is declared by stating 'var',  then the name of the variable, the equals sign, and then the value of the variable, followed by a semicolon. The equals sign is used to assign values to a variable. = is called the 'Assignment Operator'.

There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

 - Numbers handle numeric data including integers, floats, positive and negative numbers. Strings handle any data that consists of text or other characters. Booleans can have a value of either true or false, which can sometimes be expressed as 0 or 1.

What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

- Name must start with letter, $, or _
- Name can contain letters, numbers, $ and/or _, but MUST NOT contain - or .
- Names must not be keywords or reserved words
- - Ex: var, true, false, break, case, new, throw, debugger
- All variables are case sensitive
- Names should describe the information the variable stores
- Use camel case for variables containing multiple words, ex: firstName, accountNumber, etc

How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

- An array can be useful when dealing with multiple related values as you do not need to know the number of values before creating an array. New items can be added to the list and not cause a problem. You access or change an array value by calling the array variable with the position of the item in the array. For example, if you want to call the 4th item in an array called shoppingList you would do so by typing shoppingList[3]. To change the value you simply declare a new value like you would changing a variable, ex: shoppingList[3] = "Apples";

What is the difference between an expression and a statement?

- Statements are logic, Expressions are calculations or assignments. Statements use data values, expressions either change or create new values, potentially based on other values.

What are three types of operators and how are they used?

- Arithmatic Operators are used when calculating numbers or numeric variables, Ex: + - * /
- Logic Operators are used to combine expressions and return True or False, Ex: && || !
- Comparison Operators are used to compare 2 values and return True or False, Ex: > < >= <=



Console Practice:

var numChildren = 2;
undefined
var namePartner = "John Doe";;
undefined
var geoLoc = "Denver, CO";
undefined
var jobTitle = "Senior Developer";
undefined
var future = "You will be a " + jobTitle + " in " + geoLoc + ", and married to " + namePartner + " with " + numChildren + " kids."
undefined
console.log(future)
VM1054:1 You will be a Senior Developer in Denver, CO, and married to John Doe with 2 kids.

var curYear = 2019
undefined
var birthYear = 1988;
undefined
var age = curYear - birthYear;
undefined
console.log("You are either " + age + " or " + (age - 1));
VM904:1 You are either 31 or 30

var curAge = 31;
undefined
var maxAge = 80;
undefined
var amtPerDay = 2;
undefined
var lifeSupply = ((maxAge - curAge) * 365) * amtPerDay
undefined
console.log("You will need " + lifeSupply + " to last you until the ripe old age of " + maxAge);
VM1508:1 You will need 35770 to last you until the ripe old age of 80