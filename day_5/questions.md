## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

  An **Object** is where multiple pieces of data that correspond to the object are stored and organized as a group. Objects have *properties* which can include strings and different types of data (including Arrays), while Arrays create and store lists of data only in a single variable.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
  var petStore = {
    name: "The Grand Paw",
    listOfItems: ["leash", "food", "treats"],
    numOfTotalItems: 203,
  }
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```javascript
  states["IA"];
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```javascript
  states["MN"] = "Minnesota";
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
```javascript
  var band = {
    currentName: "Mouse Rat",
    formerNames: ["Punch Face Champions", "Two Doors Down", "Angelsnack", "Rad Wagon"],
    numberofMembers: 5,
    numberofInstruments: 5,
    instrumentsPlayed: ["acoustic guitar", "drums", "bass", "electric guitar", "saxophone"],
    onTour: false,
  }
```
   In this *band* object example, an object is better than an array because the values are very likely to change often, which is easier to modify in an object, rather than updating an array with the corresponding values each item would affect. If `numberofInstruments` changes in value, that affects `instrumentsPlayed` and most likely, `numberofMembers`. If `currentName` changes, `formerNames` array needs to be modified. Objects also make it easier to add properties like `tourRider` if `onTour` value changes to `true`. Objects help to keep the data better organized when managing more pieces, versus in an array. 

1. What questions do you still have about objects?
