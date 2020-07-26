class CeasarCipher{
  constructor() {
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  }
  encode(sentance,code){
    var list = ""

    for (var i= 0; i < sentance.length; i++){
      var upCase=sentance.toUpperCase()
      var index = this.letters.indexOf(upCase[i])
      var newIndex = index-code
      if (index == -1){
        list += " "
      }
      else if (newIndex >= 0){
        list += (this.letters[index-code]);
      }else {
        list += (this.letters[26+newIndex]);
      }
    }console.log(list);
  }
};


var cipher = new CeasarCipher();
cipher.encode("Hello World",5); //should log "CZGGJ RJMGY"
