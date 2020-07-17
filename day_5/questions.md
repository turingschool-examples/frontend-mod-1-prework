## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
Objects are used to store data much like arrays, but can store strings. Objects use key-value pairs to store keys or names of things with certain properties. For example, the zoo object can store animals with certain numbers or inventory values.
1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  toy : "Chew Toy",
  food : "Dog Food",
  cage : "Bird Cage",
  leash : "Dog Leash"
};
```
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```
console.log(Object.values(states)[1]);
```
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
states.MN = "Minnesota";
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
Grouping together variables and functions allows the object to be mutable. Array's are also mutable, but can only store single values. Therefore, objects are best used to create certain 'objects' that might exist in the world. Objects are capable of holding different bits of information about a certain thing and allow storage and change of values and properties that a specific object might hold.
1. What questions do you still have about objects?
LOVE THEM. Want to learn more about how this plays into the grand scheme of things! 
