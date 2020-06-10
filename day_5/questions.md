## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    An object is a set of variables and functions under the umbrella of a single subject. While an array is limited to a simple list of data related to a subject, an object can provide additional information pertaining to each data _key_. An array has an ordered index while an object is made of unordered _key/value_ pairs.
___
2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
var petStore = {
  parakeets = 4,
  hamsters = 3,
  kittens = 2,
  dogs = 2,
}
```
___
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```Javascript
states["IA"];
```
___
4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```Javascript
states["MN"] = "Minnesota"
```
___
5. What is another example of when we might use a object?  In this case, why is a object better than an array?

      When designing a program for a library where the location, availability, and condition of each book needs to be logged regularly an object would be more useful than an array. An object is better than an array for this instance because a function can be used as a **method** of checking for availability by referencing other **properties** within the object. Checking the availability of a book would be better automated with the use of an object over an array.
___
6. What questions do you still have about objects?

How do we plug in different variables into an object? For example:

```Javascript
var libraryBook = {
  location: "Nonfiction",
  available: true,
  condition: "New"
}
```

How would I utilize this object to plug in specific books to the _libraryBook_ object?
