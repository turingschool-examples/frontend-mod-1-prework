// 10 Little Monkeys



for (var i = 10; i >= 1; i--){
  if (i > 1){
    console.log(i + " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!'");
  } else if (i == 1) {
    console.log(i + " little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, 'Get those monkeys right to bed!'");
   }
};



// Bonus

function anyNumberOfMonkeys(start, finish) {
  for (var i = start; i >= finish; i--){
    if (i > 1){
      console.log(i + " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!'");
    } else if (i == 1) {
      console.log(i + " little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, 'Get those monkeys right to bed!'");
     }
  }
};

console.log(anyNumberOfMonkeys(101, 99));


// Double Bonus?

function bottlesOfBeer(start, finish) {
  for (var i = start; i >= finish; i--){
    if (i > 1){
      console.log(i + " bottles of beer on the wall! " + i + " bottles of beer! You take one down, pass it around, " + [i - 1] + " bottles of beer on the wall.");
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall! " + i + " bottle of beer! You take one down, pass it around, no more bottles of beer on the wall!");
     }
  }
};

console.log(bottlesOfBeer(99, 1));
