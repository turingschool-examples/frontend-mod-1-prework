## Chapter 2 (Statements, Variables, Data Types, & Arrays)

### 1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

To use a variable you must first create the variable by giving it a name. This is know as "declaring a variable". Then you define it by telling it what information you want it to store. To do this you must assign a value to the variable with an _equals sign_. In JavaScript, the equals sign is an **assignment operator**.

### 2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

A **numeric** data type handles _numbers_. It's used for tasks that involve counting or calculating sums and uses the numbers 0-9. You can also have negative numbers and decimals.

The **string** data type consists of _letters_ and other _characters_. They are enclosed within a pair of quotes.

**Boolean** data types can have one of two values: _true_ or _false_. It's helpful to think of it like a light-switch because it's either on or off.

### 3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

1. The name **must begin** with a letter, dollar sign, or an underscore. It must NOT start with a number.

1. The name **can contain** letters, numbers, dollar sign, or an underscore. You must NOT use a dash or a period in a variable name.

1. You **cannot use** _keywords_ or _reserved_ words.
  * Keywords are special words that tell the interpreter to do something.
  * Reserved words are ones that may be used in a future version of JavaScript. Examples include "class", "if", "else", "private", "import".

1. All variables are **case sensitive**, for example **s**core and **S**core would be different variable names.

1. Use a name that **describes** the kind of information that the variable stores.

1. If your variable name is made up of more than one word, **use camelCase**. You can _also_ us an **underscore** between each word.

### 4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

An array can be useful when you don't know how many items a list or a set of related values will contain. This is because when you create the array, you do not need to specify how many values it will hold.

To access a value in an array, after the array name you specify the index number for that value inside square brackets.

You can change a value of an array by selecting it and assigning it a new value with an equals sign.

`array name[index number] = new value`

### 5.  What is the difference between an expression and a statement?

An **expressions** produces a value and can be written wherever a value is expected.

A **statement** is an instruction to perform a specific action.

### 6.  What are three types of operators and how are they used?

**Operators** allow programmers to create a single value from one or more values.

1. Arithmetic operators perform basic math

  `area = 3 * 2;`

1. Assignment operators (=) assign a value to a variable.

  `state = 'Texas'`

1. String operators combine two strings.

  `name = 'Maddy' + 'Randle';`  
