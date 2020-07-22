## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is different from an array because you can assign a key and value to the object. An array would be [1, 2, 3] while an object could have a key attached to each value for more description.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  dogs: 2,
  cat: 1,
  fish: 3
}
Names of animals are the keys and the integers following are the values.

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

console.log(Object.values(states)[1]);

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states["MN"] = Minnesota;

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

Another example could be the roster of a soccer team. An object could hold the number on their jersey as well as their name while an array could only hold either or. This would be better because you could describe the player as either the number or name and both would suffice but an array only has one way to identify it.

6. What questions do you still have about Objects?

I like Objects!!!!
