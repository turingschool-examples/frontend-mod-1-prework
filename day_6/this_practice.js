var name = 'Elvis';
console.log(this.name);
// What do you get right now?  --  Elvis followed by undefined.
var human = {
  name: 'Josh',
};

function sayName() {
  console.log('Hello! My name is ' + this.name);
  }
//What is the context of 'this'? --- var name = Elvis
human.getName = sayName;
//What does the human object look like now? samn but now console shows function
human.getName();
// What do your results tell you about the context of this now? now it gets name from object human and returns sayName.

var otherHuman = {
  name : 'Bob',
};
otherHuman.getName = sayName;
otherHuman.getName();
//just a heads up the codePen link, links to : https://frontend.turing.io/lessons/module-1/object-instances-classes.html
