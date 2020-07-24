var chair = {
  color: "Black",
  wheels: true,
  material: "Leather",
};

var chairColor = chair.color;
console.log("Color of chair: " + chairColor);

chair.canRecline = true;
chair.color = "Blue"

chair.spin = function() {
  return "Chair is spinning!"
};

console.log(chair);


var user3 = {
  name: "Oscar",
  age: 7,
  breed: "Shih-tzu, mostly",
  hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
}

// 1. Access the value of user3
console.log(user3)
// 2. Access the value of the name of user3
var user3Name = user3.name
// 3. Add a new property of your choosing
user3.weight = 20
// 4. Check the value of user3 again
console.log(user3)
// 5. Change the value of the name of user3
user3.name = "Tony"
// 6. Check the value of user3
console.log(user3)
// 7. Declare a method on user3 that logs "Why am I so cute?" to the console
user3.cuteMethod = function() {
  return "Why am I so cute?"
}
// 8. Check the value of user3. Do you see your method?
console.log(user3)
// 9. Use user3 to log "Why am I so cute?"
user3.cuteMethod()
