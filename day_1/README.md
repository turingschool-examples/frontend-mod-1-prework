# Day 1 - Strings, Numbers, and Booleans

Today, you will begin to learn the basics of JavaScript. You will work through several exercises which will help you get comfortable running files and seeing output. You will learn about ways to represent data in JavaScript as Strings, Numbers, and Booleans, as well as begin to explore how to capture and work with that data.

In addition to JavaScript, this day will also walk you through the commands you need to enter in your terminal to create files. By the end of the day, you should be very comfortable with the commands `cd` and `ls` to navigate the machine, and the commands `mkdir` and `touch` to create directories and files on the machine.

At the end of the day, you will use several git commands to save your work to your local git repository. Then you will push your updates to your remote Github repository. For now, we are building muscle memory with git commands and getting used to seeing what output they produce. We will dive deeper into the inner workings of git later. For now, all you need to do is follow along and know that we are using git to save our work, and Github to put it on the internet.

## Open your local copy of frontend-module-0-capstone in Atom

1. Using your terminal, open the local copy of this repo. To do this, enter these commands into your terminal:

```
cd ~
ls
cd turing
ls
cd 0module
ls
cd frontend-module-0-capstone
ls
cd day_1
ls
atom .
```

This will open the day_1 directory in Atom. You should be able to see the directory and its contents in the file explorer on the left side of your Atom window.

## Notes on Learning to Write Code

The process of becoming a software developer is difficult, and learning to code is hard. At some point, everyone struggles. Struggle is a normal, healthy part of the learning process -- don't give up if you hit a hard spot. If you are stuck for longer than 30 minutes, know that it is always ok to ask for help! If you consistently practice  every day and don't take short cuts, you will be on the path to learning how to code. When you reach out for help, challenge yourself to ask clear questions and use technical vocabulary. Speaking accurately about code is a great way to help lock in technical understanding.

One of the best things you can do to set yourself for success is to make sure you type out all the code examples you see in the readings and exercises in this capstone, *do not* copy and paste. The more hands-on-keyboard practice you can give yourself, the better. Copying and pasting won't help you solidify these concepts, manually typing all the code in will.

Details matter: pay close attention to small details in syntax, spacing, and language. The most detailed oriented you are as you're working, the more reliable and well-crafted your code will be. In programming, being detail oriented helps cut down on buggy code and difficult to use systems. It can also help you notice differences in your code, enabling you to identify typos and mistakes more quickly.

## Introduction to JavaScript

* To give you more context for what JavaScript is and how we use it, please read Chapter 1 (pages 13 - 21) of the JAVASCRIPT & JQUERY: Interactive Front-End Web development book.

## Comments in Code

Code comments can be a very useful part of your programs. While we work to write code that is as legible and clear for other developers to read as possible, there are times when we need to be a bit more explicit about our intentions and reasoning. Comments allow us to add information for other developers in our code in english, as well as let us disable parts of our code that we want to temporarily keep from running.

```JavaScript
// Text after two backslashes is a single line comment.
// Anything that follows two backslashes
// will be ignored by the JavaScript interpreter.
```

* For additional context about code comments, read page 57 of the JAVASCRIPT & JQUERY: Interactive Front-End Web development book.

```JavaScript
// Anything after the // is ignored by the JavaScript interpreter.
/* This is another fancy way to write a code comment */

console.log("I could have code like this."); // and the comment after is ignored

// You can also use a comment to "disable" or comment out a piece of code:
// console.log("This won't run.");
console.log(/*"This won't run either"*/)

console.log("This will run.");
```

What is logged to the console when you run this code?

#ANSWER 

> console.log("This will run.");

> This will run.

> \\ undefined

## Data Types

* Read pages 62 - 66 of the JAVASCRIPT & JQUERY: Interactive Front-End Web development book.

JavaScript distinguishes between different kinds of data that programmers may need to use. We'll talk about three of the primitive, or most fundamental, data types today: numbers, strings, and booleans.

### Number

The numeric data type handles all numbers, including negative numbers (such as `-27`) and decimals, which are referred to as floating point numbers (one quarter would be written as `0.25`). Large numbers are written without commas, so three thousand forty five would be written as `3045`.

### String

The string data type consists of letter and other characters, all wrapped within quotes. You can use single or double quotes, but the opening quote and the closing quote must be the same.

```javascript
"I am a string!"
```

Strings can be used to work with any kind of text.

### Boolean

Boolean data types evaluate to one of two values: `true` or `false`. This data type can seem a little abstract, but booleans are very helpful in helping us determine which script should run.


## Variables and Assignment

* Read pages 58 - 61 of the JAVASCRIPT & JQUERY: Interactive Front-End Web development book.

In code, variables allow us to store a value and reuse that value in multiple places. This gives us the ability to store complex information and easily use it more than once in our codebase.

A variable is made up of three parts: the variable keyword, the variable name, and the value to be assigned to the variable with the assignment operator. Let's see what that looks like in code:

```javascript
var foo = 8;
```

