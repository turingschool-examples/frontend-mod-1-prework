## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a way to store information that's specific to a variable. It differs from an array because an array is just a list of elements and values and can only be accessed through the index number. With objects,you're able to access it's values from keywords. They can also hold methods/functions, whereas arrays cannot!

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```Javascript
var petStore = {
  numOfDogs = 6,
  numOfCats = 12,
  numOfHamsters = 24,
};
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```Javascript
states["IA"];
```
4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
```Javascript
states["MN"] = "Minnesota";
```
5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

Objects are used best when you have multiple objects within the same class, such as a "car" class. We wouldn't want to list all the kinds of cars in an array and then assign a bunch of variables to each one to differentiate them from one another. Using objects we're able to give each car it's own attributes in an organized and easy to read way. Plus the access to it's specific information is a lot easier to get to!

6. What questions do you still have about Objects?

Not at the moment, I feel I understand this concept quite well!
