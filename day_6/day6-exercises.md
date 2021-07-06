Chapter 3

If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?

- sayHello returns the logic of the function, while sayHello() actually executes the function, returning the log string Hello!.

What is the difference between function parameters and arguments?

- Function parameters are local to the function. They can not be called outside of the function. Arguments are variables that have been declared globally.

What is the keyword return used for?

- Return is used to tell the function what information to present and how. This stops the execution of the function, meaning if you are mid execution and a return is called the execution will cease.

How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

- Local variables are useful as you can use the same local variable across many functions without having to worry about cross-contamination. It is also useful from a readability standpoint as you know all objects utilized and manipulated are contained in that given function. Global variables do have a place though. Global variables are good for data that you know will not change, or at least not very often. Some personal and demographic information can be used globally as a person's birthdate, race, gender, first and last name are not items we expect to change that often.
