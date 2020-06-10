// Ceasar Cipher

class CeasarCipher {
   constructor() {
      this.character = "";
      this.character_code = 0;
      this.result = "";

   };

   encode(text, shift) {
      for (var i = 0; i < text.length; i ++) {
    	   this.character = text[i];

         if (this.character.match(/[a-z]/i)) {
            this.character_code = text.charCodeAt(i);
            if ((this.character_code >= 65) && (this.character_code <= 90)) {
               this.character = String.fromCharCode(((this.character_code - 65 - shift) % 26) + 65);

            } else if ((this.character_code >= 97) && (this.character_code <= 122)) {

            this.character = String.fromCharCode(((this.character_code - 97 - shift) % 26) + 97);

            };

         };

         this.result += this.character;

      };

   };

};

var cipher = new CeasarCipher();
cipher.encode("Hello World", 5);
console.log(cipher.result);
