## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
Objects are containers that store multiple different kinds of data and information using variables(properties) and functions(methods). This is different than an array because an array stores the information of one data type and one thing.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  balls: 10,
  ropeToys: 8,
  bones: 21,
  collars: 38

};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
var statesIA = states.IA;
console.log(states.IA);
```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
```
states.MN = "Minnesota";
console.log(states);
```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
Another example of when we might use an Object is for a patients chart. An object would be better than an array in this case because it contains data with different data types that would be better and more conveniently stored in an object.

6. What questions do you still have about Objects?
