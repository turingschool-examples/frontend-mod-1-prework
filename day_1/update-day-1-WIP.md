# Day 1 - Strings and Numbers

Today, you will begin to learn the basics of JavaScript. You will work through several exercises which will help you get comfortable running files and seeing output. You will also learn about two ways to represent data in JavaScript: Strings and Numbers.

In addition to Ruby, this day will also walk you through the commands you need to enter in your terminal to create files. By the end of the day, you should be very comfortable with the commands `cd` and `ls` to navigate the machine, and the commands `mkdir` and `touch` to create directories and files on the machine.

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

## Add a file to track your day one progress

In the day_1 directory, create another file called `day1-exercises.md`. This is where you'll put your answers to the following questions and a link to the Repl you create below.

## Introduction to JavaScript

1. Read the following sections of the [MDN JavaScript Guide](https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide):

<!-- * [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#What_is_JavaScript)
* [Getting Started with JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#Getting_started_with_JavaScript)
* [Hello World](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#Hello_world) -->


## Variables and Assignment

In code, variables allow us to store a value and reuse that value in multiple places. This allows us to store complex information and easily use it more than once in our codebase.

A variable is made up of three parts: the variable keyword, the variable name, and the value to be assigned to the variable with the assignment operator. Let's see what that looks like in code:

```javascript
var foo = 8;
```

In the line above: `var` is the variable keyword, `foo` is the variable name, and `8` is the value. An equals sign (`=`) assigns, or stores, the value to the variable name.

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

You can also assign a value to an existing variable:

```javascript
foo = 4;  // change variable `foo`
```

## Data Types

JavaScript distinguishes between different kinds of data that programmers may need to use. We'll talk about three of the primitive, or most fundamental, data types today: numbers, strings, and booleans.

## Number

The numeric data type handles all numbers, including negative numbers (such as `-27`) and decimals, which are referred to as floating point numbers (one quarter would be written as `0.25`). Large numbers are written without commas, so three thousand forty five would be written as `3045`.

<!-- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures -->

## String

The string data type consists of letter and other characters, all wrapped within quotes. You can use single or double quotes, but the opening quote and the closing quote must be the same.

```javascript
"I am a string!"
```

Strings can be used to work with any kind of text.

## Boolean

Boolean data types evaluate to one of two values: `true` or `false`. This data type can seem a little abstract, but booleans are very helpful in helping us determine which script should run.


## Exercises

1. Work through the exercise files in the day_1/exercises directory.  Complete them in this order:
    1. strings
    1. numbers
    1. booleans
    1. variables
    1. concatenation
    1. loops

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

	modified:   exercises/concatenation.md
	modified:   exercises/loops.md
	modified:   exercises/numbers.md
	modified:   exercises/strings.md
	modified:   exercises/variables.md
	modified:   questions.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	ex1.md
	ex11.md
	ex2.md
	ex3.md
	ex4.md
	ex5.md
	ex6.md

no changes added to commit (use "git add" and/or "git commit -a")
```

The command `git status` shows us information about files we changed. Don't worry too much about understanding what this all means just yet. What's important is that you get comfortable typing `git status` often.

1. Enter `git add ex1.md`.
1. Enter `git status`. Your status should now look a little different:

```On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   ex1.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercises/interpolation.md
  modified:   exercises/loops.md
  modified:   exercises/numbers.md
  modified:   exercises/strings.md
  modified:   exercises/variables.md
  modified:   questions.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	ex11.md
	ex2.md
	ex3.md
	ex4.md
	ex5.md
	ex6.md
```

Under "Changes to be committed", It now lists "ex1.rb". This means that git is getting ready to save this file. We want to do this for each file.

1. Enter `git add ex2.rb`
1. Enter `git status`. "ex2.rb" should now be listed under "Changes to be committed".
1. Do this for each of your "ex#.rb" files you created for Learn Ruby the Hard Way and your "questions.md" file.
1. Enter `git status`. Under "Changes not staged for commit", you should see all the files in the exercises directory.
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
