## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- An object has state and behavior. Unlike Array, it not just uses numbers to retrieve data but uses strings.
- You can store an array inside an object.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
  var petStore = {
    food : 10,
    numOfToys = 100,
    cage = 3,
};
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
`states.IA;`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
`states.MN = "Minnesota";`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
- We can use an Object to store a function. Array cannot store functions.

6. What questions do you still have about Objects?
- How to add a method to an object after object has been created?
