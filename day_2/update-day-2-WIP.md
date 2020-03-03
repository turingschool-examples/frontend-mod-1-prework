# Day 2 - Arrays and Iteration

Computers may not be smart, but they are good at doing many things very quickly, like working through lots of data. As such, we need a way to store lots of data. Today, you will learn about a JavaScript data structure that lets us store collections of data: The Array. You will also learn about iteration, which is going through every element of an Array.

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

## Open your local copy of frontend-module-0-capstone

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 README.

## Arrays

1. In the JAVASCRIPT & JQUERY: interactive front-end web development book, read pages 70 through 73. If you are unsure of some vocabulary you encounter, refer to the vocabulary list at the end of this README. 
1. Research the array methods below on the MDN documentation provided. This documentation might seem intimidating at first, but you will need to get comfortable looking at it. Create a file in your day_2 directory called `array_methods.md file` and describe what each method does.
    1. Methods to study: "pop", "push", "shift", "unshift". Take a look at the [MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
    1. Note: The MDN documentation makes use of the variable declarations `const` and `let`. For now, just read them as `var` instead. 
1. Sometimes we have a collection of data (like an array) and we want to do something to each item in the collection. In these instances, we need to **iterate** or **loop** through each piece of data in our collection. A tool commonly used for iterating is the FOR loop. Read pages 170 through 175 in the JAVASCRIPT & JQUERY book to learn more about this tool.
1. Work through the following lessons to learn about Javascript Comparison Operators.
    1. When you are building out a FOR loop, you can use **Comparison Operators** to determine if a FOR loop should continue or stop looping. Read pages 150 through 153 in the JAVASCRIPT & JQUERY book to learn about the operators.
    1. Read pages pages 166 and 167 of the JAVASCRIPT & JQUERY book to learn about type coersion and truthy vs falsy values
    1. Work through the `comparisons.js` file
1. Work through the rest of the exercise files in the day_2/exercises directory.  Complete them in this order:
    1. `arrays.js`
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

## Vocabulary you'll encounter in the reading

The readings in the JAVASCRIPT & JQUERY book use Javascript in a way that is likely unfamiliar to you. The book uses specific Javascript properties and methods to interact with HTML elements on a webpage, like changing or adding text on a webpage. Initially, we will be using Javascript without HTML. That's why you haven't seen these techniques before! Here are some quick definitions to help you become familiar with them.

* document.getElementById(): a method used to retrieve an element from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* document.write(): a method used to write data to a webpage. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
* el.innerHTML(): a method used to change the text of an element from a web page *(the element is defined as the variable el)*. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* el.textContent(): a method used to change the text of an element from a web page *(the element is defined as the variable el)*. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
