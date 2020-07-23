## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

   An Object is a collection of key-value pairs where each key acts as a label and the value is a piece of data that is tied to that label. An Array differs as the contents of the array do not have any specific values tied to them.  

2. In the space below, create an Object stored to a variable named `petStore`.  This Object should hold an inventory of items and the number of that item that you might find at a pet store.

   ```
   var petStore = {
     furBrush: 10,
     catCollar: 15,
     smallFishTank:4,
     largeFishTank:2,
   };
   ```

3. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

   ```
   states["IA"];
   ```

4. How would you add a new property to that Object with a key of `"MN"` and a value of `"Minnesota"`?

   ```
   states["MN"] = "Minnesota";
   ```

5. What is another example of when we might use a Object?  In this case, why is an Object better than an Array?

   One example of when we might want to use an Object may be when we are trying to collect information about a user visiting our website.  If the website allowed the user to input information such as their name, DOB, height, weight, etc, then it would reason that using an Object could be useful for packing that information into a nice neat collection.  In this way an Object is better than an Array because not only can we see a clear associative relationship between a key and its value, but also can perform calculations and work with the data in a more useful way.  

6. What questions do you still have about Objects?

   None as of yet! I'm sure they will come up as we dive deeper.
