## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

  **Objects** are used in JavaScript to represent everyday things. An object act as a "container" or "collection" that can store *variables*, or information about its state (pieces of descriptive data) as *properties* and *functions* (tasks you want it to perform) are called *methods*.

  *Objects* are different from *arrays* because arrays store a list of items in a single variable while objects can store multiple different properties, that are each a different variable.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

  ```JavaScript
  var petStore = {
    toys: 10,
    food: 20,
    leashes: 5,
  };
  ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

  ` states["IA"]; `

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

  ` states["MN"] = "Minnesota";`
1. What is another example of when we might use a object?  In this case, why is a object better than an array?

  You might want to use an object instead of an array when you want to want to store a collection of data that can also have functionality. I would think it is preferred to be used for Object Oriented Programing to be able to detail disparate qualities of an item and how it or its qualities can be manipulated.

1. What questions do you still have about objects?

I think I understand what objects are, but I am confused about when and why certain syntax issues come up - adding a function after the object is already created with the [repl exercise](https://repl.it/@hannakim91/Partner-Practice).
