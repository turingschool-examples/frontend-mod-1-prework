## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Object is a collection or unit of various properties and methods that define this object. We use arrays to show a list of similar items that relate to one variable. The main difference is that object represents a set of characteristics and an array represents an ordered list of items.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```JavaScript
var petStore = {
  toys: 150,
  dogHouse: 30,
  catTower: 25,
  petShampoo: 14
}
```
1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```JavaScript
states.IA;
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
```JavaScript
states["MN"] = "Minnesota";
```
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
```JavaScript
var coffeeMachine = {
  model: "La Marzocco",
  price: 5000,
  color: "yellow",
  warranty: true
}
```
It is better to use an object in this case because we have different type of data. Object keys also help to describe the values and what they mean. Using an array named coffeeMachine we would have trouble trying to figure out the meaning of the provided data, for example, 5000 could be a price or a model number, or the number of espresso shots before the maintenance.

1. What questions do you still have about objects?
