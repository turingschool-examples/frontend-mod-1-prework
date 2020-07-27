var user3 = {
  name: "Oscar",
  age: 7,
  breed: "Shih-tzu, mostly",
  hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
  greet: function() {
    console.log("Why am I so cute?")
  }
}

// 1. Access the value of user3

console.log(Object.values(user3));

// 2. Access the value of the name of user3

console.log(user3.name);

// 3. Add a new property of your choosing

user3.color = "White";

// 4. Check the value of user3 again

console.log(Object.values(user3));

// 5. Change the value of the name of user3

user3.name = "Ragnar";

// 6. Check the value of user3
console.log(Object.values(user3));

// 7. Declare a method on user3 that logs "Why am I so cute?" to the console
// see above

// 8. Check the value of user3. Do you see your method?
console.log(Object.values(user3));

// 9. Use user3 to log "Why am I so cute?"
user3.greet();
