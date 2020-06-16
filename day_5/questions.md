## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a collection of stored data which uses strings in key-value pairs, where the key is a string, and the value can be any datatype.

An array can also store any type of data, but the data is not grouped into 'properties,' and all the data in an array is ordered, and therefore must be accessed using numbers.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
dogBones: 345,
squeakyToys: 70,
laserPointers: 25
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota"

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

We might use an object to save data about a certain User of a program. For any given program, a user will likely have many different types of data, some non-essential data may be missing (such as a secondary phone number, or an email) which would make the use of an array very difficult.

The properties of an object can be pulled directly without the need to know their place in an ordered list, and an object can also contain functions, which would be handy.

1. What questions do you still have about objects?

Will it be important to learn both object notations eventually?
