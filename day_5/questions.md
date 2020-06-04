## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a collection of properties (which are variables that tell you about the object). An array is an ordered collection of data that consists of variables of the same type that can be indexed by their numerical positions. Objects are different than arrays in that they are a collection of key-value associations where order does not matter.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```JavaScript
var petStore = {"dogs": 10, "cats": 12, "birds": 8}

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
You would use an object whenever you need to store a method so that you can access the object created by that method later. An object is better than an array in this case because if that object is not always needed, then it doesn't need to be stored in a variable as in an array.

1. What questions do you still have about objects?
I feel a little wonky when I try to think of specific examples of when you would want to use an object over an array. Is it as simple as you choose to use objects when you need the key/value associations & when you need functions associated with things? It seems like the utility in arrays is for organizing data in an orderly fashion whereas objects are far more complex in what you can use them for.