In the line above: `var` is the variable keyword, `foo` is the variable name, and the number `8` is the value. An equals sign (`=`) assigns, or stores, the value to the variable name.

In JavaScript, there are certain words that are used for very specific tasks. The variable keyword `var` is one of those words -- it lets the JavaScript interpreter know that a variable is being created. _A note about variable keywords: As you learn more about JavaScript and as you read through documentation, you'll see the keywords `let` and `const` used to declare variables. The rules around how to use `let` and `const` are more nuanced, so for now, we'll stick with `var`._

Variables in JavaScript can be declared, or created, before they have a value assigned to them:

```javascript
var foo;  // declare variable `foo`
```

Declaring a variable means we now can reference it within our codebase, but without a value we can't do too much with it. Until you have assigned a value to a variable, programmers say the value is `undefined`. Fortunately, assigning a value is straightforward and can be done one of two ways:

You can declare a variable and assign a value at the same time:

```javascript
var foo = 6;
```

You can also re-assign a value to an existing variable:

```javascript
foo = 4;  // change variable `foo`
```

### Rules for Naming Variables

It is important to note that JavaScript has a particular set of conventions on what makes a valid variable name.

* Names must begin with a letter, dollar sign, or an underscore.
* They cannot begin with a number
* Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name
* You cannot use keywords or reserved words (such as var or for)
* All variables are case sensitive
* Use names that describe the kind of information you plan to assign the variable
* If your variable is made up of more than one word, then use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for every word AFTER the first word, which should be lower case i.e., thisIsMyVariableName

## Concatenation

"Concatenate" is a programming term that means "join together". We join together strings in JavaScript using the plus (`+`) operator, the same one we would use to add numbers together, but in this context it does something different. Let's take a look, using a variable.

```JavaScript
var name = "Sam";

console.log("Hello, my name is " + name);
// this will log the string "Hello, my name is Sam"
```

In the example above, we joined together a string and a variable with a value of a string assigned to it in order to create a complete sentence. What do you think will happen if we join different data types? Let's try it with a number and a string.


```JavaScript
var quantity = 12;
var snacks = " doughnuts";
var snackCount = "I have " + quantity + snacks;

console.log(snackCount);
// this will log the string "I have 12 doughnuts"
```

Let's take a look at why that resulted in a string. We have a variable called `snackCount` and have assigned the value as our `quantity` and our `snacks`. Looking at snackCount, we’ll notice the value is "I have 12 doughnuts". The reason this works even though the first value is a number and the second is a string, is a result of _type coercion_. JavaScript is essentially trying to help us by converting the number into a string so we can combine the two together.


## Exercises

Work through the exercise files in the day_1/exercises directory.  Complete them in this order:
  1. numbers
  1. strings
  1. booleans
  1. variables
  1. concatenation

## Questions

1. Answer the questions in the `questions.md` file in the day_1 directory. The `.md` file extension for this file refers to markdown formatting. Markdown is a simple markup language to help format your text. [This article](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) shows everything you need for basic markdown formatting.

## Save your work in Git

When you are finished with all of the day_1 activities, follow these steps in order to save your work to your local git repository.

1. Make sure you are in your `day_1` directory. When you enter `ls` in your terminal, you should see the exercises directory listed, as well as README.md, questions.md, and all of the files you created while working through Learn Ruby the Hard Way i.e. "ex1.rb", "ex2.rb", etc.
1. In your terminal, enter `git status`. You should see output like this:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   exercises/concatenation.js
	modified:   exercises/loops.js
	modified:   exercises/numbers.js
	modified:   exercises/strings.js
	modified:   exercises/variables.js
	modified:   questions.md

no changes added to commit (use "git add" and/or "git commit -a")
```

The command `git status` shows us information about files we changed. Don't worry too much about understanding what this all means just yet. What's important is that you get comfortable typing `git status` often.

1. Enter `git add questions.md`.
1. Enter `git status`. Your status should now look a little different:

```On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   questions.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercises/interpolation.js
  modified:   exercises/loops.js
  modified:   exercises/numbers.js
  modified:   exercises/strings.js
  modified:   exercises/variables.js
```

Under "Changes to be committed", It now lists "questions.md". This means that git is getting ready to save this file. We want to do this for each file.

1. Enter `git add exercises`.
1. Enter `git status`. You should now see all those exercises files listed under "Changes to be committed". We just used `git add <directory name>` to add all the files located in a directory.
1. Enter `git status`. You should now see all your files listed under "Changes to be committed". If there are any files listed under "Untracked files" or "Changes not staged for commit", add them using "git add <file name>".
1. Enter `git commit -m "Add day 1"`.
1. Run `git status`. You should see this output:

```
On branch master
nothing to commit, working tree clean
```

Congratulations! You just saved your work to Git! If `git status` is showing any files, add them with `git add <file name>` and commit them with `git commit -m "Add day 1"`.


## Push to Github

You've saved your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should see output similar to this:

```
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 1.03 KiB | 1.03 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:JohnDoe/frontend_module_0_capstone.git
   e8ebd7a..32c0ed3  master -> master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!
