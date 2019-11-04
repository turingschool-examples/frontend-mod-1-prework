1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
- *declaring* a variable is to announce that you want to use it
  - the declaration starts with the variable keyword `var` followed by the `name` of the variable you are declaring
  `var quantity;` in this example *quantity* is the variable name, and it is closed with a `;`
- `=` is known as the *assignment operator* in JS — it says that you are going to assign a value to a variable.
  - It is also used to update the value of a variable.

2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
- `integers` or numeric Data can store whole numbers or decimals

- `string data` consist of letters and other characters (text) surrounded by `''` or `" "` single or double quotes
- `boolean data` true / false statements
  - like a switch: a boolean is either __ON__ or __OFF__

3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

    1. the name must begin with a `letter` `$` or an `_`
      it __CANNOT__ begin with a number

    2. the name __can__ contain `letter` `$` or an `_`
      the name __CANNOT__ use a `-` or `.`

    3. a name __CANNOT__ use *keywords* or *reserve words*
      - keywords are the special words that tell the interpreter to do something
      - reserved words are ones that may be used in future version of JS

    4. all `variables` are case sensitive
      so *score* and *Score* would be 2 separate variables

    5. use a name that accurately describes the kind of information the variable stores
      ie `firstName` and `lastName` and `age`

    6. if a variable name consists of more than 1 word it should follow this format:
      `firstSecond` and `firstSecondThird`
      - the first letter of the first word should be *LC* and the first letter of every following word should be *UC*


4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
- Arrays can be useful when the number of values in a variable is not known
  - ie. a shopping list, where the related values may change between different trips

- values in an array can be accessed using a method `item()` or they can be called out by their variable `name` followed by `[ ]` and the `index#`
like this:
```
var colors = ['white', 'black', 'custom']
colors[2] = 'beige';
```
- in this example, an array of colors is being made with the values white, black and custom
- in line 2, the variable in index position 3 is being changed to 'beige'

  - items in an array are automatically asigned an __INDEX VALUE__
  - (the index number of the item is specified in the parenthesis)
  - index values begin with __0,1,2,3__ etc.
  __Numbering always starts with 0 NOT 1__

5.  What is the difference between an expression and a statement?
- A statement is a type of expression, but expressions are divided into 2 types:
1. Expressions that assign just a single value to a variable
  *This explains a `statement`*
2. Expressions that use __two or more__ values to return a __single VALUE__
`var area = 3 * 2;`
you can perform operations on any number of individual values to determine a single value, in the exampkle above, the returned value is 6.


6.  What are three types of operators and how are they used?
  1. `ASSIGNEMNT operators`
    - assign a value to a variable
    - `color = 'beige';`
  the value of that color is now beige.

  2. `ARITHMETIC operators`
    - perform basic math
    - `area = 3 * 2;`
    the value of the area is now 6

  3. `STRING operators`
    - combine 2 strings
    - `greeting = 'Hi' + 'Molly';`
    the value of greeting is now Hi Molly.

Open up the Chrome Developer Tools, and open the Console tab. This is where we can write some JavaScript! If you don't remember how to get to the console, watch [this video](https://www.youtube.com/watch?v=JzZFccCEgGA) to review.

Pro tip: If you want to write more than one line of code in the console before running the code, then use `shift + enter`.

For each task listed below, enter it in the console:

*   `25`
*   `"this is my string"` (notice the output's color difference between a number and a string)
  - numbers show as green and return as purple
  - strings show as orange and return as red

*   `var myNewString = "Hello Turing!";`
*   `myNewString` Before you hit Enter, what do you expect to see in the console?
  - I expect to see "Hello Turing"

*   `var myNum = 9;`
*   `myNum` Before you hit Enter, what do you expect to see in the console?
  - the number 9

*   `var anotherString = "How are You?"`
*   `"Connect" + " " + "these" + " " + "strings."` What happened? This is called string concatenation. Notice the strings with spaces.
  - the console returned this: Connect these string. (with spaces)

*   `myNewString + anotherString` This is also string concatenation using variables.
  - returns: "Hello Turing!How are you?"

*   `5 > 3` returns a boolean value of true. How could you change this expression to return false?
  - `5 < 3` would return false

*   `"2" === 2` and `"2" == 2` Why does one of those expressions return true and one return false?
  - Strict equality (===) means values which we are comparing must have the same type. This means "2" will not be equal to 2. One is a string, the other is an integer. The types are __NOT__ the same

*   `if (8 < 9) {console.log("Hey!")}` Before you enter this code in the console, what do you think will happen? Will it log Hey to the console?
  - yes it will log 'Hey' because it is solving for is `8 < 9` eight less than 9.

*   Write an if/else statement where the code in the `else` block is executed. For example: `if (3 < 1){console.log("if block")} else {console.log("else block")}`
 - `if ((9-4) > 5){console.log("if block")} else {console.log("else block")}`
 - retuns `else block` because 5 is not `>` 5.


*   Use the console to solve [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/variables.html).
1. `numChildren = 0;`
`var partnerName = 'Genevieve';`
`var geoLocation = 'Denver';`
`var jobTitle = ['student', 'at', 'Turing'];`
`var myName = 'John';`

```
myName + " " + jobTitle + " " + "from" + " "+ geoLocation +" "+ "and married to" +" "+ partnerName + " " + "with" +" "+ numChildren + " " + "children."
```
returns
"John student,at,Turing from Denver and married to Genevieve with 0 children."
__as a side note, the provided example does not work, it returns an error on location var__


2. `var currentYear = 2019;`
`var birthYear = 1988;`
`var age = currentYear - birthYear;`
```
console.log ('You are either' + age + 'or' + (age -1))
```
You are either31or30

3. `var currentAge = 31;`
`var maxAge = 91;`
`var maxPerDay = 3;`
`var totalNeeded = (maxAge - currentAge) * (356 * maxPerDay);`
```
console.log ('You will need' + " " + totalNeeded+ " " + 'to last you until the ripe old age of' + " " + maxAge)+'.'
```
You will need 64080 to last you until the ripe old age of 91


## Save your day 5 file in git and push to GitHub

Using the commit message: `Add day 5`, add, commit, and push your changes to GitHub!
