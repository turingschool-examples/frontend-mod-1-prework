1. If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

      `sayHello` will simply echo the code/function written;
  
      `sayHello()` will activate the function to output `"Hello!"`;

2. What is the difference between function parameters and arguments?

      The parameter is the piece(s) of information necessary for the function to run. The arguments are the inputed values/variables used to activate the function.
  
      i.e. `function getArea(width, height) {return width * height;}` contains the parameters, while `getArea(3, 5);` contains the arguments;

3. What is the keyword `return` used for?

      It returns a value to the code that called the function.

4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

      Local variables take up less memory and load quicker. They also allow for a function to run multiple times with outputting different values. It helps avoid name conflicts;
  
      Global variables may be optimal when one piece of information is vital for the users entire use with the webpage/website.;
