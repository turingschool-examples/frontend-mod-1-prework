## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object in JavaScript is a group of variables and functions set to represent a real world object.


1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  fish: 20,
  puppies: 12,
  kittens: 7,
  snakes: 300,
}

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states["IA"];

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states["MN"] = "Minnesota";

1. What is another example of when we might use an object?  In this case, why is an object better than an array?

A classroom would be another good use of an object. You could store the student count, class description, instructors, and class times.
Objects are basically just lists of what attributes they have. In this sense they are a lot like arrays. However, when you use an abject instead of an array you are able to modify its variables and functions, rather than just listing things about it.

1. What questions do you still have about objects?
I know that objects can contain other objects, along with all the other data types that we've studied. I wonder if that makes all computer programs a type of "object", just on a larger scale. 
