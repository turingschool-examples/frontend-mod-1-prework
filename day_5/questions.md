## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a grouping of different properties and Methods. It's different from an Array, because instead of just arbitrarily numerating the stored values, we can name them in a way that makes sense. They also contain blocks of code that might be useful in manipulating itself (or doing whatever).

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
bagsOfDogFood : 450,
bagsCatFood : 100,
bagsCatLitter : 100,
toys : 600
};

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

states["IA"];

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

states["MN"] = "Minnesota";

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

An object called game. It could show the name of the game, the owner, maximum players, etc. It's better since even people unfamiliar with the object can immediately tell what the information is and use it in a convenient way.

1. What questions do you still have about objects?

How can I create an abstract Object and use that as a form to create many instances of it?
