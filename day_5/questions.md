## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a 'container' of properties, or information, pertaining to that object. The properties of that object may be a value, a variable, another object or a function.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  bagsDogFood: 250,
  bagsCatFood: 130,
  dogToys: 111,
  catToys: 50
};
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states["IA"]`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states["MN"] = "Minnesota"`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

I imagine objects would be used in a video game. The object would be the player, the keys including things like their inventory, objectives, etc. An object is better in this case - if you need to store a collection of different properties, an object is a better choice than an array...?

1. What questions do you still have about objects?

None at the moment
