## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An object is a group of properties and/or properties. They're different from an array because they contain multiple data type variables as well as functions/methods.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  food: "Pet Food",
  foodCount: 600,
  dogToys: "Chew Toys",
  dogToysCount: 217,
}
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
`states.IA;`
4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
```
states.MN = "Minnesota";
console.log(states);
```
5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

Another example to use an Object is when one needs to use an array, but also has more information such as variables including strings, numbers and functions. An array isn't as versatile as an Object and more can be accomplished.

6. What questions do you still have about Objects?

No questions that I can think of, but I will definitely need to do some more work with them to grasp their full scope.
