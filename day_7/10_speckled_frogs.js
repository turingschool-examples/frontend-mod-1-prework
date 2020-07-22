for (var i=10; i>0; i--) {
  if (i > 2) {
  console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were " + (i - 1) + " speckled frogs.");
} else if (i === 2) {
  console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n there there was one speckled frog.");
} else {
  console.log(i + " speckled frog sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were no more speckled frogs!")
}
};


//EXTENSION 1:
var numFrogs = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"];

for (var i=0; i<numFrogs.length; i++) {
  if (i < 8) {
  console.log(numFrogs[i] + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were " + (numFrogs[i + 1]) + " speckled frogs.");
} else if (i === 8) {
  console.log(numFrogs[i] + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n there there was one speckled frog.");
} else {
  console.log(numFrogs[i] + " speckled frog sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were no more speckled frogs!")
}
};

//EXTENSION 2:
var anyNumFrogs = 16;

for (var i=anyNumFrogs; i>0; i--) {
  if (i > 2) {
  console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were " + (i - 1) + " speckled frogs.");
} else if (i === 2) {
  console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n there there was one speckled frog.");
} else {
  console.log(i + " speckled frog sat on a log \n eating some most delicious bugs. \n One jumped in the pool where it was nice and cool, \n then there were no more speckled frogs!")
}
};
