## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Objects are a data structure used to store variables and functions. This is different from an array, for one, because you can access its data using strings.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```JavaScript
var petStore = {
  catNip: 10,
  nailClippers: 6,
  dogToys: 50,
};
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

Another example of when we might want to use an object is when we want to add a
function(method) in order to perform a task related to the object. Objects can hold methods whereas arrays do not.  

1. What questions do you still have about objects?

I just was reading ahead, and noticed that there are tons of properties and methods that can be worked into objects. Im wondering if someone can
help provide some insight on how they approached learning these. I'm sure a lot of it is reps, but did you deliberately look at a method and think
to practice it by creating an object? What are some styles/ways to approach this?
