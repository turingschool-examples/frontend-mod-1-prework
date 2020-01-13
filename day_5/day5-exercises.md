Reading Response Ch. 2 Statements, Variables, Data Types & Arrays from JavaScript & jQuery

1. You declare a variable using the keyword var, a name and value
i.e. var nameOfVar = 'Example Value'
The equals sign is an assignment operator that says you are going to assign a value to the variable

2. Numbers are integers i.e. 1, 2, 3, 4567, 0.5
Strings are text and characters in quotation marks i.e. "Lauren's String"
Booleans have true or false values

3. The six rules for naming variables are:
-The name must begin with a letter, dollar sign $ or underscore _
-The name can contain letters, numbers, dollar signs or underscores
-You cannot use keywords or reserved words i.e. var, boolean, else
-Variable are case sensitive
-Use a name that describes the kind of information the variable stores
-Use camelCase if your variable is more than one word
Variables cannot start with a number or have a period . or dash - in the name

4. An array is useful when dealing with multiple related values because
they store more than one piece of related information in a list
You access a value in an array by typing the array name and index number for the value you want to access
You change a value by selecting it and assigning it a new value like any other variables
i.e. var colors = ['Red', 'White', 'Blue'];
colors[2] = 'Green' //changes blue to green

5. The difference between an expression and a statement is:
-an expression evaluates into a single value and relies on operators to calculate a value
-a statement is an individual instruction or step in a script


6. Three types of operators are:
-assignment operators assign a value to a variable i.e. color = 'purple';
-arithmetic operators perform basic math i.e. area = length * width
-string operators combine two strings i.e. greeting = 'Hi ' + 'Bean!'

JavaScript tasks
25
25
"This is my string."
"This is my string."
var myNewString = "Hello Turing!"
undefined
var myNum = 9
undefined
var myNewString = "Hello Turing!";
undefined
var myNum = 9;
undefined
var anotherString = "How are you?";
undefined
"Connect " + "these " + "strings."
"Connect these strings."
myNewString + anotherString
"Hello Turing!How are you?"
5>3
true
3>5
false
"2" === 2
false
"2" == 2
true
"'2' == 2 returns true because == checks for loose equality after trying to convert them to a common type (string/number) while === checks for strict equality so the type and valure have to be the same"
"'2' == 2 returns true because == checks for loose equality after trying to convert them to a common type (string/number) while === checks for strict equality so the type and valure have to be the same"
if (8<9) {console.log("HEY!")}
VM3370:1 HEY!
undefined
if (3 < 1){console.log("if block")} else {console.log("else block")}
VM3375:1 else block
undefined
if (3 > 1){console.log("if block")} else {console.log("else block")}
VM3383:1 if block
undefined
