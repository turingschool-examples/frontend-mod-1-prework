# Chapter 3 (Functions & Scope)

## If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?

As I understand it typing `sayHello` without will not call a function, so you should only write it this way if you are referencing a function in the code but don't actually want it to be called. When you write `sayHello()` you are actually calling the function, or telling the series of steps to achieve a goal to run. By having the parenthesis you can pass parameters or arguments to a function, allowing it to use that specific data to perform the task. Writing `sayHello()` would make the message "Hello!" appear.


## What is the difference between function parameters and arguments?
Parameters are the variables that will be used in a function. Arguments are the actual pieces of data assigned to those variable. Let's say we wrote a function that calculated your current age called `calcAge`, which worked by taking an input for the current year, subtracting your birth year and returning the result. The parameters in this function would be the current year and your birth year, the arguments in this function would be `2020` and `1990`.

` function calcAge(currentYear, birthYear) {
  return currentYear - birthYear;
  }
`
now writing `calcAge(2020, 1990)` should return `30`.

## What is the keyword `return` used for?

`return` is just a keyword that is used to give a value back to the code that called the function. In the previous example, return would just tell the function to produce a value equal to `currentYear - birthYear`. By writing

` console.log(calcAge(2020,1990))
`
We would only see the value created by the `return` keyword.


## How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?

Local variables are normally better than global variables because global variables are not contained inside an object or a function. This difference means that global variables can be changed by other functions, and can be accessed by all functions on the page. When values are only being used in the function in which they are contained, they can be changed without affecting the rest of the site. If you had a value that was shared across all (or very many) functions on your site, it may be better to use a global value. It is usually best practice to use local variables due to their customizability and specificity.
