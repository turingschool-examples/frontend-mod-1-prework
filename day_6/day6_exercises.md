# Day 6: JavaScript

# Chapter 3 (book two)

# 1. If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
**Answer**
As I understand it, a function name without the parentheses is a reference to the function. It does not call that specific function, but rather tells the computer to keep the potential return value on file, so that it may be used later.

# 2. What is the difference between function parameters and arguments?
**Answer**
Parameters are words that act like variables themselves. A function requires a defined value to make a calculation or return. Arguments are defined values, like a specific number that exists within the code. Using arguments, a function can perform a specific return.

# 3. What is the keyword return used for?
**Answer**
The return statement stops the execution of a function and returns a value from that function. It's kind of like declaring or asking for the result from the previous function(s).

# 4. How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
**Answer**
Global variables are declared outside any function, and they can be used on any function in the program. Local variables are declared inside a function, and can be used only inside that function. Global variables are better because they can be recalled in multiple places (and more than once) throughout your code. Local variables need to be declared again within a new function if you wish to use it again.
