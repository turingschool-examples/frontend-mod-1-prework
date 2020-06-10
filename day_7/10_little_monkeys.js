var numArray = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
var monkeyCount = 10;
var nurseryRhyme = ' little monkeys jumping on the bed,\nOne feel off and bumped his head,\nMama called the doctor and the doctor said,\n"No more monkeys jumping on the bed!"'
var nurseryRhymeEnd = ' little monkeys jumping on the bed,\nHe feel off and bumped his head,\nMama called the doctor and the doctor said,\n"Get those monkeys right to bed!"'

for (var x = 0; x < monkeyCount; x++) {
  if (x != monkeyCount - 1) {
    console.log(numArray.slice(-1).pop() + nurseryRhyme);
  } else {
    console.log(numArray.slice(-1).pop() + nurseryRhymeEnd);
  }
  numArray.pop();
  console.log("\n");
}
