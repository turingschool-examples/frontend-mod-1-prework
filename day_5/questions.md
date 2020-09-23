## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
..* An object can store multiple pieces of data and you can use strings to retrieve the data whereas an array stores an ordered list and you have to use numbers to retrieve the data.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

```
var petStore = {
  puppies: 15
  kitties: 2,000
  ferrets: 3
  snakes: 0
};
```
3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

`states["IA"];`

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
`states['MN']= 'Minnesota';`

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

..* We could use an object when storing data for AirBnB. There will be a set 'template' for all of the homes that are displayed. Each home can then have their own properties and the developers wouldn't have to code every single line for each home featured.

6. What questions do you still have about Objects?
..* Nothing! I'm getting it!
