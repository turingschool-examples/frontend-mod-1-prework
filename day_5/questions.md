## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An Object is a complex data-type that holds key-value pairs as properties of that Object. An Array can only call one of its properties by the index, whereas an Object can call it using its key. An Object can also hold functions as methods and call them.
1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
var = petStore {
  petFood : 375,
  fishTank : 120,
  birdseed : 210,
  dogToys : 110
};
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
states["IA"];
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
states["MN"] = "Minnesota";
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
An Object can hold a function as a key-method pair. It makes the Object more versatile than the Array.
1. What questions do you still have about objects?
