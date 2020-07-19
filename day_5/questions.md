## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

  Objects are collections of data that are kept in key-value pairs. An array is a list like object.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

  var petStore = {
    toys: 23,
    treats: 10,
    bowls: ['plastic', 'metal', 'porcelain'],
    dogFood: 8,
    catFood: 4,
  }

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array

  We would want to use an object when keeping track of dogs and their owners. The key-value pairing matters in this case where an array would just be a list and we would not be able to know who belongs to whom.

1. What questions do you still have about objects?
