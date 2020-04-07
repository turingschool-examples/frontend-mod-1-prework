## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a collection of similar properties and methods. While arrays contain collections of pieces of data, objects hold
key value pairs, called attributes, and methods that interact with those attributes.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  catFood: 20;
  dogFood: 15;
  fish: 100;
  leashes: 7;
};
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`console.log(states.IA);`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

We might want to use an object to create a model of an online only store's inventory to keep track of what we have. For example:

```
var inventory = {

  blueShirts: 9;
  redShirts: 3;
  hats: 20;
  shorts: 3;

  sellBlueShirt: function() {
    blueShirts = blueShirts - 1;
  }

  sellRedShirt: function() {
    redShirts = redShirts - 1;
  }

  // so on and so forth
}

```

Coding the inventory as an object not only allows you to store the inventory values in a way that makes sense - it also lets you
add methods that alter those inventory values. Utilizing the object model makes things easier to understand and maintain.


1. What questions do you still have about objects?

How are objects used in a webpage? I feel like I understand objects as a concept, but how are they used in context?
