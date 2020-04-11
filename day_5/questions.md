## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Objects, like arrays, are used to store data, however you could say that it is used to store more complex data such as: strings, arrays, integers, and even functions. Another difference is that you use strings to call data, whereas in arrays a number is used to call data.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {

  sections: ["Reptile", "Fish", "Rodent", "Cat", "Dog"],

}

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

  console.log(states)

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

Another example of when we might want to use an object is if a function is part of our data.

1. What questions do you still have about objects?

I would like to walk through an example of a more complex object with an wide variety of properties. In otherwords, how complex can it get?
