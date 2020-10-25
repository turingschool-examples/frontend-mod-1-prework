


function encrypt(message, encryption){
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var cipher = message.toUpperCase().split("");
  var final = []
  for ( var i = 0; i <= cipher.length; i++){
    if(cipher[i] == alphabet[0]){
      final.splice(i, 1 , alphabet[(0 + encryption)]);
    }else if(cipher[i] == alphabet[1]){
      final.splice(i, 1 , alphabet[(1 + encryption)]);
    }else if(cipher[i] == alphabet[2]){
      final.splice(i, 1 , alphabet[(2 + encryption)]);
    }else if(cipher[i] == alphabet[3]){
      final.splice(i, 1 , alphabet[(3 + encryption)]);
    }else if(cipher[i] == alphabet[4]){
      final.splice(i, 1 , alphabet[(4 + encryption)]);
    }else if(cipher[i] == alphabet[5]){
      final.splice(i, 1 , alphabet[(5 + encryption)]);
    }else if(cipher[i] == alphabet[6]){
      final.splice(i, 1 , alphabet[(6 + encryption)]);
    }else if(cipher[i] == alphabet[7]){
      final.splice(i, 1 , alphabet[(7 + encryption)]);
    }else if(cipher[i] == alphabet[8]){
      final.splice(i, 1 , alphabet[(8 + encryption)]);
    }else if(cipher[i] == alphabet[9]){
      final.splice(i, 1 , alphabet[(9 + encryption)]);
    }else if(cipher[i] == alphabet[10]){
      final.splice(i, 1 , alphabet[(10 + encryption)]);
    }else if(cipher[i] == alphabet[11]){
      final.splice(i, 1 , alphabet[(11 + encryption)]);
    }else if(cipher[i] == alphabet[12]){
      final.splice(i, 1 , alphabet[(12 + encryption)]);
    }else if(cipher[i] == alphabet[13]){
      final.splice(i, 1 , alphabet[(13 + encryption)]);
    }else if(cipher[i] == alphabet[14]){
      final.splice(i, 1 , alphabet[(14 + encryption)]);
    }else if(cipher[i] == alphabet[15]){
      final.splice(i, 1 , alphabet[(15 + encryption)]);
    }else if(cipher[i] == alphabet[16]){
      final.splice(i, 1 , alphabet[(16 + encryption)]);
    }else if(cipher[i] == alphabet[17]){
      final.splice(i, 1 , alphabet[(17 + encryption)]);
    }else if(cipher[i] == alphabet[18]){
      final.splice(i, 1 , alphabet[(18 + encryption)]);
    }else if(cipher[i] == alphabet[19]){
      final.splice(i, 1 , alphabet[(19 + encryption)]);
    }else if(cipher[i] == alphabet[20]){
      final.splice(i, 1 , alphabet[(20 + encryption)]);
    }else if(cipher[i] == alphabet[21]){
      final.splice(i, 1 , alphabet[(21 + encryption)]);
    }else if(cipher[i] == alphabet[22]){
      final.splice(i, 1 , alphabet[(22 + encryption)]);
    }else if(cipher[i] == alphabet[23]){
      final.splice(i, 1 , alphabet[(23 + encryption)]);
    }else if(cipher[i] == alphabet[24]){
      final.splice(i, 1 , alphabet[(24 + encryption)]);
    }else if(cipher[i] == alphabet[25]){
      final.splice(i, 1 , alphabet[(25 + encryption)]);
    }else if(cipher[i] == " "){
      final.splice(i, 1 , " ")
    }else if(cipher[i] == ","){
      final.splice(i, 1 , ",")
    }else if(cipher[i] == "."){
      final.splice(i, 1 , ".")
    }else if(cipher[i] == "!"){
      final.splice(i, 1 , "!")
    }else if(cipher[i] == "?"){
      final.splice(i, 1 , "?")
    }else if(cipher[i] == "'"){
      final.splice(i, 1 , "'")
    };
  }

  console.log(final.join(""))

};

