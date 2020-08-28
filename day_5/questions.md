## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?  
Objects store data like an array does, except they can include data and functionality. Instead of using only numbers to retrieve the data, you can use strings.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.  
```Javascript
var petStore = {
  dogFood: 112
  catFood: 357
  toys: 43
};
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?  
```Javascript
var states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}
states["IA"]
```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?  
```Javascript
states.MN = "Minnesota"
```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
Using an object would be preferable to using an array when you need to perform a function (or functions) on those particular properties instead of the whole document. Another example of this could be storing info about kids signing up for a summer camp:
```Javascript
var camper1 = {
  name: "Jimmy",
  age: 8,
  favoriteActivity: "capture the flag",
  secondFavoriteActivity: "swimming",
}

console.log(`${camper1.name} loves ${camper1.favoriteActivity}, but he will also do ${camper1.secondFavoriteActivity}.`);
// expected: Jimmy loves capture the flag, but he will also do swimming.

```

6. What questions do you still have about Objects?
None at this time, just need more practice.
