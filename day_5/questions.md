## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An *object* is a variable that can bundle and store data.  An array is similar, but an array is an ordered list of data.  An object stores a bundle of properties (consisting of key-value pairs) and/or methods (functions).

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = {
  leashes: 10,
  foodBowls: 15,
  goldFish: 53,
  collars: 21,
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states.IA;`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

5. What is another example of when we might use an Object?  In this case, why is an Object better than an Array?

It would make sense to use an object if we want to include a method as part of the data.  For example, if the object defined as `dog` needs to include a function that calculates remaining dog food and displays a message to "buy dog food" all of that could be included.

6. What questions do you still have about Objects?
No questions at this time.  Thank you.
