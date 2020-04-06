## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    **Object**:
    An object works much like a database, but instead of using a numbered array index to retrieve data, data contained within an object can be accessed using strings. Unlike arrays, objects allow a programmers more capability to store, add, remove, or change data and call functions (called methods) within the object itself. Objects can be used as a representation of real world things and allow programmers to model complex data types and allow for greater user functionality.  

2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```javaScript
var petStore = {
  dogBeds: 22,
  catCastles: 12,
  catios: 4,
  chewToys: 30
};
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```javaScript
var states = {
  CO: "Colorado",
  IA: "Iowa",
  OK: "Oklahome",
};
console.log(states.IA);
```
4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```javaScript
states.MN = "Minnesota"; // console.log(states.MN) would return "Minnesota"
```
5. What is another example of when we might use a object? In this case, why is a object better than an array?

    In addition to storing data, objects allow functions (called methods) to be called within a given code block which is not a capability of arrays. I could see this being useful if a user was entering data when purchasing something online. For example, a method could be called to check that each required data field is entered correctly before finalizing an order. In general, objects seem like an easier way to organize things on a larger scale.

6. What questions do you still have about objects?

    This makes a lot of sense to me, I can already see how this concept would be important for both UX and UU and I'm looking forward to learning more!
