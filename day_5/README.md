# Day 5 - Objects

Earlier in the week, you learned about one type of collection storage - Arrays.  Today, you will learn about another collection storage device call an Object. We use objects on a near daily basis as programmers and understanding how to build objects and how to retrieve information from an object can make your life as a programmer much easier.

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

## Open your local copy of frontend-mod-1-prework

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 instructions.

## Objects

You are now going to learn about the Object data structure in Javscript. An object is a way to store data just like an array, but with several key differences. An array stores an *ordered* list of data. Each item in the array can be accessed using only numbers, or the index of item. For example:

```javascript
var animalsArray = ["Zebra", "Giraffe", "Elephant"];

animalsArray[0]; // Accesses the first item in my array, "Zebra"
animalsArray[1]; // Accesses the second item in my array, "Giraffe"
animalsArray[3]; // Accesses the third item in my array, "Elephant"
```

Objects store data but instead of using only numbers to get the data, you can use strings. This lets you treat an object like it's a database for storing and organizing data. Below is the syntax of an object. This is called **_Object Literal_**.

```javascript
var zebraObject = {
  name: "Angela",
  age: 3,
  height: "5ft"
};
```

In the `zebraObject`, we store information about the Zebra. This object contains 3 **_properties_** that consist of **_key-value pairs_**. In `zebraObject` the first **_property_** is `name: "Angela"`. The **_key_** of this **_property_** is `name`. The **_value_** of this **_property_** is `"Angela"`. The **_value_** of a property can hold any data type. Let's go ahead and add a new **_property_** with a **_key_** of `diet` and a **_property_** that is an array.

```javascript
var zebraObject = {
  name: "Angela",
  age: 3,
  height: "5ft",
  diet: ["grass", "leaves", "water"]
};
```

Functions can also be stored as a **_value_** in a **_key-value pair_**. In these cases, we refer to the function as a **_method_**.

```javascript
var zebraObject = {
  name: "Angela",
  age: 3,
  height: "5ft",
  diet: ["grass", "leaves", "water"],
  feed: function() {
    console.log("Give grass to the Zebra");
  }
};
```

Methods can be called using the dot or bracket notation, however, you'll mostly see dot notation.

```javascript
zebraObject.feed(); //logs "Give grass to the Zebra"
```

1. Work through these resources to gain some repetition with reading and working with objects.
    1. Read through the [Object Literals lesson plan](https://frontend.turing.io/lessons/module-1/object-literals.html) and work on the [final practice provided at the end](https://repl.it/@ameseee/Partner-Practice).
    1. Read pages 100 through 107 in the JAVASCRIPT & JQUERY: interactive front-end web development book.
        1. Note: You will come across the keyword `this` in the reading. `this` refers to the object that the `this` is contained in. The example in the reading uses a `hotel` object, where `checkAvailability()` uses `this.rooms` and `this.booked`. `this.rooms` refers to the **_value_** that matches the **_key_** `rooms` within the object it is contained in, which is `40`. `this.booked` refers to the **_value_** that matches the **_key_** `booked` within the object it is contained in, which is `25`. `this` is a concept that we will cover more thoroughly in class. This brief overview is provided for your comprehension of the reading.
    1. Read through the [objects-ppt.pdf](objects-ppt.pdf). This is an excerpt from [Code School](https://www.pluralsight.com/courses/code-school-javascript-road-trip-part-1).

1. Answer the questions in the `questions.md` file in the day_5 directory.

1. Work through the `objects.js` file in the day_5/exercises directory.

## Save your work in Git

When you are finished with all of the day_5 activities, use your terminal to run the following commands in order to save your work to your local git repository.

1. `$ git add day_5/exercises`
1. `$ git add day_5/questions.md`
1. Use `git add day_5/<filename>` to add all additional files that you created today
1. `$ git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
1. `$ git commit -m "Add Day 5 Work"`

## Push to Github

You've save your work to git on your **local** machine, but it is not yet accessible through your **remote** Github repository. Updating our **remote** Github repository with our **local** changes is called **pushing**. Push your code with the following command:

```
git push origin master
```

You should now be able to log in to GitHub, navigate to your remote prework repository and see all the work you did today!
