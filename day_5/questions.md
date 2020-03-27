## Day 5 Questions

#### 1. What is an Object, and how is it different from an Array in Javascript?

__Objects__ are used to define properties of a item from the real world, it is made up of a group of variables and functions. You would use __objects__ when adding data for a single thing in code, and __arrays__ are used when adding multiple items such as a list to a variable.


---

#### 2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```Javascript
var petStore = {
  'gold fish' : 245,
  'Puppy Chow' : 65,
   staff : 4,
};

```
---

#### 3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```Javascript
console.log(states['Iowa']);

```

---

#### 4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```Javascript
states['MN'] = 'Minnesota';

```
---

#### 5. What is another example of when we might use a object?  In this case, why is a object better than an array?

A retail store, such as the now extinct video store, an __object__ is better to describe the store. An __array__ would work for listing stores.

For example:

##### Object Video Store

```Javascript
var videoStore = {
  "New Releases" : ["Birds of Prey", "Emma", "Bloodshot"];
  customers : 2;
  videoReturn : 45;
};

```
##### Array Video Stores
```Javascript
var videoStores = ['Blockbuster', 'Hollywood Video', 'Major Video'];

```

---
#### 6. What questions do you still have about objects?

This was a great lesson on objects and along with the documents supplied I feel I have a good understanding at this current level. However I came across a lot of cool interesting things such as:

- Loops looked a bit trickier such as how to iterate over specific key names in for loops, I am certain we will go over loops and objects a ton later.

- Also on some of the built in functions such as .prototype.







---
