## Day 5 Questions

### 1. What is an Object, and how is it different from an Array in Javascript?

Objects are similar to Arrays in that they are both ways to temporarily hold data, but otherwise they are very different. Objects can serve as a diverse grouping of data storage whereas arrays are just a simple and limited way to store some data (usually of the same type). Arrays are just one data type to provide the value of a variable. Objects store multiple variables in the form of properties and have methods in the form of functions to give the data collection a behavior so that it becomes applicable to every day life and operations.

### 2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  kibbleBags: 98,
  beds: 23,
  crates: 8,
  tennisBalls: 44,
  bones: 52
};
```

### 3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
var iaState = states.IA;
```

### 4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

You would just add the new properties at the end/bottom of your code and run it again. See example below:

```
var states = {
  CO: "Colorado",
  IA: "Iowa",
  OK: "Oklahoma",
  MN: "Minnesota",
};
```

### 5. What is another example of when we might use a object?  In this case, why is a object better than an array?

Let's say you need to use multiple 'dimensions' with data to describe something. In this case you will need properties to break that data into it's own meaning or dimension. For example, let's say I want to use an array to represent the Settlers of Catan board game. There is no clean way to describe the number of players, the different resources, the number of dice possibilities, the winner, the owner of the largest army, and the owner of the longest road in a single array. But you can do that in an object! See example below.

```
var catan = {
  totalPlayers: 4,
  playerNames: ["JP, Cole, Andrew, Henry"],
  winner: "JP",
  largestArmy: "Andrew",
  longest Road: "Cole",
  resources: ["brick,", "wheat", "wood", "sheep", "ore"],
  dice: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
```

### 6. What questions do you still have about objects?

Knowing what I do about objects, why would you use anything else to describe data in Javascript even if what you are trying to define is not very complex?
