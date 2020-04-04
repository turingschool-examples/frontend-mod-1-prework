## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function allows you to build a chunk of code that preforms a task, and then you can call back on that task later instead of writing the whole thing again. You can make a function as simple or as complicated as you like, so you can tailor it to your needs.

1. What is a parameter?

It is a piece of information used inside of a function. They behave similarly to variables.

1. What is a return value?

A return value is the value that a function returns after the function has been completed. Basically just repeated the words there, but that's about the best description of it. The return also stops the function, and when the function is called later, the return value is what you get when you call the function.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

function hello() {
  console.log("Same I am")
}

hello ()

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

function helloSomeone(name) {
  var name = "Tam"
  console.log(name.concat(" ", "I am"))
}

1. How would you call or execute the function that you created above?

helloSomeone ()

1. What questions do you still have about functions in Javascript?

Less questions, more that I would like to see examples of functions doing specific things. Like the functions I've written, is there a better way to go about that? They work, but is someone missing that would make them more readable, less likely to run into errors when I eventually write more complicated functions? Stuff like that.
