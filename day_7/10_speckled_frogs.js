var frogs = [10,9,8,7,6,5,4,3,2,1];

for (var i = 0; i < frogs.length; i++) {
    if (frogs[i] > 2) console.log(frogs[i] + " speckled frogs sat on a log eating some most delicous bugs.  One jumped in a pool where its nice and cool, then there were " + (frogs[i] - 1) + " speckled frogs.");
    else if (frogs[i] == 2) console.log(frogs[i] + " speckled frogs sat on a log eatings some most delicous bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.");
    else if (frogs[i] < 2) console.log(frogs[i] + " speckled frog sat on a log eating some most delicous bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
}