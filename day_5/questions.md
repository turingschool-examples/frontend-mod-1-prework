## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
Objects are collections of data, like arrays, but the data in objects have a more complex relationship. Arrays are ordered lists, but the values in objects relate to the object through a descriptive "key". Together, a key and a value describe a single "property", and this property can use any data type or even a function, which we call a method. This makes more complicated data structures much easier to read and manipulate.


2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {chewToys: 5, dogFood: 12, catFood: 15, scratchingPosts: 4, catNip: 3}
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
```
states.IA
```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
```
states['MN'] = "Minnesota"
```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
Let's assume we're modeling rolling dice. We can easily write a function to simulate this, but we need to know how many dice, how many sides they have, and if there are any special rules to our game- like taking away the lowest roll, or adding a modifier. Now each of these factors can be stored as a separate variable, or we can fit them all into an object, including the function. This way we can easily see the relationship that all these variables have when we look at our code, and it's even clearer what the function does when it's framed as a method. An array would not be able to host the function as a method, and would look confusing storing so much data of different types. Additionally, it would be harder to remember what the order of the data in the array was so that we could access it correctly.

6. What questions do you still have about Objects?
