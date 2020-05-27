## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a list of key value pairs which are surrounded by curly braces. Arrays do not have key value pairs and are indexed numerically.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
var petStore = {
  dogTreats : 50,
  catFood : 30,
  ferrets : 3,
  fish : 40,
  toys :500
}


1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
states['IA']
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = 'Minnesota'

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

We could use and object to hold the names of users and the date they accessed a site. This would be better than an array as it has key value pairs.


1. What questions do you still have about objects?
