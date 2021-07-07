## If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
  The first difference that we see is obvious is the `()`. These are called parameters. The value of the information that is being passed with in the parameters are called an arguments. Parameters/arguments are used like variables. So we must pass an argument through to the function for anything to happen. We can access or call on this function at any time.
## What is the difference between function parameters and arguments?
  - Parameters: Are names "like variables" that represent a bit of information that will need to be entered in for the function to run.
    EXAMPLE: `function getArea(width * height) {}`
  - Arguments: Is the information that is going to be passed through the function.
    EXAMPLE: `function getArea( width, height ) {
                var area = width * height;
                return area;
              }
              var wall1 = getArea(5,5)` // the 5's are the arguments being passed to the function.
              `document.write(wall1);`
## What is the keyword return used for?
  When we enter in arguments to the function the key word RETURN is used when we call on the function and run arguments. Then solves or runs the code block and returns the value of the function.
## How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
  - Local: When a variable is created inside a function we call that a local variable because it can only be used within that function.
  - Global: Global is a variable that is created outside of a function. In the arguments example above, `var wall1` is an example of a global variable.
  We might us a global variable versus a local variable when we know that the outcome is definite.
