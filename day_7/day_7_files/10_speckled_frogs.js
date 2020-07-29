
// Loop through each number 1-10 BACKWARDS to count down the frogs (Use -- decrement operator!)
// Set up a For loop that will evaluate each number one at a time.
// Use conditional operators to check number value

    /*
    Where i represents our index variable,
    var num = (i + 1);
    var less = (num - 1);
    */
    /*  msgMain to be logged for frogs 10 --> 3
    "[num] speckled frogs sat on a log \n
     eating some most delicious bugs. \n
     One jumped in the pool where it's nice and cool, \n
     then there were [less] speckled frogs.";
    */
    /*  msg2 to be logged IF (num === 2)
    "[num] speckled frogs sat on a log \n
    eating some most delicious bugs. \n
    One jumped in the pool where its nice and cool, \n
    then there was [less] speckled frog.";
    */
    /*  msgNone to be logged IF (num === 1)
    "[num] speckled frog sat on a log \n
    eating some most delicious bugs. \n
    One jumped in the pool where its nice and cool, \n
    then there were no more speckled frogs!";
    */

for (var i = 9; i >= 0; i--) {

    var num = (i + 1);
    var less = (num - 1);

    var msgMain = `"${num} speckled frogs sat on a log
    eating some most delicious bugs.
    One jumped in the pool where its nice and cool,
    then there were ${less} speckled frogs."`;

     var msg2 = `"${num} speckled frogs sat on a log
     eating some most delicious bugs.
     One jumped in the pool where its nice and cool,
     then there was ${less} speckled frog."`;

     var msgNone = `"${num} speckled frog sat on a log
     eating some most delicious bugs.
     One jumped in the pool where its nice and cool,
     then there were no more speckled frogs!"`;

    if (num == 1) {
        console.log(msgNone);
      }

    else if (num == 2) {
        console.log(msg2);
      }

    else if (num >= 3) {
        console.log(msgMain);
      };
};
