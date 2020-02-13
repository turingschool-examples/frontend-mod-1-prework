# Section 1: Statements, Variables, Data Types, & Arrays

## How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

We use the variable keyword to declare a a variable name, as such `var variableName;` (`var` is the keyword here). We can assign a variable value on the same line of code/statement (a statement always ends with a semi-colon) using an **assignment operator** a.k.a. the equals sign. The assignment operator is used to assign/update a value to a variable. The value may be any of the data types that were introduced during Mod 0. Ideally a variable name describes the kind of data a variable holds. For example:
```javaScript
var myName = "Edwin";
var quantityForks = 15;
var isDoorOpen = true;
var studentNames = ['Jane', 'Naomi', 'Keith', 'Nic', 'Danny'];
```

## There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

* Numbers are numbers and are rather self-explanatory. In computer programming, there are two sub-types that warrant further explanation:
1. Integers: Whole numbers, can be positive or negative. The comma between thousands and hundreds is omitted. `[2, -8, 2247, etc...]`
2. Floats: Numbers that contain a decimal. Can also be negative. `[.45, -.53, 13.89]`

Numbers can be used for arithmetic programs, but are also helpful to determine the size of the screen/elements, their position, or time to fade-in/out.

* Strings contain letters and other characters, and are enclosed in either single or double quotations marks, but the opening and closing quote must match. Usually words, but they may be numbers, too. Note: quotations around numbers makes them strings and hence will no longer operate in arithmetic equations. Helpful for phone numbers, addresses, etc....     

* Booleans work like light switches. They have two values `true or false` (on/off). Usually, the variable name will be a short phrase. Booleans are helpful to determine which part of a script should run, that is, if certain conditions are met. Note: Though words, these values exist outside quotation marks, because they are not meant as  strings in these scenarios, and the first letter is not capitalized.    

## What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

1. They must begin with either a minuscule letter, dollar sign ($), or an underscore ( _ ), **Never** a number.
2. The name may contain, letters, numbers, `$` and/or `_`. They do **not** contain dashes (-) or periods (.).
3. Variables are case sensitive. `Quality` and `quality` would be different variables. It's bad practice to create two different variables with the same name, but different cases.
4. As mentioned earlier, variable names should describe the kind of data it will hold. There are examples below the first question on this document.
5. Variable names are written in `camelCase` or even `snake_case`. For camelCase, the first letter of every word after the first word (first letter is always a minuscule) is capitalized. For snake_case, every space is replaced with an underscore. **Never** use dashes (-).
6. Keywords and reserved words are off-limits. Keywords tells the interpreter to do something, for example `var` is the keyword for variable. Reserved words are words that may become keywords in the future. These include but are not limited to: abstract, break, byte, case, else, enum, export, native, transient, volatile, short, static, double. Some may already be in use in Java but not JavaScript, and are reserved in the latter for compatibility purposes or as possible extensions.     

## How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

Arrays are great because they are modular in nature. We can begin our array without specifying how many items will be in our list, and we can always add, subtract, or change list items. This is helpful when we do not know the total count of items on our list, and/or we are not going to use every single list items. Ultimately, arrays simplify code and make it more legible (this is always a goal to keep in mind). Here's an example:
```javaScript  
var color1 = 'blue';
var color2 = 'green';
var color3 = 'black';
var color4 = 'orange'; // when instead we could create an array as such:
var colors = ['blue', 'green', 'black', 'orange'];
```
Each value in an array is assigned a number called an **index**. We access/change a value in an array by using the array name and specifying the index number in brackets. Note: the numbering for list begins at zero and not one. An example using the array above:
```javaScript
var colorPants = colors[2];
var colorShirt = colors[3];  
var colorSocks = colors[0];
// The results would look like:
colorPants = 'black'
colorShirt = 'orange'
colorSocks = 'blue'
```

## What is the difference between an expression and a statement?


## What are three types of operators and how are they used?
