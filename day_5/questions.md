## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a way to store data for a specific thing. An object typically has different attributes and methods that are properties of the object. These properties describe the object or what the object does. You can be a lot more detailed when describing the data of an object. With an array its more of a list of items, rather than a breakdown of what it consists of.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  name: "Pets Mart",
  cats: 22,
  dogs: 34,
  size: "2000 sq ft"
};

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states.IA;

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota"

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

We might use an object when we want to give depth or character to an item or thing. A good example of when to use an object might be for designing a menu. For each menu item or object there are characteristics you want to display. The cost, description, substitutes, and so on. An array can give you a list of items to access but that's about all you can do with it. In this case an object worked better than an array because we're assigning values to the abbreviated states.

6. What questions do you still have about Objects?

none
