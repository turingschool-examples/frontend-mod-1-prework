## Day 4 Questions

1. In your own words, what is the purpose of a function?
The purpose of a function is to group a series of statements together to perform a specific task. The benefit of defining functions is that if different parts of your code repeat the same task you can reuse the function without having to repeat statements. For example if you made a function called area (that calculated the area of an object based on length and width), you could reuse that function to calculate the area of multiple objects (as long as you define length and width) without having to repeat the statements over and over.

2. What is a parameter?
A parameter is a piece of information passed to a function. The parameters are specified inside the parentheses when giving the function a name. For example "length" and "width" are parameters for the function area.

3. What is a return value?
A return value is the response to a function - the answer. It is the output after calling the function. In the area example, the return value would be the area of the object. It is also important to note that the return value ends the function execution.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

```
function hello (){
  console.log ("Sam I am");
}
```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.

```
function helloSomeone (name){
  console.log(name + " I am")
}
```

6. How would you _call_ or _execute_ the function that you created above?

```
helloSomeone("Sam")
```

7. What questions do you still have about functions in JavaScript?

Not at this time :)
