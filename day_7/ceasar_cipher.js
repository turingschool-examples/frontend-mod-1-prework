////
////

var caesarCipher = (string, n)=>{
  let result = "", code;
  for (let i=0; i<string.length; i++){
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      code = (((string.charCodeAt(i)-65 )+26-n )%26 )+65;
    }
    else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      code =(((string.charCodeAt(i)-97 )+26-n )%26 )+97;
    }
    else if (string.charCodeAt(i) === 32){
      code = 32
    }
    result += String.fromCharCode(code);
  }
  return result;
}

console.log(caesarCipher("HELLO WORLD", 5))
//
///
///
