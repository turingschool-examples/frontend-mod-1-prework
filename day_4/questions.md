## Day 4 Questions

1. In your own words, what is the purpose of a function?

It's a convenient way to store and reuse blocks of code without having to type it all every time.

1. What is a parameter?

A parameter is a variable that a function can be passed when it's called.

1. What is a return value?

A return value is the value that a function resolves to after it has been called. A function in Javascript by default returns the value of `Undefined`, but we can control what that value is by using the keyword `return` followed by whatever it is that we want to be returned.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

function hello(){
  console.log("Sam I am");
};

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

function hello_someone(name){
  console.log(name + " I am");
};

1. How would you call or execute the function that you created above?

hello_someone("Sam");

1. What questions do you still have about functions in Javascript?

If I wanted to modify a global variable directly inside a function, is it possible? How would that work?
