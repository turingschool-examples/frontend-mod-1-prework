### Reading (Chapter 3 of Eloquent JavaScript)

**1. If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?**

`sayHello` references the function definition and `sayHello()` invokes the function.

<br />

**2. What is the difference between function parameters and arguments?**

Parameters are the placeholders into which arguments are passed. Within the function body, the parameter is essentially a local variable that contains the value of the argument passed into it.

Another way to put it is that function parameters refer to the variable as found in the function definition. Parameters differ from arguments in that the argument is the actual input that is supplied to the parameter during a function call.

<br />

**3. What is the keyword `return` used for?**

`return` is used to end the execution of a function and, if specified, return a value. It the value is omitted then `undefined` will be returned.

<br />

**4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?**

Local variables are more performant as they are only in memory when their scope is in play. Even more importantly, local variables keep the global namespace clean and avoid naming collisions.

Generally it is a poor practice to use globally scoped variables.

<br />
