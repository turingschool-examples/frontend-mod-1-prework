# Section 4 - Objects, Classes and Code Challenges

Section 4 is estimated to take a total of 12-16 hours to complete. Similar to the previous sections, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👨🏾‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline. 

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

### Blueprint

Classes can serve as object factories (we can even think of them as cookie cutters!) that allow us to create multiple objects of the same type, which we will refer to as object instances.

- Think of a car factory. It is set up to install engines, mount 4 wheels, attach doors and spray a nice of of paint. But the size of the engine, type of wheels, number of doors, and paint color may all differ from car to car.
- Think of a cookie cutter. It's a piece of metal that has a specific shape. each cookie made from it will take that shape. But, the type of dough can differ, and so can the cookie toppings.

**Syntax:** A class is defined using the `class` keyword, followed by the ClassName (using [Pascal Case](https://techterms.com/definition/pascalcase#:~:text=PascalCase%20is%20a%20naming%20convention,in%20PascalCase%20is%20always%20capitalized.)), then an opening and closing curly brace. 

**Naming:** Class names should be a singular noun (thing). Because classes are the factories for future objects, they we name them after the general object they are creating. A couple of examples follow:
- If you are going to create a class for cars (eventually, specific types of cars) use the name `Car`
- If you are going to create a class for writing utensils (some pens, pencils, different colors etc.) use the name `WritingUtensil`
The previous examples may seem pretty straightforward, but naming in programming is notoriously hard, so it's good to lay out best practices early and often!

```javascript
class TransactionItem {

}
```

A class is technically a type of a function in JavaScript. This is a big concept which you will learn about much deeper in Mod 1.

### Object Instances

Creating the class, or blueprint, alone doesn't do much. It's kind of like having a big car factory with no electricity or employees to to run the machinery.

We have to do a little work to create objects _from_ the class.

**Syntax:** An object instance (almost always) needs to be stored in a variable so we can access and use it later on. Declare a variable, then use the `new` keyword to create an instance. After the class name, call the class (which remember, is a type of function) by using the opening and closing parenthesis.

**Naming:** Object instances are _things_, just like other variables. They are a specific instance, so should have singular names that describe the object in a little more detail than the class name. Because they are objects stored in variables, they should use camelCase; so if a single word, all lower cased. A couple examples follow:
- Class: `Car`. Object Instances: `civic`, `passat`, `jetta`
- Class: `WritingUtensil`. Object Instances: `pencil`, `mechanicalPencil`, `ballPointPen`, `gelPen`

```javascript
var deposit = new TransactionItem();
```

### State (Properties)

Proerties contains data about a specific object. We also refer to this group of data as **state**. The information format should be one of the data types we've learned about (String, Number, Boolean, Array, Object).

The example that follows has 3 properties in state - `amount`, `date`, and `type`. They are declared _inside_ of the `constructor` method _inside_ of the class.

```javascript
class TransactionItem {
  constructor() {
    this.amount = 200;
    this.date = "07/24/20";
    this.type = "deposit";
  }
}

var deposit = new TransactionItem();
console.log(deposit);
//=>TransactionItem {amount: 200, date: "07/24/20", type: "deposit"}
```

There is one problem with the class above - every single object instance it makes will be the exact same. It's not dynamic. To make it dynamic, we need to leverage arguments and parameters. If you need to brush up on that content, go back to Section 2 - Functions!

The example that follow has the same 3 properties, but now assigns them dynamically, based on the arguments passed into the `new TransactionItem`. Those 3 arguments map to the 3 parameters declared in the constructor.

```javascript
class TransactionItem {
  constructor(amt, transactionDate, type) {
    this.amount = amt;
    this.date = transactionDate;
    this.type = type;
  }
}

var deposit = new TransactionItem(200, "02/03/20", "deposit");
console.log(deposit);
//=>TransactionItem {amount: 200, date: "02/03/20", type: "deposit"}

var withdrawl = new TransactionItem(150, "02/04/20", "withdrawl");
console.log(withdrawl)
//=>TransactionItem {amount: 150, date: "02/04/20", type: "withdrawl"}
```

Passing arguments to the new instance, and declaring parameters in the constructor, allow us to build classes and create objects that follow the same blueprint, but have unique data attached to each said object instance.

_Note the way data flows through this._ `200` maps to `amt`. Then the `deposit` object instance has `200` as the value of the `amount` property. If you aren't quite sure how those are coming together yet - good! The exercise will be a good opportunity to poke and explore that more. In mod 1 you will go into a LOT of detail about the `this` keyword. Don't worry much about it now.

> 👨🏾‍💻PAUSE here, and complete the exercises in `classProperties.js`

### Behavior (Methods)

Methods define the behavior of an object, actions that can be performed on that object, or calculations that use the object’s properties. Methods are generally verbs (action words or short action phrases).

Methods generally answer the question “What can this thing do?” or “What can be done to this thing?”

> 👨🏾‍💻PAUSE here, and complete the exercises in `classMethods.js`, then `tweet.js`

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