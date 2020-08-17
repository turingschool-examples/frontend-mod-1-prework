# Section 1: Super Learners

Section 1 is estimated to take a total of 6-10 hours to complete. Part C is the longest and most time intensive. This section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👩‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

- [Vocabulary](#Vocabulary)
- [Part A: Super Learner Habits](#Part-A-Super-Learner-Habits)
- [Part B: Terminal](#Part-B-Terminal)
- [Part C: JavaScript Foundations](#Part-C-JavaScript-Foundations)
- [Deliverables](#Deliverables)

## Vocabulary

If you've talked to any alum or near-alum of Turing, one thing they likely shared is "Turing teaches you how to learn". For creators of tech, the learning never ends. Not after graduating a program, not after 20 years of experience. We will provide more support as you are starting out, then release some of that support so you are equipped to learn on your own once you graduate. While we provide more support at the beginning, we also intentionally support you in building skills and habits that will help you do that successfully. 

One of those pieces is in how developers approach vocabulary. Knowing technical vocabulary will allow you to get more out of reading doucmentation and tutorials, and will allow you to communicate well with teams and ask good questions when you need help. Each section of your pre-work (and each lesson once you start Mod 1) will start with a vocabulary section. We don't always give you the definitions - this is intentional. You will create your own definition after having several opportunities to read definitions and see examples.

Here's what we ask you do:
- Find a special spot in your notebook for vocabulary and JavaScript reserved keywords. Mark it with a post-it or bookmark, so it's easy to find and come back to
- When you start a new section of pre-work, write down each term. Leave plenty of space for (future) notes
- As you read and work through the material you will come across definitions and build an understanding of these terms. Write in definitions, draw diagrams, write out relevant code snippets, etc. If you complete a section and don't have a grasp on a term, that's when it's time to reach out to your pre-work small group or cohort, and collaborate!
 
### Vocabulary Terms

- command
- directory
- code comments
- String
- Number
- Boolean
- variable
- assignment operator
- re-assignment (of a variable)
- concatenation

### JavaScript Reserved Keywords

- `console.log()`
- `var`
- `true`
- `false`

## Part A Super Learner Habits

Read [this article](https://medium.com/personal-growth/6-habits-of-super-learners-63d466a254fd) about the habits of Super Learners. Reflect on this - what do you already do? Does this make you want to do anything new or different as you beginthis learning journey? Jot down your notes now, and we will ask you to share some reflections with your small group at the end of this section.

## Part B Terminal

You will likely spend the majority of your time in Module 1 in either the Terminal or your text editor (Atom). When you're new to programming, the terminal can seem like a scary place, but it has some advantages over other means of interacting with your computer. Perhaps the greatest advantage is that it allows programmers to build tools that they can share with each other without going through the process of creating a graphical user interface. This makes it easy to share code quickly so that it can be used in multiple projects.

You already have had some exposure to the terminal in [Mod 0, Session 2: Terminal and Command Line](http://mod0.turing.io/session2/#terminal-and-command-line). Let's get a little more practice!

### Explore and Practice

Visit the [Turing Terminal](https://learn-terminal.turing.io/) and read through the Learn section as needed. Explore the Playground as needed. 👩‍💻Complete all three Challenges. Take a screenshot of your "complete" notification and keep on your desktop or in a file; it will be part of your [deliverables](#Deliverables) at the end of this section. [This is a guide on taking screenshots on a Mac](https://support.apple.com/en-us/HT201361).

### Making Things, Navigating

#### Commands

In the following section, you will get a little practice using `touch` and `mkdir` to create files and directories, and `ls` and `cd` to navigate the directory structure and check-in.

#### Terminal Practice

👩‍💻Use `mkdir` and `touch` to create the directories/files in the structure described below.

```sh
|-- _secretLibraryProject
    |
    |--README.md
    |--package.json
    |
    |--lib
    |  |
    |  |--secretLibrary.js
    |  |--secretBook.js
    |  |--secretLibrarian.js
    |  |--patron.js
    |  |--librarySystem.js
    |
    |--test
       |
       |--secretLibrary.js
       |--secretBook.js
       |--secretLibrarian.js
       |--patron.js
       |--librarySystem.js
```     

Don't worry about putting any text or content into these files. For now, create this structure with empty files.

### Deleting Things

#### Commands

* `rm`: This will remove a file from your system. Be careful with this! The terminal assumes you're a little more of an expert than the system does. This doesn't move the file to the Trash, it removes it completely from your system. It's a little like moving the file to the trash and then deleting it immediately.

* `rm -rf`: Adding the `-r` and `-f` flags to the `rm` command will allow you to delete directories even if they have other files and/or directories inside of them. For more information on each of these flags enter `man rm` into your terminal. It will print out the manual for this command.

#### Terminal Practice

👩‍💻Use `rm` and `rm -rf` to delete each of the files and directories you created in the `Making Things` section above.

Note that it would be possible to delete the entire directory that you created with just `rm -rf secretLibrary`. **Don't do this!** At this point it's better for you to delete each of the files and directories individually so that you get some practice with these commands, which will help you remember them better in the long run. The goal here (for this particular exercise) isn't to be efficient and creating and deleting files and directories, it's to *get practice* creating and deleting files and directories. Ultimately this practice will allow you to be more efficient in the future.

## Part C JavaScript Foundations

In this section, you will begin to learn the basics of JavaScript. You will work through several exercises which will help you get comfortable running files and seeing output. You will learn about ways to represent data in JavaScript as Strings, Numbers, and Booleans, as well as begin to explore how to capture and work with that data.

At the end of the section, you will use several Git commands to save your work to your local Git repository. Then you will push your updates to your remote GitHub repository. For now, we are building muscle memory with git commands and getting used to seeing what output they produce. We will dive deeper into the inner workings of Git later. For now, all you need to do is follow along and know that we are using Git to save our work, and GitHub to put it on the internet.

### Open your local copy of frontend-mod-1-prework in Atom

Using your terminal, open the local copy of this repository. To do this, enter these commands into your terminal (this may vary slightly depending on the names of your directories):

```
cd ~
ls
cd turing
ls
cd 0module
ls
cd frontend-mod-1-prework
ls
cd section1
ls
atom .
```

This will open the `section1` directory in Atom. You should be able to see the directory and its contents in the file explorer on the left side of your Atom window.

### Best Practices: Learning to Write Code

**If you are stuck for longer than 30 minutes, know that it is always ok to ask for help!** The process of becoming a software developer is difficult, and learning to code is hard. At some point, everyone struggles. Struggle is a normal, healthy part of the learning process - don't give up if you hit a hard spot. If you consistently practice every day and don't take shortcuts, you will be on the path to learning how to code. When you reach out for help, challenge yourself to ask clear questions and use technical vocabulary. Speaking accurately about code is a great way to help lock in technical understanding.

**Type every line of code.** One of the best things you can do to set yourself for success is to make sure you type out all the code examples you see in the readings and exercises in this pre-work, *do not* copy and paste. The more hands-on-keyboard practice you can give yourself, the better. Copying and pasting won't help you solidify these concepts, manually typing all the code in will.

**Details matter.** Pay close attention to small details in syntax, spacing, and language. The most detailed oriented you are as you're working, the more reliable and well-crafted your code will be. In programming, being detail oriented helps cut down on buggy code and difficult to use systems. It can also help you notice differences in your code, enabling you to identify typos and mistakes more quickly.

### Introduction to JavaScript

📒 To give you more context for what JavaScript is and how we use it, please read Chapter 1 (pages 13 - 21) of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

### Comments in Code

**Code comments** can be a very useful part of your programs. While we work to write code that is as legible and clear for other developers to read as possible, there are times when we need to be a bit more explicit about our intentions and reasoning. Comments allow us to add information for other developers in our code in our written/spoken language, as well as let us de-activate parts of our code that we want to temporarily keep from running.

```JavaScript
// Text after two backslashes is a single line comment.
// Anything that follows two backslashes
// will be ignored by the JavaScript interpreter.
```

📒 For additional context about code comments, read page 57 of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

```JavaScript
// Anything after the // is ignored by the JavaScript interpreter.
/* This is another fancy way to write a code comment */

console.log("I could have code like this."); // and the comment after is ignored

// You can also use a comment to "de-activate" or comment out a piece of code:
// console.log("This won't run.");
console.log("Hello, World" /*"This part won't run either"*/)

console.log("This will run.");
```

### Data Types

JavaScript distinguishes between different kinds of data that programmers may need to use. We'll talk about three of the primitive, or most fundamental, data types in this section: Numbers, Strings, and Booleans.

#### Number

The **Number** data type handles all numbers, including negative numbers (such as `-27`) and decimals, which are referred to as floating point numbers (one quarter would be written as `0.25`). Large numbers are written without commas, so three thousand forty five would be written as `3045`.

```javascript
47

-3

16.25
```

#### String

The **String** data type consists of letter and other characters, all wrapped within quotes. You can use single or double quotes, but the opening quote and the closing quote must be the same.

```javascript
"I am a string!"

'I am also a string!'
```

Strings can be used to work with any kind of text - number, letter, special character, etc.

#### Boolean

The **Boolean** data types evaluates to one of two values: `true` or `false`. This data type can seem a little abstract, but Booleans are very helpful in helping us determine which script should run.

There are many cases in whie we want to ask a program a question, such as "Does the username and password typed in match what we have in the database?". This is a yes/no question. We will ask the program the question in a way that it will respond with `true` or `false`. Here are a couple of examples:

```javascript
3 === 6
//=> false, because 3 and 6 are not the exact same

2 === 2
//=> true, because 2 and 2 are the exact same

9 > 12
//=> true, because 9 is less than 12
```

Read more about compairson operators [here](https://javascript.info/comparison)!

> 👩‍💻 PAUSE here, and complete the exercises in `dataTypes.js`

### Variables and Assignment

📒 Read pages 58 - 61 of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

In code, **variables** allow us to store a value and re-use that value in multiple places. This gives us the ability to store complex information and easily use it more than once in our codebase.

A variable declaration is made up of three parts: the variable keyword, the variable name, and the value to be assigned to the variable with the assignment operator. Let's see what that looks like in code:

```javascript
var age = 8;
```

In the line above: `var` is the variable keyword, `age` is the variable name, and the number `8` is the value. A single equals sign (`=`) is the assignment operator. It assigns, or stores, the value to the variable name.

In JavaScript, there are certain words that are used for very specific tasks. The variable keyword `var` is one of those words -- it lets the JavaScript interpreter know that a variable is being created. _A note about variable keywords: As you learn more about JavaScript and as you read through documentation, you'll see the keywords `let` and `const` used to declare variables. The rules around how to use `let` and `const` are more nuanced, so for now, we'll stick with `var`._

Variables in JavaScript can be declared, or created, before they have a value assigned to them:

```javascript
var pets;  // declare variable `pets`
```

Declaring a variable means we now can reference it within our codebase, but without a value we can't do too much with it. Until you have assigned a value to a variable, programmers say the value is `undefined`. Fortunately, assigning a value is straightforward and can be done one of two ways:

You can declare a variable and assign a value at the same time:

```javascript
var kids = 2;
```

You can also re-assign a value to an existing variable:

```javascript
kids = 3;  // change variable `kids`
```

#### Rules for Naming Variables

It is important to note that JavaScript has a particular set of conventions on what makes a valid variable name.

* Names must begin with a letter, dollar sign, or an underscore
* They cannot begin with a number
* Names can contain any of the above characters plus a number, but you cannot use a dash (`-`) or a period (`.`) within the name
* You cannot use keywords or reserved words (such as `var` or `for`)
* All variables are case sensitive
* Use names that describe the kind of information you plan to assign the variable
* If your variable is made up of more than one word, then use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for every word AFTER the first word, which should be lower case i.e., `thisIsMyVariableName`

> 👩‍💻 PAUSE here, and complete the exercises in `variables.js`

### Concatenation

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

Let's take a look at why that resulted in a string. We have a variable called `snackCount` and have assigned the value as our `quantity` and our `snacks`. Looking at `snackCount`, we’ll notice the value is "I have 12 doughnuts". The reason this works even though the first value is a number and the second is a string, is a result of _type coercion_. JavaScript is essentially trying to help us by converting the number into a string so we can combine the two together.

> 👩‍💻 PAUSE here, and complete the exercises in `variables.js`

## Exercises

At this point, you should have worked through all three files in the `exercises` directory.

## Vocabulary

Look back at that special spot in your notebook for vocabulary. Have you updated with with definitions, diagrams, and code samples? If not, do so now!

## Relections

📝 Answer the prompts in the `reflection.md` file in the `section1` directory. The `.md` file extension for this file refers to markdown formatting. Markdown is a markup language to help format your text. [This article](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) shows everything you need for basic Markdown formatting.

## Save your work in Git

When you are finished with all of the `section1` exercises and reflections, follow these steps in order to save your work to your local git repository.

1. Make sure you are in your `section1` directory. When you run `ls` in your terminal, you should see the `exercises` directory listed, as well as `README.md`, `reflection.md`, etc.
2. In your terminal, run `git status`. You should see output like this:

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   exercises/concatenation.js
	modified:   exercises/dataTypes.js
	modified:   exercises/variables.js
	modified:   reflection.md

no changes added to commit (use "git add" and/or "git commit -a")
```

The command `git status` shows us information about files we changed. Don't worry too much about understanding what this all means just yet. What's important is that you get comfortable typing `git status` often.

3. Run `git add reflection.md`.
4. Run `git status`. Your status should now look a little different:

```On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   reflection.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

   modified:   exercises/concatenation.js
   modified:   exercises/dataTypes.js
   modified:   exercises/variables.js
```

Under "Changes to be committed", It now lists "reflection.md". This means that git is getting ready to save this file. We want to do this for each file.

5. Run `git add exercises`.
6. Run `git status`. You should now see all those exercises files listed under "Changes to be committed". We just used `git add <directory name>` to add all the files located in a directory.
7. Run `git status`. You should now see all your files listed under "Changes to be committed". If there are any files listed under "Untracked files" or "Changes not staged for commit", add them using "git add <file name>".
8. Run `git commit -m "Add Section 1"`.
9. Run `git status`. You should see this output:

```
On branch master
nothing to commit, working tree clean
```

Congratulations! You just saved your work to Git! If `git status` is showing any files, add them with `git add <file name>` and commit them with `git commit -m "Add Section 1"`.

### Push to GitHub

You've saved your work to Git on your local machine, but it is not yet accessible through your remote GitHub repository. Updating our remote GitHub repository with our local changes is called pushing. Push your code with the following command:

```
git push origin master
```

You should see output _similar_ to this:

```
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 1.03 KiB | 1.03 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:your-username/frontend_mod_1_prework.git
   e8ebd7a..32c0ed3  master -> master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!

## Deliverables

In the appropriate thread in your pre-work group channel, share the following:

1. Link to the commit you made with your complete Section 1 pre-work🌟
2. A screenshot of your complete Turing Terminal challenges
3. A short video of yourself reflecting on:
- How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?
- How comfortable do you feel using the terminal (for the commands we’ve learned so far) right now?
- In your own words, what is JavaScript and why do we need it?
- What support do you need from this group? And/or is there anything you'd like the group to know about you, your working style, your progress, etc?

<br>

🌟How to find and link a commit:
- Go to the GitHub repository on _your_ account that holds your pre=work
- Click commits (usually in a light blue bar in the middle-ish of the page)
- You'll see a list of all commits made on this. You have probably only made 1 so far, the rest are from Turing staff members). Click the commit you made (it will match whatever you typed in after `git commit -m "...`)
- Copy the URL in the URL bar, then paste the URL into Slack

## Index Links

- [Vocabulary](#Vocabulary)
- [Part A: Super Learner Habits](#Part-A-Super-Learner-Habits)
- [Part B: Terminal](#Part-B-Terminal)
- [Part C: JavaScript Foundations](#Part-C-JavaScript-Foundations)
- [Deliverables](#Deliverables)