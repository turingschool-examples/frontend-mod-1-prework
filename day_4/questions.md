## Day 4 Questions

1. In your own words, what is the purpose of a function?
A function is a way to store a piece of code as a variable so that it can be called repeatedly, instead of rewriting that bit of code over and over. The analogy that I think of is in relation to English language snetence structure. Variables that contain data, but do not execute and action are like 'nouns' that can function as 3 basic data types (numbers, strings, booleans) where nows are persons, places, or things. And functions are like 'verbs' in that they do something. They are "action code" if you will.

2. What is a parameter? 
A parameter is a variable that is passed into a function to add data to the codeblock within the function, that will then alter the output of said function.

3. What is a return value?
A return value is the data that is returned (printed, logged, stored) at the end of a function when it is called or executed. 

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.
function hello() {
    console.log("Sam I am")
};

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.
function helloSomeone(name) {
    console.log(name + " I am")
};

6. How would you _call_ or _execute_ the function that you created above?
helloSomeone('Pam');

7. What questions do you still have about functions in JavaScript?
I want to make sure I am understanding global and local scope. In the functions-and-variables.js exercise, the first getLastValue example, I was getting a mutated array, but I realized that when I commented out the second example, I did not have that problem. My confusion is that, if javascript is being executed synchronously shouldn't the first example return an unmutated array, even if the second example is being run? Perhaps I am struggling to understand asynchronous and synchronous operations.