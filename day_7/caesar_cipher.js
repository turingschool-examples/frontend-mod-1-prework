function  caesarCipher (string, number) {
   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowAlphabet = alphabet.toLowerCase();
   var cipher = new CaesarCipher();


   for (var i = 0; i < cipher.length; i++){
     var currChar = cipher.charAt(i);

     if (currChar <=0){

     }

   }
 };





function Encryption(string input, int key){
var encrypted = new StringBuilder("Hello World", 5);
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabet2 = alphabet.toLowerCase();
var keyedalphabet = alphabet.substring(key) + alphabet.substring(0, key);

  for (int i = 0; i < encrypted.length(); i++) {
                char currChar = encrypted.charAt(q);
                int index = alphabet.indexOf(currChar);
                if (index != -1) {
                  char newChar = keyedalphabet.charAt(index);
                  encrypted.setCharAt(q, newChar);
                }
                  index = alphabet2.indexOf(currChar);
                if (index != -1) {
                  String keyedalphabet2 = keyedalphabet.toLowerCase();
                  char newChar = keyedalphabet2.charAt(index);
                  encrypted.setCharAt(q, newChar);
                }
              }
              return encrypted.toString();
            }

// class  CaesarCipher {
//   constructor (string, number) {
//     this.string = string;
//     this.rotationNumber = number;
//   }
//   addString(string){
//     this.string.push(string)
//   }
//
//   pickRotationNumber(rotation){
//     this.rotationNumber.value(rotation)
//   }
// };
//
//    var newCipher = new CaesarCipher ([], [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ,19, 20, 21, 22, 23, 24, 25, 26]);
// --------------------------------
   // newCipher.addString("Hello world");
   // console.log(newCipher.string);
   // // "Hello world"
   //
   // console.log(newCipher.rotationNumber[0]);
   // // 1


  //  function cipherString (string){
  //    newCipher.addString();
  //    console.log(newCipher.string);
  //  };
  //   var string = addString;
  //   var number = rotationNumber;
  //   var message = string + number;
  //     return code ;
  //
  // }
  //
  //
  //   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //
  //
  //
  //
  // // console.log(alphabet.value.length);
  // // console.log(alphabet.value.toLowerCase());
  //
  // function newCipher(str) {
  //   var string = "";
  //   for (var i = 0; i < string.length; i++) {
  //     console.log(alphabet[i]);
  // }
  //   return string;{
    }
};
