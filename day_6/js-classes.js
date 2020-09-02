var name = "Elvis";
console.log(this.name);//the output is "Elvis"
var human = {
  name: "Karen"
}
function sayName() {
  console.log("Hello! My name is " + this.name);
};
sayName();//the context of 'this' here is still the name "Elvis". Because the function isn't being ran through the object, 'this' is taking the nearest open variable with the key "name" and passing it through
human.getName = sayName;
//human;
human.getName();//this tells me that the context of 'this' in the sayName function is grabbing the "name" key in our object "human" becuase it is now being ran inside the human object, therefore 'this' is referring to "Karen"
sayName();
var human2 = {
  name: "Dante"
}
human2.getName = sayName;
human2.getName();
