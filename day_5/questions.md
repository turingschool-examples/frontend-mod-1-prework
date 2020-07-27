## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a container for related information, they differ from arrays in that they may store multiple *types* of data.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  dogFood: 150,
  catToys: 40,
  fish: 1000
};

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

Object.values(states)[1];

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";

5. What is another example of when we might use an Object?  In this case, why is an Object better than an Array?

We might use an Object in order to conveniently access all the data of any single given item we're trying to create or model in code. In this case, it's better than an array because it isn't constrained to only using one data type.

6. What questions do you still have about Objects?

Do Objects make up the vast majority of resources used when coding games?
