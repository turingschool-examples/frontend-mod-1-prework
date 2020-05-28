## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- An Object is a type of collection or complex data type in JS. Objects are representations of real world things in computer programming.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```Javascript
var petStore = {
  chewToy = 15;
  collar = 20;
  dogFood = 50;
}
```
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```Javascript
var location = states.IA;
```
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```Javascript
states.MN = 'Minnesota';
```
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
- Another example is using an Object to design Walmarts based on location. Mountain, desert, or urban Walmarts all have color and style requirements set by local governances.
- An Object is better than an array because you are able to use all data types and you don't have to worry about the position within the array to call on it.
1. What questions do you still have about objects?
- I'm not fully grasping adding a method within an object and then calling on that method.
