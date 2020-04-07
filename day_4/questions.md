## Day 4 Questions

1. In your own words, what is the purpose of a function?

A function is a set of instructions that you give a program - a function allows your program to carry out tasks.

1. What is a parameter?

A parameter is a label for a piece of data that the function is going to utilize.

1. What is a return value?

A return value is the result of your function - when you specify a return value, you're telling the function
"Hey, if you can, stop here and tell me the result of what you've done so far."

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```
function hello() {
  console.log("Sam I am");
}
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```
function helloSomeone(name) {
  var sentence = name + " I am";
  console.log(sentence);
};
```

1. How would you call or execute the function that you created above?

`helloSomeone("Nick");`

1. What questions do you still have about functions in Javascript?

I'm interested to see how exactly functions play a role in web pages - I can see how conditional statements
and loops might affect page layouts and interactions, but what are some common uses for functions?
