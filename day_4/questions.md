## Day 4 Questions

1. In your own words, what is the purpose of a function?

I think the main purpose is to be more efficient by replacing repetitive actions with one function that we can reused over and over.

1. What is a parameter?

A piece of information that we give to a function.

1. What is a return value?

The result that function returns after executing the code. It returns value to the function caller.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```JavaScript
function hello () {
  console.log("Sam I am");
};
hello();
```
1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```JavaScript
function hello_someone (name) {
  console.log(`${name} I am`);
}
```

1. How would you call or execute the function that you created above?

By typing the name of the function and giving it a parameter.

```JavaScript
hello_someone("Olga");
```

1. What questions do you still have about functions in Javascript?

While reading the book and doing homework I am getting a little confused about console.log and return. I've read about it and I understand that they are different. Console.log prints the result to console, it just emits the message for us. Return returns the value to the code, it talks to the code/function, we don't see the result until we log it. So, do we need to use console.log only if it says "create a function that prints/logs" the result otherwise it's always "return"? I guess I almost understand it but my brain cannot fully process this abstract concept yet.
