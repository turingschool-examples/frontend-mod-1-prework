# Frontend Mod 0 Capstone Repository

This repository will walk you through the Mod 0 Capstone for the Backend program at Turing.

Each day has a folder containing a `README.md` file with instructions for the day, exercises, and questions. You must complete all the exercises and questions.

### Pre-work Index

* [Day 0 - More Terminal Practice](day_0)
* [Day 1 - HTML and CSS](day_1)
* [Day 2 - HTML and CSS](day_2)
* [Day 3 - HTML and CSS](day_3)
* [Day 4 - HTML, CSS, and JavaScript](day_4)
* [Day 5 - Javascript](day_5)
* [Day 6 - Javascript, Terminal, Git and Github](day_6)
* [Day 7 - Build a thing!](day_7)


# Environment

## Terminal

We will be referencing many terminal commands throughout the prework. It is recommended that you practice using terminal commands before getting started. See the `terminal.md` lesson located in the day_0 directory.

### Forking the Module 0 Capstone Repository

Next, we are going to *fork this repository that you're reading right now*. Forking is when you copy a Github repository to your Github account to make your own changes. Think of it like a fork in the road -- you're about to make changes that differ from the main path.

In this scenario, the [Turing Github account](https://github.com/turingschool) owns this `module_0_capstone` repository. You do not have permission to change anything in this repository, so you need your own copy to work on. In order to fork the repository, follow these steps:

####  1. Make sure you are logged in to GitHub (if you are not logged in, log in and come back to this page)

####  2. Scroll to the top of [*this* page that you're reading right now](https://github.com/turingschool-examples/module_0_capstone).

####  3. Click on `Fork` in the upper right corner of the screen and select your account as the destination

![click on 'fork' button, confirm fork to your account](/images/fork_01.jpg)

####  4. On the new page, confirm that it says it's the "forked" copy of this repository, with mentions of your username in the URL and repository name.

![confirm new repository belongs to _your_ github account](/images/fork_02.jpg)

## Clone down this new repository

Now that you have forked this repository, the next thing to do is *clone your forked repository*. 

Cloning is when you copy a remote Github repository to your local computer.

#### 1. In YOUR `module_0_capstone` repository that your just forked, click on `Clone or Download`

![clone down your copy](/images/fork_03.jpg)


#### 2. If you see `Clone with HTTPS` click on `Use SSH`

#### 3. Click on the copy icon to copy the SSH link to your clipboard.

#### 4. Use your terminal to copy down this repository

 
1. Open your terminal

```
$ cd .
// This is a shortcut for `cd ~`, which is "change into the home directory"
$ mkdir turing
$ cd turing
$ mkdir 1module
$ cd 1module
$ git clone <ctrl-v to paste ssh link here >
Cloning into 'module_0_capstone'...
remote: Enumerating objects: 678, done.
remote: Total 678 (delta 0), reused 0 (delta 0), pack-reused 678
Receiving objects: 100% (678/678), 237.94 KiB | 851.00 KiB/s, done.
Resolving deltas: 100% (332/332), done.

$ cd module_1_capstone
$ git status .
// If everything worked correctly, you should see:
On branch master
nothing to commit, working tree clean
```

From here on out, all the work you do will be in your copy of this repository. Other text you read here might refer to this as the "prework repository" or "backend prework", and they all refer to your forked copy of this `module_0_capstone` repository.

Each day's `README` will walk you through the steps you need to take to save your work.

To start, in your terminal, `cd` into the `day_0` directory. Follow the instructions contained in the `readme.md` file, and have a great time! 

----------------------------------

### Month of Module 0 Capstone: Extended Resources

Have longer than a week to prepare for your time at Turing? Looking for more details and a deeper dive into the materials? Just can't get enough? We've put together a collection of resources to help you continue your ramp up before the first day of class.

#### ![](https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png)Workflow and Tools

*   #### [How Git Works](https://www.pluralsight.com/courses/how-git-works)
    
    Be sure to read the advice section as you work your way through.
    
*   #### [Introduction to the Mac OS X Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
    
    A tutorial that walks you through command line fundamentals.
    

#### ![](https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png)JavaScript Resources

*   #### [Codecademy Introduction to JavaScript](https://www.codecademy.com/learn/javascript)
    
    An introduction to the JavaScript programming language.
    
*   #### [Codecademy Introduction to jQuery](https://www.codecademy.com/learn/learn-jquery)
    
    Learn about the most popular JavaScript library on the web.
    
*   #### [JavaScript and jQuery: Interactive Front-End Web Development](http://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=la_B001IR3Q7I_1_3?s=books&ie=UTF8&qid=1457549440&sr=1-3)
    
    A thorough and easy-to-reference introduction to JavaScript by John Duckett.
    
*   #### [Eloquent Javascript](http://eloquentjavascript.net/)
    
    An in depth dive into the language, Eloquent JavaScript is "a book about JavaScript, programming, and the wonders of the digital." Continue reading the chapters beyond what is listed in the 7-day mod 0 capstone. Complete the exercises at the end of each chapter.
    

#### ![](https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png)HTML and CSS Resources

*   #### [Codecademy HTML & CSS](https://www.codecademy.com/learn/web)
    
    Get your HTML and CSS foundation locked in. This course teaches the basics of website markup and styling so you'll be ready to roll on day 1.
    
*   #### [Scalable and Modular Architecture for CSS](https://smacss.com/)
    
    Once you've got the basics of HTML and CSS down, SMACSS will show you an approach to writing scalable and reusable CSS.
    

#### ![](https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-128.png)Design, UX, and UI Resources

*   #### [UX Crash Course: 31 Fundamentals](http://thehipperelement.com/post/75476711614/ux-crash-course-31-fundamentals)
    
    A collection of 31 bite-sized daily lessons to introduce you to UX principles and techniques.
    
*   #### [Field Guide to Human Centered Design](http://www.designkit.org/resources/1)
    
    A step-by-step guide that will get you solving problems like a designer by [IDEO.org](https://www.ideo.org/)
    
*   #### [Thinking with Type](http://www.thinkingwithtype.com/)
    
    Typography is a big topic, learn the basics of what you need to know about how to use type effectively.

