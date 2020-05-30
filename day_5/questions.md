## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

AN object is a set of functions and variables that are grouped together. An array is an ordered set of variable type data that can only be accessed by refrencing the array index, while an object can store strings, other variables (properties), as well as functions (methods).

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
var petStore = {
  birdCage: 25,
  fishTank: 20,
  dogLeash: 65,
  catToy: 50
}
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```javascript
states['IA']
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```javascript
states["MN"] = "Minnesota"
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

We might use an object instead of an array to inventory the contents of a refrigerator. An object would be better than an array because you could make properties out of thecontents of the fridge to give more info about them, such as the amount of carrots or the different types of cheese.

1. What questions do you still have about objects?
