## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a data structure that is put together by set of variables and functions. The purpose of an object is to create a model of something from the real world. An array stores a list of values. The key difference between the two is that Objects can use methods and arrays cannot. 

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```JavaScript
var petStore = {

dogFoodBags: 48,
catToys: 36,
petCollars: 50,
dogBones: 40
}
console.log(petStore)
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```JavaScript
states.IA

```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```JavaScript
states.MN = "Minnesota"

```


1. What is another example of when we might use a object?  In this case, why is a object better than an array?

Another example that can be given for why we might use an object could be when we are adding a method or a function. This is where objects hold a trump card over arrays because arrays cannot utilize a method (function).

1. What questions do you still have about objects?
