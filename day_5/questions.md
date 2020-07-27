## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    * In code, objects represent a "thing" that is made up of a set of different attributes or characteristics, i.e., "properties" that consist of a key and a value. These key-values are stored in the code but can be changed/added/etc. through the function.  
    * Arrays are essentially a set of items stored as a list assigned to a single variable. Each item is assigned an index and can be accessed by its numerical position in the list.
      * Both can consist of data types such as strings, numbers, booleans, objects, or even other arrays.


1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

  ```javascript
  var petStore = {
    birdCage: 5,
    terrariumSnake: 10,
    chewToy: 20
  };
  ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

  ```javascript
  console.log(states.IA);
  ```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

  ```javascript
  states.MN = "Minnesota"
  ```

1. What is another example of when we might use an object?  In this case, why is an object better than an array?

  * An object could be used to enter demographic information for a user on a website. An object would be better than an array, because it contains more information in the format of key-value pairs. In an object, attribute and value are both stated in an organized manner, whereas an array is just a list/set of elements.

1. What questions do you still have about objects?

  * Not at this time.
