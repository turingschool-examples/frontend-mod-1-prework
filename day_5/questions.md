## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- An object is a group of variables and functions that define the object. An array is just an ordered list of values.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  name: "Pups n' Stuff",
  dogFood: 15,
  catFood: 21,
  hasChewToys: true,
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
`states.IA`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
`states.MN = "Minnesota"`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
- You can use an object of you have multiple of the same type of objects to define, such as a chain of hotels. Each could have their own data sets associated with them. This is better than using an array, because you can call and change each value in a property through a specific related key, making data management much easier.

6. What questions do you still have about Objects?
- In the `states` example above, why are all the input strings of "CO", "IA", etc. converted into variables without quotes when they become keys? Can a string not be a key, or does it have to be a strict variable?
```
$ states
// {CO: "Colorado", IA: "Iowa", OK: "Oklahoma", MN: "Minnesota"}
```
