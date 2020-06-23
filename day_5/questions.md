## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
  * An __object__ is way to store data. While an array stores ordered lists of data, an object can use strings to store data. Inside an object can be an integer, string, array, and/or function/method values.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
  * var petStore = {
    treats: 187,
    toys: 203
    groomers: 2
  };

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
  * states.IA;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
  * states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?
  * Another use for an object over an array is if a company needs to evaluate their stores.
  * In this case, creating an object for each store would be much better than assembling an array because in each object you have properties unique to certain stores.
  * Using objects allow you to box properties associated with said object and allows for better organization/storing compared to arrays who can only store ordered data.

1. What questions do you still have about objects?
