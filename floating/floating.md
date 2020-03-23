## Loops

* read pages 170 - 173 of the JAVASCRIPT & JQUERY: Interactive Front-End Web development book.

Loops allow us to easily run the same piece of code numerous times.  There are many types of loops, but we'll only learn about `for` loops for now.

Let's take a look at a `for` loop:

```JavaScript
for (var i = 0; i < 5; i++) {
   console.log(i);
}

// when run, this code will log:
// 0
// 1
// 2
// 3
// 4
```

There are a few things to break down here, so let's start with structure of the code above. We see that it's made of the following parts:

* the keyword for
* a set of rules, or conditions (var i = 0; i < 5; i++ )
* opening and closing curly braces which contain our code
* the code that we want our loop to execute: console.log(i);

Let’s dig into the three statements separated by semicolons that make up or our conditions:

```JavaScript
for ([initialization]; [condition]; [final-expression]) {
   executable code
 }
```

* We begin with *initialization*. Where do we want our loop to start? The first statement `var i = 0`; creates a variable that is assigned the value of 0. This variable is commonly named `i`, or index, and will act as the counter. It is created the first time the loop is run.
* The next statement *sets the condition* that tells the loop when to stop running: `i < 10`;. In this case, the condition indicates that the loop will stop when `i` equals 10. The condition may use a variable that is assigned a value.
* Finally, with the statement `i++` we *update the value* of our counter i. This adds 1 to the value of i. This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.

The statement within the curly braces executes each time the loop runs. In this case, we can see we are logging the value of i to the console.
