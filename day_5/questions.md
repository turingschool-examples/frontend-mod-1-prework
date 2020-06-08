## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

* Objects group together attributes (variables) and methods (functions) to create a model of a real-life object. Arrays are indexes of information that are independent from one another. Arrays are variables that store indexed information, objects instead create individual variables or functions for that indexed information, allowing them to be more interactive and dynamic.  

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  dogBones = 14,
  catTreats = 22,
  fishFood = 9,
}
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
states.IA;
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```
states.MN = `Minnesota`;
```


1. What is another example of when we might use a object?  In this case, why is a object better than an array?

* As stated above, Objects make much better models than arrays because of the specificity of the keys. Instead of referencing the index number of an Array to access the value, using object.name to access object values by the variable name makes readability and understanding of code much better. Also, the push, pop, splice, etc function of arrays seems much more limited than what Objects allow.


1. What questions do you still have about objects?

* A lot! I believe we will cover them in much more depth in mod 1. For the time being I am starting to get a good foundational grasp of the concept.
