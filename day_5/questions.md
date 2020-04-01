## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

 * An **object** is a variable that contains other variables called _properties_, and methods. Properties are key/value pairs that contain information about this object. _Methods_ are functions stored inside of an object, and often use the other properties in the object to carry out the function. Where objects and arrays are similar (both being collections of data), you can think of an array as an 'ordered list', where you must call elements of an array by their index number. With objects, you access the elements (properties) using strings, and can create variations of the same type of object (think of it like a model or framework) that uses the same properties with differing values. Besides storing primitive data types, objects can also contain arrays, functions and even other objects, making them more powerful and versatile containers than arrays.


2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = {
  dogFoodBags: 48,
  catFoodBags: 37,
  dogBeds: 13,
  catnipToys: 26,
  groomingBrushes: 12,
  goldfishBowls: 18,
  giantFishTanks: 4,
  heatRocks: 8
}
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```Javascript
console.log(states.IA);
// This would print "Iowa" to the console
```

4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```Javascript
states.MN = 'Minnesota';
// This would create the property 'MN' and assign it a value of 'Minnesota' inside of the object 'states'
```

5. What is another example of when we might use an object?  In this case, why is an object better than an array?

 * Let's create an object called `car`. Although there are many different kinds of cars, they typically have the same _properties_, but those properties would have varying values depending on what kind of car you have. Using an object allows us to create a template, or 'model' of the type of thing that the object represents. We can create many different kinds of cars, that all share the same properties even though the values of each car are different. Using an _array_ to accomplish this same task would just create an ordered list of the things that our car has, where using an _object_ allows us to create a more detailed database that we can interact with more clearly, and we can also store _functions_ in our object that perform other tasks, as well as other objects!


6. What questions do you still have about objects?

 * I feel like objects make a lot of sense. Learning more about objects, and OOP makes me realize that it's all just variables, and that a large part of what programming is can essentially be called "Variable Theory", as we learn the ins and outs of how variables work and what they are capable of.
