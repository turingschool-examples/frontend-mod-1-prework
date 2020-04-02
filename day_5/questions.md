## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object stores data about a thing. It is more versatile than an array. Instead
of simply storing data in a list, objects store data by variables "keys."

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStoreObject = {
  dogFoodBags = 5,
  catFoodBags = 7,
  leashes = 2
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA; (or is it states."IA"; ?)

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states."MN" = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

An object allows us to create more complex data structures. For example, if a thing has many different qualities rather than just a single list of qualities, we would want to use an object. If we are writing code to model the traits and functions of a restaurant, we would use an object. If we were simply making code relating to a list of restaurants, we'd want to use an array.

1. What questions do you still have about objects?

How many different values do objects commonly store in the wild?
