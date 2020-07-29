// Extension 2:
// Make it work for any number of frogs!


for (var i = 99; i >= 0; i--) {

// works for any number of frogs by setting ` var i ` to as many frogs as we like!

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
