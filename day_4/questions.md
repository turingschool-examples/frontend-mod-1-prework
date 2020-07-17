## Day 4 Questions

1. In your own words, what is the purpose of a function?
The purpose of a function is to group specific statements together in order to re-use or call on them later on. These are best used for statements that you will repeat throughout a script.
1. What is a parameter?
A parameter is certain piece information that is specified so that the function is ready to receive that information. For example, when calculating area, a function would need to be ready to field the parameters of width and height.
1. What is a return value?
A return value is the response once the script is run.
1. In the space below, create a function named `hello` that will print `"Sam I am"`.
```
function hello(){
  console.log("Sam I am");
}
hello();
```
1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
```
function hello_someone(name){
  console.log("I am " + name);
}
hello_someone(Cooper);
```
1. How would you call or execute the function that you created above?
hello_someone(Cooper);
1. What questions do you still have about functions in Javascript?
Why were there semicolons after our example code curly braces? Aren't those excluded? I keep getting typo redlines under a lot of my words... I feel like something is weird.
