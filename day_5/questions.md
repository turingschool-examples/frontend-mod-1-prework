## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
Objects group together a set of variables and functions to create a model of something you could recognize in the real world. In an object, variables and functions take on new names. Variables become known as properties, and functions become known as methods.

Properties tell us about the object (such as the name of a hotel or the number of rooms) where each individual hotel may have different names and number of rooms.

Methods represent tasks that are associated with the object. Example: you can check the number of rooms available by subtracting the number of rooms booked from the total number of rooms.

Properties and methods have a **name** and a **value**, just like variables and functions.
In an object:
- a name is refered to as a **key**
- two keys cannot have the same name
- the value of a property can be a string, number, Boolean, array, or even another object
- the value of a method is always a funciton

Objects represent "things" with characteristics (aka properties), while arrays create and store lists of data in a single variable. Both dot.notation and bracket[] notation allow us to access, add, change, and remove items from an object. Meanwhile, items in an array can be accessed and altered via utlizing zero-based indexing and other built-in methods.


1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  puppies: 11,
  kittens: 12,
  birdies: 7,
  geckos: 9
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

console.log(states.IA);

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

1. What is another example of when we might use an object?  In this case, why is a object better than an array?

Another example for when we might use an object could be when creating an expense report for an event with various services. Using an object seems to be more efficient than an array when having to add properties and values to it.

1. What questions do you still have about objects?
