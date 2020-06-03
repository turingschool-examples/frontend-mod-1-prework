var baseRhyme = " Mama called the doctor and the doctor said,"
          + " No more monkeys jumping on the bed!";

var monkeys = " little monkeys jumping on the bed,"
          + " One fell off and bumped his head,";

var monkey = " little monkey jumping on the bed,"
          + " He fell off and bumped his head,";

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
    console.log(numNames[10-i] + monkeys + baseRhyme);
  } else if (i == 1) {
    console.log(numNames[10-i] + monkey + baseRhyme);
  } else {
    console.log(noMonkey);
  }
};
