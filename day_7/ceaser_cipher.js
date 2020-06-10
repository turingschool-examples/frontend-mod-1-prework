// Rough attempt at creating a cipher, it switches to unicode and back
// Did not place limiters so switches back to wrong characters ?/ etc


class CeaserCipher{
  constructor(text, shift) {
    this.text = text;
    this.shift = shift;
}
  encode(){
    this.text = newText;
  }

};

var text = prompt('Enter text');
var shift = prompt('Choose shift value');

var uniT = [];
for(var i = 0; i < text.length; i++){
  if (i < text.length){
    uniT.push(text.charCodeAt(i));
  }else{
  }
}

console.log(uniT);

var uniV = [];
for(var i = 0; i < uniT.length; i++) {
  uniV.push(uniT[i] - shift);
}

newText = (String.fromCharCode.apply(null, uniV));

console.log(text);

var cipher = new CeaserCipher();
cipher.encode(text, shift);
console.log(newText);
