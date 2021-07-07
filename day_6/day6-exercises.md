## If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console? ##
In order for the computer to read the statement as a function, parentheses must be used, wether left blank or filled in with a parameter.

## What is the difference between function parameters and arguments? ##
**Parameters** act like variables that can have a changing value. A programmer could set up their function with x,y parameters, and as the computer does calculations, it cam pull and insert different values for those x,y parameters.

**Arguments** are similar that they are variables, but they are predefined values that do not change. These work by defining a,b and then passing them into the code as storage of a value.

## What is the keyword return used for? ##
**Return** is used for displaying information after a computer has done a calculation. That function could calculate something as simple as addition, or division, and return would tell us the answer.

## How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local? ##
Local variables allow you to reuse a variable name elsewhere *outside* of that functions code. Meaning you could reuse the `var area` in multiple places to obtain multiple areas, as long as it was locally stated in separate functions. Local variables also take up less memory to store on your website. If you are collaborating on a website, local variables will save you from naming collisions across all members of your team, unlike global variables.

Global variables I can see having their own place too. Just like in CSS a global variable could be declared once, and pulled again and again across the webpage. This would save on memory, for you would only have to declare this variable once. A specific instance could be if there were a user created tool that needed to be defined and used all over the page, but had a very unique and specific name. 
