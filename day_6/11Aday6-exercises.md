## Read part of Chapter 3 (Functions & Scope), pages 85-99, from JavaScript & jQuery: Interactive Front-End Web Development
### Answer these questions about the reading:

1. __If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?__<br />The parentheses are the difference. There is the function keyword which is <i>function</i>, and then there is the function name, sometimes called an identifier, this name is followed by parentheses. A function needs information to work, you indicate what it needs to know in these parentheses,  and whatever is inside the parentheses is known as the parameters of the function.

2. __What is the difference between function parameters and arguments?__<br />
Function parameters are used like variables within the function. Sometimes a function needs specific information to perform its task, as long as it has rules it can follow to achieve the task, it will. Like parameters that are used like variables within a function, so are arguments, but arguments can be provided as variables or values.

3. __What is the keyword return used for?__<br />
Some functions return information to the code that called them, and so the __return__ keyword is used to return a value to the code that called the function.

4. __How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?__<br />
Local variables are created inside a function, using the var keyword, thus it can only be used inside that function. It is a local or function-level variable, it cannot be accessed outside of the function in which it was declared. When you create a variable outside of a function, then it can be used anywhere within the script, this is referred to as a global variable. These are stored in memory for as long as the web page is loaded in the web browser which means they take up more memory than local variables(increasing risk of naming conflicts), which is why one should use local variables wherever possible.
