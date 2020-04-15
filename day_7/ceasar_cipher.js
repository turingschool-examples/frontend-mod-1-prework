var leftShiftValue = 5

function caesarCipher(str) {
  var arr = [];

  for (i = 0; i < str.length; i++) {

    if (str.charCodeAt(i) >= 65 + leftShiftValue && str.charCodeAt(i) <= 90) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 97 + leftShiftValue && str.charCodeAt(i) <= 122) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 65 + leftShiftValue) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 97 + leftShiftValue) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
    }
    else if (str.charCodeAt(i) < 65){
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""))
}

caesarCipher("Hello, world!")


/*class CaesarCipher {
  constructor(string, leftShiftValue) {
    this.string = string;
    this.leftShiftValue = leftShiftValue;
  }

  encode() {

      for (i = 0; i <= 12; i++) {

        if (this.string.charCodeAt(i) >= 65 + leftShiftValue && str.charCodeAt(i) <= 90) {
          string.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
        }
        else if (this.string.charCodeAt(i) >= 97 + leftShiftValue && str.charCodeAt(i) <= 122) {
          string.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
        }
        else if (this.string.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 65 + leftShiftValue) {
          string.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
        }
        else if (this.string.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 97 + leftShiftValue) {
          string.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
        }
        else if (this.string.charCodeAt(i) < 65){
          string.push(this.string[i]);
        }
      console.log(string.join(""))
    }
  }
}

var cipher = new CaesarCipher();
cipher.encode("Hello World", 5);
*/
