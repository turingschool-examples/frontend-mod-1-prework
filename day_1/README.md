# Day 1: HTML and CSS

## Open your local copy of frontend_module_0_capstone in Atom

1. Using your terminal, open the local copy of this repo. To do this, enter these commands into your terminal:

```
cd ~
ls
cd turing
ls
cd 1module
ls
cd frontend_module_0_capstone
ls
cd day_1
ls
atom .
```

This will open the day_1 directory in Atom. You should be able to see the directory and its contents in the file explorer on the left side of your Atom window.

## Add a file to track your day one progress

In the day_1 directory, create another file called `day1-exercises.md`. This is where you'll put your answers to the following questions and a link to the CodePen you create below.

## Create a [CodePen](https://codepen.io) Account

CodePen is a website where you can quickly create small projects using HTML, CSS, and JavaScript. It is lightweight, and you can see the output of your code right away!

In order to save your CodePen projects, you need to have an account. It's free - you just have to sign up!

## Read Chapters 1 and 2 on Structure and Text from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Open the `day1-exercises.md` file you created earlier, and answer these questions about the reading in that file:

1.  On a website, what is the purpose of HTML code?
2.  What is the difference between an element and a tag?
3.  Why do we use attributes in HTML elements?
4.  Describe the purpose of the head, title, and body HTML elements.
5.  In your browser (Chrome), how do you view the source of a website?
6.  List five different HTML elements and what they are used for. For example, `<p></p>` is a paragraph element, and it is used to represent a paragraph of text.
7.  What are empty elements?
8.  What is semantic markup?
9.  What are three new semantic elements introduced in HTML 5? Use page 431 in the book to find more about these new elements.

Go to [CodePen](https://codepen.io). Create a new "pen", and start to write some HTML code in CodePen using what you read from the Structure and Text chapters. The HTML should include:

*   The basic HTML structure (body, title, head, etc.).
*   At least two levels of headings.
*   Multiple paragraphs.
*   The paragraph text should be about what drives you to learn about web development.

When you are done, save the "pen", and paste the link into your `day1-exercises.md` file. You're doing it! You're starting the beginning of your web development career.

Some resources about using CodePen:

*   [Here is a video](https://www.youtube.com/watch?v=T_k03JH3b24) about the basics of CodePen and how to use it.
*   Step through [this interactive walkthrough](https://codepen.io/pen/tour/welcome/start) to familiarize yourself with using CodePen.
*   If you're stuck on what a basic HTML structure looks like, use page 58 in [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett) to help get you started.

## Save your work in Git
When you are finished with all of the day_1 activities, follow these steps in order to save your work to your local git repository.

1. Make sure you are in your `day_1` directory. When you enter `ls` in your terminal, you should see the README.md and day1-exercises.md files.
1. In your terminal, enter `git status`. You should see output like this:

```
On branch master

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    day1-exercises.md

no changes added to commit (use "git add" and/or "git commit -a")
```

The command `git status` shows us information about files we changed. Don't worry too much about understanding what this all means just yet. What's important is that you get comfortable typing `git status` often.

1. Enter `git add day1-exercises.md`.
1. Enter `git status`. Your status should now look a little different:

```On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   day1-exercises.md

```

Under "Changes to be committed", It now lists "day1-exercises.md". This means that git is getting ready to save this file. We want to do this for each file.

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
To github.com:JaneDoe/frontend_module_0_capstone.git
   e8ebd7a..32c0ed3  master -> master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!
