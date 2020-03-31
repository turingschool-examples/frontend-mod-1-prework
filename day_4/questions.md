## Day 4 Questions

1. In your own words, what is the purpose of a function?

 * A **function()** is essentially a re-useable block of code that you can pass arguments through. Functions help to keep your code organized and efficient by creating/containing a group of statements that accomplish a certain task. If your script calls for this task multiple times, you can just recall the **functionName()** rather than re-typing that series of statements! _Functions are like miniature programs within your program that you can use as many times as necessary by simply calling that function_.


2. What is a parameter?

 * A **parameter** is a variable within a function name, (ex: `function(parameter)`), that acts as a container for the arguments (values) that are passed through that function.


3. What is a return value?

 * A **return value** is quite simply a value that a function returns when it has completed its task. The keyword `return` is often used inside a function's body to send the _return value_ back to the function caller.


4. In the space below, create a function named `hello` that will print `"Sam I am"`.

```Javascript
  function hello() {
    console.log('Sam I am');
  }
```

5. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```Javascript
  function helloSomeone(name) {
    console.log(name + ' I am');
  }
```

6. How would you call or execute the function that you created above?

```Javascript
  helloSomeone('Sam');
```

7. What questions do you still have about functions in Javascript?

 * I think that I mostly just need practice with functions! Although the concepts here make sense, the kind of programmatic routing/patching going on within functions makes them much trickier to see and understand. For me, achieving fluency with more complex concepts like functions is a matter of practice, repetition and practical application.
