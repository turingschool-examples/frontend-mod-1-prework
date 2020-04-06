## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
+ An object is a complex data type in Javascript, allowing the user to couple data and functionality. You can liken an object to a container, representing a literal "thing" in your code. Within the object, you define a set of characteristics (properties) that consist of a key: value pair. This differs from an array primarily as arrays are designed to hold only data.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.
```
var petStore = {
  gerbil: 12,
  hamster: 8,
  rabbit: 6,
  ferret: 4,
};
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
`states.IA`
1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?
`states.MN = "Minnesota"`
1. What is another example of when we might use a object?  In this case, why is a object better than an array?
```
var joeBiden = {
  delegates: 1217
  states: ["AL", "VA", "NC", "TN", "AR", "OK", "MN", "TX", "ME", "MA"]
  supportFreeHealthCare: false
}

var bernieSanders = {
  delegates: 914
  states: ["VT", "CO", "UT", "CA"]
  supportFreeHealthCare: true
}

console.log(joeBiden.delegates > bernieSanders.delegates)
```
+ We could use an object to contain a bunch of voter data for the 2020 election. One advantage of using this method over an array could be that modifying unique properties (i.e., delegates) as the election continues becomes easy. This also offers us flexibility to compare these two candidates.
1. What questions do you still have about objects?
+ I'm having a hard time grasping what our objects will be in a practical sense when creating software. I understand the idea of objects as containers, but am not quite sure what we'll be containing...
