var monkeyNum = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"];
var lastVerse = " little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, Get those monkeys right to bed!"
var verse = " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, No more monkeys jumping on the bed!"

for(i = 0; i <= 9; i++) {
  if(i <= 8) {
    console.log(monkeyNum[i] + verse);
  }
  else {
    console.log(monkeyNum[i] + lastVerse);
  }
}

/*for(i = 0; i <= 9; i++) {
  console.log(monkeyNum[i] + verse)
}*/

/*console.log(monkeyNum[0]);*/
