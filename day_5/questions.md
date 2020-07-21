## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

  It's a data structure used to store a collection of related key-value pairs. It is different from an array in the sense that its properties are assigned to keys rather than being indexed. Objects can be thought of as containers that can store a *variety* of related information. While an array, is best utilized for a collection of similar values. An object's properties can be  variable values, strings, numbers, arrays, or even other objects or functions. This also differs from an array, which cannot contain a function.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = {
  typesOfDogFood: 12,
  leashes: 20,
  collars: 20,
  fish: 32,
  birds: 4,
  lizards: 9,
  hamsters: 12
}
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states.IA`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

`states.MN = "Minnesota";`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

If a school had to keep track of devices it loaned out, an object could be used to store the hardware information and serial numbers, software information such as the operating system or when it was last updated, to whom it's assigned, when it's due, etc. In this case it's better than an array because the keys would be necessary to order all the properties. An array would not have this ability.

1. What questions do you still have about objects?

None at this point.
