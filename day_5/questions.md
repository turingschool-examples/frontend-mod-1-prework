## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Though both objects and arrays serve as containers of data, objects are used to model a complex, real-life thing with its own unique properties, while arrays are simply organized containers of items that share a commonality (though an array can contain objects as elements and objects can hold arrays as values to their properties).

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  leash: 175,
  'fish bowl': 250,
  treats: 400
}

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

console.log(Object.values(states)[1]);

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

5. What is another example of when we might use an Object?  In this case, why is an Object better than an Array?

An example where using an object model would be helpful would be tracking inventory for an appliance store, in which each type of appliance and its variety of brands could serve as properties, while the quantity of each product could serve as the value.  Using an object notation could be considered more useful than an array in this case, because the syntax to readily access this data would make for more legible and comprehendable code.

6. What questions do you still have about Objects?

No specific questions just yet, but I'm eager to learn more about the built-in objects mentioned in the "Javascript and JQuery..." textbook (Browser Object Model, Document Object Model, Global Javascript Objects).
