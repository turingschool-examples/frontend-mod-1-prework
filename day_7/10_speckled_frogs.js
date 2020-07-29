//Enter any number
function speckledFrogs(num) {

  // inital stanzas
  var moreThan3Frogs = " speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where it's nice and cool, \nthen there were "
  var moreThan3Frogs2 = " speckled frogs. \n \n"

  // original first stanza
  var threeFrogs = "3 speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where it's nice and cool, \nthen there was 2 speckled frogs."
  // original second and third stanzas
  var twoFrogs = "2 speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where it's nice and cool, \nthen there was 1 speckled frog."
  var oneFrog = "1 speckled frog sat on a log \neating some most delicious bugs. \nOne jumped in the pool where it's nice and cool, \nthen there were no more speckled frogs!"

  if (num === 2) {
    return twoFrogs + "\n \n" + oneFrog;
  }
  if (num === 3) {
    return threeFrogs + "\n \n" + twoFrogs + "\n \n" + oneFrog;
  }
  if (num > 3) {
    var result = "";
    var restOfCountdown = threeFrogs + "\n \n" + twoFrogs + "\n \n" + oneFrog;
    for (var i = num; i > 3; i--) {
     result += i + moreThan3Frogs + i + moreThan3Frogs2;
    }
  }
  return result + restOfCountdown;
};

speckledFrogs(18);
