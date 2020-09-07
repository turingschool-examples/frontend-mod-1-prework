## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  

-An object is a collection of properties, including functions and methods. They differ in arrays because their properties can contain these functions and methods.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.  

`let petStore = {
  dogFood: 25,
  catFood: 30,
  dogTreats: 35,
  leashes: 15,
  };`

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  

-`console.log(states["IA"]);`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

-`states.MN = "Minnesota";`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?  

-An object could be used to track students at a school. This would be extremely useful by building a constructor, allowing for the creation of many different objects which all share the same properties.

6. What questions do you still have about Objects?  

-Curious to get to the material covering the "this" keyword more in depth.
