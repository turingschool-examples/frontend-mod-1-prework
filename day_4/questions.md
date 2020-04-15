## Day 4 Questions

1. In your own words, what is the purpose of a function?

  A **function** is a set of statements that performs a task or calculates a value when the function is referenced or *called*.

1. What is a parameter?

  A **parameter** is a variable used to specify what the function should do or calculate.

1. What is a return value?

  The **return value** is the answer you get from a function.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```Javascript
function hello() {
  console.log("Sam I am");
}
hello();
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```Javascript
function hello_someone(name) {
  console.log(name + "I am");
}
hello_someone("Bob");
```

1. How would you call or execute the function that you created above?

```Javascript
hello_someone("Bob");
```

1. What questions do you still have about functions in Javascript?

  I know these lines are clunky but not 100% sure how to explain what's wrong with them compared to the ones in my functions.js document:

  ```Javascript
  function myName(name) {
    return name;
  }

  var name = "Hanna Kim"
  console.log(myName(name));

  // ----------------- //

  function knockKnock(orange, banana) {
    console.log(orange + " " + banana);
  }

  var orange = "Orange you glad";
  var banana = "I didn't say banana";
  console.log(knockKnock(orange,banana));
   ```

   Also: Rule #3 from the [reading](https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c) in README.md would not execute.
