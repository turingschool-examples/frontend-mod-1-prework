//This program was my first attempt but after talking to other classmates, they walked me through a better way to approach this task that would change the verb tenses according to number of frogs instead of doing it manually like I was doing in this example. You will see that attempt below.
class Frogs {
  constructor(startNumber, number){
    this.startNumber = startNumber;
    this.number = number;
  }

  removeFrog(startNumber, number) {
    console.log(this.startNumber + " speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were " + (this.startNumber - this.number) + " speckled frogs.")
}

};

var frog10 = new Frogs(10, 1);
var frog9 = new Frogs(9, 1);
var frog8 = new Frogs(8, 1);

console.log(frog10);
console.log(frog9);
console.log(frog8);

frog10.removeFrog(10,1);
frog9.removeFrog(9, 1);
frog8.removeFrog(8,1);

// second attempt

var verbTense1 = "";
var verbTense2 = "";
var ending = "";

for (i = 3; i > 0; i--) {{
  var frogStart = i
  var frogsEnd = i - 1 }{
   if (i >= 3)
  ((verbTense1 = " speckled frogs") && (verbTense2 = "were ") && (ending = " frogs."));
  if (i === 2)
  ((verbTense1 = " speckled frogs") && (verbTense2 = "was ") && (ending = " frog."));
  if (i === 1)
  ((verbTense1 = " speckled frog") && (verbTense2 = "were ") && (frogsEnd = "no more") && (ending = "frogs!"));
  }
console.log(frogStart + verbTense1 + " sat on a log\neating some most delicious bugs.\nOne Jumped in the pool where it's nice and cool,\nthen there " + verbTense2 + frogsEnd + " speckled " + ending);
}

// Extenstion 2 : You can make this program work for any number by changing i = to whatever number you want.
