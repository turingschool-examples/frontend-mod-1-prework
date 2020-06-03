var baseRhyme1 = "\nMama called the doctor and the doctor said,"

var baseRhyme2 = "\nNo more monkeys jumping on the bed!\n";

var monkeys = " little monkeys jumping on the bed,"
          + "\nOne fell off and bumped his head,";

var monkey = " little monkey jumping on the bed,"
          + "\nHe fell off and bumped his head,";

var noMonkey = "Get those monkeys right to bed!";


var numNames = [
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two",
  "One"
];

for (var i = 10; i >= 0; i--) {
  if (i > 1) {
    console.log(numNames[10-i] + monkeys + baseRhyme1 + baseRhyme2);
  } else if (i == 1) {
    console.log(numNames[10-i] + monkey + baseRhyme1);
  } else {
    console.log(noMonkey);
  }
};
