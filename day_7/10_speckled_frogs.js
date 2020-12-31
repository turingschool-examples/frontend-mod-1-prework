
for (var i =10; i >= 1; i--) {
  if (i==2) {
    console.log( i +" speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,then there was " + (i-1) + " more speckled frogs!\n")
  } else if (i==1) {
    console.log( i +" speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!");
  } else {
    console.log( i +" speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs.\n");
  }
}



var frogs =["Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two","One"]
for (var i = 0; i < frogs.length; i++) {
  if (frogs[i] === "Two"){
    console.log(frogs[i] + "  speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there was " + (frogs[i+1]) + " speckled frogs.\n")
  }
  else if (frogs[i]!="One") {
    console.log(frogs[i] + "  speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were " + (frogs[i+1]) + " speckled frogs.\n")
  } else {
  console.log( frogs[9] +" speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!");
  }
}
