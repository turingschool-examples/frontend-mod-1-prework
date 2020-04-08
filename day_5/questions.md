## Day 5 Questions

___

**1. What is an Object, and how is it different from an Array in Javascript?**

An object is just exactly that, really. It is a block of code you can use to store information in about something. It is different than an array because it goes more into assigning information about one specific thing. It's also a bit more complex than just an array.

**2. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.**

`var petstore = {
  dogFood: 46,
  catFood: 37,
  catLitter: 19,
  parakeet: 5,
  bettaFish: 20,
};`

**3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?**

`states.IA`

**4. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?**

`states.MN = "Minnesotta"`

**5. What is another example of when we might use a object? In this case, why is a object better than an array?**

When you need to be more specific with information about a specific thing. I'm better at explaining with example so! Let's see, a boat. An array for a boat might look like this;

`var boat = ["twoEmptySeats", "fourTakenSeats", "oneMast", "tenSquareFootDeck"]`

That looks bad!! That's so weird!! So awkward!! And most importantly, it's kind of a pain to access that info and change it. 0/10 would not do again. Where as an object might look something like this;

`var myBoat = {
  emptySeats: 2,
  takenSeats: 4,
  mast: true,
  deckFootage: 10
};`

Ya get the idea. It's neater, easier to read, and a lot more can be done with the information stored in an object a lot easier than in an array. You could probably do what you need to with an array, but it'd be Dirt Nasty.

**6. What questions do you still have about objects?**

I don't know yet!! Kinda wanna noodle around and figure out what questions I have, if any. I'll come back and edit this if I come up with something.

Edit ; Nah, we good.
