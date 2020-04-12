## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
Unlike an array, an object is an unordered collection of data that is organized into keys and value pairs.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  fish: 800,
  cats: 3,
  dogs: 1,
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

console.log(Object.values(states)[1]);

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
We can use objects for any large group of data. The javascript book uses hotels for an example, with the keys being things like number of rooms, hasSwimmingPool?, price, etc. You can create an object for cars with the keys being things like yearCreated, make, model, engine size, etc.

1. What questions do you still have about objects?

How can we use functions inside of objects? Guess we'll find out soon. 
