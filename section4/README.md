# Section 4 - Objects, Classes and Code Challenges

Section 4 is estimated to take a total of 10-14 hours to complete. Similar to the previous sections, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👨🏾‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline. 

Since Arrays are a bigger topic, it is the main focus of this section. Some review work from the first two sections has been woven in so you get opportunities to continue seeing and applying those concepts, as well.

- [Vocabulary](#Vocabulary)
- [Part A: Section 4 Focus TBD](#Part-A-Section-4-Focus)
- [Part B: Objects](#Part-B-Arrays)
- [Part C: Classes and Instances](#Part-C-Loops)
- [Part D: Code Challenges](#Part-D-Code-Challenges)
- [Deliverables](#Deliverables)

## Vocabulary

### Vocabulary Terms

- Object
- key-value pair
- dot notation
- method
- class (in JavaScript)
- object instance
- properties

### JavaScript Reserved Keywords

- `class`
- `constructor`
- `new`

## Part B Objects

You are now going to learn about the Object data structure in Javscript. An object is a way to store data just like an array, but with several key differences. An array stores an *ordered* list of data. Each item in the array can be accessed using only numbers, or the index of item. For example:

```javascript
var animalsArray = ["Zebra", "Giraffe", "Elephant"];

animalsArray[0]; // Accesses the first item in my array, "Zebra"
animalsArray[1]; // Accesses the second item in my array, "Giraffe"
animalsArray[3]; // Accesses the third item in my array, "Elephant"
```

Objects store data but instead of using only numbers to get the data, you can use strings. This lets you treat an object like it's a database for storing and organizing data. Below is the syntax of an object. This is called **_Object Literal_**.

```javascript
var zebraInfo = {
  name: "Angela",
  age: 3,
  height: "5ft"
};
```

In the `zebraInfo`, we store information about a Zebra. This object contains 3 **_key-value pairs_**. In `zebraInfo` the first **_key-value pair_** is `name: "Angela"`. The **_key_** is `name`. The **_value_** is `"Angela"`. A **_value_** can hold any data type. 

In the code snippet below, we declare a similar variable, but this time have an additioanl **_key-value pair_** with a **_key_** of `diet` and a **_property_** that is an Array.

```javascript
var zebraInfo = {
  name: "Angela",
  age: 3,
  height: "5ft",
  diet: ["grass", "leaves", "water"]
};
```

### Accessing Values

To access a value in a specific object, we have to first tell the program which Object to look at. Then we use a period `.`, then call the key, or label, associated with the value we want to access. This syntax is referred to as **dot notation**.

```javascript
console.log(zebraInfo.name);
//=> "Angela"

console.log(zebraInfo.age);
//=> 3

console.log(zebraInfo.weight);
//=> undefined (because there is not a weight key on the zebraInfo Object)
```

### Re-Assigning Values

We can change the value that is associated with a given key. We will use similar syntax to what we use when we need to access a value. We will combine dot notation with the same concept of re-assignment that we learned about when we re-assigned variables.

```javascript
console.log(zebraInfo.name);
//=> "Angela"

zebraInfo.name = "Molly";

console.log(zebraInfo.name);
//=> "Molly"
```

> 👨🏾‍💻PAUSE here, and complete the exercises in `objects.js`

### Methods

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

zebraObject.feed(); //logs "Give grass to the Zebra"
```

> 👨🏾‍💻PAUSE here, and complete the exercises in `methods.js`

## Part C Classes and Instances

## Exercises

At this point, you should have worked through all files in the `exercises` directory. Confirm that you have before moving on.

## Commit your Work

Before you start on the Code Challenges, make a commit for the Section 4 work. Then push up to your GitHub repository.

## Part D Code Challenges


## Reflection

Answer the questions in the `reflection.md` file in the section4 directory.

## Save your work, push to GitHub

Commit your Code Challenges and push up to your GitHub repository.

## Deliverables

In the appropriate thread in your pre-work group channel, share the following:

1. Link to the commit you made with your complete Section 4 pre-work
2. A screenshot or photo upload of your notes, including your vocabulary/JavaScript reserved keywords section.
3. A short video of yourself reflecting on:

## Index Links

- [Vocabulary](#Vocabulary)
- [Part A: Section 4 Focus TBD](#Part-A-Section-4-Focus)
- [Part B: Objects](#Part-B-Arrays)
- [Part C: Classes and Instances](#Part-C-Loops)
- [Part D: Code Challenges](#Part-D-Code-Challenges)
- [Deliverables](#Deliverables)

🏔This is the end of the Mod 1 pre-work!