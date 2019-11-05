## Day 6 Exercises

### Functions & Scope

#### 1. If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering sayHello and sayHello() in the console?
The difference here is that `sayHello` is just the variable that holds the function. So when `sayHello` is entered into the console, it returns the value of the variable which is actually the entire function. So it will return `sayHello(){console.log("Hello")}` in the console.

Where as `sayHello()` is actually running the function. When entering this function into the console it outputs the result of the function. Since the function tells the browser to `console.log("hello")`, the function simply returns `Hello!` to the console.

---

#### 2. What is the difference between function parameters and arguments?
Function parameters and function arguments are similar but have slightly different meanings. Parameters are the used as placeholders for passing content into a function. They are used when declaring the function. These parameters look and act similar to variables. Parameters are placed within the parenthesis of a function. They are essentially variables for the function.

When calling a function that has parameters, arguments are the values used for those parameters. Arguments are the actual values that are passed into those parameters that are then passed into the function. Arguments can be provided as values or variables.

---

#### 3. What is the keyword return used for?
The return keyword is used to return a value (object, array, variables) to the calling code. The return keyword also signifies the end of the function. When assigning a function to a variable with arguments, the function assign the return value to the variable that holds the function.

---

#### 4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables are declared within a function. When declared within a function, it is only accessible within that function. Global variables are those which are declared outside of a function. This means that they can be accessed anywhere within the script. The browser will remember global variables until the page is reloaded. Local variables are only remembered by the browser while the function is being executed. Local variables are better to use to help reduce same variable name conflicts. Some occasions where you might want to use global variables is when multiple functions will use the value from one variable. Global variables should only be used for information that is "global" or should be accessible to the entire script. These are often values which will not change.
