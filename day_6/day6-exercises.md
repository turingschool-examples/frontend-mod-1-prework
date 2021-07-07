## Day 6: JavaScript

## Open your local copy of frontend-module-0-capstone in Atom

In the day_6 directory, create another file called `day6-exercises.md`. This is where you'll put your answers to the following questions.

## Read part of Chapter 3 (Functions & Scope), pages 85-99, from [JavaScript & jQuery: Interactive Front-End Web Development](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_5?ie=UTF8&qid=1541447422&sr=8-5&keywords=duckett)

Answer these questions about the reading in your `day6-exercises.md` file:

1.  If we have a function defined as `function sayHello(){console.log("Hello!")}`, what is the difference between entering `sayHello` and `sayHello()` in the console?
'sayHello' without the parenthesis means it would be interpreted as a variable. Having the parenthesis establishes it as a function.
2.  What is the difference between function parameters and arguments?
While they are used interchangeably, arguments is a word that used when real numbers are being used in place of the parameters. For example, 'width' is a parameter but using the number 5 as a value of width is an argument.
3.  What is the keyword `return` used for?
'return' is used to give the value of the function to the code that called it. When the interpreter reaches the 'return' keyword, it leaves the function disregarding anything that may have come after.
4.  How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables take up less memory than global ones because they only appear when their function that they exist in is called. A global scoped variable may be useful if that variable is repeatedly used over and over again on the page as long as there are no conflicts in the coding.

Do these exercises in the console.

*   Work through [these problems](https://s3.amazonaws.com/TrainingNerd/JavaScriptForBeginners/exercises/functions.html) in the console about functions.
*   Practice through some JavaScript basics exercises on [w3resource](http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR) and check your code against their solutions.

## Save your day 6 file in git and push to GitHub

Using the commit message: `Add day 6`, add, commit, and push your changes to GitHub!
