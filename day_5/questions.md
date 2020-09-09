## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is similar to an array in that it stores multiple items under one variable. They differ, however, in that an array uses an index to indicate position of an element, but objects are able to store elements using strings as reference. This allows an object to behave more like a database than a list.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
var petStore = {
  dogFood: 5,
  catFood: 7,
  dogToys: 15,
  catToys: 60000000,
};
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states.IA;`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

`states."MN" = "Minnesota";`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

If you need to store various data types under the same variable, an object is necessary as an Array can only store a signle data type.

6. What questions do you still have about Objects?

Will concatenation perform the same inside objects? What about local and global functions? is a global function created inside an object local to that object?
