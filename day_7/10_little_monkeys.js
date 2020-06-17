var monkeys = [
  'Ten',
  'Nine',
  'Eight',
  'Seven',
  'Six',
  'Five',
  'Four',
  'Three',
  'Two',
  'One'
];

for (var i = 0; i < monkeys.length; i++) {
  if (monkeys[i] === 'One') {
    console.log("One little monkey jumping on the bed, \n He fell off and bumped his head, \n Mama called the doctor and the doctor said,\n\"Get those monkeys right to bed!\"");
  } else {
    console.log(monkeys[i] + " little monkeys jumping on the bed, \n One fell off and bumped his head, \n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\"");
  }
}

/* This will allow the input into the array then will loop till the array gets to 'One'. The array can be added to and subtraced from
by adding to the array.
*/



/* So this will take the values from ten or higher and log till the number 2 being since the number one was always a constant
I just logged the output to make things simple. Then if the user wishes the make the loop longer the
user can use the unshift to add number "Elevn" or really anything or to remove they could run the
funtion to minusMokey. I was over complating the issue at frist and looking for a way to log the number
to english then log the output however the output had massive grammer errors. I found the
simplest soultion was for the user to log the input themselves.


var monkeyNumber = ["Ten", "Nine", "Egiht", "Seven",
     "Six", "Five", "Four", "Three", "Two"];
    minusMokey();
if (monkeyNumber > [0]){
      for (var i = 0; i < monkeyNumber.length ; i++){
console.log(monkeyNumber[i] + " little monkeys jumping on the bed, \n One fell off and bumped his head, \n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\"");
      }
    }
console.log( "One little monkeys jumping on the bed, \n One fell off and bumped his head, \n Mama called the doctor and the doctor said,\n\"Get those monkeys right to bed!\"");

function addMokey(monkeyNumberAdd) {
      return monkeyNumber.unshift(monkeyNumberAdd);
      };
function minusMokey() {
      return monkeyNumber.shift();
       };

*/
