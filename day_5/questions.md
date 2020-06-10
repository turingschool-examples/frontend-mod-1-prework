## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

  An object is a bundle of information including data and behaviors of a particular item. An array is a list of items within the same group. An array doesn't offer individual information about each item, it just lists them.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

  var petStore = {
    leashes: 100
    collars: 200
    pooperScooper: 25
  };

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

  states.IA;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

  states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

  var restaurant = {
    name: "Pizza City";
    city: "Tucson";
    seatsAvailable: 25
    foodTypes: ["Pizza", "Calzone"; "Salad"; "Garlic Knots"];
  }

  This is another example of an object. It gives specific information about a restaurant. This would be more useful than an array when a user would be in need of information about a specific restaurant like when they were trying to decide where to eat or make a reservation. An array would return a list of restaurants which wouldn't be as helpful.

1. What questions do you still have about objects?
  How are objects and classes related?
  Do we use semi-colons or colons at the end of the line after each value? I'm seeing both. Are they interchangeable like single/double quotes?
