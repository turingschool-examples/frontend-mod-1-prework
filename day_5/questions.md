## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
> An object allows you to store ordered information that is complex and provide associative relationships. Unlike an array, though, objects are able to create meaning between points of information while arrays do not. For example, you can create a variable for the types of birds, create a variable on color combinations, create a variable on types of beaks. But those individual arrays do not connect to one another and create meaningful information that objects can. 

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
    inventory: ["ball", "mouse", "dry food", "wet food"],
    quantity: [5, 3, 12, 10],
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
> If a variable has been set already on the local script, I would code `console.log(example.states[3]);`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
> objectName.MN = "Minnesota";

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
> Objects are beneficial when creating an interactive website for state parks and camping. Depending on what type of site or area you want (a 20 or 20 foot site, a wooded or mountainous or with a lake), each state park can have those 

6. What questions do you still have about Objects?
> Why is it when you try to print an object that contains a method in Node through the terminal and then log that object, I recieve [function] notation rather than the full function notation? 