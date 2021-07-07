Functions & Scope:

1) When you enter sayHello it will just return with the function `sayHello(){console.log("Hello!")}`. In other words without the `()`the return will be what the function is. When the `()` are added, so the function reads `sayHello()`, the `()` evokes the function, the function runs, and the return message becomes "Hello!".

2) The difference between parameters and arguments is subtle but when a function is declared and you can see the words in the parentheses, those words act like variables and are the parameters. Whereas, when a function is being called and the code specifies real numbers to be used, the values are called arguments.

3) The keyword `return` is used to stop the execution of a function and return a value to the code that called the function .    

4) With local variables the interpreter removes them as soon as the function has finished its task which allows for the variable to have different values each time. This also allows two different functions use variables with the same name without any conflict. Whereas, with global variables the function can be used anywhere within the script. This not only causes global variables to store much more memory, and thus run load the web browser more slowly, it increases the risk of naming conflicts. This is because with scripts written by several people, which many sites are, variables can have the same name which in turn will causes errors. Though, a time when you should use a global variable is when multiple functions need to access data or write to an object. 
