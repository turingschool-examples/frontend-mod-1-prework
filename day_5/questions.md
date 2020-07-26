## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An **object** combines *properties* (can be a string, number, boolean or array) & *methods* (always a function). You can use objects to group a collection of data. Curly brackets signify the beginning of an object.

ex:

```
var objectName = {
  propertyOne: "First value",
  propertyTwo: "Second value",
  method1: function() {
    return "This is a function within an object.";
  };
};
```

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  inventory: ["Toys", "Accessories", "Food"],
  toysQuantity: 25,
  accessoriesQuantity: 17,
  foodQuantity: 36,
};
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`console.log(states.IA);`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

Objects are more useful than arrays because they can store a wide variety of data that separates properties, which could also consist of an array. For example:

```
var myDog = {
  name: "Willow";
  breed: "Pyrenees/Husky mix";
  sex: "Female";
  age: 1.5;
  colors: ["White", "Gray"];
  spayed: true;
  vaccines: ["Heartworm", "Rabies", "Bordatella", "Parvo"];
}

```

In this example, using an object over an array is clearly the better choice because you can store a variety of data types.

1. What questions do you still have about objects?

None
