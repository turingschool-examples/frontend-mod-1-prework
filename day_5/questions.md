## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
- Object is one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Object always have "key" and "value" as a pair, while Array is set of singular perimeters. ie: object{"key1":"value1","key2":"value2"} , Array[1,2,3].

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  catFood: 100,
  dogFood: 150,
  birdFood: 50,
}
```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
- states.IA

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
- states.MN = Minnesota

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
- ie: students's test score. In this case, each student has name(key) and score(value). It is better to use Object than Array since there's a set of data to collect/store rather than a single value. One Array can only either collect name or score, but not both.

6. What questions do you still have about Objects?
