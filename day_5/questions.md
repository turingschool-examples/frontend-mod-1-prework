## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

Both store date but an array stores an ordered list that can be accessed through numbers or the index of the items. Objects can use numbers and also strings to access its data. Objects group together variables and functions that are known as properties and methods respectively. Properties tell us about the object, while methods represent task associated with the object.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  itemName: 'Dog leashes',
  inventory: 19,
  sold: 5,
  checkInventory: function() {
    return this.inventory - this.sold;
  }
};
console.log(petStore.itemName);
console.log(petStore.checkInventory());
//Output-> *Dog leashes 14*


3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

var states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"};
console.log(states.IA);
//Output-> *Iowa*

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

states.MN = "Minnesota";
console.log(states);

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

var studentInfo = {
  name: "Lucas",
  age: 27,
  workingOnModule: "mod 0",
};
console.log(studentInfo.name, studentInfo.age, studentInfo.module);

It is better to use an object than an array because with this you can see the parameter around what the results mean. You can see that my name is Lucas, my age is 27, and I am working on mod 0. If in an array you could infer my name is Lucas but what does 27 mean and why what about mod 0 is significant.

6. What questions do you still have about Objects?

none at the moment
