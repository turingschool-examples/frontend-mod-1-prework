## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a model of something that is made up of variables and functions. An array is just a list of items, it can
only contain data types while an object is something that exists and can be defined through variables and functions.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
var petStore = {
  inventory: ["food", "toys", "litter", "aquariums"].
  food: 100,
  toys: 75,
  litter: 50,
  aquariums: 10
}

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
states.IA();

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
You might also use an object when creating multiple objects that have a lot of the same data. If you needed to list
a bunch of stores in a franchise, you could create an object and easily create an object for each store by reusing the
original object to build each new store variable. The object is better than the array because it can store a lot of
information for each object (such as information about each store) and not just the name or location of each store.

1. What questions do you still have about objects?
