## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a data type that stores data in keys and values. This is different from an array in that an array only stores data types but no details about them. Consider the following:

```Javascript
var dogArray = ["Bonnie", 3, "Golden Retriever"];

var dogObject = { name: "Bonnie", age: 3, breed: "Golden Retreiver" };
```
As you can see, the array has the data but no context to what it is. The object stores this data with a key showing what it is. Objects can also store functions within them for added functionality.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = { leashes: 5, waterDishes: 9, rawhide: 17, fishFood: 0 };
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

There are two ways to access the value "Iowa": dot notation and bracket notation. Both are similar in that they are used by calling the object name followed by the data key of the element you're trying to access. Examples of syntax for both methods are these:

```Javascript
console.log(states.IA); //dot notation
console.log(states["IA"]); //bracket notation
```

Note that with using bracket notation, the key used must be in quotation marks whereas in dot notation, they would be omitted.


1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

To add a new property to an object, you would use either dot notation or bracket notation to define the data key and the element. For example:

```Javascript
states.MN = "Minnesota";//dot notation
states["MN"] = "Minnesota";//bracket notation
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

Another example of using an object would be to create a function to store data on things of a similar class. This would allow us to build a usable database with different objects that can hold specific data. An object would be better for this than an array because it can hold more specific data.


1. What questions do you still have about objects?

I'm not sure if it's a question but I'm not confident in my answer about other uses for an object. 
