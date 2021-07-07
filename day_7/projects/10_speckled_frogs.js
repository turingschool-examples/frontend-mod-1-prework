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

// extension 1: print word versions rather than numerals. 

for (var i = 10; i >= 1; i--) {

    var num1 = ["Two", "one"];
    var num2 = ["one", "no more"];
    var plural = ["frogs", "frog"];
    var singular = ["frogs", "frog"];
    var was = "was ";
    var firstWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    var secondWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if (i >= 3) {
        num1 = i;
        num2 = i - 1;
        plural = plural[0];
        singular = singular[0];

        num1 = firstWords[i - 1];
        num1 = num1.charAt(0).toUpperCase() + num1.slice(1);

        num2 = secondWords[i - 2];

        console.log(num1 + " speckled " + plural + " sat on a log" +
            " eating some most delicious bugs." +
            " One jumped in the pool where its nice and cool," +
            " then there were " + num2 + " speckled " + singular + ".");
    }
    else if (i == 2) {
        num1 = num1[0];
        num2 = num2[0];
        plural = plural[0];
        singular = singular[1];
        console.log(num1 + " speckled " + plural + " sat on a log" +
            " eating some most delicious bugs." +
            " One jumped in the pool where its nice and cool,"+
            " then there "+ was + num2 + " speckled " + singular + ".");
    }
    else if (i == 1) {
        num1 = num1[1];
        num2 = num2[1];
        plural = plural[1];
        singular = singular[0];
        num1 = num1.charAt(0).toUpperCase() + num1.slice(1);

        console.log(num1 + " speckled " + plural + " sat on a log" + 
            " eating some most delicious bugs." +
            " One jumped in the pool where its nice and cool," + 
            " then there were " + num2 + " speckled " + singular + ".");
    }

}

// extension 1 complete! Feeling very proud of my work on this! 

//extension 2: how to make it work for any number of frogs? Should I worry about being able to translate the numbers into words or stick with the basics? Let's stick with the numerals first. I need to make a class and then a function which will allow for the instance and that transformation. 

class speckledFrogs {

    howManyFrogs(userFrogs) {
        this.userFrogs = userFrogs

        for (var i = this.userFrogs; i >= 1; i--) {

            var num1 = ["2", "1"];
            var num2 = ["1", "no more"];
            var plural = ["frogs", "frog"];
            var singular = ["frogs", "frog"];
            var was = "was ";

            if (i >= 3) {
                num1 = i;
                num2 = i - 1;
                plural = plural[0];
                singular = singular[0];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there were " + num2 + " speckled " + singular + ".");
            }
            else if (i == 2) {
                num1 = num1[0];
                num2 = num2[0];
                plural = plural[0];
                singular = singular[1];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there " + was + num2 + " speckled " + singular + ".");
            }
            else if (i == 1) {
                num1 = num1[1];
                num2 = num2[1];
                plural = plural[1];
                singular = singular[0];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there were " + num2 + " speckled " + singular + ".");
            }

        }
    }

}

var myFrogs = new speckledFrogs();
myFrogs.howManyFrogs(5);

// I was right on my instinct! The extra-extra challenge is: how can I output word values for the numbers without creating a huge ass array because it's impossible to predict what someone would input. 