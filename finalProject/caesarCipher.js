function caesarCipher(str, amount) {
    // var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    //
    // for (let i = 0; i < alphabet.length; i ++) {
    //     // console.log(alphabet[i], alphabet.charCodeAt(i))
    //     console.log((alphabet.charCodeAt(i) - 65) % 26)
    // }

    // for (let i = 0; i < lowerAlphabet.length; i ++) {
    //     console.log(lowerAlphabet[i], lowerAlphabet.charCodeAt(i))
    // }

    if (amount < 0) {
        return caesarCipher(str, amount + 26);
    }

    var output = "";
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
}

console.log(caesarCipher('TEST', 5));
console.log(caesarCipher('This is a [TEST]', -10));
console.log(caesarCipher('Nikki', 12));
console.log(caesarCipher('This StrIng has ch@rac43rz', -1));
