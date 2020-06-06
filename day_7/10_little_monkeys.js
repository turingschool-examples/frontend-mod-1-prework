

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
