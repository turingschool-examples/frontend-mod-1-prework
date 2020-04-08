## Day 4 Questions

##. In your own words, what is the purpose of a function?

Functions store statements that can be executed over and over throughout a script. Their variables are kept separate and work independently each time the function is called. This allows programmers to create processes they can use multiple times in varying circumstances.

## What is a parameter?

Parameters provide data that the function needs in order to operate. This is where the function can refer to variables outside of it's code block, and then pass that information into the statements run in the code block.

## What is a return value?

Return values are data that is created by a function. For instance, if the function is performing addition it could return a sum. Using `return` ends the code, and any following statements are not executed. Returns allow data created by a function to be used in other parts of the script.

## In the space below, create a function named `hello` that will print `"Sam I am"`.

```function hello() {
    console.log("Sam I am");
}
```

## Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```function hello_someone(name) {
    console.log(name + " I am")
}
```
## How would you call or execute the function that you created above?

`hello_someone("Yoda")`

## What questions do you still have about functions in Javascript?

I'm not super confident that I can effectively use `return` and return values. 
