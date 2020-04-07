var monkeyCount = 10;
var text = ' little monkeys jumping on the bed, one fell off and bumped his head, Mama called the doctor and the doctor said, "No more monkeys jumping on the bed!"\n';
var endText = ' little monkeys jumping on the bed, one fell off and bumped his head, Mama called the doctor and the doctor said, "Get those monkeys right to bed!"\n';

function getCount(number) {
  monkeyCount = number;
}

getCount(10);

console.log(monkeyCount + text + (monkeyCount - 1) + text + (monkeyCount - 2) + endText);
