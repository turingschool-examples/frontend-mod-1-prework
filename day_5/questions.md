## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
   * Objects store groups of data and therefore can be used to create databases. The difference between objects and arrays is that objects do not order things based on number like an array, and objects can store more complex data such as functions.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
   ```javascript
   var petStore {
     dogs: 7,
     cats: 3,
     mice: 5
   };
   ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
   ```javascript
   states.IA
   ```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
   ```javascript
   states.MN = "Minnesota";
   ```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
   * When collecting a database someone's friends. In this case, we would definitely not want an ordered data-type such as an array because we don't want anyone feeling hurt based on names being higher or lower in the order. An object therefore would be a better variable to use for this group of data. In this case we might also want a function within our object that changes our friend database based on time. This might be another reason to use an object rather than an array, since objects can contain more complex code such as functions.

1. What questions do you still have about objects?
   * Within the readings we've seen functions contained inside of objects, but can we pass object data into functions as arguments?
