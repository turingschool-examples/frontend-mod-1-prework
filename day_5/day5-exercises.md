How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?


    You declare a variable with var followed by the variable name you wish to use (which is also called the identifier)
    The = is called an assignment operator and it means you are assigning a variable.


There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

    numbers- numeric value (can be positive, negative, whole, decimal)
    string- data in quotes (uses letters/text)
    boolean- true/false value

What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?


    1. name must begin with a letter, $, or _ . Cannot start with a number.
    2. cannot use a dash - or period .
    3. cannot use any Javascript keywords.
    4. variables are case sensitive- cat and Cat are two different variables (but you shouldn't use both)
    5. name should be descriptive of the information the variable stores
    6. variable names containing multiple words should be written in camelcase

    a few keywords (words you should avoid using in variable names) break, case, catch, continue, developer, delete

How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

    You don't have to know how many items a list will contain if you use an array instead.

    You can change the value of an array by accessing it (which you do by typing the variable name followed by its index number in square brackets) and following it with =  and then the new name (just like when you assign it originally)



What is the difference between an expression and a statement?


    A statement performs actions or controls actions, but doesn't resolve to values. An expression is a piece of code that resolves to a value.

What are three types of operators and how are they used?

    Assignment operators- assign value to a variables
    Arithmetic operators- perform basic math
    String operators- combine two strings


Console log exercises:

```
25
25
"this is my string"
"this is my string"
var myNewString = "Hello Turing!";
undefined
myNewString
"Hello Turing!"
var myNum = 9;
undefined
myNum
9
var anotherString = "How are you?";
undefined
"Connect" + " " + "these" + " " +"strings."
"Connect these strings."
myNewString + anotherString
"Hello Turing!How are you?"
5>3
true
5<3
false
"2" === 2
false
"2" == 2
true
if (8 < 9) else {console.log("Hey!")}
VM917:1 Uncaught SyntaxError: Unexpected token else
if (3 < 1){console.log("if block")} else {console.log("else block")}
VM924:1 else block
undefined
var numberOfChildren = 0
undefined
var partnerName = Orion
VM1038:1 Uncaught ReferenceError: Orion is not defined
at <anonymous>:1:19
(anonymous) @ VM1038:1
var partner nemae = "Orion"
VM1093:1 Uncaught SyntaxError: Unexpected identifier
var partnerName = "Orion"
undefined
var geographicLocation = "Moab"
undefined
var jobTitle = "Chief Dog Wrangler"
undefined
var fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids. ";
undefined
console.log(fortune)
VM1821:1 You will be a Chief Dog Wrangler in Moab, and married to Orion with 0 kids.
undefined
var = numberOfChildren = 2
VM1898:1 Uncaught SyntaxError: Unexpected token =
numberOfChildren = 2
2
var fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids. ";
undefined
fortune
"You will be a Chief Dog Wrangler in Moab, and married to Orion with 2 kids. "
var currentYear = 2019
undefined
var birthYear = 1980
undefined
var age = currentYear - birthYear
undefined
age
39
console.log ("You are either " + age + " or " + (age-1));
VM2332:1 You are either 39 or 38
undefined
var maxAge = 100
undefined
var dailyQuac = 1
undefined
var year = 365
undefined
var lifetimeGuac = (maxAge - age)365 *dailyQuac
VM2617:1 Uncaught SyntaxError: Unexpected number
var lifetimeGuac = (maxAge - age)365 *dailyGuac
VM2642:1 Uncaught SyntaxError: Unexpected number
var lifetimeGuac = ((maxAge - age)365) *dailyGuac
VM2654:1 Uncaught SyntaxError: Unexpected number
var lifetimeGuac = ((maxAge - age)year) *dailyGuac
VM2666:1 Uncaught SyntaxError: Unexpected identifier
var lifetimeGuac = (dailyQuac * year) * (maxAge - age)
undefined
lifetimeGuac
22265
console.log ("you will need " + lifetimeGuac + "pounds of guacamole to last you until you are " + age;
VM3060:1 Uncaught SyntaxError: missing ) after argument list
var message = "You will need " + lifetimeGuac + "pounds of guacamole to last you until you are " + age;
undefined
console.log(message)
VM3164:1 You will need 22265pounds of guacamole to last you until you are 39
undefined
message = "You will need " + lifetimeGuac + "pounds of guacamole to last you until you are " + maxAge;
"You will need 22265pounds of guacamole to last you until you are 100"
```
