**JavaScript & jQuery: Interactive Front-End Web Development**

**If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?**

The difference between sayHello and sayHello in the console is quite vast. The function name, which in this case would be `sayHello()` is sometimes called the identifier must be followed by parentheses. although once entered into the console, it will come out as undefined (because we have not defined the parameters), it is still being read as a function with a purpose. If you just put in sayHello without the parentheses, it will come up as a syntax error because there are no parameters or a calling to them for the computer to read. Therefor, it will come up as a syntax error.

**What is the difference between function parameters and arguments?**

Although these two terms can can often be used interchangeably, they do have a slight difference that is of importance. For example, When a function is declared

`function getSize (width, height) {
    return width * height;
}`

you can see the words width and height inside the parentheses `()`. Inside the curly braces `{}` of this function, those words will act like variables. Those names you see are the parameters.

When observing arguments, when can see in this example;

`getSize (3,5);`

the function is being called and the code will specify real numbers that are used to perform a calculation. The values that you pass into the code are called arguments. This is the information it needs to calculate the size of the particular wall.

**What is the keyword return used for?**

When a `return` statement is called within a function, the execution of this function is stopped. If it is specified, a given value is returned to the function caller. If the expression is omitted, an undefined is returned instead.

**How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?**

How local variables are better than global variables is that they take up less memory than global variables. Using a local variable also decreases the risk of of naming conflicts. An instance that I can think of that a globally scoped variable makes more sense is if multiple functions are using the same data or if you are storing constants to help with consistency.  
