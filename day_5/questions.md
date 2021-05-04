## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a way to store and organize data using properties (keys and values) and methods (functions). An array is different because it stores an ordered list of data, which can only be accessed using index numbers.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = {
  inventoryOfItems: 155,
  numberOfEachItem: 10,
}
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```Javascript
states.IA;
```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

```Javascript
states.MN = "Minnesota";
```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

An object can store multiple types of data or characteristics, as opposed to an array which is used to store data of the same type. For example I could assign the object `dog` with the properties `breed (string), age (integer), and favoriteToys (array)`, but if I assigned `dog` to be just an array, the value could only be one data type. With an object, I can also assign a method (function) to `dog` so that it performs a task.

6. What questions do you still have about Objects?
