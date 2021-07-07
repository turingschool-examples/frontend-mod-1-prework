var user3 = {
  name: "Oscar",
  age: 7,
  breed: "Shih-tzu, mostly",
  hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
}

// 1. Access the value of user3
console.log(user3);
// 2. Access the value of the name of user3
user3Name = user3.name;
// 3. Add a new property of your choosing
user3.faveToy = "ball";
// 4. Check the value of user3 again
console.log(user3);
// 5. Change the value of the name of user3
user3.name = "Lily";
// 6. Check the value of user3
console.log(user3);
// 7. Declare a method on user3 that logs "Why am I so cute?" to the console
user3.adore = "Why am I so cute?";
// 8. Check the value of user3. Do you see your method?
console.log(user3);
// 9. Use user3 to log "Why am I so cute?"
console.log(user3.adore);
