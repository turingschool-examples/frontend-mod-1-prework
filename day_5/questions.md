## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
 * An Object is a bundle of methods and properties.  In an Object methods are what we know as functions and properties are what we know as variables.  In an Object, these methods and properties are key-value pairs.  The key is the name used to reference a value and the value is the data referenced by the key.  An Array is different because it is an ordered list.  Each item in an Array can be called using the index, which starts at 0.


2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  catToys = 40
  groomingTools = 10
  dogBeds = 16
}
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
console.log(states.IA);
```

4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```
states.MN = "Minnesota"
```

5. What is another example of when we might use a object?  In this case, why is a object better than an array?
   * An example that comes to mind is creating a shopping cart for an online website.  An Object could be used to hold items (key) and their price (value) to create a sub-total for the consumer.  This is exactly why an Object would be better than array as we would need more functionality than just an ordered list of what is in the cart.


6. What questions do you still have about objects?
   * I loved the resources provided in this lesson.  I feel good about what I learned and for the first time since starting the Capstone project I think I am getting better and learning how to learn, if that makes sense.  Similarly to day_4's response, I don't know what I don't know.  I'm sure a ton of questions will come up as we get into more complex coding scenarios but right now I feel comfortable with what was covered.
