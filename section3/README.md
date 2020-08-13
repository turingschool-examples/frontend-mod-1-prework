# Section 3 - Arrays

Section 3 is estimated to take a total of 8-12 hours to complete. Similar to the previous sections, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👩🏻‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline. 

Since Arrays are a bigger topic, it is the main focus of this section. Some review work from the first two sections has been woven in so you get opportunities to continue seeing and applying those concepts, as well.

- [Part A: Section 3 Focus TBD](#Part-A-Section-2-Focus)
- [Part B: Arrays](#Part-B-Arrays)
- [Part C: Iteration](#Part-C-Iteration)
- [Deliverables](#Deliverables)

## Open your local copy of frontend-mod-1-prework

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 README.

## Arrays

📒Read pages 70 and 72 in the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

🎬Watch [this video to hear an explanation](https://www.youtube.com/watch?v=EUnV-fCY0Pc) and watch someone apply some of the concepts you read about in the book. The person who recorded this video is writing JavaScript in the browser Develeper Tools. Open them with in Chrome with the keyboard shortcut `cmd + opt + i`, and click Console.

1. Research the array methods below on the MDN documentation provided. This documentation might seem intimidating at first, but you will need to get comfortable looking at it. Create a file in your day_2 directory called `array_methods.md file` and describe what each method does.
    1. Methods to study: `pop`, `push`, `shift`, `unshift`. Take a look at the [MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Hint: the methods are listed in a column on the left hand side of the website.
    1. _Note: The MDN documentation makes use of the variable declarations `const` and `let`. For now, just read them as `var` instead._

> 👩🏻‍💻PAUSE here, and complete the exercises in _arrays.js_

## Loops

Sometimes we have a collection of data (like an array) and we want to do something to each item in the collection. In these instances, we need to **iterate** or **loop** through each piece of data in our collection.

📒Read pages 170-175 of the J`AVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

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

## Exercises

1. Work through the following lessons to learn about Javascript Comparison Operators.
    1. When you are building out a FOR loop, you can use **Comparison Operators** to determine if a FOR loop should continue or stop looping. Read pages 150 through 153 in the JAVASCRIPT & JQUERY book to learn about the operators.
    1. Read pages pages 166 and 167 of the JAVASCRIPT & JQUERY book to learn about type coersion and truthy vs falsy values
    1. Work through the `comparisons.js` file
1. Work through the rest of the exercise files in the day_2/exercises directory.  Complete them in this order:
    1. `arrays.js`
    1. `loops.js`
    1. `iteration.js`
1. Answer the questions in the `questions.md` file in the day_2 directory.

## Save your work in Git

When you are finished with all of the day_2 activities, use your terminal to run the following commands in order to save your work to your local git repository.

1. `$ git add day_2/exercises`
1. `$ git add day_2/questions.md`
1. Use `git add day_2/<filename>` to add all additional files that you created today
1. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
1. `$ git commit -m "Add Day 2 Work"`

## Push to Github

You've save your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!
