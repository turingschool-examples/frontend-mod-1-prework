## Day 5 Questions
#### Mike W (he, him) FE

1. What is an Object, and how is it different from an Array in Javascript?

An object is similar to array however instead of storing a number like an array [2]
an object stores stores properties such as strings that can help with databases and overall  
organization.

```
//an example of an array and how it stores info
var cats = ['munchkin', 'bangal', 'bombay', 'toyger'];
console.log(cats);
console.log(cats[2]); // shows how to print bombay and how the info is stored as [2]
```
```
// an example of an object and how it stores and calls data vs an array
var cats = {
  tygra: "toyger",
  lionO: "bangel",
  cheetara: "savannah",
  sadie: "the toothless black",
};

console.log(cats);
console.log(cats.sadie); // uses the name and not a number to call the stored value

```

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  lizzards = 30;
  hamsters = 40;
  birds = 15;
  catToys = 47;
  dogToys = 61;
}

console.log(petStore); ///prints the properties in the object
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
console.log(states.IA);
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```
//using dot notation

states.MN = 'Minnesota';

// using bracket notation

states ['MN'] = 'Minnesota';
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

You can store an array in an object and it would make it easier to see the values stored for database work
as seen with the above cat example above it was personally easier to call Sadie then remembering that Sadie had
been in spot [3]

1. What questions do you still have about objects?
not at this time 
