## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a type of collection or complex data type in JavaScript.  They are like arrays, they even contain arrays of information.  They are more self contained and much more complex as well holding much more information than a single array normally would.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStoreObject = {
  name: "Robby's Pets",
  inventory: ["kibble", "litter", "cat tree"],
};

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states[3];

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

When you need to store a data base of information.  In an object we can store more information in a neat and tidy way.  Not just one array but multiple arrays all contained with a single object. I guess too, you could have many objects and depending on the circumstance you could plug and play those objects into your code and it would be a lot easier than just manually typing them all out.

6. What questions do you still have about Objects?

I guess one question that kinda bugs me in terms of just having greater contextual understanding.  At the end of the day, are objects just a contained version of things that exist in what we have learned so far but just a neat and tidy way of doing them? OR are objects that and something unique to objects? If the latter, what are the unique exceptions? 
