//First Part:
var numberOfMonkeys = {10: 'Ten', 9: 'Nine', 8: 'Eight', 7: 'Seven', 6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three', 2: 'Two'};
for (var i = 10; i > 1; i--) {
  console.log(numberOfMonkeys[i] + ' little monkeys jumping on the bed,\nOne fell off and bumped his head,\nMama called the doctor and the doctor said,\n"No more monkeys jumping on the bed!"');
};
console.log('One little monkey jumping on the bed,\nHe fell off and bumped his head,\nMama called the doctor and the doctor said,\n"Get those monkeys right to bed!"');

// Bonus (A lot more work and research needed. Just tried messing arround with some ideas.)
var monkeys = 11
function oneLittleMonkey(monkeys) {
  if (monkeys < 2 && monkeys > 0) {
    return lastVerse();
  }
};
var repeatedVerse = ' little monkeys jumping on the bed,\nOne fell off and bumped his head,\nMama called the doctor and the doctor said,\n"No more monkeys jumping on the bed!"';

function lastVerse() {
  console.log('One little monkey jumping on the bed,\nHe fell off and bumped his head,\nMama called the doctor and the doctor said,\n"Get those monkeys right to bed!"');
};

var ones = ['Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
var tens = ['Ninety', 'Eighty', 'Seventy', 'Sixty', 'Fifty', 'Forty', 'Thirty', 'Twenty', 'Ten'];
var teens = ['Nineteen', 'Eighteen', 'Seventeen', 'Sixteen', 'Fifteen', 'Fourteen', 'Thirteen', 'Twelve', 'Eleven', 'Ten'];
// Need to turn functions below + additional info (still needed) into one single function to loop through arrays better.
function convertZero(monkeys) {
  if (monkeys === 0)
  return "There are zero monkeys jumping on the bed!"
};

function convertOnes(monkeys) {
  if (monkeys > 1 && monkeys < 10) {
    for (var i = 0; i < ones.length; i++)
    console.log(ones[i] + repeatedVerse);
  }
};

function convertTeens(monkeys) {
  if (monkeys < 10)
    return convertOnes(monkeys);
  else if(monkeys >10 && monkeys < 20) {
    for (var i = 0; i < teens.length; i++)
    console.log(teens[i] + repeatedVerse);
  } else {
  convertTens(monkeys);
  }
};

function convertTens() {
  if (i = 10 || 20 || 30 || 40 || 50 || 60 || 70 || 80 || 90)
    for (var i = 0; i < tens.length; i++) + ;
  };
