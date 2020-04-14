## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

- An object is a data type within JavaScript which stores a collection of data inside it. These collections of data are called properties which consist of key/value pairs.
- It's different from an Array in that it is an unordered list of data (which can be unrelated data), whereas an Array is an ordered list of data (which is typically related data).

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  cannedCatFood: 25,
  dogLeash: 8,
  goldFish: 12,
  hamsters: 7,
  ferretFood: 14
};
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states.IA;`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

If performance/speed is a concern, and you don't need an ordered list of related data, we would want to use an object instead. An object is better than an array in this regard, because manipulation of data is generally slower if you don't know the index of the array. For example, when you're using Object property lookup/update/deletion/insertion, this can be done more quickly since the property name will give you a reference. In an array, you might need to go looking for the element you want.

1. What questions do you still have about objects?

I have a slight grasp on the difference between objects and arrays, but I still struggle a little to wrap my head around the differences. With the examples I provided in the questions above, am I missing anything else on differences between the two? From what I was able to research on Google, it sounds like there really isn't much difference between the two, mostly just subtle differences.
