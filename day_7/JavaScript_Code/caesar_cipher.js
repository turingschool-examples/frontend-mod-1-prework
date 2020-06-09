// I ended up doing the CeasarCipher two differnt ways unfortunatly neihter work perfectly
// After a lot of research I saw that you could create the CeasarCipher using by finding the ASCI table adding/subtracting the amount from it
// However the ASCI is not just an alphabet and has a multitude of charactersthat are not in the alphabet
//I tryed to create a cycle using the modulo operator but you it is difficult to cycle through the ACSI as they don't start at 0 and have multiple characters
// between The toUpperCase alphabet and the lowercase alphabet
function CeasarCipherWithAsci(string,direction,amount){
  var result = ""
  var words = string.split(' ')
  for(var i = 0;i<words.length;i++){
    result += " "
    for(var j = 0 ;j<words[i].length;j++){
      var letter = words[i].charAt(j)
      if(direction === 'right'){
      var asciAmount = (letter.charCodeAt()+amount % 25)
      var finalLetter = String.fromCharCode(asciAmount)
     result += finalLetter
      }else {
        var asciAmount = (letter.charCodeAt()-amount % 25)
      var finalLetter = String.fromCharCode(asciAmount)
     result += finalLetter

      }
    }


  }
  return result.trim()
}
//In this version I decided to create my own array alphabet and change the amount moving based on the amount given
// This works great when the direction given is right and works for all positive integers
function CeasarCipherAlpha(string,amount){
  if(amount <0){
    return 'Amount must be positive'
  }
  if(amount === 0){
    return string
  }
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var result = ""
  var words = string.split(' ')
  for(var i = 0;i<words.length;i++){
    result += " "
    for(var j = 0 ;j<words[i].length;j++){
      var letter = words[i].charAt(j)

      if(letter !==letter.toUpperCase()){
        if(alphabet.indexOf(letter) === -1){
          return "Must only be letters from A-Z"
        }
      var change = ((alphabet.indexOf(letter)+amount) % 26)
      var finalLetter = (alphabet[change])
     result += finalLetter
    } else if(letter === letter.toUpperCase()){
      var letter = letter.toLowerCase()
         if(alphabet.indexOf(letter) === -1){
          return "Must only be letters from A-Z"
        }
     var change = ((alphabet.indexOf(letter)+amount) % 26)
      var finalLetter = (alphabet[change]).toUpperCase()
              result += finalLetter


     }
    }


  }
  //must use trim to get rid of white space
  return result.trim()
}
CeasarCipherAlpha('This is a string',9)
