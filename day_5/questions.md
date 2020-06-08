# Day 5 Questions

### 1. What is an Object, and how is it different from an Array in Javascript?

**Objects** and **Arrays** both store data. An **array** stores an ordered list of data, in which each item can only be accessed using the index of the item, which is represented by a number. An **object** stores data using strings, so each **object** can store and organize data as properties or key-value pairs.


### 2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petstore = {
   catFood: 20,
   dogFood: 30,
   catLitter: 25,
   leashes: 15
   };
```


### 3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
states.IA
```


### 4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```
states.MN="Minnesota"
```


### 5. What is another example of when we might use a object?  In this case, why is a object better than an array?

Arrays are great for storing data, but objects allow you to store characteristics along with a set of data. For instance, an array would be sufficient for storing a list of the names of members in a hiking group. Say the hiking group is taking an out of town trip and wants to purchase t-shirts. Using objects, their names and t-shirt sizes can be stored together and easily accessed for the ordering process. This also allows them to change any errors in the object easily.

### 6. What questions do you still have about objects?

How are objects used in ways that we notice every day?
