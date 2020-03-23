# Day 3 - If Statements

One of the most important concepts in computer programming is knowing when and how to tell the computer to do either _one_ thing or _another_ thing based on a set of simple criteria.  We accomplish this with If-Statements, which you will learn about today.

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

## Open your local copy of frontend-module-0-capstone

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 instructions.

## If-Statements

1. Work through the following lessons to learn about If-Statements.
    1. Read pages 148 and 149, and 160 through 163 from the JAVASCRIPT & JQUERY: interactive front-end web development book. If you are unsure of some vocabulary you encounter, refer to the vocabulary list at the end of this README.
    1. In addition to **if** and **else**, **else if** can help us create more complex statements. **else if** statements evaluate a block of code when their condition is true. However, they must be chained to a previous **if** statement, like so:

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

1. Conditional Operators and If/Else Statements

    The conditional operators we touched on day_2 are critical in the set up of If-Statements. Conditional statements evaluate to true or false. The most common conditional operators are `==` (equal), `>` (greater than), `>=` (greater than or equal to), `<` (less than), and `<=` (less than or equal to). Some data types also have functions which return a true or false, so they’re used in conditional statements. For example, arrays have a function named `include()` which returns true if the array includes the specified element.

    Why do we have conditional statements? Most often it’s to control conditional instructions, especially *if/else if/else* structures. Let’s use an example of a block of code like this:
    ```javascript
    var minutesToHeatWater = 7;

    if (minutesToHeatWater < 7) {
        console.log("The water is not boiling yet.");
    } else if (minutesToHeatWater == 7) {
        console.log("It's just barely boiling");
    } else if (minutesToHeatWater == 8) {
        console.log("It's boiling!");
    } else {
        console.log("Hot! Hot! Hot!");
    };
    ```
    What would be logged when minutesToHeatWater is 7? What if we changed it to 5? Or 8? Or 9?

    When the minutesToHeatWater is 5, here is how the execution goes: "Is it true that 5 is less than 7? Yes, it is, so print out the line The water is not boiling yet.".

    When the minutesToHeatWater is 7, it goes like this: "Is it true that 7 is less than 7? No. Next, is it true that 7 is equal to 7? Yes, it is, so print out the line It's just barely boiling".

    When the minutesToHeatWater is 8, it goes like this: "Is it true that 8 is less than 7? No. Next, is it true that 8 is equal to 7? No. Next, is it true that 8 is equal to 8? Yes, it is, so print out the line It's boiling!".

    Lastly, when minutesToHeatWater is 9, it goes: "Is it true that 9 is less than 7? No. Next, is it true that 9 is equal to 7? No. Next, is it true that 9 is equal to 8? No. Since none of those are true, execute the else and print the line Hot! Hot! Hot!.

    Only one section of the *if/else if/else* structure can have its instructions run. If the *if* is true, for instance, Javascript will never look at the *else if* or *else*. Once one block executes, that’s it.

1. Equality vs. Assignment
    The **number one mistake** people encounter when writing conditional statements is the difference between `=` and `==`.

    `=` is an assignment. It means "take what’s on the right side and stick it into whatever is on the left side" – it’s telling, not asking.

    `==` is a question. It means "is the thing on the right equal to the thing on the left?" – it’s asking, not telling.

1. Work through the rest of the exercise files in the day_3/exercises directory.  Complete them in this order:
    1. `decision-making.js`
    1. `if-statements.js`
1. Answer the questions in the `questions.md` file in the day_3 directory.

## Save your work in Git

When you are finished with all of the day_3 activities, use your terminal to run the following commands in order to save your work to your local git repository.

1. `$ git add day_3/exercises`
1. `$ git add day_3/questions.md`
1. Use `git add day_3/<filename>` to add all additional files that you created today
1. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
1. `$ git commit -m "Add Day 3 Work"`

## Push to Github

You've save your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!

## FYI - Vocabulary you'll encounter in the reading

The readings in the JAVASCRIPT & JQUERY book use Javascript in a way that is likely unfamiliar to you. The book uses specific Javascript properties and functions to interact with HTML elements on a webpage, like changing or adding text on a webpage. Initially, we will be using Javascript without HTML. That's why you haven't seen these techniques before! We will address these techniques more thoroughly during your first mod, however, here are some quick definitions to help you become familiar with them.

* document.getElementById(): a method used to retrieve an element from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* document.write(): a method used to write data to a webpage. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
* el.innerHTML(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* el.textContent(): a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
