## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?
>An object is a type of collection storage but unlike an Array which stores ordered lists, an object can store many different kinds of data, as well as manipulate that data using functions(methods). This allows you to treat an object like its a database for storing and organizing complete data.

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.
> var petStore = { <br>
>    catQuantity: 8,<br>
>    dogQuantity: 5,<br>
>    typesOfFood: ["cat", "dog", "bird", "fish"]<br>
> };

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?
> states["IA"];  or console.log(states["IA"]);

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?
> To add a new property:  states["MN"] = "Minnesota";

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?
> Another example of when we might use an object is in the case of dinner reservations at a restaurant. An object would be more useful than an array because we would be able to manipulate the data within the object as circumstances changed, and/or create functions that could manipulate the data within the object to give us further information.

6. What questions do you still have about Objects?
> How common is the "this" notation? I understand that we will be avoiding it for the time being for learning purposes and consistency, just curious about it's real world usage/popularity.
