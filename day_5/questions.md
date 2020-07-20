## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

* Objects store data of all types and can include functions and methods into one object whereas an array is an ordered list of one data type.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  leashes: 200,
  bagsOfCatFood: 100,
  dogBeds: 50,
  open: true,
}

```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```
states.MN = "Minnesota";
```
1. What is another example of when we might use a object?  In this case, why is a object better than an array?

Objects are useful when we have many different types of data that refer to one variable.  Also, with objects we can manipulate the data, permanently changing the values within it.

1. What questions do you still have about objects?

I am still curious about the objects within objects notion.
