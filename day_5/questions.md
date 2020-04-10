## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a set of variables or properties that can be grouped with functions or methos. In an object, each property is listed as key-value pairs, meaning a value is assigned to each key element or name. Unlike an Array, an Object is not ordered.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```JavaScript
var petStore = {
  dogFoodBags: 10,
  dogFoodCans: 12,
  catFoodBags: 8,
  catFoodCans: 24,
  fishFoodTins: 7,
  dogToys: 14,
  catToys: 22,
  goldfish: 6;
}
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```JavaScript
states.IA
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```JavaScript
states.MN = "Minnesota"
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

When we want to store a variety of information under the umbrella of one variable. In example, if we have an ecommerce clothing t-shirt store, we would want to store details about each shirt; i.e. material, color, sizesAvailable, price, description, features; grouped together.

```JavaScript
var amandaShirt = {
  material: "cotton",
  color: "pink",
  sizesAvailable: ["S", "M", "L", "XL", "2XL", "3XL"],
  price: 22.50,
  description: "Elevate your style with the flirty and flowy Amanda Shirt! Lorem ipsum dolor sit amet.",
  features: ["short sleeves", "keyhole", "hood"];
}
```

1. What questions do you still have about objects?

Is there a way to have an object within an object? For example, with my shirt example above, if the different sizes had different prices, how would you organize that information?
