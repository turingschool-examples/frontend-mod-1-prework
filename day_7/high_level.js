//Please read high_level.md before looking at this file. Also please note that a negative leftShift value will shift values to the right.

class CeasarCipher{
  encode(string, leftShift){
    var result = ""
    string = string.toUpperCase()
    for (var i=0; i<string.length; i++){
      var newCode = string.charCodeAt(i) - leftShift
      if (newCode < 65){
        newCode +=26
      }
      if (newCode > 90){
        newCode -= 26
      }
      if ((/[A-Z]/).test(string[i])){
        var letter = String.fromCharCode(newCode)
      }else{
        var letter = string[i]
      }
      result += letter
    }
  console.log(result)
  }
}

var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
