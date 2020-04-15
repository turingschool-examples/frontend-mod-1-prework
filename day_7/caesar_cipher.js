var prompt = "Type letters here"
var answer = prompt
  function move3(str) {
    var characters = str.split('');
    return characters.map(function(word) {
      word = word.charCodeAT();
      if(word >= 65 && word <= 122) {
        word += 3;
      }
      else if(word >= 109 && word <= 122) {
        word -=3;
      }
      return String.fromCharCode(word);
    }
    .join('');
  }
  console.log(move3(answer));
