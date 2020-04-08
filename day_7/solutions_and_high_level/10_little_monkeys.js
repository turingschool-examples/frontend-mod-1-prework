
/* The only way I could get this to print out any possible number of monkeys in the
english spelling of each number was to install the npm number-to-words package.
otherwise, howManyMonkeys(i) in the nursery rhyme strings would be replaced with
monkeyNum[i], and the array monkeyNum would be uncommented to achieve the english
spelling of monkeys Ten through One. */

function littleMonkeys(numOfMonkeys) {
  for (var i = numOfMonkeys; i > 0; i--) {

//    var monkeyNum = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

    function howManyMonkeys(num) {
      var conversion = require('number-to-words');
      conversion = conversion.toWords(num);
      conversion = conversion[0].toUpperCase() + conversion.substring(1);
      return conversion;
    }

    if (i > 1) {
      console.log(
`${howManyMonkeys(i)} little monkeys jumping on the bed,
One fell off and bumped his head,
Mama called the doctor and the doctor said,
"No more monkeys jumping on the bed!"
`);
    } else {
      console.log(
`${howManyMonkeys(i)} little monkey jumping on the bed,
He fell off and bumped his head,
Mama called the doctor and the doctor said,
"Get those monkeys right to bed!"
`);
    }
  }
}

littleMonkeys(1324);
