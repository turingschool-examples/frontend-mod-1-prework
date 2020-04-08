## Day 5 Questions

## What is an Object, and how is it different from an Array in Javascript?

Objects are complex data types which store multiple values. They're different from arrays in that they aren't *ordered* and their values can be called via strings, or *keys*. Data in an object becomes a property or a method of the object, made up of values (data or functions) and keys. They can also store variables.

## In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

``` var petStore {
  dogBowls: 40,
  catFoodBags: 80,
  leashes: 60,
  petTags: 30,
  booties: 30
};
```

## Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states.IA;`

## How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

## What is another example of when we might use a object?  In this case, why is a object better than an array?

We might want to use an object when it has a function directly related to the data within the object. This is better because arrays cannot store functions.

## What questions do you still have about objects?

I'm good right now. 
