## Day 4 Questions

1. In your own words, what is the purpose of a function?
Functions allow you to group statements together that allow you to perform specific tasks and store them in the function for later use. When you are ready to use your function, you "call" it so it can be used. By calling the function, you avoid having to repeat the entire code block of steps necessary to carry out that function. In addition, utilizing functions can make your page load more efficiently since statements in functions are not always executed when a page loads but are stored and can be used when accessed and loaded when necessary.

1. What is a parameter?
Parameters are the pieces of information that you pass to your function so that it can carry out its task.

1. What is a return value?
The return value is the output that results from your function. For example, if your function is a calculation, then the result of the calculation will be your returned value.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.
function hello () {
  console.log("Sam I am");
};

hello();

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
function helloSomeone(name) {
    console.log(name + " I am");
};

helloSomeone("Ashley");

1. How would you call or execute the function that you created above?
by typing ```helloSomeone("Ashley");```
Here, I called the function by it's name (helloSomeone) & gave it a string to use in the place of the name variable when the function is executed.

1. What questions do you still have about functions in Javascript?
How do you recommend that I become more proficient at this? Also, what are the pros and cons of using functions? I feel like they seem very important for storing steps to complete a task for repeated usage & it seems that they may speed up the way that your page loads since they're not always executed immediately. Do you have any resources/tips that you recommend I use to become more proficient at writing functions? When writing the above functions, I was able to do so by using resources. I'm sure this is just because I haven't solidified the muscle memory necessary to write the function. Repeatedly writing the functions and trying them out helped me solidify the concepts substantially. When I started this part of the capstone, I worked along with tutorials that I watched online which really helped me actively understand the role and relationship of each component of the function.
