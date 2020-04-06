## Day 4 Questions

1. In your own words, what is the purpose of a function?

The purpose of the function is to store a set of instructions or statements for a specific task that doesn't necessarily need to be loaded when the page is opened, furthermore, this functions help us to write statements for well defined circumstances. Functions are  statement that are waiting for someone to trigger its functionality. The result is log when evoked or called by someone interacting with the function.

Functions allow us to save a set of arguments or instructions that will find the information that the function was created for. By naming a function, we can use the information stored in it by evoking the name of the same function, kind of like a variable that need to go and ask to other variables what is the information that should contain.

1. What is a parameter?

After naming a function the following parenthesis can hold additional data. Between these symbols (), a set of variables can be place and be given values to define or produce a specific or desired result, these values or variables are called **parameters**. This pieces of information are important to in order to achieve a specific task.

1. What is a return value?

A return value is the response provided after functions are run by the script. This return of information can be only achieved if the arguments and parameter are well placed and then evoked by the writing the functions name follow by opened and closed parenthesis then finished with a semicolon like this, **functionsname();**.

In term of the functions, the "return" keyword calls or evokes the information nested in the function by running the statements.

This are the characteristic of the *return* keyword.
  * Every function returns *undefined* when a value has not been assigned.
  * The return statement returns always the first statement and stops the rest from running.
  * It always returns the value of the function caller.


1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```JavaScript
function name(){
  return "Sam I am";
};
name();

```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```JavaScript
function helloSomeone(name){
  var name = "Orlando";
  return name + " I am";
};

helloSomeone();
//expected output: "Orlando I am!"
```

1. How would you call or execute the function that you created above?

```JavaScript
helloSomeone();
//expected output: "Orlando I am!"
```

1. What questions do you still have about functions in Javascript?
