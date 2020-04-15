## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Objects group together a set of variables and functions to create a model of something you would recognize from the real world. In an object, variables and functions take on new names. Variables become known as properties, and functions become known as methods.
Objects represent "things" with characteristics (aka properties), while arrays create and store lists of data in a single variable. both dot and bracket notation allow us to access, add, change, and remove items from an object, while zero-based indexing and a variety of built-in methods let us access and alter items in an array.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  puppies: 11,
  kittens: 12,
  birds: 15,
  geckos: 17
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
var states = {
  CO: 'Colorado',
  IA: 'Iowa',
  OK: 'Oklahoma'
};
console.log(states.IA);

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

1. What is another example of when we might use an object?  In this case, why is an object better than an array?

Using an object seems to be more efficient than an array when having to add items/properties to it.

1. What questions do you still have about objects?
