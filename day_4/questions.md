## Day 4 Questions

1. In your own words, what is the purpose of a function?

  Functions allow you to repeat a specific code without renaming your arguments or variables. This follows the DRY concept of computer programming where the goal is to be concise and not repeat unnecessary lines of code.

2. What is a parameter?

  Some functions rely on additional info in order for the code to run. This can be done by adding an argument, called a parameter, within the parentheses following the function name. The basic parameter syntax within a function could look like the following:
  ```javaScript
  function nameFunction(param1, param2) {
    console.log(param1 + " " param2);
  }
  ```
3. What is a return value?

  When a function is called, this is the response or result of the function's argument. For example, a function that returns the sum of two variable might look like:
  ```javaScript
  function sumNumbers(a,b) {
    var a = 4;
    var b = 3;
    console.log(a + b); // the sum of 'a' and 'b' would be the function's return value
  }
```

4. In the space below, create a function named `hello` that will print `"Sam I am"`.
```javaScript
function hello() {
  console.log("Sam I am");
}
```

5. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
```javaScript
function helloSomeone(name) {
  console.log(name + " I am")
}
```
6. How would you call or execute the function that you created above?
```javaScript
helloSomeone("Sam");
```
7. What questions do you still have about functions in Javascript?

  I'm still a little confused about "mutating the caller" concept relating to functions. I understand, for the most part, that using `[]` won't alter the data within the array but I would be curious to see other examples how this could happen. Also, for the functions-and-variables.js file, I wasn't sure if we were supposed to enter any code any or if it was for information purposes only.
