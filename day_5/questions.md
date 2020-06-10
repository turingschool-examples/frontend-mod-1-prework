## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a series of data that is separated into  a key and property which can store multiple data types related to said object.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
var petStore = {
  dogFood: 200,
  catFood: 132,
  dogToy: 51,
  catToy: 92
  dog: 22,
  cat: 14
}
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```javascript
console.log(states["IA"]);
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```javascript
states["MN"] = "Minnesota";
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

We can use an object to split the values that an array will store and separate them into more detailed key-value pair. An object would be better in an array when there are multiple instances of the same object that we have to create and we want them to share similar properties without having to re-create the entire reference over and over again. An example could be a shopping list, when adding a new item to a list, we could add an itemName and itemQty for each item on the list. Instead of doing item1 = ["Milk", 2] it is more descriptive and easier for a consumer to read when it is...

```javascript
item1 = {
  name: "Milk",
  qty: 2
}
```

Now as a consumer, I can recall specific information that I need rather than having to pull up a whole confusing array that is difficult to read. It also makes it easier for us a programmers to make less bugs in the code.

1. What questions do you still have about objects?

None.
