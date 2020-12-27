## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object groups together a set of variables and methods. It is different than an array as each variable or property can
be called individually
2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
var petStore = {
  inventory: ["Dog bones", "Cat post", "Milk Bones"],
  numberOfItems: [10, 5, 4]
}

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
var state = states.IA;
4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
states.MN = "Minnesota";
5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
You might use an object you are creating items sold in a store and posting them on a website. This would be better than an array because you would want to access the specific information from the object across the site.
6. What questions do you still have about Objects?
In java do you always create object in the same code file or can they be accessed from other code files.
