## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a data structure used to store and organize data. It's different from an array as you can retrieve items from an object using strings and it's not an ordered list of data, therefore the items in an object are more independent of one another.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  cannedDogFood: 40,
  dryDogFood: 30,
  dogLeash: 15
}

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`Object.values(states)[1]`;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = 'Minnesota';`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
A webpage showing a list of hiking trails. An object is better than an array because we want to access the same information over and over again **and** have the ability to change the values of the key-value pairs each time.

i.e. each hiking trail would have the same property (key) names: trailName, length, difficulty, directions, but the values for each of these keys would be different depending on each specific hike.


1. What questions do you still have about objects?
