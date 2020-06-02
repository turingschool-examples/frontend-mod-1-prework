## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    An object is a collection of stored information, similar to that of a database, and can be accessed by numbers and strings.

    An array is also a collection of information, but the array has ordered items that can be accessed through a numbered index by position.  It can only be accessed by numbers.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

    ```
    var petStore = {
      bone: 50,
      shampoo: 6,
      food: 20,
      collar: 30,
      bed: 12,
    };
    ```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

    `console.log(states.IA);` or `states.IA;`

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

    Use `states.MN = "Minnesota";` to add a new key-value property to the object.  

    The result should be:

    `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma", "MN": "Minnesota"}`

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

    We might use an object to access information pertaining to a specific person or thing.  

    For example, if I want to store information about my puppy, Harper, I would do so in the following way:

    ```
    var myPuppy = {
      name: "Harper",
      age: "10 months",
      weightInPounds: 70,
      favoriteToy: "bone",
      food: "Purina Pro Plan Large Breed Dry Food"
    };
    ```

    In this case, an object is better than an array because the order of my properties is irrelevant, and the information stored to the variable is in the form of key-value pairing.  Also, when different data types are included as properties, it makes more sense to use an object; whereas, best practice for array items would be to keep them consistent in data type.  An object allows me to access the value associated with various keys, leading to a clear understanding of the details someone would need to know about Harper if they were to dog-sit.

1. What questions do you still have about objects?

    + Is it common for functions to be written and called as methods for an object?  I find that fascinating.
    + Are objects usually stored to variables?
