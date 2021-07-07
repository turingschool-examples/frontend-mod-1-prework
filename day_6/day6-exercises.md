## Day-6 Questions
### Chapter 3
#### If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

When entering sayHello in the console, we are just entering the name of a variable that has been defined previously in the script.  But when sayHello() is entered into the console, it will be entering a function into the console and this will run the code in the code block of the function.  

#### What is the difference between function parameters and arguments?

A function parameter, which is given in parenthesis following the function name, gives words to be used which will act as variables in the calculation.  So the variable names in this example are function parameters.  Arguments on the other hand are any values that you will use in the code to provide the function with necessary information to complete its task.  So in the function to calculate the area of a rectangle, the arguments can be either the specific values used in the calculation, or it can be variables to be used in the calculation.

#### What is the keyword return used for?

The keyword return is used to give back information to the code that requested a function.  For example, when a code calls for a function to calculate the total cost of a combination of quantity and price, it will multiply quantity by price to arrive at the total price and that calculated value will be returned back to the code which requested that function to be done.  

#### How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

Local variables are better than global variables because it limits the scope of those variables to within the scope of the function where it is declared.  This can help to prevent naming conflicts that might arise with global variables when the same variable name appears in two different functions.  This can also be beneficial for the memory usage in a script because local variables are only stored until the function completes its task whereas global variables are stored as long as that website is loaded on the browser.  The memory usage of a website affects the performance of that website and can increase delays between user inputs and responses.  A possible instance where a global scope might be more appropriate than a local scope is where a variable will be used multiple times throughout the script and that variable is used in the same manner throughout the document with little possibility for naming conflicts to arise.
