## Day 4 Questions

1. In your own words, what is the purpose of a function?

The purpose of a function is to create reusable code that can be called at any point in a program.

1. What is a parameter?

A parameter is added to a function to help give the function more specific information. These parameters act somewhat like variables within the function. Consider the following:

```Javascript
function addition(num1, num2) {
  console.log(num1 + num2);
};

addition(4,5); //would return 9
```

This function addition, when called, will take two numbers and add them together. The two numbers would be the parameters.

1. What is a return value?

The return value is the result of a function. To use the example in the last question, when I call addition(4,5), the return value would be 9.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```Javascript
function hello() {
  console.log("Sam I am");
};

hello();
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```Javascript
function hello_someone(name) {
  console.log(name + " I am");
};

hello_someone(Charlie);
```

1. How would you call or execute the function that you created above?

To call a function is as simple as using the function name with parameters in the parenthesis after, or leaving the parenthesis blank if there are no parameters for the function.

1. What questions do you still have about functions in Javascript?

I'm not sure what questions I have left. So far, everything I've tested and tried has worked as I expected.
