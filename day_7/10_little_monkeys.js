// code to repeat phase up to a maximum of 99 times.
var words1 = ['Zero' , 'One' , 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
var phrase = ' little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, "No more monkeys jumping on the bed!"'
var phraseFinal =  'One little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, "Get those monkeys right to bed!"'
function monkeyRhyme(max) {
  for (var i = max; i > 0; i--){
    if (i <= 99 && i >= 91) {
        console.log('Ninety ' + words1[i - 90] + phrase);
    } else if (i === 90) {
      console.log('Ninety' + phrase); //infinetely repeating here
    } else if (i <= 89 && i >= 81) {
        console.log('Eighty ' + words1[i - 80] + phrase);
} else if (i === 80) {
  console.log('Eighty' + phrase);
} else if (i <= 79 && i >= 71) {
    console.log('Seventy ' + words1[i - 70] + phrase);
} else if (i === 70) {
  console.log('Seventy' + phrase);
} else if (i <= 69 && i >= 61) {
    console.log('Sixty ' + words1[i - 60] + phrase);
} else if (i === 60) {
  console.log('Sixty' + phrase);
} else if (i <= 59 && i >= 51) {
    console.log('Fifty ' + words1[i - 50] + phrase);
} else if (i === 50) {
  console.log('Fifty' + phrase);
} else if (i <= 49 && i >= 41) {
    console.log('Forty ' + words1[i - 40] + phrase);
} else if (i === 40) {
  console.log('Forty' + phrase);
} else if (i <= 39 && i >= 31) {
    console.log('Thirty ' + words1[i - 30] + phrase);
} else if (i === 30) {
  console.log('Thirty' + phrase);
} else if (i <= 29 && i >= 21) {
    console.log('Twenty ' + words1[i - 20] + phrase);
} else if (i === 20) {
  console.log('Twenty' + phrase);
} else if (i <= 19 && i > 1) {
  console.log(words1[i] + phrase);
} else if (i === 1) {
  console.log(phraseFinal)
}
}
};
monkeyRhyme(99);
// probably a simpler way to use an object and a this.count approach but this works well enough for now.
