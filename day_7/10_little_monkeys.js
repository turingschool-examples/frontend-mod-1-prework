var numberOfMonkeys = 10
var nurseryRhymeRepeat = " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, \"No more monkeys jumping on the bed!\""
var nurseryRhymeConclude = "One little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, \"Get those monkeys right to bed!\""

for (var i = numberOfMonkeys + 1; i > 2; i--) {
 console.log(i - 1 + nurseryRhymeRepeat);
}
console.log(nurseryRhymeConclude)
