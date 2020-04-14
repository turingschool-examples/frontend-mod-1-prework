## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  

An Object is a data structure used to store and organize data, as well the methods needed to manipulate it. It's different from an array because an Object pairs data in key-value pairs, and the pairings of items matter. In an array each item is independent.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  cannedDogFoodBeef: 40,
  dryDogFoodBag: 30,
  dogCollarBlue: 15
};
```
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  

`Object.values(states)[1];`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?  

`states.MN = 'Minnesota';`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?    

A webpage summarizing a list of hiking trails. An object is better than an array because we want to use the same keys (property names) over and over again **and** have the ability to change the values of the key-value pairs each time. The keys or values wouldn't be useful independently which is why an Object would be better than an array.

I.e. Each hiking trail would have the same property (key) names (`{trailName, length, difficultyLevel}`) but the values for each of these keys would be different depending on each specific hike. The keys in isolation wouldn't be useful without their paired values.

`{'trailName': 'All Mighty Peak', 'length': 20, 'difficultyLevel': 'The hardest thing you'll ever do'}`
