## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  

  An Object is a data type that stores key-value pairs of properties and methods related to the Object name. They are different from Arrays as they store pairs of data where each property or method name is associated with its value, rather than just an ordered list.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.  

  ```
  var petStore = { numberOfCats: 5, numberOfDogs: 14, numberOfFish: 127, cansOfDogFood: 75
  };
  ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  

  `states.IA;`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?  

  `states.MN = "Minnesota";`

1. What is another example of when we might use an object?  In this case, why is an object better than an array?  

  We might use an Object if we need to store information about, for example, a business. We could use an object to store properties, such as the business name, address, type, number of employees, and yearly profit, as well as methods that would update these values as needed. An Object is much better than an Array in this situation, as it's important that we can associate pairs of data, each property name and value, so we understand what each value means.

1. What questions do you still have about objects?

  None that I can think of.
