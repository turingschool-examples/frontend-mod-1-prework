var numWritten = {
20: "Twenty",
19: "Nineteen",
18: "Eighteen",
17: "Seventeen",
16: "Sixteen",
15: "Fifteen",
14: "Fourteen",
13: "Thirteen",
12: "Twelve",
11: "Eleven",
10: "Ten",
  9: "Nine",
  8: "Eight",
  7: "Seven",
  6: "Six",
  5: "Five",
  4: "Four",
  3: "Three",
  2: "Two",
  1: "One"
};

for (var i = 10; i >= 1; i--) {
  if (i > 1) {
    console.log(numWritten[i] + " little monkeys jumping on the bed,");
    console.log("One fell off and bumped his head,");
    console.log("Mama called the doctor and the doctor said,");
    console.log("'No more monkeys jumping on the bed!'");
    console.log("");
  } else {
    console.log(numWritten[i] + " little monkey jumping on the bed,");
    console.log("He fell off and bumped his head, ");
    console.log("Mama called the doctor and the doctor said, ");
    console.log("'Get those monkeys right to bed!'");
  }
};

function littleMonkeys(monkeys, monkeysLeft) {
  for (var i = monkeys; i >= monkeysLeft; i--) {
    if (i > monkeysLeft) {
      console.log(this.toWords(i) + " little monkeys jumping on the bed,");
      console.log("One fell off and bumped his head,");
      console.log("Mama called the doctor and the doctor said,");
      console.log("'No more monkeys jumping on the bed!'");
      console.log("");
    } else {
      console.log(this.toWords(i) + " little monkey jumping on the bed,");
      console.log("He fell off and bumped his head, ");
      console.log("Mama called the doctor and the doctor said, ");
      console.log("'Get those monkeys right to bed!'");
    }
  };
}

littleMonkeys(7,3);

/*I understand the second function will only be able to call up to 20 and not all numbers.
I looked at examples that could solve that issue and couldn't understand and had trouble downloading
a package that would solve the issue.
*/
