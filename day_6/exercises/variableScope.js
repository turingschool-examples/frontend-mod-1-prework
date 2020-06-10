var name = "Elvis";
console.log(this.name);
// What do you get when you run console.log(this.name) right now?
// This returns undefined.
var human = {
  name: "Cher"
}

var sayName = function() {
  console.log("Hello! My name is " + this.name);
};

sayName();
// Based on your results, what is the context of 'this'?
// This is refering globally to the window.
human.getName = sayName;
// What do your results tell you about the context of this now?
// The context of this is still global.
human.getName();
// What do your results tell you about the context of this now?
// Now the getName function is within the scope of the human object.
var human2 = {
  name: "Maynard"
}

human2.getName = sayName;
human2.getName();
