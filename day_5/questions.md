## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    An Object is a group of variables (properties) and functions (methods) that create a model of something. They differ from Arrays in that an Array can only contain a list of data types. Whereas an Object can contain properties and methods.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.


    ```
    var petStore = {
      frogs: 38,
      cats: 2,
      dogs: 4,
      giraffes: 1,
      tigers: 290
    }
    ```


3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

    `states.IA`


4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

    `states.MN = "Minnesota"`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

    Objects are useful anytime you want to handle something that has a lot of necessary attributes. While an Array might be nice for a list of state names, an Object would be much better suited for storing multiples values of a state, like motto, state flower, abbreviation, etc. An Object is better here because it allows you to access the properties therein at based on variable keys instead of Array positions. You can update, append, and manipulate them without having to worry about the structure and position, like you would with an Array. Objects also give you the option to store methods, or additional objects within them. This provides more malleability to the Object than the Array.


6. What questions do you still have about Objects?

    I'm a little confused still about creating functions in Objects. The example is the JS and JQ sample reading uses
    ```
    hotel.checkAvailability = function() {
      return this.rooms - this.booked;
    };
    ```
    I think I'm grasping the `this.` idea but don't understand the idea behind not creating a function name. Especially because when you call the function in the object you do so with `hotel.checkAvailability();`. It just seems like there should be a function name in the code and not just `function()`. I guess that's just object literal notation for
    ```
    function checkAvailability() {
      code
    }
    ```
