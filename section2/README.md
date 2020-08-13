# Section 2 - something

Section 2 is estimated to take a total of 8-12 hours to complete. Similar to Section 1, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👩‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

- [Part A: Section 2 Focus TBD](#Part-A-Section-2-Focus)
- [Part B: Conditionals](#Part-B-Conditionals)
- [Part C: Functions](#Part-C-Functions)
- [Deliverables](#Deliverables)

## Get Set Up

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the section1 instructions.

## Part A Section 2 Focus

Content TBD

## Part B Conditionals

One of the most important concepts in computer programming is knowing when and how to tell the computer to do either _one_ thing or _another_ thing based on a set of simple criteria.  We accomplish this with If-Statements, which you will learn about today.

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

### Operators

When we learned about Booleans in Section 1, we briefly read about and practiced using some comparison operators. 

The conditional operators we touched on earlier are critical in the set up of If Statements. Conditional statements evaluate to `true` or `false`. The most common conditional operators are `==` (equal), `>` (greater than), `>=` (greater than or equal to), `<` (less than), and `<=` (less than or equal to). Some data types also have functions which return a true or false, so they’re used in conditional statements. We will touch on those later in the pre-work and you get into Mod 1.

- Read more about [comparison operators here](https://javascript.info/comparison)
- Read about [logical operators here](https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript). You really just need to read the top first paragraph and code snippet in this post. You'll go deeper in Mods 1-2.
> 👨🏽‍💻PAUSE here, and complete the exercises in comparisons.js

### If Statements

📒 Read pages 148-149, and 160-163 from the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book. If you are unsure of some vocabulary you encounter, refer to the vocabulary list at the end of this README.

In addition to **if** and **else**, **else if** can help us create more complex statements. **else if** statements evaluate a block of code when their condition is true. However, they must be chained to a previous **if** statement, like so:

    ```javascript     
    if (condition1) {
        //block of code if condition1 is true
    } else if (condition2) {
        //block of code if condition1 is false and condition2 is true.
    } else if (condition3) {
        //block of code if condition1 is false and condition2 is false and condition3 is true.
    } else {
        //block of code if none of the conditions above are true.
    };
    ```

#### If/Else Statements

Why do we have conditional statements? Most often it’s to control conditional instructions, especially *if/else if/else* structures. Let’s use an example of a block of code like this:
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

#### Equality vs. Assignment

The **number one mistake** people encounter when writing conditional statements is the difference between `=` and `===`.

`=` is an assignment. It means "take the value on the right side and store it into whatever is on the left side" – it’s telling, not asking.

`===` is a question. It means "is the value on the right the exact same as the value on the left?" – it’s asking, not telling.

> 👨🏽‍💻PAUSE here, and complete the exercises in decision-making.js and if-statements.js

## Part C Functions







## Exercises

At this point, you should have worked through all files in the `exercises` directory. Confirm that you have before moving on.

## Relections

📝 Answer the prompts in the `reflection.md` file in the `section2` directory. If you need a reminder on how to format your markdown, [this is the Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

## Save your work in Git

When you are finished with all of the section2 activities, use your terminal to run the following commands in order to save your work to your local git repository.

1. `$ git add section2/exercises`
1. `$ git add section2/reflection.md`
1. Use `git add section2/<filename>` to add all additional files that you created today
1. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
1. `$ git commit -m "Add Section 2 Work"`

## Push to Github

You've save your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!

## FYI - Vocabulary you'll encounter in the reading

The readings in the `JAVASCRIPT & JQUERY` book use JavaScript in a way that is likely unfamiliar to you. The book uses specific Javascript properties and functions to interact with HTML elements on a webpage, like changing or adding text on a webpage. Initially, we will be using JavaScript without HTML. That's why you haven't seen these techniques before! We will address these techniques more thoroughly during your first mod, however, here are some quick definitions to help you become familiar with them.

* document.getElementById(): a method used to retrieve an element from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* document.write(): a method used to write data to a webpage. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
* el.innerHTML(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* el.textContent(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Deliverables

In the appropriate thread in your pre-work group channel, share the following:

1. Link to the commit you made with your complete Section 2 pre-work
2. A screenshot or photo upload of your notes, including your vocabulary section.
3. A short video of yourself reflecting on:
- 