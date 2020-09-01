## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

_An `object` is a way to store data just like an `array`, the difference is an object can store `properties`. Each property consists of a `key-value pairs` that provide more in depth information about the stated `object`._

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

```javascript
var petStore = {
  item1: {"Dog Food": 8},
  item2: {"Cat Food": 12},
  item3: {"Chew Toy": 22},
  item4: {"Scratch Post": 2}
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```javascript
console.log(states[1]);
```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

```javascript
states.push{"MN": "Minnesota"};
```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

_A restaurants online food menu! You could create an object of `menu`, then have sub-objects of each menu item including keys like:_
      * _`name` (string)_
      * _`price` (float)_
      * _`ingredients` (array)_
      * _`description` (string)_
      * _`availability` (boolean)_
_an object would be far better than an array, in this example, because you can avoid a lot of extra steps and work when trying to reference each item in such detail. You can use this information with easy accessibility with out a lot of repetition. You can also update all `menu items` much easier, as they seem to change fairly often._

6. What questions do you still have about Objects?

_I'm curious to see the use of objects in real code, how it works real time!_
