# Section 2 - Asking Questions

Section 2 is estimated to take a total of 8-12 hours to complete. Similar to Section 1, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👨🏽‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

- [Vocabulary](#Vocabulary)
- [Part A: Asking Questions](#Part-A-Asking-Questions)
- [Part B: Conditionals](#Part-B-Conditionals)
- [Part C: Functions](#Part-C-Functions)
- [Deliverables](#Deliverables)

## Vocabulary

Today will introduce a number of new terms, that may feel a bit more complex. Write these terms and reserved keywords in that special spot in your notebook now. Work to hold yourself acocuntable to updating definitions _as you work through this section_.

### Vocabulary Terms

- comparison operators
- logical operators
- condition
- conditionals
- if statements
- function
- argument
- parameter

### JavaScript Reserved Keywords

- `if`
- `else if`
- `else`
- `function`

## Get Set Up

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the `section1` instructions.

## Part A Asking Questions

If you've made it into Section 2 of the pre-work, we hope that you've heard us say loud and clear, that asking questions is a good and important thing to do! That doesn't mean it's easy, though. Some of us have educational experiences that tell us otherwise, some of us have had bad experiences when being vulnerable and asking questions, and sometimes it's just hard to determine which words to use to formulate the question itself!

Read the three blog posts that follow:
* [It's okay to ask questions](https://dev.to/josefine/asking-better-questions-2e2k)
* [Asking better questions](https://dev.to/mporam/its-okay-to-ask-questions-43hf)
* [You Questions Are Dumb; Ask Them Anyway](https://dev.to/kathryngrayson/your-questions-are-dumb-ask-them-anyway-3cm6)

Reflect on these posts, and how you feel about asking questions (specifically, technical questions as you enter your technical work at Turing). How might this positively or negatively impact your growth? We will ask you to share some reflections with your small group at the end of this section.

It's going to take some time to find that balance between googling and pushing yourself to solve a problem without hand-holding, and reaching out for help. That's ok! be patient with yourself. The way you will find that balance is by being conizant and aware of how you currently operate. Keep this on your mind as you work through this section, and... there is no time like the present to start asking questions!

## Part B Conditionals

One of the most important concepts in programming is knowing when and how to tell the computer to do either _one_ thing or _another_ thing based on a set of simple criteria.  We can accomplish this with if statements, which you will learn about today.

When you are all done with the lessons, exercises, and reflection for today, you will once again use Git to save your work, and then put it in the cloud on GitHub.

### Operators

When you learned about Booleans in Section 1, you briefly read about and practiced using some comparison operators. 

The conditional operators we touched on earlier are critical in the set up of if statements. Conditional statements (conditions) evaluate to `true` or `false`. The most common operators used for conditions are comparison operators: 
* `===` (strictly equal)
* `!==` (not equal)
* `>` (greater than)
* `>=` (greater than or equal to)
* `<` (less than)
* `<=` (less than or equal to)

Some data types also have functions which return a `true` or `false`, so they’re used in conditional statements. We will touch on those later in the pre-work and when you get into Mod 1.

- Read more about [comparison operators here](https://javascript.info/comparison)
- Read about [logical operators here](https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript). You really just need to read the top first paragraph and code snippet in this post. You'll go deeper in Mods 1-2.

> 👨🏽‍💻PAUSE here, and complete the exercises in `comparisons.js`

### If Statements

📒 Read pages 148-149 and 160-163 from the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book. If you are unsure of some vocabulary you encounter, refer to the [vocabulary list](#Vocabulary-From-Book) at the end of this README.

In addition to **`if`** and **`else`**, **`else if`** can help us create more complex statements. `else if` statements execute a block of code when their condition **evaluates** to `true`. However, they must be chained to a previous `if` statement, like so:

```javascript     
if (condition1) {
    //block of code executes if condition1 evaluates to true
} else if (condition2) {
    //block of code executes if condition1 evaluates to false and condition2 evaluates to true.
} else if (condition3) {
    //block of code executes if condition1 and condition2 evaluate to false
    //and condition3 evaluates to true.
} else {
    //block of code executes if none of the conditions above evaluate to true.
};
```

### If/Else Statements

Why do we have conditional statements? Most often it’s to control conditional instructions, especially *if/else if/else* structures. Read the following code snippet, then the accompanying explanation that follows it.

```javascript
var minutesToHeatWater = 7;

if (minutesToHeatWater < 7) {
    console.log("The water is not boiling yet.");
} else if (minutesToHeatWater === 7) {
    console.log("It's just barely boiling");
} else if (minutesToHeatWater === 8) {
    console.log("It's boiling!");
} else {
    console.log("Hot! Hot! Hot!");
};
```

What would be logged when `minutesToHeatWater` is 7? What if we changed it to 5? Or 8? Or 9?

- When the `minutesToHeatWater` is 5, here is how the execution goes: "Is it true that 5 is less than 7? Yes, it is, so print out the line The water is not boiling yet.".
- When the `minutesToHeatWater` is 7, it goes like this: "Is it true that 7 is less than 7? No. Next, is it true that 7 is equal to 7? Yes, it is, so print out the line It's just barely boiling".
- When the `minutesToHeatWater` is 8, it goes like this: "Is it true that 8 is less than 7? No. Next, is it true that 8 is equal to 7? No. Next, is it true that 8 is equal to 8? Yes, it is, so print out the line It's boiling!".
- Lastly, when `minutesToHeatWater` is 9 or greater, it goes: "Is it true that 9 is less than 7? No. Next, is it true that 9 is equal to 7? No. Next, is it true that 9 is equal to 8? No. Since none of those are true, execute the else and print the line Hot! Hot! Hot!".

Only one section of the *if/else if/else* structure can have its instructions run. If the *if* is true, for instance, JavaScript will not bother to look at the *else if* or *else*. Once one block executes, that’s it.

### Equality vs. Assignment

The **number one mistake** people encounter when writing conditional statements is the difference between `=` and `===`.

* `=` is an assignment. It means "take the value on the right side and store it into whatever is on the left side" – it’s telling, not asking.

* `===` is a question. It means "is the value on the right the exact same as the value on the left?" – it’s asking, not telling.

> 👨🏽‍💻PAUSE here, and complete the exercises in `decision-making.js` and `if-statements.js`

## Part C Functions

📒Read page 88 and pages 90-93 from the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

🎬[Watch this video](https://www.youtube.com/watch?v=N8ap4k_1QEQ) on functions.

If you'd like another source, read [this blog post](https://medium.com/javascript-in-plain-english/introduction-to-javascript-functions-a0a1687f2318#:~:text=Introduction%20to%20Functions,to%20'run'%20in%20JavaScript) (stop after the section on Arguments).

Lastly, [Codecamdemy also has a good intro on JavaScript functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions) in their free account plan. Completing this is _optional_!

> 👨🏽‍💻PAUSE here, and complete the exercises in `functions.js`

## Exercises

At this point, you should have worked through all files in the `exercises` directory. Confirm that you have before moving on.

## Vocabulary

Look back at that special spot in your notebook for vocabulary. Hopefully you updated it with definitions, diagrams, and code samples as you went through this section. If not, do so now. This will be part of this sections deliverables.

## Relections

📝 Answer the prompts in the `reflection.md` file in the `section2` directory. If you need a reminder on how to format your markdown, [this is the Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

## Save your work in Git

When you are finished with all of the `section2` activities, use your terminal to run the following commands in order to save your work to your local Git repository.

1. `$ git add section2/exercises`
2. `$ git add section2/reflection.md`
3. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
4. `$ git commit -m "Add Section 2 work"`

## Push to Github

You've save your work to git on your local machine, but it is not yet accessible through your remote GitHub repository. Updating our remote GitHub repository with our local changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!

## Vocabulary From Book

The readings in the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book use JavaScript in a way that is likely unfamiliar to you. The book uses specific JavaScript properties and functions to interact with HTML elements on a webpage, like changing or adding text on a webpage. Initially, we will be using JavaScript without HTML. That's why you haven't seen these techniques before! We will address these techniques thoroughly during Mod 1, however, here are some quick definitions to help you become familiar with them.

* document.getElementById(): a method used to retrieve an element from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* document.write(): a method used to write data to a webpage. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
* el.innerHTML(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* el.textContent(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Deliverables

In the appropriate thread in your pre-work group channel, share the following:

1. Link to the commit you made with your complete Section 2 pre-work
2. A screenshot or photo upload of your notes, including your vocabulary/JavaScript reserved keywords section.
3. A short video of yourself reflecting on:
- Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
- Did you get stuck at all during this section? If so, how long did you stay stuck? How did you get un-stuck?
- Regarding asking questions, rubber ducking and taking breaks - what is one habit you want to commit to building (or continue building) during your work on Sections 3 and 4?
- 1 tech question

## Index Links

- [Vocabulary](#Vocabulary)
- [Part A: Asking Questions](#Part-A-Asking-Questions)
- [Part B: Conditionals](#Part-B-Conditionals)
- [Part C: Functions](#Part-C-Functions)
- [Deliverables](#Deliverables)

🚀[Go to Section 1](../section2)