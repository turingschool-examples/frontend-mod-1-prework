## Day 4 Questions

1. In your own words, what is the purpose of a function?
  * A function allows us to make a large block of code which does a specific task in multiple steps and then be able to call up that entire block with one name instead of having to write down all those blocks each time we need to use the function.  Once a function is declared all we need to do if fill out the parameters with the arguments we need to run the function.

1. What is a parameter?
  * The parameter is a spot in our function into which we enter arguments.  The parameter is the spot in a function that needs information to be inserted to it. The parameter is a general thing like "hat" into which we enter the specific "Baseball Cap" argument as a specific instance of that broader "hat" subset.

1. What is a return value?
  * This is the response or information we get back from the function.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```
function hello() {
  console.log("Sam I am")
}

hello();
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```
function hello_someone(name) {
  console.log(name + " I am")
}

hello_someone("Sam");


```

1. How would you call or execute the function that you created above?
```
hello_someone("Name inside here")
```
1. What questions do you still have about functions in Javascript?
