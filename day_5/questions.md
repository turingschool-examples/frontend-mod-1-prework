## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

    - An object is a collection of data that is stored in key-value pairs. An object is different from
      an array in that the data is stored in those key-value pairs, also known as properties, but also
      because the data stored in an object can be referenced using strings as opposed to numbers referencing
      the index of a piece of data inside an array.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

    ```javascript
    var petStore = {
      bones: 7,
      kongs: 13,
      ropeToys: 11
    };
    ```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

    ```javascript
    states["IA"];
    ```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

    ```javascript
    states["MN"] = "Minnesota";
    ```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

    - One could also use an object for storing data about a specific variable that will be required to perform tasks.
    An object is better than an array in this case because an object can easily store functions (known as methods when
    stored within an object) that can be called when needed. While an array can also store functions, it is easier to
    use objects to store various data types, including functions, thanks to the key-value pairs within.

6. What questions do you still have about Objects?

    - Is it helpful or not to nest objects? How would this affect a script?

    - If you have two similar objects, but on different webpages, would you want to store them in
      differently named variables or identically named variables and why does it matter?