encrypt("Et tu, Brute?", 6)


function decrypt(message, encryption){
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var cipher = message.toUpperCase().split("");
  var final = []
  for ( var i = 0; i <= cipher.length; i++){
    if(cipher[i] == alphabet[26]){
      final.splice(i, 1 , alphabet[(26 - encryption)]);
    }else if(cipher[i] == alphabet[27]){
      final.splice(i, 1 , alphabet[(27 - encryption)]);
    }else if(cipher[i] == alphabet[28]){
      final.splice(i, 1 , alphabet[(28 - encryption)]);
    }else if(cipher[i] == alphabet[29]){
      final.splice(i, 1 , alphabet[(29 - encryption)]);
    }else if(cipher[i] == alphabet[30]){
      final.splice(i, 1 , alphabet[(30 - encryption)]);
    }else if(cipher[i] == alphabet[31]){
      final.splice(i, 1 , alphabet[(31 - encryption)]);
    }else if(cipher[i] == alphabet[32]){
      final.splice(i, 1 , alphabet[(32 - encryption)]);
    }else if(cipher[i] == alphabet[33]){
      final.splice(i, 1 , alphabet[(33 - encryption)]);
    }else if(cipher[i] == alphabet[34]){
      final.splice(i, 1 , alphabet[(34 - encryption)]);
    }else if(cipher[i] == alphabet[35]){
      final.splice(i, 1 , alphabet[(35 - encryption)]);
    }else if(cipher[i] == alphabet[36]){
      final.splice(i, 1 , alphabet[(36 - encryption)]);
    }else if(cipher[i] == alphabet[37]){
      final.splice(i, 1 , alphabet[(37 - encryption)]);
    }else if(cipher[i] == alphabet[38]){
      final.splice(i, 1 , alphabet[(38 - encryption)]);
    }else if(cipher[i] == alphabet[39]){
      final.splice(i, 1 , alphabet[(39 - encryption)]);
    }else if(cipher[i] == alphabet[40]){
      final.splice(i, 1 , alphabet[(40 - encryption)]);
    }else if(cipher[i] == alphabet[41]){
      final.splice(i, 1 , alphabet[(41 - encryption)]);
    }else if(cipher[i] == alphabet[42]){
      final.splice(i, 1 , alphabet[(42 - encryption)]);
    }else if(cipher[i] == alphabet[43]){
      final.splice(i, 1 , alphabet[(43 - encryption)]);
    }else if(cipher[i] == alphabet[44]){
      final.splice(i, 1 , alphabet[(44 - encryption)]);
    }else if(cipher[i] == alphabet[45]){
      final.splice(i, 1 , alphabet[(45 - encryption)]);
    }else if(cipher[i] == alphabet[46]){
      final.splice(i, 1 , alphabet[(46 - encryption)]);
    }else if(cipher[i] == alphabet[47]){
      final.splice(i, 1 , alphabet[(47 - encryption)]);
    }else if(cipher[i] == alphabet[48]){
      final.splice(i, 1 , alphabet[(48 - encryption)]);
    }else if(cipher[i] == alphabet[49]){
      final.splice(i, 1 , alphabet[(49 - encryption)]);
    }else if(cipher[i] == alphabet[50]){
      final.splice(i, 1 , alphabet[(50 - encryption)]);
    }else if(cipher[i] == alphabet[51]){
      final.splice(i, 1 , alphabet[(51 - encryption)]);
    }else if(cipher[i] == " "){
      final.splice(i, 1 , " ")
    }else if(cipher[i] == ","){
      final.splice(i, 1 , ",")
    }else if(cipher[i] == "."){
      final.splice(i, 1 , ".")
    }else if(cipher[i] == "!"){
      final.splice(i, 1 , "!")
    }else if(cipher[i] == "?"){
      final.splice(i, 1 , "?")
    }else if(cipher[i] == "'"){
      final.splice(i, 1 , "'")
    };
  }

  console.log(final.join(""))

};

decrypt("kz za, kxazk?", 6)
