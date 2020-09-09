## Day 4 Questions

1. In your own words, what is the purpose of a function?
I think of writing functions as designing your own operator. They take in certain inputs and do the work for you to determine the correct output. When you write the function you lay out a blueprint, telling it what to do given certain circumstances, and then you can call that function to have it do that work for you as many times as you want.

2. What is a parameter?
A parameter is an input value that will inform the function. It's like a rule you give the function, so that it can determine the right output. Sometimes the parameter will be a value that is manipulated by the function.

3. What is a return value?
A return value is the output of a function. It's a result of running the function with the given parameter(s).

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.
```
function hello(){
  console.log("Sam I am")
}
```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.
```
function helloSomeone(name){
  console.log(name+" I am")
}
```
6. How would you _call_ or _execute_ the function that you created above?
```
helloSomeone(Yoda)
```

7. What questions do you still have about functions in JavaScript?
Eh a lot about prototypes and methods, and I've had some trouble with scope and iteration before, but I'm sure we'll get to all that.
