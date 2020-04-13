## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  

   An object stores data like an array but the information inside of it is accessed through strings.This means that the object contains data but instead of each piece of data being accessed with numbers noting the position in an array they are accessed with the name of the variable indicated within the object.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.  

   ```javascript
   var petStore = {
     dogToy = 20,
     catToy = 15,
     catLitter = 100,
     dogFood = 97
   };
   ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  

   states.IA;

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?  

   states.MN = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?  

   ```javascript
   var bakingRecipe = {
     name: "Bread",
     ingredients: ["flour", "eggs", "water", "yeast"],
     ovenTemperature: 425
   };
   ```
   In this case there are a couple of reasons this is better expressed as an object. The first is that the ability to recall the data about the `bakingRecipe` is more intuitive to what we are looking for. The second is the ability of the object to contain an array within it of `ingredients`. The third would be the ease of adding additional properties to the bakingRecipe object if needed with easy naming convention. `bakingRecipe.cookTime = 1.5;`

1. What questions do you still have about objects?  

   How specific should an object be. In my example would bakingRecipe be more useful if it were broader, say 'recipe'?
