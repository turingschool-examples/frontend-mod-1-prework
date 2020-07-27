## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- An Object can deal with multiple variables and actually use arrays in their data set while arrays deal with one variable.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
- var petStore = {

  chewToy: 92,

  dogFood: 450,

  catFood: 377,

  kittyLitter: 142,

  fishTank: 85,

};

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
- console.log(states[Object.keys(states)[1]]);

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
- states["MN"] = "Minnesota"

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
- When functions and calculations need to be used for a certain Object's properties. These calculations may take into effect what the exact properties of the Object are and are calculated depending on what's being used. Arrays are also used within Object and can have things added to them while inside.

6. What questions do you still have about Objects?
- I found answers to the code but I'm not sure if it's exactly what was being asked of me.
