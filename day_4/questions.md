## Day 4 Questions

1. In your own words, what is the purpose of a function?

  A function allows you to define a task or set of tasks that you want to run at some point, but perhaps aren't sure when you need it or know you don't need it quite yet. Even more importantly, a function can be called many times, so if you want to re-use the same set of code multiple times it can be very useful to create a function for it.

1. What is a parameter?

  Parameters are the pieces of information that the function takes in. These act like variables within the function.

1. What is a return value?

  A return value is a value calculated by the function that is returned to the code that called it when the function uses the keyword `return`.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.
```
function hello() {
  console.log("Sam I am");
};
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
```
function hello_someone(name) {
  console.log(name + " I am");
};
```

1. How would you call or execute the function that you created above?

  You call the function by typing the function name & then plugging in the desired argument into the parentheses. For example, if I wanted to insert my name into the function, I would type: `hello_someone("Rachel")`

1. What questions do you still have about functions in Javascript?  

  I would like to get a deeper understanding of when a function will mutate a caller v when it won't. I understood the examples well enough, but would like to see more examples! Otherwise, I understood everything pretty well as I have learned functions in the past in Python.
