1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

    If I understand this correctly, sayHello will just return what you defined it as where as sayHello(); is actually calling that function and it should return "Hello!".

2.  What is the difference between function parameters and arguments?

    Parameters act like variables like width, height, and depth where as arguments are the values for those parameters. These values are passed into the code so that the function has actual values to calculate.

3.  What is the keyword `return` used for?

    A return keyword is used to return a value to the code that called the function. Like a mortgage calculator actually returning a rate based on the information given.

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

    Local variables are defined within the function and will only run while that function is called. So if it is run multiple times it can return different values. It has no need to be stored in memory and slow down the performance of a webpage. These locally defined variables also will not be confused by the interpreter if there are naming conflicts.

    I can't think of a good global variable other than maybe something simple or storing a user's name while they fill out that page. Upon googling this question, the internet agrees with the book that globally defined variables are generally discouraged. 
