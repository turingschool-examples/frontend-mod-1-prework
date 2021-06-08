## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An array is a type of variable that can store a list of values. These values can be the same or different data types and they can be referenced by an index number related to each element in the array. An object is similar to a variable but it can store multiple key-value pairs and even more complex data such as functions, which are called methods when they are located inside an object. Variables inside an object are called properties.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
var petStore = {
  numberOfToys: 37,
  bagsOfCatFood: 122,
  bagsOfDogFood: 112,
  numberOfPetShowerBooths: 4
}

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
console.log(states.IA)

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
states.MN = "Minnesota"

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
An object is better because you can store much more complicated data such as methods. Also, once you have the template for an object, you can create others with the same properties and just change the values. For example, creating the hotel object with properties such as hotelName and capacity and roomsBooked and having a function with the key/name of vacancies that uses that data in a method to give you the rooms that are available. You can change the name and other variables, in this example, to provide data for a hotel search website where you want to compare different hotels.

6. What questions do you still have about Objects?
None so far. Between the repl exercises and the objects.js homework I think I understand the concept of building objects with multiple properties and key-value pairs, referencing, adding and editing those keys or values etc.
