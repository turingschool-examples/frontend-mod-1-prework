1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

      sayHello will show you the function and its code in whole. It will show you the code and show that the function exists.

      sayHello() executes the function and will execute the code block returning Hello!


2.  What is the difference between function parameters and arguments?

    function doMath(number1, number2){
      return number1 + number 2;
    }

    doMath(4, 4)
    //prints 8

    The parameters are used like variables within a function. When declaring the function, The variables in the () are considered the parameters.

    The arguments are the values for the parameters when the function is called.

3.  What is the keyword `return` used for?

    Determines the value that a function returns. It prints a functions code block to the console.

4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

      local variables are only used inside its designated function. global variables are anywhere in the script. When multiple people are working on the same project but in separate JS files, there can be conflicting global variables amongst both files. Local variables allow for better collaboration on projects.

      A good example for creating a globally scoped variable would be when declaring a constant. The constant can be used multiple times not inside of a function.

      const name = 'dan'
