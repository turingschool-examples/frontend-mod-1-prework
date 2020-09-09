## Day 4 Questions

1. In your own words, what is the purpose of a function?

The purpose of a function is to have your program execute a a specific block code only when it's necessary to run. It takes in some input values that you want to use together, and gives you a an ultimate return value.

2. What is a parameter?

A parameter is a variable that you pass into a function. They act as the definition of the values that you are inputting into the function. They are created when the function is being created.

3. What is a return value?

A return value is the value that want the function to return to the user. It also allows you to end the execution of a function. Once the browser runs through a return value inside a function, it will stop executing whatever the function is doing, and move on past that.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.
```JavaScript
function hello() {
  console.log("Sam I am")
};
hello();
```
5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.
```JavaScript
function helloSomeone(name) {
  console.log(name + " I am")
};
helloSomeone("Luke");
```
6. How would you _call_ or _execute_ the function that you created above?

`helloSomeone("Luke")`

7. What questions do you still have about functions in JavaScript?

There is one question...when it comes to declaring a variable inside a function, do we do that if we only need that variable for that function? Why not just declare the variable outside of the function and just pass it as an argument? I guess I'm a little confused on that whole process, other than that I am golden!
