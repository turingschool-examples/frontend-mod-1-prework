## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- An Object is a value type that consists of key/value pairs, in Objects variables become properties and functions become methods. Objects can store a collection of data pertaining to the property using strings or numbers. You can access, change, add and remove items using dot or bracket notations. Arrays use zero based indexing and other methods to change items in an Array.

2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```Javascript
var petStore = {
  fishFood: 20,
  dogBowls: 16,
  catScratcher: 12,
  crickets: 653,
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```Javascript
console.log(Object.values(states)[1]);
```

4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```Javascript
states.MN = "Minnesota";
```

5. What is another example of when we might use a object?  In this case, why is a object better than an array?
- In the code below I used 'vehicle' as the object with standard vehicle key/pairs, being an object vs an array makes this easily modifiable as well as using keys that are easy to identify.
```javascript
var vehicle = {
  make: 'Kia',
  model: 'Telluride',
  fuelCapacity: 18.8,
  mpg: 23,
};
```


6. What questions do you still have about objects?
