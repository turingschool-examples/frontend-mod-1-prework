function monkeyRhyme (numberOfMonkeys) {
  var oneMonkey = '"Get those monkeys right to bed!"';
  var moreThanOneMonkey = '"No more monkeys jumping on the bed!"';

  for (var i = numberOfMonkeys; i > 0; i--) {
    var str = i + ' little monkeys jumping on the bed,\nOne fell off and bumped his head,\nMama called the doctor and the doctor said '

    if (i > 1) {
      str = str.concat(moreThanOneMonkey);
    } else {
      str = str.concat(oneMonkey);
    }

    console.log(str);
  }
}

monkeyRhyme(10);
