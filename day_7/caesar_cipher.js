//

// 
// function  caesarCipher (string, number) {
//    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//    //expected output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//    // var cipher = new CaesarCipher();
//    // var lowerCaseAlphabet = alphabet.toLowerCase();
//    // console.log(lowerCaseAlphabet());
//    var encodedMsg = "";
// 
//    for (var i = 0; i < string.length; i++){
//     var currentLetter = string[i];
// 
//     if ( currentLetter === " ") {
//     encodedMsg += currentLetter;
//     continue;
//     }
// 
//     var currentIndex = alphabet.indexOf(curentLetter);
//     var newIndex = currentIndex + number;
// 
//     if (newIndex > 25 ) {
//       newIndex = newIndex - 26;
//   } else if (newIndex < 0) {
//       newIndex = newIndex + 26;
//   } else {
//     encodedMsg += alphabet[newIndex];
//   }
//     return encodedMsg;
//   }
// };


console.log(caesarCipher("Hello world, 5"));
