## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function allows multiple lines of code to be blocked together, enabling this block to be run independently from the main script of code.

2. What is a parameter?
A parameter defines the specific information the function needs in order to operate

3. What is a return value?

A return value is the expected answer from a functions

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

```javascript
function hello() {
  console.log("Sam I am");
}

hello()
```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.

```javascript
function helloSomeone(name) {
  return (name + " I am");
}

helloSomeone("Sam")
```

6. How would you _call_ or _execute_ the function that you created above?

* One can *call* a function by inputting the name of the function followed by empty parentheses
`hello()`

* One can also *execute* a function by entering its parameters into the parentheses mentioned
`helloSomeone("Sam")`


7. What questions do you still have about functions in JavaScript?

How are local vs global functions able to interact? How do we use functions with arrays or objects?
