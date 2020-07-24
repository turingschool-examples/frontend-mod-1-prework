## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
An object is a structure that is used to store key-value pairs. The information of the object is assigned to a key whereas in an array the information is assigned to an index. An object is also different from an array because an object can hold a variety of related information where an array is best used for a collection of similar values. An object can hold strings, numbers, arrays or even functions. 

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

var petStore = {
  dogFood: 100,
  catFood: 75,
  dogLeashes: 30,
  petTags: 60,
  foodBowls: 10,
  dogs: 4,
  cats: 8,
}

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
console.log(states["IA"]);

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
states["MN"] = "Minnesota"

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
Another exmaple of using an object would be to store the information on your car such as the make, model, last oil change, 4WD?, mileage, drivers, vin number, etc. It would be better to use an Object in this case over an Array because the keys would help to name and organize the information. The information would also contain a variety of data types: model (string), mileage (integer), has4WD (boolean), drivers (array). You would not be able to store all of this data in an array.


6. What questions do you still have about Objects?
