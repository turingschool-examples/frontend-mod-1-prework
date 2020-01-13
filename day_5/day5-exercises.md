1. *How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?* You declare variables by using the variable keyword followed by a variable name written in camelCase. The equals sign, an assignment operator, is used to assign a value to a variable. It doesn't mean that the variable equals its value.
2. *There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.* Numbers are numeric values between 0-9. They can be positive or negative. They can also be decimals. Strings are letters and other characters encased in quotation marks. Booleans contain data that is either true or false.
3. *What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?* The six rules are as follows: 1) The name should not start with a number - it can start with a $, letter, or an underscore. 2) The name can include numbers, letters, $, and underscores, but not periods or dashes. 3) Keywords cannot be used to name variables, such as var, break, boolean, function, etc. 4) Don't give two variables the same name with different cases. 5) Use descriptive names. 6) Use camelCase for variable names if the name is more than one word. Using underscores is also acceptable.
4. *How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?*  Arrays are helpful if you don't know how many values a list will contain. You can access a value in an array by typing the array name and then, in brackets, the number for the value in the array. You can then declare a new value using the equals assignment operator.
5. *What is the difference between an expression and a statement?* Statements provide instructions for the code to follow, while expressions assign one or more values to a variable.
6. *What are three types of operators and how are they used?* The three types of operators are assignment, arithmetic, and string operators. Assignment operators assign a value to a variable. Arithmetic variables perform simple math problems. String operators combine strings.

```
25
25
"this is my string"
"this is my string"
var myNewString="Hello Turing!";
undefined
myNewString //I would expect to see "Hello Turing!"
"Hello Turing!"
var myNum= 9; //I would expect to see the number "9."
undefined
myNum
9
var anotherString = "How are You?"
undefined
anotherString
"How are You?"
"connect" + " " + "these" + " " + "strings."
"connect these strings."
myNewString + anotherString
"Hello Turing!How are You?"
5>3
true
5<3 // I made it false by changing the operator - since 5 is greater than 3, it is false.
false
"2"=== 2 // this is false because three equals operators check for exact matches in value and type.
false
"2" == 2
true
"cat" == "dog"
false
"dog" == dog
VM656:1 Uncaught ReferenceError: dog is not defined
    at <anonymous>:1:10
(anonymous) @ VM656:1
0 === 0
true
if (8<9) {console.log("Hey!")]
VM825:1 Uncaught SyntaxError: Unexpected token ']'
if (8<9) {console.log("Hey!")} //I would expect to see "Hey!"
VM843:1 Hey!
undefined
if (3<1) {console.log("if block")} else {console.log("else block")}
VM1000:1 else block
undefined
if (3<1) {console.log("if block")} else {console.log("else block")};
VM1018:1 else block
undefined
if (3 < 1){console.log("if block")} else {console.log("else block")}
VM1079:1 else block
undefined
if (8>14) {console.log("hip hip, hurray!")} else {console.log("no way!")}
VM1264:1 no way!
```

```
var place = "france";
undefined
var partnerName = "Jae";
undefined
var numOfChildren = 0;
undefined
var jobTitle = "software engineer";
undefined
console.log("You will be a jobTitle in place, and married to partnerName with numOfChildren.");
You will be a jobTitle in place, and married to partnerName with numOfChildren.
undefined
console.log("You will be a var JobTitle");
You will be a var JobTitle
undefined
var fortune = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + numOfChildren + ".";
undefined
console.log(fortune);
You will be a software engineer in france, and married to Jae with 0.
undefined
var fortune = "You will be a " + jobTitle + " in " + place + ", and married to " + partnerName + " with " + numOfChildren + " kids.";
undefined
console.log(fortune);
VM1307:1 You will be a software engineer in france, and married to Jae with 0 kids.
undefined
var currentYear = 2020;
undefined
var birthYear = 1994;
undefined
var presentAge = currentYear - birthYear;
undefined
var presentAge2 = currentYear - birthYear - 1;
undefined
var possibleAges = "You are either " + presentAge " or " + presentAge2 + ".";
Uncaught SyntaxError: Unexpected string
var possibleAges = "You are either " + presentAge + " or " + presentAge2 + ".";
undefined
console.log(possibleAges);
You are either 26 or 25.
undefined
var currentAge = 25;
undefined
var maxAge = 55;
undefined
var perDay = 5;
undefined
console.log("You will need " + (maxAge - currentAge) * 5 + " to last you until the ripe old age of " + maxAge + ".");
You will need 150 to last you until the ripe old age of 55.
undefined
```
