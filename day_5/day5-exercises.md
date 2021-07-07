## How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

  When declaring a variable there are two parts to it. One we ned the key word 'var' and the name of the key word 'var properName;'. A thing to also remember is a variables a bucket where information is stored. An equals sign in javascript it is what we call an assignment operator. It is the tool used to assign a value to a variable.

## There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

  - String:Consist of letters and other characters such as sentences. These data types are wrapped in quotes. These can be single '' or double "". Depending on what type of information are in the strings.

  - Numbers: Or numerical data types handle numbers. Such as calculating what is 20-9. There are also decimal points and negative numbers.

  - Booleans: A boolean data type can have two values.. true or false. People think of it as a light switch ON or OFF.

## What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?

  The six rules for naming a variable is as follows.

    - ONE: All variable names must start with a letter, $, or an _ . It may not start with a number.

    - TWO: The name its self can contain numbers, letters, $, _ . Note that you cannot use a - or a period.

    - THREE: You may not use key words or reserved words. Key words are special words that that tell the interpreter to do something. EXAMPLE: var is used to declare  a variable. Some reserved words are: variable names, function names, and loop labels. Also break , case , catch , continue , debugger , default , delete , do , else , finally , for , function , if , in , instanceof , new , return , switch , this , throw , try , typeof , var , void , while , and with.

    - FOUR: All variable are case sensitive, so score and Score are two different variable names. Side note don't create a variable with the same name in two different uses.

    - FIVE: Use a name describes the kind of information being stored within it.

    - SIX: If the name of the variable is longer than one word we wil capitalize the first letters of every word after the first. EXAMPLE:'var properName="Quinn";''

## How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

  An array is a special type of variable. you are able to store a list of set values within them. Also when using arrays you do not need to specify how many values will be in it. Therefor you will not need to create a long list of variable. To access an array you need to specify the index number for the specific value you are wanting after the name of the array you are accessing from. To change a value of an item you would select it and add a new value as you would do with any variable using an =.

  - EXAMPLE: `var colors = ['blue', 'black', 'red', 'custom'];` To change 'custom' we would `colors[3]="orange";`
  To get the element `var el =document.getElementById('Colors');` Now we can replace the fourth item of the array `el.textContent = colors[3];`.
  
## What is the difference between an expression and a statement?
   Expression: Evaluates into a single value. Broadly speaking there are two types of expressions.

      - ONE: Expressions that just assign a value to a variable. `var color ="grey";`

      - TWO: Expressions that use two or more values to return a single value.`var area = 3 * 2;`
    Expressions rely on things called oprators; they allow programs to create single value from one or more values.

  - Statements: A statement can set a variable equal to a value. A statement can also be a function call EXAMPLE: `document. write().`
## What are three types of operators and how are they used?
  Three types of operators are:
    - Assignment: Assign a value to a variable. `color = "blue";`
    - Arithmetic: Basic math `area = 3*2;`
    - String: ` greetings = 'Hi ' + 'Molly'; `
