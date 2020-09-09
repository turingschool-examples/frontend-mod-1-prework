"3" + " speckled frogs sat on a log"
"eating some most delicious bugs."
"One jumped in the pool where its nice and cool,"
"then there were " + "2" + "speckled frogs."

"2" + " speckled frogs sat on a log"
"eating some most delicious bugs."
"One jumped in the pool where its nice and cool,"
"then there were " + "1" + "speckled" + " frog."

"1" + " speckled " + "frog" + " sat on a log"
"eating some most delicious bugs."
"One jumped in the pool where its nice and cool,"
"then there were " + "no more" + "speckled frogs."

// loop until i = 1, i <= 3, i++ or work backwards?
// start with if of 3 and then 2
//next iteration is 2, 1, frog
// last iteration is 1, frog, 
// reassign variables! so num1 = 1, 2, or 3; num2 = 2, 1, or "no more"; plural = frog or frogs
// i == 3, i == 2, i == 1
//base rhyme 
// num1 + " speckled" + plural + " sat on a log",
// "eating some most delicious bugs.",
// "One jumped in the pool where its nice and cool,",
// "then there were " + num2 + " speckled" + plural + "."

for (var i = 10; i >= 1; i--) {

    var num1 = ["2", "1"];
    var num2 = ["1", "no more"];
    var plural = ["frogs", "frog"];
    var singular = ["frogs", "frog"];

    if (i >= 3) {
        num1 = i;
        num2 = i - 1;
        plural = plural[0];
        singular = singular[0];
        console.log(num1 + " speckled " + plural + " sat on a log",
            " eating some most delicious bugs.",
            " One jumped in the pool where its nice and cool,",
            " then there were " + num2 + " speckled " + singular + ".");
    }
    else if (i == 2) {
        num1 = num1[0];
        num2 = num2[0];
        plural = plural[1];
        singular = singular[1];
        console.log(num1 + " speckled " + plural + " sat on a log",
            " eating some most delicious bugs.",
            " One jumped in the pool where its nice and cool,",
            " then there were " + num2 + " speckled " + singular + ".");
    }
    else if (i == 1) {
        num1 = num1[1];
        num2 = num2[1];
        plural = plural[1];
        singular = singular[0];
        console.log(num1 + " speckled " + plural + " sat on a log",
            " eating some most delicious bugs.",
            " One jumped in the pool where its nice and cool,",
            " then there were " + num2 + " speckled " + singular + ".");
    }

}

// basic completed.