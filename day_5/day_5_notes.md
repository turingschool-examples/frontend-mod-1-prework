# Day 5 Notes #
## Chapter 2 ##
### Basic JavaScript Instructions ###
`script`
- a script is a series of instructions that the computer can follow one-by-one

`Statements`
- each individual instruction in a script is called a *statement*.
- statements should end with a semicolon.
- each statement starts on a new line.

`codeblocks`
- are surrounded by `{ }`
- code blacks group together statements, and often run together:
- the `{ }` is __NOT__ followed by the `;`
```
if (hourNow > 18){
  greeting = 'Good evening';
} else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow > 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Welcome';
}
document.write(greeting);
```
JavaScript is case sensitive!

`Comments`
- commetns should be written to explain what code does what
- __multi-line__ commenting is done the same way as in CSS:
`/* Comment text goes here*/`
- single line commenting is done with 2 forward slashes
`// your comment text goes here`
becasue the single line comments only occupy a single line, they don't need to be closed

#### Variables
scripts need to temporarily store the bits of information needed to do its job, this can be done with
`variables`
- this is a good name for this type of information, because data stored in a variable can change or *VARY* each time a script is run

#### Declaring Variables & Assigning them a Value
`var quantity;`
- variables have __2 components__:
  - the variable keyword `var`
  - the variable `name` which in this case is *quantity* followed by a `;`

`quantity = 3;`
- assignments have __3 components__
  - the assignment `name` which in this case is *quantity*
  - an assignment operator `=` (or equals sign)
    - it says that you are going to assign a value to a variable.
    - it is also used to update the value of a variable.
  - and the `variable value`

#### Data Types
`integers` or numeric Data

`string data` consist of letters and other characters (text) surrounded by `''` or `" "` single or double quotes
- stings must __ALWAYS__ be written on the same line

`boolean data` true / false statements
- like a switch: a boolean is either __ON__ or __OFF__
- __true__ is equivalent to __on__ or __1__
- __false__ is equivalent to __off__ or __0__

#### Rules for Naming Variables
1. the name must begin with a `letter` `$` or an `_`
  - it __CANNOT__ begin with a number

2. the name __can__ contain `letter` `$` or an `_`
  - the name __CANNOT__ use a `-` or `.`

3. a name __CANNOT__ use *keywords* or *reserve words*
  - keywords are the special words that tell the interpreter to do something
  - reserved words are ones that may be used in future version of JS

4. all `variables` are case sensitive
  - so *score* and *Score* would be 2 separate variables

5. use a name that accurately describes the kind of information the variable stores
  ie `firstName` and `lastName` and `age`

6. if a variable name consists of more than 1 word it should follow this format:
  `firstSecond` and `firstSecondThird`
  - the first letter of the first word should be *LC* and the first letter of every following word should be *UC*

#### Arrays
an Array is a special type of variable that stores a __list__ of values
- consider using an Array when:
  - working with a list
  - or set of values that are related

  Arrays are especially helpful when you don't know how many items a list will contain — because values are in an array, you do not need to specify how many values it will hold.

##### creating an Array
```
var colors;
colors = ['white', 'black', 'custom'];
```
1. create an array by giving it a `name` just like any other variable using the `var` keyword
2. the values are assigned to the array inside a pair of `[ ]` and each value is separated by a comma `,`
  - the values in an array do not need to be the same data type
  - so a `string` `number` and a `boolean` can be stored in the same array

values in an array can be accessed using a method `item()` or they can be called out by their variable `name` followed by `[ ]` and the `index#`
- items in an array are automatically asigned an __INDEX VALUE__
- (the index number of the item is specified in the parenthesis)
- index values begin with __0,1,2,3__ etc.
__Numbering always starts with 0 NOT 1__
```
var colors = ['white', 'black', 'custom']
colors[2] = 'beige';
```
- in this example, an array of colors is being made with the values white, black and custom
- in line 2, the variable in index position 3 is being changed to 'beige'

#### Expressions
an expression evaluates into (results in) a single value.
- There are 2 types of expressions:
1. Expressions that just assign a single value to a variable
`var color ='beige'` this makes the variable `color` `beige`
2. Expressions that use __two or more__ values to return a __single VALUE__
`var area = 3 * 2;`
you can perform operations on any number of individual values to determine a single value, in the exampkle above, the returned value is 6.

#### Operators
expression rely on things called *operators*; they allow programmers to create a single value from one or more values.

`ASSIGNEMNT operators`
- assign a value to a variable
  - `color = 'beige';`
the value of that color is now beige.

`ARITHMETIC operators`
- perform basic math
  - `area = 3 * 2;`
  the value of the area is now 6
  | NAME          | OPERATOR      | PURPOSE                                     |
  | ------------- |:-------------:| :-------------------------------------------|
  | Addition      |       +       | Adds one value to another                   |
  | Subtraction   |       -       | Subtracts one value to another              |
  | Division      |       /       | Divides two values                          |
  | Multiplication|       *       | Multiplies two values using an asterisk     |
  | Increment     |       ++      | Adds one to the current number              |
  | Decrement     |       --      | Subtracts one to the current number         |
  | Addition      |       %       | Divides two values and returns the remainder|


`STRING operators`
- combine 2 strings
  - `greeting = 'Hi' + 'Molly';`
  the value of greeting is now Hi Molly.
