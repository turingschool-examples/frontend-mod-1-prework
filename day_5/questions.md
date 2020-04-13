## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
* Objects can list things and properties attributed to those things, while arrays can store lists of data in single values. You should use an object when you want to store a values of a thing. You should use an array when you want to create a list.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore= {
  dogShampoo: 15,
  dogFood: 35,
  dogToys: 118,
};
```
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```
console.log(states.IA);
```
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```
states["MN"]= "Minnesota";
```
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
* When you want to list physical traits of a thing/person. It's better than an array because the keys and values are too different to place in an array. It wouldn't make sense to make an array with string like "Blue Eyes", "Blonde Hair", "6ft1in", "Long Hair".
It would make more sense to create it as an object to separate physical traits into keys and values, such as "height"= "6ft1in", "eyeColor"= "blue", "hairColor"= "blonde", "hairStyle"= "long".

1. What questions do you still have about objects?
What is the expected case for keys?
